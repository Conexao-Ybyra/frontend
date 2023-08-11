import { Link } from "react-router-dom";
import Hero from "../../assets/images/hero.png";
import "../../pages/Home/Home.css";

const hero = () => {
  return (
    <>
      <section className="text-gray-600 body-font bg-mint-green">
        <div className="container mx-auto flex px-5 py-24  flex-row items-center">
          <div className="lg:flex-grow w-3/4 mr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="batatinha sm:text-4xl text-7xl mb-4 text-mint ">
              Conexão Ybyra
            </h1>
            <h2 className="text-xl mb-8 text-regal-blue ">
              Compartilhe, sonhe e pertença.
            </h2>

            <div className="flex lg:flex-row md:flex-col">
              <Link
                to="/cadastro"
                className="hidden rounded-3xl bg-orange-crayola px-5 py-3 mr-3 text-center text-sm font-semibold text-antiflash-white outline-none ring-indigo-300 transition duration-100 hover:bg-antiflash-white hover:text-orange-crayola focus-visible:ring active:text-gray-700 md:text-base lg:inline-block"
              >
                Cadastre-se
              </Link>
              <Link
                to="/sobre"
                className="hidden rounded-3xl bg-orange-crayola px-5 py-3 mr-3 text-center text-sm font-semibold text-antiflash-white outline-none ring-indigo-300 transition duration-100 hover:bg-antiflash-white hover:text-orange-crayola focus-visible:ring active:text-gray-700 md:text-base lg:inline-block"
              >
                Saiba mais
              </Link>
            </div>
          </div>
          <div className="w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={Hero}
            />
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,32L48,58.7C96,85,192,139,288,144C384,149,480,107,576,106.7C672,107,768,149,864,138.7C960,128,1056,64,1152,58.7C1248,53,1344,107,1392,133.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </section>
    </>
  );
};

export default hero;
