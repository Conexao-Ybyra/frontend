import { Link } from "react-router-dom";
import aboutImg from "../../assets/images/aboutImg.jpg";

const Sobre = () => {
  return (
    <>
      <div className="gradient py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 lg:gap-12">
            <div>
              <div className="h-auto overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                <img
                  src={aboutImg}
                  loading="lazy"
                  alt="Foto"
                  className="max-h-screen w-full object-cover object-center sm:max-h-96"
                />
              </div>
            </div>
            <div className="md:pt-8 flex flex-col self-center sm:px-10">
              <article className="bg-white rounded-xl p-8 pb-0 shadow">
                <h1 className="mb-4 text-center text-2xl font-semibold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
                  Quem nós somos?
                </h1>

                <p className="text-justify mb-6 text-gray-500 sm:text-lg md:mb-8">
                  Nos dias de hoje, onde a conexão digital é predominante, não existe melhor forma de unir e engajar
                  as pessoas em causas comunitárias e sustentáveis do que dando voz a elas. E como fazer isso?
                  Pensando nesse contexto foi que surgiu a rede social
                  <span className="font-bold"> Conexão Ybyra</span>.

                  <br />
                  <br />
                  Um ambiente virtual seguro para compartilhar ideias, ações e sonhos visando promover conhecimento,
                  apropriação e senso de pertencimento aos espaços públicos próximos dos locais onde as pessoas residem.

                  <br />
                  <br />
                  Criamos uma plataforma que proporciona um espaço acolhedor onde os usuários
                  preenchem um perfil indicando sua localização e podem criar tópicos relacionados a projetos comunitários
                  e sustentáveis dos quais participam ou gostariam de fazer parte.

                  <br />
                  <br />
                  Com foco no município de São Paulo, buscamos fortalecer ações coletivas locais e promover mudanças
                  significativas na interação das pessoas com os espaços públicos. Aqui é possível compartilhar informações
                  relevantes, trocar conhecimento e planejar ações futuras em comunidades.
                </p>
              </article>

              <h2 className="mb-2 py-4 text-center text-xl font-bold text-gray-800 sm:text-2xl md:mb-4 md:text-left">
                Faça parte você também!
              </h2>

              <div className="flex gap-2.5 justify-center">
                <Link to="/cadastro" className="hidden rounded-3xl bg-orange-crayola px-5 py-3 mr-3 text-center text-sm font-semibold text-antiflash-white outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 hover:text-orange-crayola focus-visible:ring active:text-gray-700 md:text-base lg:inline-block">
                  Cadastre-se agora
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sobre;
