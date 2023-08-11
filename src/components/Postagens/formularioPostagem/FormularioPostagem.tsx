import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Postagem from "../../../models/Postagem";
import Tema from "../../../models/Tema";
import { buscar, atualizar, cadastrar } from "../../../services/Service";
import { toastAlerta } from "../../../util/toastAlerta";

function FormularioPostagem() {
  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const [temas, setTemas] = useState<Tema[]>([]);

  const [tema, setTema] = useState<Tema>({
    id: 0,
    tema: "",
    descricao: "",
  });

  const [postagem, setPostagem] = useState<Postagem>({
    id: 0,
    titulo: "",
    conteudo: "",
    localizacao: "",
    data: "",
    midia: "",
    tema: null,
    usuario: null,
  });

  async function buscarPostagemPorId(id: string) {
    await buscar(`/postagens/${id}`, setPostagem, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarTemaPorId(id: string) {
    await buscar(`/temas/${id}`, setTema, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarTemas() {
    await buscar("/temas", setTemas, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    if (token === "") {
      toastAlerta("Você precisa estar logado", "erro");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    buscarTemas();
    if (id !== undefined) {
      buscarPostagemPorId(id);
      console.log(tema);
    }
  }, [id]);

  useEffect(() => {
    setPostagem({
      ...postagem,
      tema: tema,
    });
  }, [tema]);

  function atualizarEstado(e: ChangeEvent<HTMLTextAreaElement>) {
    setPostagem({
      ...postagem,
      [e.target.name]: e.target.value,
      tema: tema,
      usuario: usuario,
    });
  }

  function retornar() {
    navigate("/postagens");
  }

  async function gerarNovaPostagem(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log({ postagem });

    if (id != undefined) {
      try {
        await atualizar(`/postagens`, postagem, setPostagem, {
          headers: {
            Authorization: token,
          },
        });
        toastAlerta("Postagem atualizada com sucesso", "sucesso");
        retornar();
      } catch (error: any) {
        if (error.toString().includes("403")) {
          toastAlerta("O token expirou, favor logar novamente", "info");
          handleLogout();
        } else {
          toastAlerta("Erro ao atualizar a Postagem", "erro");
        }
      }
    } else {
      try {
        await cadastrar(`/postagens`, postagem, setPostagem, {
          headers: {
            Authorization: token,
          },
        });

        toastAlerta("Postagem cadastrada com sucesso", "sucesso");
        retornar();
      } catch (error: any) {
        if (error.toString().includes("403")) {
          toastAlerta("O token expirou, favor logar novamente", "info");
          handleLogout();
        } else {
          toastAlerta("Erro ao cadastrar a Postagem", "erro");
        }
      }
    }
  }

  const carregandoTema = tema.descricao === "";

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-xl font-semibold mb-6 p-2  titulo bg-mint rounded-lg">
        {id !== undefined ? "Editar Postagem" : "Cadastrar Postagem"}
      </h1>
      <form onSubmit={gerarNovaPostagem} className="flex  gap-2">
        <div className="w-2/3 m-2 ">
          <textarea
            value={postagem.conteudo}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
    atualizarEstado(e)
  }
            placeholder="Conteúdo da Postagem"
            name="conteudo"
            required
            className="w-full rounded p-2 h-full resize-none focus:outline-none focus:outline-mint"
          />
        </div>

        <div className="flex flex-col w-1/3 m-2 ">
          <div className="flex flex-col">
            <select
              name="tema"
              id="tema"
              className=" p-2 rounded focus:outline-none focus:outline-mint"
              onChange={(e) => buscarTemaPorId(e.currentTarget.value)}
            >
              <option value="" selected disabled>
                Selecione um tema
              </option>
              {temas.map((tema) => (
                <>
                  <option value={tema.id}>{tema.descricao}</option>
                </>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2 ">
            <input
              value={postagem.titulo}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
              type="text"
              placeholder="Titulo da Postagem"
              name="titulo"
              required
              className=" rounded p-2 mt-6 focus:outline-none focus:outline-mint"
            />
          </div>

          <div className="flex flex-col gap-2 ">
            <input
              value={postagem.localizacao}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
              type="text"
              placeholder="Local da Postagem"
              name="localizacao"
              required
              className=" rounded p-2 mt-6 focus:outline-none focus:outline-mint"
            />
          </div>

          <div className="flex flex-col gap-2">
            
            <input
              value={postagem.midia}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
              type="text"
              placeholder="Fotos"
              name="midia"
              className=" rounded p-2 mt-6 focus:outline-none focus:outline-mint"
            />
          </div>

          <button
            disabled={carregandoTema}
            type="submit"
            className="rounded-lg bg-orange-crayola hover:bg-emerald text-white font-semibold py-2 mt-6 "
          >
            {carregandoTema
              ? "Postar"
              : id !== undefined
              ? "Editar"
              : "Cadastrar"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormularioPostagem;
