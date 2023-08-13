import { useContext, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { toastAlerta } from "../../util/toastAlerta";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/Searchbar/SearchBar";
import "./Feed.css";
import ListaTemas from "../../components/Temas/listaTemas/ListaTemas";
import Calendario from "../../components/Calendar/Calendario";

export function Feed() {
  let navigate = useNavigate();

  const { usuario } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token === "") {
      toastAlerta("Você precisa estar logado", "info");
      navigate("/login");
    }
  }, [usuario.token]);

  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
  };

  return (
    <div className="flex h-screen w-screen justify-end">
      <div className="w-2/12  ">
        <Sidebar />
      </div>
      <div className="w-7/12 mt-1 mb-1 rounded-lg bg-mint-green flex flex-col">
        <div className="h-24 p-8 flex justify-between items-center ">
          <div>
            <h1 className="fonte">Hello, {usuario.nome}! ✌️</h1>
            <p>Recomendado para você</p>
          </div>
          <div className="search mt-4 flex items-center">
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>

        <div className="h-2/5">
          <div className="flex items-center justify-around h-full px-20">
            <ListaTemas />
          </div>
        </div>
        <div className="h-3/5 flex overflow-hidden">
          <div className="w-2/3 rounded-lg bg-gray-100 shadow-lg m-6 flex flex-col overflow-y-auto scrollbar-thin scrollbar-thumb-500 scrollbar-track-300">
            <h2 className="titulo p-4">Atividades perto de você</h2>
            
          </div>
          <div className="w-1/3 rounded-lg bg-gray-100 shadow-lg m-6"> </div>
        </div>
      </div>

      <div className="w-3/12 h-screen ">
        <div className="w-full h-1/4 rounded-lg quicksand text-center p-4 bg-white ">
          <Calendario />
        </div>
        <div className="h-3/4 rounded-lg bg-mint">
          <h1>Meus Eventos</h1>
        </div>
      </div>
    </div>
  );
}
