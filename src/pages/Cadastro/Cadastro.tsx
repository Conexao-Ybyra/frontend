import { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Usuario from '../../models/Usuario'
import { cadastrarUsuario } from '../../services/Service'
import { toastAlerta } from '../../util/toastAlerta'
import Imagem from '../../assets/images/Img-C.png'


function Cadastro() {

    let navigate = useNavigate()

    const [confirmaSenha, setConfirmaSenha] = useState<string>("")

    const [usuario, setUsuario] = useState<Usuario>({
        id: 0,
        nome: "",
        email: "",
        senha: "",
        foto: "",
        endereco: ""
    })

    const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
        id: 0,
        nome: "",
        email: "",
        senha: "",
        foto: "",
        endereco: ""
    })

    useEffect(() => {
        if (usuarioResposta.id !== 0) {
            back()
        }
    }, [usuarioResposta])

    function back() {
        navigate('/login')
    }

    function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
        setConfirmaSenha(e.target.value)
    }

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {

            try {
                await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuarioResposta)
                toastAlerta('Usuário cadastrado com sucesso', 'sucesso')

            } catch (error) {
                toastAlerta('Erro ao cadastrar o Usuário', 'erro')
            }

        } else {
            toastAlerta('Dados inconsistentes. Verifique as informações de cadastro.', 'info')
            setUsuario({ ...usuario, senha: "" }) // Reinicia o campo de Senha
            setConfirmaSenha("")                  // Reinicia o campo de Confirmar Senha
        }
    }

    return (
        <>
            <div className="flex justify-center font-bold bg-mint-green pt-7 px-24">
                <form className='px-10 md:px-8 rounded-lg bg-white drop-shadow' onSubmit={cadastrarNovoUsuario}>
                    <h2 className='text-emerald text-5xl mt-5 text-center'>Cadastre-se</h2>
                    <div className="flex flex-col w-full mt-3">
                        <label htmlFor="nome" className='font-bold text-emerald'>Nome</label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            placeholder="Nome"
                            className="border bg-gray-50 rounded ring-orange-crayola transition-100 focus:ring p-1 font-normal"
                            value={usuario.nome}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <div className="flex flex-col w-full mt-2">
                        <label htmlFor="usuario" className='text-emerald'>Usuario</label>
                        <input
                            type="text"
                            id="usuario"
                            name="email"
                            placeholder="Usuario"
                            className="border rounded p-2 font-normal"
                            value={usuario.email}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <div className="flex flex-col w-full mt-2">
                        <label htmlFor="foto" className='text-emerald'>Foto</label>
                        <input
                            type="text"
                            id="foto"
                            name="foto"
                            placeholder="Foto"
                            className="border rounded p-2 font-normal"
                            value={usuario.foto}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <div className="flex flex-col w-full mt-2">
                        <label htmlFor="endereco" className='text-emerald'>Endereço</label>
                        <input
                            type="text"
                            id="endereco"
                            name="endereco"
                            placeholder="Endereço"
                            className="border rounded p-2 font-normal"
                            value={usuario.endereco}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <div className="flex flex-col w-full mt-2">
                        <label htmlFor="senha" className='text-emerald'>Senha</label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            placeholder="Senha"
                            className="border rounded p-2 font-normal"
                            value={usuario.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <div className="flex flex-col w-full mt-2">
                        <label htmlFor="confirmarSenha" className='text-emerald'>Confirmar Senha</label>
                        <input
                            type="password"
                            id="confirmarSenha"
                            name="confirmarSenha"
                            placeholder=""
                            className="border rounded p-2"
                            value={confirmaSenha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
                        />
                    </div>
                    <div className="flex justify-around w-full gap-8 mt-5 mb-3">
                        <button className='rounded-full text-[#E9EEEE] bg-emerald hover:bg-[#E9EEEE] hover:text-emerald w-1/2' onClick={back}>
                            Cancelar
                        </button>
                        <button className='rounded-full text-white bg-emerald hover:bg-[#34af4e] w-1/2 py-2' type='submit'>
                            Cadastrar
                        </button>
                    </div>
                    <div className="hidden lg:block"></div>
                </form>
                <div className="w-1/2">
                <img src={Imagem} />
                </div>
            </div>
        </>
    )
}

export default Cadastro