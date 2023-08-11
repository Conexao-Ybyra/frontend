import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import heroImg from '../../assets/images/heroImg.jpg';
import { toastAlerta } from '../../util/toastAlerta';
import avatar from '../../assets/images/avatar.svg';

function Perfil() {
    let navigate = useNavigate()

    const { usuario } = useContext(AuthContext)

    useEffect(() => {
        if (usuario.token === "") {
            toastAlerta('Você precisa estar logado', 'info')
            navigate("/login")
        }
    }, [usuario.token])

    return (
        <div className='container mx-auto mt-4 rounded-2xl overflow-hidden'>
            <img className='w-full h-72 object-cover border-b-8 border-white' src={heroImg} alt="Foto de capa do perfil" />
            { (usuario.foto == "" || usuario.foto == " ") ? (
                <img src={avatar} alt={`O perfil de ${usuario.nome} está sem foto`} className='rounded-full w-56 mx-auto mt-[-8rem] relative z-10' />
            ) : (
                <img src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} className='rounded-full w-56 mx-auto mt-[-8rem] relative z-10' />
            )
            }
            <div className="relative mt-[-6rem] h-72 flex flex-col bg-sky-500 text-white text-2xl items-center justify-center">
                <p>Nome: {usuario.nome} </p>
                <p>Email: {usuario.email}</p>
            </div>
        </div>
    )
}

export default Perfil