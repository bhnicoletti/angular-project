import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servico } from './servico';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  
  servico?: Servico = new Servico();

  constructor(private http: HttpClient) { }

  salvar(servico: Servico): Observable<Servico> {
    return this.http.post<Servico>('http://localhost:8080/api/servicos', servico);
  }

  listar(): Observable<Servico[]> {
    return this.http.get<Servico[]>('http://localhost:8080/api/servicos');
  }

  carregar(id: number): Observable<Servico[]> {    
    return this.http.get<Servico[]>('http://localhost:8080/api/servicos/'+id);
  }
  atualizar(servico: Servico): Observable<void> {
    return this.http.put<void>('http://localhost:8080/api/servicos/'+servico.idServico, servico);
  }

  deletar(idServico: number) {
      return this.http.delete('http://localhost:8080/api/servicos/'+idServico);
    
  }
}
