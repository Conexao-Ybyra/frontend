import { Link } from "react-router-dom";
import Tema from "../../../models/Tema";
import mountains from "../../../assets/images/mountains.jpg";

interface CardTemaProps {
  tema: Tema;
}

function CardTemas({ tema }: CardTemaProps) {
  return (
    <div className="flex ">
      <div className="">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
        <img
          src={mountains}
          loading="lazy"
          alt="Photo by Minh Pham"
          className="absolute rounded-lg inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
        />
        <div className="flex flex-col justify-end h-full">
          <h1 className="font-bold text-white text-lg quicksand ml-5 mb-3 absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 py-2 px-4">
            {tema.tema}
          </h1>
        </div>
      </div>
      <div className="w-1/5 flex items-center justify-center">
        <Link to={`/editarTema/${tema.id}`}></Link>
      </div>
      <div className="w-1/5 flex items-center justify-center">
        <Link to={`/deletarTema/${tema.id}`} className="w-8 h-8"></Link>
      </div>
    </div>
  );
}

export default CardTemas;

      // <p className="pl-4 p-1">{tema.descricao}</p>
