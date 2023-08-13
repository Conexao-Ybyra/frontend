import { useContext, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { toastAlerta } from "../../util/toastAlerta";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/Searchbar/SearchBar";
import "./Feed.css";
import ListaTemas from "../../components/Temas/listaTemas/ListaTemas";
import Calendario from "../../components/Calendar/Calendario";
import ListaAtividades from "../../components/Atividades/listaAtividades/ListaAtividades";
import ListaEventos from "../../components/Eventos/listaEventos/ListaEventos";

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
    <div className="flex h-screen w-screen justify-end ">
      <div className="w-2/12  ">
        <Sidebar />
      </div>
      <div className="w-7/12 my-1 rounded-lg bg-mint-green flex flex-col">
        <div className="h-24 p-8 flex justify-between items-center mb-2">
          <div>
            <h1 className="fonte">Hello, {usuario.nome}! ✌️</h1>
            <p>Recomendado para você</p>
          </div>
          <div className="search mt-4 flex items-center">
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>

        <div className="h-2/5">
          <div className="flex items-center justify-around h-full px-10">
            <ListaTemas />
          </div>
        </div>
        <div className="h-3/5 flex overflow-hidden px-4">
          <div className="w-2/3 rounded-lg bg-gray-100 shadow-lg m-6 flex flex-col overflow-y-auto scrollbar-thin scrollbar-thumb-500 scrollbar-track-300">
            <h2 className="titulo p-4">Atividades perto de você</h2>
            <ListaAtividades />
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467692.39571995876!2d-46.92496597885748!3d-23.681434564936826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1691680927681!5m2!1spt-BR!2sbr"
                    width="500"
                    height="350"
                    loading="lazy"
                    className="w-1/3 rounded-lg bg-gray-100 shadow-lg m-6">
                </iframe>
          
        </div>
      </div>

      <div className="w-3/12 h-screen ">
        <div className="w-full h-2/6 rounded-lg quicksand px-auto bg-white border overflow-hidden">
          <Calendario  />
        </div>
        <div className="h-4/6 rounded-lg quicksand p-4 overflow-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-500 scrollbar-track-300">
          <h1 className="pb-4">Meus Eventos</h1>
          <ListaEventos />
        </div>
      </div>
    </div>
  );
}
