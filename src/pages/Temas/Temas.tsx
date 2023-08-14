import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { buscar } from "../../services/Service";
import Tema from "../../models/Tema";
import { toastAlerta } from "../../util/toastAlerta";
import CardTemas2 from "../../components/Temas/cardTemas/CardTemas2";
import Sidebar from "../../components/Sidebar/Sidebar";

function Temas() {
  const [temas, setTemas] = useState<Tema[]>([]);

  let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarTemas() {
    try {
      await buscar("/temas", setTemas, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        toastAlerta("O token expirou, favor logar novamente", "info");
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      toastAlerta("Você precisa estar logado", "info");
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    buscarTemas();
  }, [temas.length]);
  return (
    <div className="flex w-full flex-row-reverse">
      <div className="w-2/12 h-screen fixed top-0 left-0 cursor-pointer">
        <Sidebar />
      </div>
      <div className="w-10/12">
        {temas.map((tema) => (
          <>
            <CardTemas2 key={tema.id} tema={tema} />
          </>
        ))}
        
      </div>
    </div>
  );
}

export default Temas;
