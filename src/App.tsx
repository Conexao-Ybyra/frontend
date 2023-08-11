import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Sobre from "./pages/Sobre/Sobre";
import Login from "./pages/Login/Login";
import { AuthProvider } from "./contexts/AuthContext";
import Cadastro from "./pages/Cadastro/Cadastro";
import ListaTemas from "./components/Temas/listaTemas/ListaTemas";
import FormularioTema from "./components/Temas/formularioTema/FormularioTema";
import DeletarTema from "./components/Temas/deletarTema/DeletarTema";
import ListaPostagens from "./components/Postagens/listaPostagens/ListaPostagens";
import FormularioPostagem from "./components/Postagens/formularioPostagem/FormularioPostagem";
import DeletarPostagem from "./components/Postagens/deletarPostagem/DeletarPostagem";
import Perfil from "./pages/Perfil/Perfil";
import { ToastContainer } from "react-toastify";
import Equipe from "./pages/Equipe/Equipe";
import Contato from "./pages/Contato/Contato";
import { Feed } from "./pages/Feed/Feed";

function App() {
  return (
    <>
      <AuthProvider>
        <ToastContainer />
        <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/feed" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastroTema" element={<FormularioTema />} />
              <Route path="/editarTema/:id" element={<FormularioTema />} />
              <Route path="/deletarTema/:id" element={<DeletarTema />} />
              <Route path="/postagens" element={<ListaPostagens />} />
              <Route path="/cadastroPostagem" element={<FormularioPostagem />} />
              <Route path="/editarPostagem/:id" element={<FormularioPostagem />} />
              <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/home" element={<Home />} />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/time" element={<Equipe />} />
              <Route path="/contato" element={<Contato />} />
            </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;