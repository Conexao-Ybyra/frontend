import "../../pages/Home/Home.css";
import Feature1 from "../../assets/images/planting tree-pana.svg";
import Feature3 from "../../assets/images/Farmers market-pana.svg";
import '../components.css'

const propriedades = [
  {
    id: 1,
    texto: "Cuide da natureza local",
    imagem: Feature1,
    texto2: "Construa em conjunto com sua comunidade"
  },
  { id: 3,
    texto: "Apoie pequenos comércios",
    imagem: Feature3,
    texto2: "Conheça pessoas novas ao seu redor"
  }
];

const features = () => {
  return (
    <>
      <section className="bg-white py-6 sm:py-8 lg:py-12 h-screen flex justify-center items-center flex-col gap-10">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="md:mb-16">
            <h2 className="pb-8 text-center fonte text-5xl text-mint md:mb-6">
              O que você encontra aqui?
            </h2>

            <p className="mx-auto max-w-screen-md text-center text-english-violet md:text-lg fonte text-xl pb-8">
              Esses são alguns dos recursos que oferecemos para você se conectar
              com as comunidades ao seu redor!
            </p>
          </div>

          <div className="grid gap-8 grid-cols-1 md:gap-0 md:divide-x sm:grid-cols-1">
            {propriedades.map((propriedade) => (
              <div key={propriedade.id} className="text-orange-crayola grid grid-cols-3 fonte text-xl">
                <div className="grid justify-center items-center text-3xl">
                {propriedade.texto}
                </div>
                <div className="">
                  <img src={propriedade.imagem} />
                </div>
                <div className="grid justify-center items-center pr-8 text-3xl">
                {propriedade.texto2}
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
