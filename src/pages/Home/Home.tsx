import { Link } from "react-router-dom";
import hero from "../../assets/images/hero.jpg";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section className="text-gray-600 body-font gradient">
        <div className="container mx-auto flex px-5 py-24  flex-row items-center">
          <div className="lg:flex-grow w-3/4 mr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="batatinha sm:text-4xl text-7xl mb-4 text-antiflash-white ">
              Conexão Ybyra
            </h1>
            <h2 className="text-xl mb-8 text-regal-blue ">
              Compartilhe, sonhe e pertença.
            </h2>

            <div className="flex lg:flex-row md:flex-col">
              <Link to="/cadastro" className="hidden rounded-3xl bg-gray-200 px-5 py-3 mr-3 text-center text-sm font-semibold text-orange-crayola outline-none ring-indigo-300 transition duration-100 hover:bg-orange-crayola hover:text-antiflash-white focus-visible:ring active:text-gray-700 md:text-base lg:inline-block">
                Cadastre-se
              </Link>
              <Link to="/about" className="hidden rounded-3xl bg-gray-200 px-5 py-3 mr-3 text-center text-sm font-semibold text-orange-crayola outline-none ring-indigo-300 transition duration-100 hover:bg-orange-crayola hover:text-antiflash-white focus-visible:ring active:text-gray-700 md:text-base lg:inline-block">
                Saiba mais
              </Link>
            </div>
          </div>
          <div className="w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={hero}
            />
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,32L48,58.7C96,85,192,139,288,144C384,149,480,107,576,106.7C672,107,768,149,864,138.7C960,128,1056,64,1152,58.7C1248,53,1344,107,1392,133.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </section>

      <section className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="grid gap-8 grid-cols-4 md:gap-0 md:divide-x">
            <div className="flex flex-col items-center md:p-4">
              <div className="text-3xl font-bold text-mint sm:text-xl md:text-2xl">
                200
              </div>
              <div className="text-sm font-semibold text-regal-blue sm:text-base">
                People
              </div>
            </div>

            <div className="flex flex-col items-center md:p-4">
              <div className="text-3xl font-bold text-mint sm:text-xl md:text-2xl">
                500+
              </div>
              <div className="text-sm font-semibold text-regal-blue sm:text-base">
                People
              </div>
            </div>

            <div className="flex flex-col items-center md:p-4">
              <div className="text-3xl font-bold text-mint sm:text-xl md:text-2xl">
                1000+
              </div>
              <div className="text-sm font-semibold text-regal-blue sm:text-base">
                Customers
              </div>
            </div>

            <div className="flex flex-col items-center md:p-4">
              <div className="text-3xl font-bold text-mint sm:text-xl md:text-2xl">
                2000
              </div>
              <div className="text-sm font-semibold text-regal-blue sm:text-base">
                Coffee breaks
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-4 grid grid-cols-4 gap-4 sm:grid-cols-3 md:mb-8 md:grid-cols-2 md:gap-6 xl:gap-8">
            <a href="#" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-mint md:h-80"> </a>
            <a href="#" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-mint md:h-80"> </a>
            <a href="#" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-mint md:h-80"> </a>
            <a href="#" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-mint md:h-80"> </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
