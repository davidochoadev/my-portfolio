import { Typography } from "@material-tailwind/react";
import { InView } from "react-intersection-observer";
import Typewriter from "typewriter-effect";

export default function HomeSection(data: any) {
  const homeSetInView = data.homeSetInView;
  return (
    <section className="relative h-screen bg-[#111827] flex">
      <InView
        as="div"
        id="home"
        className="absolute top-0 h-2 w-full"
        onChange={homeSetInView}
      />
      <div className="my-auto mx-auto w-full h-full h-4/5 flex flex-col md:flex-row md:justify-center">
        <div id="typography-container" className="w-full lg:w-1/3 md:flex md:items-center md:flex-col md:my-auto px-4 pb-4">
          <Typography variant="h6" className="w-full font-mono text-blue-gray-700">
            <Typewriter
              options={{
                strings: ["FREELANCER","JUNIOR FULL-STACK WEB DEVELOPER","WEB DESIGNER","CRYPTO ENTHUSIAST","FATHER","CAT LOVER"],
                autoStart: true,
                loop: true,
                cursor: " ",
              }}
            />
          </Typography>
          <Typography variant="h1" className="w-full text-3xl md:text-4xl lg:text-4xl font-mono text-blue-700">
            <Typewriter
            options={{
              cursor: " ",
            }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Hi, I am David Ochoa 👋")
                  .start();
              }}
            />
          </Typography>
          <Typography variant="paragraph" className="w-full font-mono text-white">
          I'm a freelance Junior Full-Stack JavaScript/TypeScript & React Developer from Rome in Italy 🇮🇹 with an interest in crypto's and personal finance, in love with my son Noah, my soulmate Mina and felines.

{/*             <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(3000)
                  .typeString("I'm a freelance Junior Full-Stack JavaScript/TypeScript & React Developer from Rome in Italy 🇮🇹 with an interest in crypto's and personal finance, in love with my son Noah, my soulmate Mina and felines.")
                  .start();
              }}
            /> */}
          </Typography>
        </div>
        <img src="../assets/img/profile.jpg" className="px-4 py-4 w-full md:w-1/2 lg:w-1/3 rounded-full self-center" />
      </div>
    </section>
  );
}
