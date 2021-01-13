import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Cliente } from './clientes/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  cliente?: Cliente = new Cliente();

  constructor(private http: HttpClient) { }

  salvar(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>('http://localhost:8080/api/clientes', cliente);
  }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>('http://localhost:8080/api/clientes');
  }

  carregar(id: number): Observable<Cliente> {    
    return this.http.get<Cliente>('http://localhost:8080/api/clientes/'+id);
  }
  atualizar(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>('http://localhost:8080/api/clientes/'+cliente.idCliente, cliente);
  }

  deletar(idCliente: number) {
      return this.http.delete('http://localhost:8080/api/clientes/'+idCliente);
    
  }
}
