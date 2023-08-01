import Tema from './Tema';
import Usuario from './Usuario';

export default interface Postagem {
  id: number;
  titulo: string;
  conteudo: string;
  localizacao: string;
  data: string;
  midia: string;
  tema: Tema | null;
  usuario: Usuario | null;
}