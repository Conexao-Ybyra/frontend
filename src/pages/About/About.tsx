import aboutImg from "../../assets/images/aboutImg.jpg";

const About = () => {
  return (
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 lg:gap-12">
            <div>
              <div className="h-auto overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                <img
                  src={aboutImg}
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  className="max-h-screen w-full object-cover object-center sm:max-h-96"
                />
              </div>
            </div>

            <div className="md:pt-8 flex flex-col self-center sm:px-10">
              <p className="text-center font-bold text-indigo-500 md:text-left">
                Who we are
              </p>

              <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
                Our competitive advantage
              </h1>

              <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text but is random or otherwise generated. It may be
                used to display a sample of fonts or generate text for testing.
                Filler text is dummy text which has no meaning however looks
                very similar to real text.
                <br />
                <br />
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text but is{" "}
                <a
                  href="#"
                  className="text-indigo-500 underline transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                >
                  random
                </a>{" "}
                or otherwise generated. It may be used to display a sample of
                fonts or generate text for testing. Filler text is dummy text
                which has no meaning however looks very similar to real text.
              </p>

              <h2 className="mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 md:text-left">
                About us
              </h2>

              <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text but is random or otherwise generated. It may be
                used to display a sample of fonts or generate text for testing.
                Filler text is dummy text which has no meaning however looks
                very similar to real text.
              </p>
              <div className="flex gap-2.5 justify-center">
                <button className="inline-flex text-white bg-emerald border-0 py-2 px-6 focus:outline-none hover:bg-mint rounded text-lg">
                  Button
                </button>

                <button className="inline-flex text-white bg-emerald border-0 py-2 px-6 focus:outline-none hover:bg-mint rounded text-lg">
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
