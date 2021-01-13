import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from 'src/app/clientes/cliente';
import { Servico } from '../servico';
import { ServicoService } from '../servico.service';

@Component({
  selector: 'app-servicos-lista',
  templateUrl: './servicos-lista.component.html',
  styleUrls: ['./servicos-lista.component.css']
})
export class ServicosListaComponent implements OnInit {

  servicos: Servico[] = [];
  servico?: Servico;
  //clientes?: Cliente[];

  constructor(private service: ServicoService, private router: Router, private clienteService: ClientesService) { }

  ngOnInit(): void {
    this.service.listar().subscribe(response => this.servicos = response);
   // this.clienteService.getClientes().subscribe(response => this.clientes = response);
  }

  
  novoCadastro(){
    this.service.servico = new Servico();
    this.router.navigate(['servicos-form']);
  }
  excluir(servico: Servico){    
    this.service.deletar(servico.idServico).subscribe(
      resultado => {
        this.router.navigate(['servicos-lista']) .then(() => {
          window.location.reload();
        });
      });
    
  }
  carregar(servico: Servico){    
    this.service.servico = servico;     
    this.router.navigate(['servicos-form']);
  }
  

}
