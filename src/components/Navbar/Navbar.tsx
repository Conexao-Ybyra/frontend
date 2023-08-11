import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { toastAlerta } from "../../util/toastAlerta";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { usuario, handleLogout } = useContext(AuthContext);

  let navigate = useNavigate();

  function logout() {
    handleLogout();
    toastAlerta("Usuário deslogado com sucesso", "info");
    navigate("/login");
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  let navbarPos;
  let navbarPre;

  if (usuario.token == "") {
    navbarPre = (
      <header className="pl-8 pr-8 flex items-center justify-between py-4 bg-[#9bf2d4] md:pb-12 md:py-8 xl:pb-16">
        {/* logo - start */}
        <Link
          to="/home"
          className="inline-flex items-center gap-2.5 text-2xl font-bold text-regal-blue hover:text-orange-crayola md:text-3xl"
          aria-label="logo"
        >
          Conexão Ybyra
        </Link>
        {/* logo - end */}

        {/* nav - start */}
        <nav
          className={`gap-12 lg:flex ${isDropdownOpen ? "hidden" : "lg:block"
            } lg:items-center lg:w-auto md:hidden sm:hidden `}
        >
          <Link
            to="/home"
            className="text-lg font-semibold text-english-violet transition duration-100 hover:text-mint-green active:text-indigo-700"
            onClick={closeDropdown}
          >
            Home
          </Link>
          <Link
            to="/sobre"
            className="text-lg font-semibold text-english-violet transition duration-100 hover:text-mint-green active:text-indigo-700"
            onClick={closeDropdown}
          >
            Sobre
          </Link>
          <Link
            to="/time"
            className="text-lg font-semibold text-english-violet transition duration-100 hover:text-mint-green active:text-indigo-700"
            onClick={closeDropdown}
          >
            Time
          </Link>
          <Link
            to="/contato"
            className="text-lg font-semibold text-english-violet transition duration-100 hover:text-mint-green active:text-indigo-700"
            onClick={closeDropdown}
          >
            Contato
          </Link>
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
                className="block px-4 py-2 text-sm text-gray-600 font-semibold hover:bg-indigo-100"
                onClick={closeDropdown}
              >
                Home
              </Link>
              <Link
                to="/sobre"
                className="block px-4 py-2 text-sm text-gray-600 font-semibold hover:bg-indigo-100"
                onClick={closeDropdown}
              >
                Sobre
              </Link>
              <Link
                to="/time"
                className="block px-4 py-2 text-sm text-gray-600 font-semibold hover:bg-indigo-100"
                onClick={closeDropdown}
              >
                Time
              </Link>
              <Link
                to="/contato"
                className="block px-4 py-2 text-sm text-gray-600 font-semibold hover:bg-indigo-100"
                onClick={closeDropdown}
              >
                Contato
              </Link>
            </div>
          )}
        </div>
        {/* Dropdown menu for smaller screens - end */}
        {/* buttons - end */}
      </header>
    );

  } else if (usuario.token !== "") {
    navbarPos = (
      <header className="ml-8 mr-8 mb-8 flex items-center justify-between border-b py-4 md:mb-12 md:py-8 xl:mb-16">
        {/* logo - start */}
        <Link
          to="/home"
          className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
          aria-label="logo"
        >
          Conexão Ybyra
        </Link>
        {/* logo - end */}

        {/* nav - start */}
        <nav
          className={`gap-12 lg:flex ${isDropdownOpen ? "hidden" : "lg:block"
            } lg:items-center lg:w-auto md:hidden sm:hidden `}
        >
          <Link
            to="/postagens"
            className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
            onClick={closeDropdown}
          >
            Postagens
          </Link>
          <Link
            to="/cadastroPostagem"
            className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
            onClick={closeDropdown}
          >
            Cadastrar Postagem
          </Link>
          <Link
            to="/temas"
            className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
            onClick={closeDropdown}
          >
            Temas
          </Link>
          <Link
            to="/cadastroTema"
            className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
            onClick={closeDropdown}
          >
            Cadastrar Temas
          </Link>
          <Link
            to="/perfil"
            className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
            onClick={closeDropdown}
          >
            Perfil
          </Link>
          <Link
            to="/about"
            className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
            onClick={closeDropdown}
          >
            Sobre
          </Link>
        </nav>
        {/* nav - end */}

        {/* buttons - start */}
        <button
          onClick={logout}
          className="hidden rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block"
        >
          Sair
        </button>

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
                to="/postagens"
                className="block px-4 py-2 text-sm text-gray-600 font-semibold hover:bg-indigo-100"
                onClick={closeDropdown}
              >
                Postagens
              </Link>
              <Link
                to="/temas"
                className="block px-4 py-2 text-sm text-gray-600 font-semibold hover:bg-indigo-100"
                onClick={closeDropdown}
              >
                Temas
              </Link>
              <Link
                to="/cadastroTema"
                className="block px-4 py-2 text-sm text-gray-600 font-semibold hover:bg-indigo-100"
                onClick={closeDropdown}
              >
                Cadastrar Temas
              </Link>
              <Link
                to="/perfil"
                className="block px-4 py-2 text-sm text-gray-600 font-semibold hover:bg-indigo-100"
                onClick={closeDropdown}
              >
                Perfil
              </Link>
            </div>
          )}
        </div>
        {/* Dropdown menu for smaller screens - end */}
        {/* buttons - end */}
      </header>
    );
  }

  return (
    <>
      {navbarPre}
      {navbarPos}
    </>
  );
}

export default Navbar;
