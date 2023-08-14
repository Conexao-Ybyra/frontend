import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import ybyra from "../../assets/images/cy-logo.png";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { usuario } = useContext(AuthContext);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  let navbarPre;

  if (usuario.token == "") {
    navbarPre = (
      <header className="pl-8 pr-8 flex items-center justify-between py-4 bg-mint-green md:pb-12 md:py-8 xl:pb-16">
        {/* logo - start */}
        <Link
          to="/home"
          className="inline-flex items-center gap-2.5  md:text-3xl"
          aria-label="logo"
        >
          <img src={ybyra} alt="Logo Conexão Ybyra" />
        </Link>
        {/* logo - end */}

        {/* nav - start */}
        <nav
          className={`gap-12 lg:flex ${
            isDropdownOpen ? "hidden" : "lg:block"
          } lg:items-center lg:w-auto md:hidden sm:hidden `}
        >
          <Link
            to="/home"
            className="text-lg font-semibold text-english-violet transition duration-100 hover:text-orange-crayola active:text-indigo-700"
            onClick={closeDropdown}
          >
            Home
          </Link>
          <Link
            to="/sobre"
            className="text-lg font-semibold text-english-violet transition duration-100 hover:text-orange-crayola active:text-indigo-700"
            onClick={closeDropdown}
          >
            Sobre
          </Link>
          <a
            href="#time"
            className="text-lg font-semibold text-english-violet transition duration-100 hover:text-orange-crayola active:text-indigo-700"
            onClick={closeDropdown}
          >
            Time
          </a>
          <a
            href="#contato"
            className="text-lg font-semibold text-english-violet transition duration-100 hover:text-orange-crayola active:text-indigo-700"
            onClick={closeDropdown}
          >
            Contato
          </a>
        </nav>
        {/* nav - end */}

        {/* buttons - start */}
        <div>
          <Link
            to="/login"
            className="hidden rounded-3xl bg-orange-crayola px-5 py-3 mr-3 text-center text-sm font-semibold text-antiflash-white outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 hover:text-orange-crayola focus-visible:ring active:text-gray-700 md:text-base lg:inline-block"
          >
            Entrar
          </Link>

          <Link
            to="/cadastro"
            className="hidden rounded-3xl bg-orange-crayola px-5 py-3 mr-3 text-center text-sm font-semibold text-antiflash-white outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 hover:text-orange-crayola focus-visible:ring active:text-gray-700 md:text-base lg:inline-block"
          >
            Cadastre-se
          </Link>
        </div>

        {/* Dropdown menu for smaller screens */}
        <div className="relative lg:hidden">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
            onClick={toggleDropdown}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            Menu
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 rounded-lg bg-white shadow-lg">
              <Link
                to="/home"
                className="block px-4 py-2 text-sm text-gray-600 font-semibold hover:bg-english-violet/50 hover:rounded-lg"
                onClick={closeDropdown}
              >
                Home
              </Link>
              <Link
                to="/sobre"
                className="block px-4 py-2 text-sm text-gray-600 font-semibold hover:text-white hover:bg-english-violet hover:rounded-lg"
                onClick={closeDropdown}
              >
                Sobre
              </Link>
              <Link
                to="/time"
                className="block px-4 py-2 text-sm text-gray-600 font-semibold hover:bg-sunglow/75 hover:rounded-lg"
                onClick={closeDropdown}
              >
                Time
              </Link>
              <Link
                to="/contato"
                className="block px-4 py-2 text-sm text-gray-600 font-semibold hover:bg-english-violet hover:rounded-lg"
                onClick={closeDropdown}
              >
                Contato
              </Link>
              <div>
                <Link
                  to="/login"  
                className="block px-4 py-2 text-sm text-gray-600 font-semibold hover:bg-orange-crayola hover:rounded-lg"
                onClick={closeDropdown}
                  >
                  Entrar
                </Link>

                <Link
                  to="/cadastro"
                  
                className="block px-4 py-2 text-sm text-gray-600 font-semibold hover:bg-orange-crayola hover:rounded-lg"
                onClick={closeDropdown}
                  >
                  Cadastre-se
                </Link>
              </div>
            </div>
          )}
        </div>
        {/* Dropdown menu for smaller screens - end */}
        {/* buttons - end */}
      </header>
    );
  }

  return <>{navbarPre}</>;
}

export default Navbar;
