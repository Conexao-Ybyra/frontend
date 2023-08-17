import { Link } from "react-router-dom";
import Tree from "../../assets/images/cherry-tree-no-bg.gif";
import '../components.css'

const About = () => {
  return (
    <>
   <section className="text-gray-600 body-font h-4/5 flex justify-center items-center flex-col waves md:bg-none sm:bg-none">
  <div className="container mx-auto flex md:flex-row flex-row items-center">
    <div className="w-screen md:w-1/2 mb-10 md:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src={Tree}/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-12 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="sm:text-4xl pb-8 fonte text-5xl text-mint">Mas afinal, o que é o
        <br className="hidden lg:inline-block"/> Conexão Ybyra?
      </h1>
      <p className="pb-6 leading-relaxed text-xl text-english-violet">Um ambiente virtual seguro para compartilhar ideias, ações e sonhos visando promover conhecimento, apropriação e senso de pertencimento aos espaços públicos próximos dos locais onde as pessoas residem.</p>
      <div className="flex justify-center">
        <Link to={'/sobre'}>
        <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded text-lg">Saiba mais!</button>
        </Link>
      </div>
    </div>
  </div>
</section>
    </>
  );
};

export default About;
