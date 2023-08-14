

const testimonials = () => {
  return (
    <>
      <section className="bg-white py-6 sm:py-8 lg:py-12 mb-10 mt-10 h-screen flex justify-center items-center flex-col gap-10">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <h1 className="pb-8 text-center text-5xl fonte text-mint md:mb-12">
            O que estão falando de nós?
          </h1>

          <h3 className="pb-16 text-center text-2xl text-english-violet md:mb-12">Veja os depoimentos de alguns usuários:</h3>

          <div className="grid gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3 lg:divide-x">
            <div className="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
              <div className="text-center text-english-violet">
                “Bom dia turma! Hoje tem canvas.”
              </div>

              <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
                  <img
                    src="https://media.licdn.com/dms/image/D4D03AQE9VK3cOR2j3g/profile-displayphoto-shrink_800_800/0/1675420980562?e=1697673600&v=beta&t=aCahKCwWcXflgRjlyf3D1G9fAXIwkottvT0oClNNYm4"
                    loading="lazy"
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div>
                  <div className="text-center text-sm font-bold text-mint sm:text-left md:text-base">
                    Geandro Araújo
                  </div>
                  <p className="text-center text-sm text-gray-500 sm:text-left md:text-sm">
                    Dev / Instrutor
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
              <div className="text-center text-english-violet">
                “Grupo do Lucas, levanta a mão.”
              </div>

              <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
                  <img
                    src="https://media.licdn.com/dms/image/C4D03AQFkYvuFl4Ny_g/profile-displayphoto-shrink_800_800/0/1658362068270?e=1697673600&v=beta&t=y7oOxmtXgfmH0j89ljf-Ggbl5zalWYkN76W0WHUycmU"
                    loading="lazy"
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div>
                  <div className="text-center text-sm font-bold text-mint sm:text-left md:text-base">
                    Yuri Oliveira
                  </div>
                  <p className="text-center text-sm text-gray-500 sm:text-left md:text-sm">
                    Dev / Instrutor
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
              <div className="text-center text-english-violet">
                “Adorei o site, super recomendo, contrataria quem desenvolveu num piscar de olhos!”
              </div>

              <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
                  <img
                    src="https://img.freepik.com/free-icon/user_318-875902.jpg?t=st=1692031874~exp=1692032474~hmac=05e9b88383d49c0bfd452c26e52009781b2d1de7932599b05efdd9a1c46a0e64"
                    loading="lazy"
                    alt="Photo by Ayo Ogunseinde"
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div>
                  <div className="text-center text-sm font-bold text-mint sm:text-left md:text-base">
                    Usuário Anônimo mas 100% confiável
                  </div>
                  <p className="text-center text-sm text-gray-500 sm:text-left md:text-sm">
                    Desempregado
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default testimonials;
