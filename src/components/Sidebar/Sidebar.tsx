import logo from "../../assets/images/cy-logo.png";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { toastAlerta } from "../../util/toastAlerta";
import "./Sidebar.css";
import avatar from "../../assets/images/avatar.svg";

const Sidebar = () => {
  const { usuario, handleLogout } = useContext(AuthContext);

  let navigate = useNavigate();

  function logout() {
    handleLogout();
    toastAlerta("Usuário deslogado com sucesso", "info");
    navigate("/login");
  }

  const navigation = [
    {
      href: "/feed",
      name: "Dashboard",
      icon: (
        <svg
          viewBox="-2.4 -2.4 28.80 28.80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke="#CCCCCC"
            stroke-width="0.4800000000000001"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M21.1935 16.793C20.8437 19.2739 20.6689 20.5143 19.7717 21.2572C18.8745 22 17.5512 22 14.9046 22H9.09536C6.44881 22 5.12553 22 4.22834 21.2572C3.33115 20.5143 3.15626 19.2739 2.80648 16.793L2.38351 13.793C1.93748 10.6294 1.71447 9.04765 2.66232 8.02383C3.61017 7 5.29758 7 8.67239 7H15.3276C18.7024 7 20.3898 7 21.3377 8.02383C22.0865 8.83268 22.1045 9.98979 21.8592 12"
              stroke="#3C394D"
              stroke-width="1.7280000000000002"
              stroke-linecap="round"
            ></path>{" "}
            <path
              d="M19.5617 7C19.7904 5.69523 18.7863 4.5 17.4617 4.5H6.53788C5.21323 4.5 4.20922 5.69523 4.43784 7"
              stroke="#3C394D"
              stroke-width="1.7280000000000002"
            ></path>{" "}
            <path
              d="M17.4999 4.5C17.5283 4.24092 17.5425 4.11135 17.5427 4.00435C17.545 2.98072 16.7739 2.12064 15.7561 2.01142C15.6497 2 15.5194 2 15.2588 2H8.74099C8.48035 2 8.35002 2 8.24362 2.01142C7.22584 2.12064 6.45481 2.98072 6.45704 4.00434C6.45727 4.11135 6.47146 4.2409 6.49983 4.5"
              stroke="#3C394D"
              stroke-width="1.7280000000000002"
            ></path>{" "}
            <circle
              cx="16.5"
              cy="11.5"
              r="1.5"
              stroke="#3C394D"
              stroke-width="1.7280000000000002"
            ></circle>{" "}
            <path
              d="M19.9999 20L17.1157 17.8514C16.1856 17.1586 14.8004 17.0896 13.7766 17.6851L13.5098 17.8403C12.7984 18.2542 11.8304 18.1848 11.2156 17.6758L7.37738 14.4989C6.6113 13.8648 5.38245 13.8309 4.5671 14.4214L3.24316 15.3803"
              stroke="#3C394D"
              stroke-width="1.7280000000000002"
              stroke-linecap="round"
            ></path>{" "}
          </g>
        </svg>
      ),
    },
    {
      href: "/perfil",
      name: "Perfil",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <circle
              cx="12"
              cy="6"
              r="4"
              stroke="#3C394D"
              stroke-width="1.5"
            ></circle>{" "}
            <path
              d="M15 20.6151C14.0907 20.8619 13.0736 21 12 21C8.13401 21 5 19.2091 5 17C5 14.7909 8.13401 13 12 13C15.866 13 19 14.7909 19 17C19 17.3453 18.9234 17.6804 18.7795 18"
              stroke="#3C394D"
              stroke-width="1.5"
              stroke-linecap="round"
            ></path>{" "}
          </g>
        </svg>
      ),
    },
    {
      href: "/postagens",
      name: "Postagens",
      icon: (
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
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
              d="M18.874 9C18.7897 8.61275 18.649 8.32059 18.4142 8.08579C17.8284 7.5 16.8856 7.5 15 7.5H9C7.11438 7.5 6.17157 7.5 5.58579 8.08579C5 8.67157 5 9.61438 5 11.5V12.5C5 14.3856 5 15.3284 5.58579 15.9142C6.17157 16.5 7.11438 16.5 9 16.5H15C16.8856 16.5 17.8284 16.5 18.4142 15.9142C18.9458 15.3827 18.995 14.5572 18.9995 13"
              stroke="#3C394D"
              stroke-width="1.5"
              stroke-linecap="round"
            ></path>{" "}
            <path
              d="M19 2V2.5C19 3.88071 17.8807 5 16.5 5H7.5C6.11929 5 5 3.88071 5 2.5V2"
              stroke="#3C394D"
              stroke-width="1.5"
              stroke-linecap="round"
            ></path>{" "}
            <path
              d="M19 22V21.5C19 20.1193 17.8807 19 16.5 19H7.5C6.11929 19 5 20.1193 5 21.5V22"
              stroke="#3C394D"
              stroke-width="1.5"
              stroke-linecap="round"
            ></path>{" "}
          </g>
        </svg>
      ),
    },
    {
      href: "/temas",
      name: "Temas",
      icon: (
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
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
              d="M2.55078 4.5C2.61472 3.84994 2.75923 3.41238 3.08582 3.08579C3.67161 2.5 4.61442 2.5 6.50004 2.5C8.38565 2.5 9.32846 2.5 9.91425 3.08579C10.5 3.67157 10.5 4.61438 10.5 6.5C10.5 8.38562 10.5 9.32843 9.91425 9.91421C9.32846 10.5 8.38565 10.5 6.50004 10.5C4.61442 10.5 3.67161 10.5 3.08582 9.91421C2.77645 9.60484 2.63047 9.19589 2.56158 8.60106"
              stroke="#3C394D"
              stroke-width="1.5"
              stroke-linecap="round"
            ></path>{" "}
            <path
              d="M21.4493 15.5C21.3853 14.8499 21.2408 14.4124 20.9142 14.0858C20.3284 13.5 19.3856 13.5 17.5 13.5C15.6144 13.5 14.6716 13.5 14.0858 14.0858C13.5 14.6716 13.5 15.6144 13.5 17.5C13.5 19.3856 13.5 20.3284 14.0858 20.9142C14.6716 21.5 15.6144 21.5 17.5 21.5C19.3856 21.5 20.3284 21.5 20.9142 20.9142C21.2408 20.5876 21.3853 20.1501 21.4493 19.5"
              stroke="#3C394D"
              stroke-width="1.5"
              stroke-linecap="round"
            ></path>{" "}
            <path
              d="M2.5 17.5C2.5 15.6144 2.5 14.6716 3.08579 14.0858C3.67157 13.5 4.61438 13.5 6.5 13.5C8.38562 13.5 9.32843 13.5 9.91421 14.0858C10.5 14.6716 10.5 15.6144 10.5 17.5C10.5 19.3856 10.5 20.3284 9.91421 20.9142C9.32843 21.5 8.38562 21.5 6.5 21.5C4.61438 21.5 3.67157 21.5 3.08579 20.9142C2.5 20.3284 2.5 19.3856 2.5 17.5Z"
              stroke="#3C394D"
              stroke-width="1.5"
            ></path>{" "}
            <path
              d="M13.5 6.5C13.5 4.61438 13.5 3.67157 14.0858 3.08579C14.6716 2.5 15.6144 2.5 17.5 2.5C19.3856 2.5 20.3284 2.5 20.9142 3.08579C21.5 3.67157 21.5 4.61438 21.5 6.5C21.5 8.38562 21.5 9.32843 20.9142 9.91421C20.3284 10.5 19.3856 10.5 17.5 10.5C15.6144 10.5 14.6716 10.5 14.0858 9.91421C13.5 9.32843 13.5 8.38562 13.5 6.5Z"
              stroke="#3C394D"
              stroke-width="1.5"
            ></path>{" "}
          </g>
        </svg>
      ),
    },
  ];

  const navsFooter = [
    {
      href: "/time",
      name: "Saiba mais!",
      icon: (
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
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
              d="M10.125 8.875C10.125 7.83947 10.9645 7 12 7C13.0355 7 13.875 7.83947 13.875 8.875C13.875 9.56245 13.505 10.1635 12.9534 10.4899C12.478 10.7711 12 11.1977 12 11.75V13"
              stroke="#3C394D"
              stroke-width="1.5"
              stroke-linecap="round"
            ></path>{" "}
            <circle cx="12" cy="16" r="1" fill="#3C394D"></circle>{" "}
            <path
              d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
              stroke="#3C394D"
              stroke-width="1.5"
              stroke-linecap="round"
            ></path>{" "}
          </g>
        </svg>
      ),
    },
  ];
  // fixed top-0 left-0
  return (
    <>
      <nav className="h-full bg-white space-y-8 sm:w-80 quicksand">
        <div className="flex flex-col h-full">
          <div className="h-20 flex pl-12 items-center">
            <a href="javascript:void(0)" className="flex-none">
              <img src={logo} width={140} className="mx-auto" />
            </a>
          </div>
          <div className="flex-1 flex flex-col h-full overflow-auto">
            <ul className="pl-10 text-md font-medium flex-1">
              {navigation.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.href}
                    className="flex items-center gap-x-2 text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150"
                  >
                    <div className="text-gray-500">{item.icon}</div>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div>
              <ul className="px-4 text-sm font-medium">
                {navsFooter.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={item.href}
                      className="flex items-center gap-x-2 text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150"
                    >
                      <div className="text-gray-500">{item.icon}</div>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex items-center px-6 pb-4 text-sm font-medium text-gray-500">
                <svg
                className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
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
                      d="M15 12L2 12M2 12L5.5 9M2 12L5.5 15"
                      stroke="#3C394D"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      d="M9.00195 7C9.01406 4.82497 9.11051 3.64706 9.87889 2.87868C10.7576 2 12.1718 2 15.0002 2L16.0002 2C18.8286 2 20.2429 2 21.1215 2.87868C22.0002 3.75736 22.0002 5.17157 22.0002 8L22.0002 16C22.0002 18.8284 22.0002 20.2426 21.1215 21.1213C20.3531 21.8897 19.1752 21.9862 17 21.9983M9.00195 17C9.01406 19.175 9.11051 20.3529 9.87889 21.1213C10.5202 21.7626 11.4467 21.9359 13 21.9827"
                      stroke="#3C394D"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    ></path>{" "}
                  </g>
                </svg>

                <button
                  onClick={logout}
                  className=" gap-x-2 text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150"
                >
                  Logout
                </button>
              </div>
              <div className="py-4 px-4 border-t">
                <div className="flex items-center gap-x-4">
                  {usuario.foto == "" || usuario.foto == " " ? (
                    <img
                      src={avatar}
                      alt={`O perfil de ${usuario.nome} está sem foto`}
                      className="w-12 h-12 rounded-full"
                    />
                  ) : (
                    <img
                      src={usuario.foto}
                      alt={`Foto de perfil de ${usuario.nome}`}
                      className="w-12 h-12 rounded-full"
                    />
                  )}
                  <div>
                    <span className="block text-gray-700 text-sm font-semibold">
                      {usuario.nome}
                    </span>
                    <Link
                      to="/perfil"
                      className="block mt-px text-gray-600 hover:text-indigo-600 text-xs"
                    >
                      Ver perfil
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
