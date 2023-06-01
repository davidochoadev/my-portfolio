import { Typography } from "@material-tailwind/react";
import { InView } from "react-intersection-observer";
import { MyCard } from "./mystats";

export default function AboutSection(data: any) {
  const setInView = data.setInView;
  const products : any = data.products;
  const itemsList = (
    <div id="TechContainerPic" className="flex flex-row flex-wrap gap-2 md:gap-2 items-center md:my-0 lg:my-0 justify-center md:flex-grow">
       <img src="https://user-images.githubusercontent.com/1500684/157764276-a516a239-e377-4a20-b44a-0ac7b65c8c14.svg" alt="TailwindCSS" 
       className="h-10 w-32 opacity-80 grayscale transition hover:scale-110 hover:opacity-100 hover:grayscale-0"></img>
       <img src="https://user-images.githubusercontent.com/1500684/157764397-ccd8ea10-b8aa-4772-a99b-35de937319e1.svg" alt="Fly.io" className="block h-12 w-24 opacity-80 grayscale transition hover:scale-110 hover:opacity-100 hover:grayscale-0"></img>
       <img src="https://user-images.githubusercontent.com/1500684/157764484-ad64a21a-d7fb-47e3-8669-ec046da20c1f.svg" alt="Prisma ORM" className="h-10 w-20 opacity-80 grayscale transition hover:scale-110 hover:opacity-100 hover:grayscale-0"></img>
       <img src="https://user-images.githubusercontent.com/1500684/157773063-20a0ed64-b9f8-4e0b-9d1e-0b65a3d4a6db.svg" alt="TypeScript" className="h-14 w-14  opacity-60 grayscale transition hover:scale-110 hover:opacity-100 hover:grayscale-0"></img>
       <img src="https://seeklogo.com/images/R/remix-logo-862D8B1019-seeklogo.com.png" alt="Remix.run" className="h-14 w-14  opacity-60 grayscale transition hover:scale-110 hover:opacity-100 hover:grayscale-0"></img>
       <img src="https://seeklogo.com/images/J/javascript-js-logo-2949701702-seeklogo.com.png" alt="JavaScript" className="h-14 w-14  opacity-60 grayscale transition hover:scale-110 hover:opacity-100 hover:grayscale-0"></img>
       <img src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" alt="NodeJS" className="h-14 w-13  opacity-60 grayscale transition hover:scale-110 hover:opacity-100 hover:grayscale-0"></img>
       <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="ReactJS" className="h-14 w-16  opacity-60 grayscale transition hover:scale-110 hover:opacity-100 hover:grayscale-0"></img>
       <img src="https://seeklogo.com/images/S/sqlite-logo-5E9F462E6A-seeklogo.com.png" alt="SQLite" className="h-11 w-24  opacity-100 grayscale transition hover:scale-110 hover:opacity-100 hover:grayscale-0"></img>
       <img src="https://seeklogo.com/images/P/postgresql-logo-6DBC096ED4-seeklogo.com.png" alt="PostgreSQL" className="block h-8 w-32  opacity-100 grayscale transition hover:scale-110 hover:opacity-100 hover:grayscale-0"></img>
       <img src="https://seeklogo.com/images/D/docker-inc-logo-4A9A703EFB-seeklogo.com.png" alt="Docker" className="block h-8 w-32  opacity-100 grayscale transition hover:scale-110 hover:opacity-100 hover:grayscale-0"></img>
       <img src="https://seeklogo.com/images/A/adobe-photoshop-logo-7B88D7B5AA-seeklogo.com.png" alt="Photoshop" className="block h-14 w-14  opacity-60 grayscale transition hover:scale-110 hover:opacity-100 hover:grayscale-0"></img>
       <img src="https://seeklogo.com/images/A/adobe-illustrator-logo-775FAF240B-seeklogo.com.png" alt="Illustrator" className="block h-14 w-14  opacity-60 grayscale transition hover:scale-110 hover:opacity-100 hover:grayscale-0"></img>
       <img src="https://seeklogo.com/images/A/adobe-after-effects-logo-960B473FE4-seeklogo.com.png" alt="After Effects" className="block h-14 w-14  opacity-60 grayscale transition hover:scale-110 hover:opacity-100 hover:grayscale-0"></img>
       <img src="https://yoolk.ninja/wp-content/uploads/2020/06/Apps-Clip-Studio-Paint-1024x1024.png" alt="Clip Studio Paint" className="block h-14 w-14  opacity-60 grayscale transition hover:scale-110 hover:opacity-100 hover:grayscale-0"></img>
       <img src="https://seeklogo.com/images/H/html5-without-wordmark-color-logo-14D252D878-seeklogo.com.png" alt="HTML" className="block h-14 w-12  opacity-60 grayscale transition hover:scale-110 hover:opacity-100 hover:grayscale-0"></img>
       <img src="https://seeklogo.com/images/C/css-3-logo-023C1A7171-seeklogo.com.png" alt="CSS3" className="block h-14 w-12  opacity-60 grayscale transition hover:scale-110 hover:opacity-100 hover:grayscale-0"></img>
       <img src="https://seeklogo.com/images/F/figma-logo-E4E21D3AEA-seeklogo.com.png" alt="Figma" className="block h-14 w-10  opacity-60 grayscale transition hover:scale-110 hover:opacity-100 hover:grayscale-0"></img>
    </div>
    
 )
  
  return (
    <section className="relative h-screen flex flex-col justify-center items-center snap-start">
      <InView
        as="div"
        id="about"
        className="absolute top-0.5 h-2 w-full"
        onChange={setInView}
      />
      <Typography as="div" id="title-about-section" className="text-[#33DDB3] font-goodbrush text-center" variant="h2">
        {data.lang ? ("About Me") : ("Su di Me")}
      </Typography>
      <div id="about-section"className="gap-4 shadow-md overflow-hidden py-4 px-4 bg-inherit lg:shadow-none w-full h-3/4 rounded-3xl self-center flex justify-start flex-col md:flex-row md:flex-wrap relative lg:gap-4 md:justify-center">
        <MyCard lang={data.lang} dialogElement={1} products={products} preview={false} title={"My Coding Stats 🧑🏻‍💻"} italianTitle={"Le mie Statistiche 🧑🏻‍💻"} engContenuto={"These are my coding languages, WakaTime & GitHub Stats"} itaContenuto={"Queste sono le statistiche dei miei linguaggio di programmazione, di WakaTime e GitHub."} position={-100}>
          <div id="container-stats-1" className="w-full group-hover:hidden flex flex-col items-center">
            <a href="https://github.com/davideochoadev" className="my-2">
              <img alt="David Stats" src="https://github-readme-stats.vercel.app/api/top-langs/?username=davideochoadev&layout=compact&hide_border=true&title_color=33DDB3" />
            </a>
          </div>
        </MyCard>
        <MyCard lang={data.lang} dialogElement={2} preview={false} title={"Technologies and Skills ⚛️"} italianTitle={"Tecnologie ed Abilità ⚛️"} engContenuto={"Check my Favorite Frameworks, Coding Languages, Softwares and Technologies."} itaContenuto={"I Frameworks, Software, Linguaggi di Programmazione e Tecnologie che preferisco."} position={-100}>
        <div id="gino" className="flex justify-center flex-grow lg:w-full items-center lg:flex lg:mx-auto">
            {itemsList}
        </div>
        </MyCard>
        <MyCard dialogElement={3} lang={data.lang} preview={false} title={"My Certifications 👨‍🎓"} italianTitle={"Le Mie Certificazioni 👨‍🎓"} engContenuto={"All my certifications, qualifications and diplomas"} itaContenuto={"Tutte le mie Certificazioni, Attestati e Diplomi."} position={-100}>
        <Typography>gino</Typography>
        </MyCard>
        <MyCard dialogElement={4} lang={data.lang} preview={false} title={"My Resume/CV 💼"} italianTitle={"Il Mio Curriculum Vitae 💼"} engContenuto={"You can check my Virtual Resume/CV here."} itaContenuto={"Puoi vedere il mio Curriculum Vitae direttamente qui!"} position={-100}>
        <Typography>gino</Typography>
        </MyCard>
      </div>
    </section>
  );
}
