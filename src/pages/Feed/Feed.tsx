import { useContext, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { toastAlerta } from "../../util/toastAlerta";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export function Feed() {
  let navigate = useNavigate();

  const { usuario } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token === "") {
      toastAlerta("Você precisa estar logado", "info");
      navigate("/login");
    }
  }, [usuario.token]);

  return (
    <div className="flex h-screen w-screen justify-end">
      <Sidebar />
      <div className="w-4/6 mt-1 mb-1 border border-indigo-600 rounded-lg bg-mint-green">
      Feed
        </div>

      <div className="w-1/6 bg-mint"></div>
    </div>
  );
}
