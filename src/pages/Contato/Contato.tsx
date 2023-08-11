import { useRef } from 'react';
import { toastAlerta } from '../../util/toastAlerta';
import emailjs from '@emailjs/browser';

const Contato = () => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (form.current) {

            emailjs.sendForm('service_vea2wss', 'template_wq6318q', form.current, 'pppm4zdeMjA7TeNUr')
                .then(() => {
                    toastAlerta('Mensagem enviada com sucesso', 'sucesso')
                }, () => {
                    toastAlerta('Falha ao enviar a mensagem, por favor tente novamente', 'erro');
                });
        };
    }

    return (
        <>
            <div className='bg-mint-green grid grid-cols-2 items-center justify-items-center sm:grid-cols-1 h-full'>
                <form ref={form} onSubmit={sendEmail} className='w-2/3'>
                    <label>Nome completo</label>
                    <input
                        type="text"
                        name="nome"
                        required
                        className="border-2 rounded-lg w-full py-2 px-4 focus:outline-none focus:border-orange-crayola"
                    />
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        required
                        className="border-2 rounded-lg w-full py-2 px-4 focus:outline-none focus:border-orange-crayola"
                    />
                    <label>Assunto</label>
                    <input
                        type="text"
                        name="assunto"
                        required
                        className="border-2 rounded-lg w-full py-2 px-4 focus:outline-none focus:border-orange-crayola"
                    />
                    <label>Mensagem</label>
                    <textarea
                        name="mensagem"
                        required
                        className="border-2 rounded-lg w-full py-2 px-4 focus:outline-none focus:border-orange-crayola"
                    />
                    <button type="submit" className="bg-orange-crayola hover:bg-gray-300 text-white hover:text-orange-crayola font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline">
                        Enviar
                    </button>
                </form>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467692.39571995876!2d-46.92496597885748!3d-23.681434564936826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1691680927681!5m2!1spt-BR!2sbr"
                    width="500"
                    height="350"
                    loading="lazy"
                    className="rounded shadow m-8">
                </iframe>
            </div>
        </>
    );
};

export default Contato;