import { useContext, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { toastAlerta } from "../../util/toastAlerta";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/Searchbar/SearchBar";
import mountains from "../../assets/images/mountains.jpg";
import orange from "../../assets/images/orange-park.jpg";
import garden from "../../assets/images/garden.jpg";
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
    // Implement your search functionality here using the 'query' parameter.
    // This is just an example.
    console.log("Searching for:", query);
  };

  return (
    <div className="flex h-screen w-screen justify-end">
      <Sidebar />
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
          <div className="flex items-center justify-around h-full">
            <a
              href="#"
              className="group relative flex h-72 w-52 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg "
            >
              <img
                src={mountains}
                loading="lazy"
                alt="Photo by Minh Pham"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative mb-3 inline-block text-white ml-5 text-md">
                Montanha
              </span>
              <br></br>
              <span className="relative mb-3 inline-block text-white ml-5 text-md">
                Montanha
              </span>
            </a>

            <a
              href="#"
              className="group relative flex h-72 w-52 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg "
            >
              <img
                src={orange}
                loading="lazy"
                alt="Photo by Minh Pham"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative mb-3 inline-block text-white ml-5 text-md">
                Montanha
              </span>
              <br></br>
              <span className="relative mb-3 inline-block text-white ml-5 text-md">
                Montanha
              </span>
            </a>
            <a
              href="#"
              className="group relative flex h-72 w-52 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg "
            >
              <img
                src={garden}
                loading="lazy"
                alt="Photo by Minh Pham"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative mb-3 inline-block text-white ml-5 text-md">
                Montanha
              </span>
              <br></br>
              <span className="relative mb-3 inline-block text-white ml-5 text-md">
                Montanha
              </span>
            </a>

            <a
              href="#"
              className="group relative flex h-72 w-52 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg "
            >
              <img
                src={mountains}
                loading="lazy"
                alt="Photo by Minh Pham"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative mb-3 inline-block text-white ml-5 text-md">
                Montanha
              </span>
              <br></br>
              <span className="relative mb-3 inline-block text-white ml-5 text-md"></span>
            </a>
          </div>
        </div>
        <div className="h-3/5 flex overflow-hidden">
          <div className="w-2/3 rounded-lg bg-gray-100 shadow-lg m-6 flex flex-col overflow-y-auto scrollbar-thin scrollbar-thumb-500 scrollbar-track-300">
            <h2 className="titulo p-4" >Atividades perto de você</h2>
            <ListaTemas />
          </div>
          <div className="w-1/3 rounded-lg bg-gray-100 shadow-lg m-6"> </div>
        </div>
      </div>

      <div className="w-3/12 ">
        <Calendario />
      </div>
    </div>
  );
}
