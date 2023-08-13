import mountains from '../../../assets/images/mountains.jpg';
import orange from "../../../assets/images/orange-park.jpg";
import garden from "../../../assets/images/garden.jpg";

function ListaAtividades() {
  return (
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
  )
}

export default ListaAtividades