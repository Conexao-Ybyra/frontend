import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { toastAlerta } from "../../util/toastAlerta";
import { buscar } from "../../services/Service";
import Postagem from "../../models/Postagem";
import CardPostagem from "../../components/Postagens/cardPostagens/CardPostagem";
import avatar from "../../assets/images/avatar.svg";
import cover from "../../assets/images/cover.png";
import Sidebar from "../../components/Sidebar/Sidebar";

function Perfil() {
  let navigate = useNavigate();

  const { usuario } = useContext(AuthContext);
  const token = usuario.token;

  const [postagens, setPostagens] = useState<Postagem[]>([]);

  useEffect(() => {
    if (token === "") {
      toastAlerta("Você precisa estar logado", "info");
      navigate("/login");
    }
  }, [token]);

  function back() {
    navigate("/feed");
  }

  function editarPerfil() {
    navigate(`/perfil`);
  }

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
      }
    }
  }

  useEffect(() => {
    buscarPostagens();
  }, [postagens.length]);

  const postagensUsuario = postagens.filter(
    (postagem) => postagem.usuario?.id === usuario.id
  );

  return (
    <div className="flex w-full flex-row-reverse">
      <div className="w-2/12 h-screen fixed top-0 left-0 cursor-pointer">
        <Sidebar />
      </div>
      <div className="relative container mx-auto mt-4 shadow border-6 overflow-hidden rounded-3xl rounded-b">
        {/*Foto de capa*/}
        <img
          className="w-full h-72 object-cover"
          src={cover}
          alt="Foto de capa do perfil"
        />

        {/*Botão de retorno*/}
        <button className="absolute top-4 left-4 p-2" onClick={back}>
          <svg
            width="48px"
            height="48px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#3C394D"
            stroke-width="0.72"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M4 10L3.29289 10.7071L2.58579 10L3.29289 9.29289L4 10ZM21 18C21 18.5523 20.5523 19 20 19C19.4477 19 19 18.5523 19 18L21 18ZM8.29289 15.7071L3.29289 10.7071L4.70711 9.29289L9.70711 14.2929L8.29289 15.7071ZM3.29289 9.29289L8.29289 4.29289L9.70711 5.70711L4.70711 10.7071L3.29289 9.29289ZM4 9L14 9L14 11L4 11L4 9ZM21 16L21 18L19 18L19 16L21 16ZM14 9C17.866 9 21 12.134 21 16L19 16C19 13.2386 16.7614 11 14 11L14 9Z"
                fill="#3C394D"
              ></path>{" "}
            </g>
          </svg>
        </button>

        {/*Botão de editar perfil*/}
        <button className="absolute top-4 right-4 p-2" onClick={editarPerfil}>
          <svg width="36px" height="36px" viewBox="-6 -6 36.00 36.00">
            <g
              id="SVGRepo_bgCarrier"
              stroke-width="0"
              transform="translate(0,0), scale(1)"
            >
              <rect
                x="-6"
                y="-6"
                width="36.00"
                height="36.00"
                rx="18"
                fill="#D0F9EB"
              ></rect>
            </g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M2,21H8a1,1,0,0,0,0-2H3.071A7.011,7.011,0,0,1,10,13a5.044,5.044,0,1,0-3.377-1.337A9.01,9.01,0,0,0,1,20,1,1,0,0,0,2,21ZM10,5A3,3,0,1,1,7,8,3,3,0,0,1,10,5ZM20.207,9.293a1,1,0,0,0-1.414,0l-6.25,6.25a1.011,1.011,0,0,0-.241.391l-1.25,3.75A1,1,0,0,0,12,21a1.014,1.014,0,0,0,.316-.051l3.75-1.25a1,1,0,0,0,.391-.242l6.25-6.25a1,1,0,0,0,0-1.414Zm-5,8.583-1.629.543.543-1.629L19.5,11.414,20.586,12.5Z"></path>
            </g>
          </svg>
        </button>

        <div className="bg-antiflash-white border-t-6">
          <div dir="ltr" className="grid grid-cols-3">
            {/*Botão de editar foto de perfil*/}
            <div className="mt-[-8rem] mx-6">
              <button>
                {usuario.foto == "" || usuario.foto == " " ? (
                  <img
                    src={avatar}
                    alt={`O perfil de ${usuario.nome} está sem foto`}
                    className="rounded-full max-h-64"
                  />
                ) : (
                  <img
                    src={usuario.foto}
                    alt={`Foto de perfil de ${usuario.nome}`}
                    className="rounded-full max-h-64"
                  />
                )}
              </button>
            </div>

            {/*Informações do usuário*/}
            <div>
              <div className="text-3xl mt-[20px] p-1 font-bold">
                {usuario.nome}
              </div>
              <div className="text-2xl p-2">{usuario.email}</div>
            </div>

            {/*Barra de progresso*/}
            <div className="grid justify-items-end px-8">
              <div className="text-2xl p-2">XP</div>
              <div className="w-full h-3 bg-white rounded-full">
                <div
                  className="h-3 bg-emerald rounded-full"
                  style={{ width: `${postagensUsuario.length}%` }}
                />
              </div>
              {postagensUsuario.length} %
            </div>
          </div>

          {/*Postagens do usuário*/}
          <div className="px-4 mx-auto mt-12">
            {postagensUsuario
              .sort((a, b) => b.id - a.id)
              .map((postagem) => (
                <CardPostagem key={postagem.id} post={postagem} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
