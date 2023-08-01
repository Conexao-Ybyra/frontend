import Postagem  from "./Postagem";

export default interface Usuario {
  id: number;
  nome: string;
  email: string;
  senha: string;
  foto: string;
  endereco: string;
  postagem?: Postagem | null;
}