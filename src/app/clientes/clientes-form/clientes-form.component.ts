import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../cliente';
import { ClientesService } from 'src/app/clientes.service';
@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  success: boolean = false;
  erros?: String[];
  errors?: String[] = [''];

  constructor(private service: ClientesService, private router: Router) {
    if(this.service.cliente?.idCliente != null){
      this.cliente = this.service.cliente;
      console.log(this.cliente.nomeCliente);
    }
    else{
      this.cliente = new Cliente();
    }         
  }

  ngOnInit(): void {
  }
  onSubmit() {
    //console.log(this.cliente);
    if(this.cliente?.idCliente > 0){
      this.service.
      atualizar(this.cliente).
      subscribe(response => {
        //console.log(response);
        this.success = true;
        this.errors = [''];
        this.cliente = response;
      }, errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      });
    }
    else {
      this.service.
      salvar(this.cliente).
      subscribe(response => {
        //console.log(response);
        this.success = true;
        this.errors = [''];
        this.cliente = response;
      }, errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      });
    }
    
  }

  voltarParaListagem() {
    this.router.navigate(['clientes-lista']);
  }



}
