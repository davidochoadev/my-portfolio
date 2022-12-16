import { Typography } from "@material-tailwind/react";
import { InView } from "react-intersection-observer";
import Typewriter from "typewriter-effect";

export default function HomeSection(data: any) {
  const homeSetInView = data.homeSetInView;
  const lang = data.lang;
  const titleBox = data.titleBox;

  return (
    <section className="relative h-screen flex snap-start">
      <InView
        as="div"
        id="home"
        className="absolute top-0 h-2 w-full"
        onChange={homeSetInView}
      />
      <div className="mx-4 my-auto md:mx-auto w-full h-full h-4/5 flex flex-col md:flex-row md:justify-center">
        <div id="typography-container" className="w-full lg:w-1/3 md:flex md:items-center md:flex-col md:my-auto md:px-4 pb-4">
          <Typography variant="h6" className="w-full font-mono text-blue-gray-600">
            <Typewriter
              options={{
                strings: ["FREELANCER","JUNIOR FULL-STACK WEB DEVELOPER","WEB DESIGNER","CRYPTO ENTHUSIAST","FATHER","CAT LOVER"],
                autoStart: true,
                loop: true,
                cursor: " ",
              }}
            />
          </Typography>
          {titleBox ? 
          (
          <Typography variant="h1" className="w-full text-3xl md:text-4xl lg:text-4xl font-mono text-blue-700">
            <Typewriter
            options={{
              cursor: " ",
            }}
              onInit={(typewriter1) => {
                typewriter1
                  .typeString("Hi, I am David Ochoa👋")
                  .start();
              }}
            />
          </Typography>
          ) : (
            <Typography variant="h2" className="w-full text-3xl md:text-4xl lg:text-3xl font-mono text-blue-700">
            <Typewriter
              options={{
                cursor: " ",
              }}
              onInit={(typewriter2) => {
                typewriter2.typeString("Ciao! Sono David Ochoa👋")
                .start();
              }}
            />
            </Typography>
          )
          }
          <Typography variant="paragraph" className="w-full font-mono text-white">
            {lang ?
              ("I'm a freelance Junior Full-Stack JavaScript/TypeScript & React Developer from Rome in Italy 🇮🇹 with an interest in crypto's and personal finance, in love with my son Noah, my soulmate Mina and felines.") :
              ("Sono uno Sviluppatore Junior Full-Stack specializzato in JavaScript/Typescript e Sviluppo in ReactJS ed attualmente sono situato a Roma in Italia 🇮🇹. Le mie passioni sono le cripto valute e la gestione finanziaria personale, sono innamorato di mio figlio Noah e della mia anima gemella Mina e adoro i gatti.")
            }
          </Typography>
        </div>
        <div className="relative w-full h-full md:w-1/2 lg:w-1/3 lg:w-1/3 md:mx-4 lg:mx-0 flex justify-center">
          <div className="w-full h-full md:h-1/2 bg-blue-700 rounded-3xl absolute top-0 bottom-0 md:top-1/4 left-0 md:bottom-0 -z-10 "></div>
          <img src="../assets/img/profile.jpg" alt="J.David Ochoa" className="p-4 md:p-0 w-full rounded-full self-center lg:w-4/5" />
        </div>
      </div>
    </section>
  );
}
