import mountains from "../../../assets/images/mountains.jpg";
import orange from "../../../assets/images/orange-park.jpg";
import garden from "../../../assets/images/garden.jpg";

function ListaAtividades() {
  return (
    <div className="flex flex-col gap-2 items-center justify-around h-full mx-2">
      <a
        href="#"
        className="group relative flex h-96 w-full  items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg "
      >
        <img
          src={orange}
          loading="lazy"
          alt="Photo by Minh Pham"
          className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 hover:opacity-75"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

        <div className="flex bg-mint-green/25  relative w-full justify-between ">
          <span className="relative pl-4 inline-block text-white text-md p-1 ">
            Horta Comunitária
          </span>
          
          <span className="relative pr-4 inline-block text-white  text-md  p-1">
            Praça das Corujas
          </span>
        </div>
      </a>

      <a
        href="#"
        className="group relative flex h-96 w-full  items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg "
      >
        <img
          src={mountains}
          loading="lazy"
          alt="Photo by Minh Pham"
          className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 hover:opacity-75"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

        <div className="flex bg-mint-green/25  relative w-full justify-between ">
          <span className="relative pl-4 inline-block text-white text-md p-1 ">
            Horta Comunitária
          </span>
          
          <span className="relative pr-4 inline-block text-white  text-md  p-1">
            Praça das Corujas
          </span>
        </div>
      </a>

      <a
        href="#"
        className="group relative flex h-96 w-full  items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg "
      >
        <img
          src={garden}
          loading="lazy"
          alt="Photo by Minh Pham"
          className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 hover:opacity-75"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

        <div className="flex bg-mint-green/25  relative w-full justify-between ">
          <span className="relative pl-4 inline-block text-white text-md p-1 ">
            Horta Comunitária
          </span>
          
          <span className="relative pr-4 inline-block text-white  text-md  p-1">
            Praça das Corujas
          </span>
        </div>
      </a>

      <a
        href="#"
        className="group relative flex h-96 w-full  items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg "
      >
        <img
          src={orange}
          loading="lazy"
          alt="Photo by Minh Pham"
          className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 hover:opacity-75"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

        <div className="flex bg-mint-green/25  relative w-full justify-between ">
          <span className="relative pl-4 inline-block text-white text-md p-1 ">
            Horta Comunitária
          </span>
          
          <span className="relative pr-4 inline-block text-white  text-md  p-1">
            Praça das Corujas
          </span>
        </div>
      </a>
    </div>
  );
}

export default ListaAtividades;
