import { Cliente } from "../clientes/cliente";

export class  Servico {
    idServico: number = 0;
    descricaoServico: string = "";
    valorServico: string = "";
    idCliente: Cliente = new Cliente();
  }
  