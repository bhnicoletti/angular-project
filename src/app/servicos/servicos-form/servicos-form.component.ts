import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from 'src/app/clientes/cliente';
import { Servico } from '../servico';
import { ServicoService } from '../servico.service';

@Component({
  selector: 'app-servicos-form',
  templateUrl: './servicos-form.component.html',
  styleUrls: ['./servicos-form.component.css']
})
export class ServicosFormComponent implements OnInit {

  servico: Servico;
  clientes: Cliente[] = [];
  success: boolean = false;
  erros?: String[];
  errors?: String[] = [''];
  idCliente: number = 0;
  
  constructor(private service: ServicoService, private router: Router, private serviceCliente: ClientesService) {
    this.servico = new Servico();
    if(this.service.servico?.idServico != null){
      this.servico = this.service.servico;
      this.idCliente = this.servico.idCliente.idCliente;
    }
   }

  ngOnInit(): void {
    this.serviceCliente.getClientes().subscribe(response => this.clientes = response);
  }

  onSubmit() {       
    this.clientes.forEach(cliente => {
      if(cliente.idCliente == this.idCliente){
        this.servico.idCliente = cliente;
      }
    });
    if(this.servico.idServico > 0){
      this.service.
      atualizar(this.servico).
      subscribe(response => {
        this.success = true;
        this.errors = [''];
       // this.router.navigate(['servicos-lista']);
      }, errorResponse => {
        this.success = false;
      this.errors = errorResponse.error.errors;
      });
    }
    else {
      this.service.
      salvar(this.servico).
      subscribe(response => {
        this.success = true;
        this.errors = [''];
        this.servico = response;
      }, errorResponse => {
        this.success = false;
      this.errors = errorResponse.error.errors;
      });
    }

  }

  voltarParaListagem() {
    this.servico = new Servico();
    this.router.navigate(['servicos-lista']);    
  }

}
