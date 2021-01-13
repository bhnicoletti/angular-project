import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClientesService } from 'src/app/clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

  clientes: Cliente[] = [];
  cliente?: Cliente;

  constructor( private service: ClientesService, private router: Router) { }

  ngOnInit(): void {
    this.service.getClientes().subscribe(response => this.clientes = response);
  }

  novoCadastro(){
    this.service.cliente = new Cliente();
    this.router.navigate(['clientes-form']);
  }
  excluir(cliente: Cliente){    
    this.service.deletar(cliente.idCliente).subscribe(
      resultado => {
        this.router.navigate(['clientes-lista']) .then(() => {
          window.location.reload();
        });
      });
    
  }
  carregar(cliente: Cliente){    
   // this.service.carregar(idCliente).subscribe(response => this.clientes = response);
    this.service.cliente = cliente;     
    this.router.navigate(['clientes-form']);
  }

}
