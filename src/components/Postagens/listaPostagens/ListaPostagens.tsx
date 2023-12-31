import { useContext, useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Postagem from "../../../models/Postagem";
import { buscar } from "../../../services/Service";
import CardPostagem from "../cardPostagens/CardPostagem";
import { toastAlerta } from "../../../util/toastAlerta";
import Sidebar from "../../Sidebar/Sidebar";
import FormularioPostagem from "../formularioPostagem/FormularioPostagem";
import ListaAmigos from "../../Amigos/listaAmigos/ListaAmigos";

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

      <ListaAmigos />

      <div className="w-8/12 ml-2 mt-1 mb-1 rounded-lg bg-mint-green flex flex-col overflow-y-auto ">
        {postagens.length === 0 && (
          <Oval
            height={80}
            width={80}
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#4fa94d"
            strokeWidth={2}
            strokeWidthSecondary={2}
            
          />
        )}
        <div className="h-fit bg-mint-green">
          <FormularioPostagem />
        </div>
        {postagens.length === 0 && (
          <Oval
            height={80}
            width={80}
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#4fa94d"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        )}
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
