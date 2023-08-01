import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { RotatingLines } from "react-loader-spinner";
import UsuarioLogin from "../../models/UsuarioLogin";

function Login() {
  let navigate = useNavigate();

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  const { usuario, handleLogin } = useContext(AuthContext);

  const { isLoading } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token !== "") {
      navigate("/home");
    }
  }, [usuario]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    });
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }

  return (
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">
            Login
          </h2>

          <form className="mx-auto max-w-lg rounded-lg border" onSubmit={login}>
            <div className="flex flex-col gap-4 p-4 md:p-8">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
                  Usuário
                </label>

                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                  value={usuarioLogin.email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    atualizarEstado(e)
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="senha"
                  className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
                  Senha
                </label>
                <input
                  type="password"
                  id="senha"
                  name="senha"
                  placeholder="Senha"
                  className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                  value={usuarioLogin.senha}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    atualizarEstado(e)
                  }
                />
              </div>

              <button
                type="submit"
                className="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base"
              >
                {isLoading ? (
                  <div className="flex justify-center items-center">
                    <RotatingLines
                      strokeColor="white"
                      strokeWidth="5"
                      animationDuration="0.75"
                      width="24"
                      visible={true}
                    />
                  </div>
                ) : (
                  <span>Entrar</span>
                )}
              </button>

            </div>

            <div className="flex items-center justify-center bg-gray-100 p-4">
              <p className="text-center text-sm text-gray-500">
                Ainda não tem uma conta?{" "}
                <Link to="/cadastro" className="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">
                  Cadastre-se
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
