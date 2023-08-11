import "../../pages/Home/Home.css";
import Feature1 from "../../assets/images/planting tree-pana.svg";
import Feature2 from "../../assets/images/group photo-pana.svg";
import Feature3 from "../../assets/images/Farmers market-pana.svg"
import Feature4 from "../../assets/images/Creative team-pana.svg"
import '../components.css'

const propriedades = [
  {
    id: 1,
    texto: "Cuide da natureza local",
    imagem: Feature1,
  },
  { id: 2,
    texto: "Conheça novas pessoas",
    imagem: Feature2 },

  { id: 3,
    texto: "Apoie pequenos comércios",
    imagem: Feature3 },

  { id: 4,
    texto: "Construa em conjunto com sua comunidade",
    imagem: Feature4 },
];

const features = () => {
  return (
    <>
      <section className="bg-white py-6 sm:py-8 lg:py-12 h-screen flex justify-center items-center flex-col gap-10">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-mint md:mb-6 lg:text-3xl">
              O que você encontra aqui?
            </h2>

            <p className="mx-auto max-w-screen-md text-center text-regal-blue md:text-lg">
              Esses são alguns dos recursos que oferecemos para você se conectar
              com as comunidades ao seu redor!
            </p>
          </div>

          <div className="grid gap-8 grid-cols-4 md:gap-0 md:divide-x sm:grid-cols-1">
            {propriedades.map((propriedade) => (
              <div key={propriedade.id} className="text-orange-crayola">
                <div className="grid justify-center">
                {propriedade.texto}
                </div>
                <div className="">
                  <img src={propriedade.imagem} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default features;
