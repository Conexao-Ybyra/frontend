import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import Postagem from '../../../models/Postagem';
import avatar from '../../../assets/images/avatar.svg';

interface CardPostagemProps {
  post: Postagem
}

function CardPostagem({ post }: CardPostagemProps) {
  const { usuario } = useContext(AuthContext)

  return (
    <div className="bg-white border rounded-lg shadow-md overflow-hidden m-4">
      <div className="p-4">
        <div className="flex items-center gap-4">
          {(post.usuario?.foto == "" || post.usuario?.foto == " ") ? (
            <img src={avatar} className='h-12 rounded-full' alt={`${post.usuario?.nome} está sem foto`} />
          ) : (
            <img src={post.usuario?.foto} className='h-12 rounded-full' alt={`Foto de ${post.usuario?.nome}`} />
          )
          }
          <h3 className="text-lg font-bold">{post.usuario?.nome}</h3>
        </div>
        <div className="mt-4">
          <h4 className="text-xl font-semibold">{post.titulo}</h4>
          <p className="mt-2 text-gray-600">Tema: {post.tema?.descricao}</p>
          <p className="mt-2 text-gray-600">Data: {new Intl.DateTimeFormat(undefined, {
            dateStyle: 'full',
            timeStyle: 'medium',
          }).format(new Date(post.data))}</p>
          <p className="mt-2 text-gray-600">{post.localizacao}</p>
          <p className="mt-2 text-gray-700">{post.conteudo}</p>
          {post.midia && <img src={post.midia} alt="" className="mt-2 rounded-lg max-h-fit p-10" />}
        </div>
      </div>

      {(usuario.id === post.usuario?.id) ? (
        <div className="flex">
          <Link to={`/editarPostagem/${post.id}`} className='w-full text-white bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
            <button>Editar</button>
          </Link>
          <Link to={`/deletarPostagem/${post.id}`} className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
            <button>Deletar</button>
          </Link>
        </div>
      ) : (
        <>
        </>
      )}
    </div>
  )
}

export default CardPostagem;
