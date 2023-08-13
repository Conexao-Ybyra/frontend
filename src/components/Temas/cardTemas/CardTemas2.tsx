import Tema from "../../../models/Tema";
import mountains from "../../../assets/images/mountains.jpg";

interface CardTemaProps {
  tema: Tema;
}

function CardTemas2({ tema }: CardTemaProps) {
  return (
    <div className="h-72 mb-4 relative">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 rounded-lg"></div>
      <img
        src={mountains}
        loading="lazy"
        alt="Photo by Minh Pham"
        className="absolute rounded-lg inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
      />
      <div className="flex  justify-end h-full">
        <h1 className="font-bold text-white text-lg quicksand ml-5 mb-3 mt-4 absolute left-0  bg-mint bg-opacity-50 py-2 px-4">
          {tema.tema}
        </h1>
        <p className="font-bold text-white text-lg quicksand mr-10 mb-3 absolute mt-4 bg-mint bg-opacity-50 py-2 px-4">{tema.descricao}</p>
      </div>
     
    </div>
  );
}

export default CardTemas2;
