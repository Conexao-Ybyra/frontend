import { useContext, useEffect, useState } from "react";
import { Dna } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Postagem from "../../../models/Postagem";
import { buscar } from "../../../services/Service";
import CardPostagem from "../cardPostagens/CardPostagem";
import { toastAlerta } from "../../../util/toastAlerta";
import Sidebar from "../../Sidebar/Sidebar";
import FormularioPostagem from "../formularioPostagem/FormularioPostagem";

function ListaPostagens() {
  const [postagens, setPostagens] = useState<Postagem[]>([]);

  let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  useEffect(() => {
    if (token === "") {
      toastAlerta("Você precisa estar logado", "info");
      navigate("/");
    }
  }, [token]);

  async function buscarPostagens() {
    try {
      await buscar("/postagens", setPostagens, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        toastAlerta("O token expirou, favor logar novamente", "info");
        handleLogout();
      }
    }
  }

  useEffect(() => {
    buscarPostagens();
  }, [postagens.length]);

  return (
    <div className="flex w-full flex-row-reverse">
      <div className="w-2/12 h-screen fixed top-0 left-0 cursor-pointer">
        <Sidebar />
      </div>
      <div className="w-2/12"></div>
      <div className="w-2/12 h-screen fixed top-0 right-0 cursor-pointer ">
        <h1 className="pt-8 pb-4 text-gray-500 text-center quicksand text-md font-medium ">
          Amigos Online
        </h1>
        <div className="py-4 px-4">
          <div className="flex items-center gap-x-4">
            <img src={usuario.foto} className="w-12 h-12 rounded-full" />
            <div>
              <span className="block text-gray-700 text-sm font-semibold">
                Usuário Teste
              </span>
              <span className="block mt-px text-gray-600 text-mint text-xs">
                Online
              </span>
            </div>
          </div>
        </div>
        <div className="py-4 px-4">
          <div className="flex items-center gap-x-4">
            <img src={usuario.foto} className="w-12 h-12 rounded-full" />
            <div>
              <span className="block text-gray-700 text-sm font-semibold">
                Usuário Teste
              </span>
              <span className="block mt-px text-gray-600 text-mint text-xs">
                Online
              </span>
            </div>
          </div>
        </div>
        <div className="py-4 px-4">
          <div className="flex items-center gap-x-4">
            <img src={usuario.foto} className="w-12 h-12 rounded-full" />
            <div>
              <span className="block text-gray-700 text-sm font-semibold">
                Usuário Teste
              </span>
              <span className="block mt-px text-gray-600 text-mint text-xs">
                Online
              </span>
            </div>
          </div>
        </div>
        <div className="py-4 px-4">
          <div className="flex items-center gap-x-4">
            <img src={usuario.foto} className="w-12 h-12 rounded-full" />
            <div>
              <span className="block text-gray-700 text-sm font-semibold">
                Usuário Teste
              </span>
              <span className="block mt-px text-gray-600 text-mint text-xs">
                Online
              </span>
            </div>
          </div>
        </div>
        <div className="py-4 px-4">
          <div className="flex items-center gap-x-4">
            <img src={usuario.foto} className="w-12 h-12 rounded-full" />
            <div>
              <span className="block text-gray-700 text-sm font-semibold">
                Usuário Teste
              </span>
              <span className="block mt-px text-gray-600 text-mint text-xs">
                Online
              </span>
            </div>
          </div>
        </div>
        <div className="py-4 px-4">
          <div className="flex items-center gap-x-4">
            <img src={usuario.foto} className="w-12 h-12 rounded-full" />
            <div>
              <span className="block text-gray-700 text-sm font-semibold">
                Usuário Teste
              </span>
              <span className="block mt-px text-gray-600 text-mint text-xs">
                Online
              </span>
            </div>
          </div>
        </div>
        <div className="py-4 px-4">
          <div className="flex items-center gap-x-4">
            <img src={usuario.foto} className="w-12 h-12 rounded-full" />
            <div>
              <span className="block text-gray-700 text-sm font-semibold">
                Usuário Teste
              </span>
              <span className="block mt-px text-gray-600 text-mint text-xs">
                Online
              </span>
            </div>
          </div>
        </div>
        <div className="py-4 px-4">
          <div className="flex items-center gap-x-4">
            <img src={usuario.foto} className="w-12 h-12 rounded-full" />
            <div>
              <span className="block text-gray-700 text-sm font-semibold">
                Usuário Teste
              </span>
              <span className="block mt-px text-gray-600 text-mint text-xs">
                Online
              </span>
            </div>
          </div>
        </div>
        
      </div>
      {postagens.length === 0 && (
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className="w-8/12 ml-2 mt-1 mb-1 rounded-lg bg-mint-green flex flex-col overflow-y-auto ">
        <div className="h-fit bg-mint-green">
          <FormularioPostagem />
        </div>
        <div className="px-4 mx-auto">
          {postagens
            .sort((a, b) => b.id - a.id)
            .map((postagem) => (
              <CardPostagem key={postagem.id} post={postagem} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default ListaPostagens;
