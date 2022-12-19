import { Typography } from "@material-tailwind/react";
import { InView } from "react-intersection-observer";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion"



export default function HomeSection(data: any) {
  const homeSetInView = data.homeSetInView;
  const lang = data.lang;
  const titleBox = data.titleBox;

  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }} className="relative h-screen flex snap-start ">
      <InView
        as="div"
        id="home"
        className="absolute top-0 h-4 w-full"
        onChange={homeSetInView}
      />
      <div className="mx-4 md:mx-auto w-full h-full max-h-min flex flex-col md:flex-row md:justify-center">
        <div
        id="typography-container"
        className="w-full lg:w-1/3 pt-16 md:pt-0 lg:w-1/3 md:flex md:items-center md:flex-col md:my-auto md:px-4 pb-4"
        >
          <Typography variant="h6" className="w-full font-firacodeBold text-blue-gray-600">
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
          <Typography variant="h1" className="w-full text-3xl md:text-4xl lg:text-4xl font-goodbrush dark:text-[#33DDB3] text-[#33DDB3]">
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
            <Typography variant="h2" className="w-full text-3xl md:text-4xl lg:text-3xl font-goodbrush dark:text-[#33DDB3] text-[#33DDB3]">
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
          <Typography variant="paragraph" className="w-full font-firacode dark:text-white text-[#111827]">
            {lang ?
              ("I'm a freelance Junior Full-Stack JavaScript/TypeScript & React Developer from Italy 🇮🇹 with an interest in crypto's and personal finance, in love with my son Noah, my soulmate Mina and felines.") :
              ("Sono uno Sviluppatore Junior Full-Stack specializzato in JavaScript/Typescript e Sviluppo in ReactJS ed attualmente vivo in Italia 🇮🇹. Le mie passioni sono le cripto valute, il disegno e la finanza personale. Sono anche un Papà a tempo pieno e sono innamorato di mio figlio Noah e della mia anima gemella Mina, vado matto per gli animali specialmente per i gatti 😼")
            }
          </Typography>
        </div>
        <div
        className="h-full w-full md:flex md:items-center md:px-4 lg:w-1/2 lg:max-w-md group transition duration-300 ease-in"
        >
          <div className="relative cursor-pointer flex flex-col justify-center shadow-md bg-[#33DDB3] rounded-3xl w-full h-auto p-2 max-h-min mx-auto container md:h-1/2 lg:w-5/6 md:flex md:items-center group-hover:rounded-full group-hover:scale-[0.8] transition duration-300 ease-in">
            <img src="../assets/img/profile.jpg" alt="J.David Ochoa" className="group-hover:grayscale shadow-md object-contain w-full md:h-5/6 md:w-auto lg:w-auto mx-auto rounded-full lg:group-hover:scale-[1.5] group-hover:scale-[1.3] transition duration-300 ease-in"/>
            <Typography className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 invisible group-hover:visible group-hover:scale-[1.3] lg:group-hover:scale-[1.5] font-firacodeBold text-[#33DDB3] bg-white w-5/6 lg:w-1/2 text-center">MORE ABOUT ME?</Typography>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
