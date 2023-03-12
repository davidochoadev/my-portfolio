import { Button, Dialog, DialogBody, DialogHeader, IconButton, Typography } from "@material-tailwind/react";
import { Fragment, useState } from "react";
import {
  motion,
} from "framer-motion";

export function Card(data : any) {
   const [open, setOpen] = useState(false);
   const engTitle : string = data.engTitle;
   const itaTitle : string = data.itaTitle;
   const engContenuto : string = data.engContenuto;
   const itaContenuto : string = data.itaContenuto;
   const lang = data.lang;
   const position : number = data.position;

   const handleOpen = () => setOpen(!open);
   return (
      <Fragment>
         <motion.div
         initial={{ x: position , opacity: 0}}
         whileInView={{ x: 0 , opacity: 1}}
         transition={{ duration: 1 }}
         id="myStats-1" onClick={handleOpen}
         className="transition duration-300 hover:ease-in-out group hover:bg-[#33DDB3] hover:skew-x-3 md:h-1/2 cursor-pointer flex flex-col hover:scale-95 p-4 h-1/4 w-full md:w-1/2 lg:w-1/3 bg-white lg:shadow-md rounded-3xl"
         >
            <Typography variant="h5" className="transition duration-300 hover:ease-in-out group-hover:text-white text-base md:text-lg lg:text-xl font-goodbrush text-[#33DDB3] self-center text-center">
            {lang ? (engTitle):(itaTitle)}
            </Typography>
               {data.children}
            <div className="grow flex flex-col justify-center items-center md:hidden">
               <Typography className="flex justify-center items-center grow font-firacode py-2 text-center text-sm md:text-base" variant="paragraph">{lang ? (engContenuto) : (itaContenuto)}</Typography>
               <Button fullWidth className="group-hover:bg-white group-hover:text-[#33DDB3] transition duration-300 hover:ease-in-out hidden md:block bg-[#33DDB3] font-firacodeBold tracking-widest">{lang ? ("Show More"):("Guarda Di Più")}</Button>
            </div>
         </motion.div>
      </Fragment>
   )
}

export function MyCard(data: any){
   const [open, setOpen] = useState(false);

   const handleOpen = () => setOpen(!open);
   return(
      <Fragment>
         {/* -- MOBILE MOTION DIV -- */}
         <motion.div
         initial={{x: data.position ,opacity:0}}
         whileInView={{ x: 0, opacity: 1}}
         transition={{ duration: 1 }}
         onClick={handleOpen} className="group cursor-pointer hover:bg-[#33DDB3] duration-300 ease-in flex flex-col justify-center items-center md:hidden md:h-1/2 transition p-2 h-1/4 w-full bg-white rounded-2xl"
         >
            <Typography variant="h5" className="group-hover:text-white text-base font-goodbrush text-[#33DDB3] self-center text-center">
            {data.lang ? (data.title):(data.italianTitle)}
            </Typography>
            <div className="flex flex-col justify-center items-center md:hidden">
               <Typography className="flex justify-center items-center grow font-firacode py-2 text-center text-sm md:text-base" variant="paragraph">
                  {data.lang ? (data.engContenuto) : (data.itaContenuto)}
               </Typography>
            </div>
         </motion.div>
         {/* -- MD DEVICES AND LG MOTION DIV -- */}
         <motion.div
         initial={{x: data.position ,opacity:0}}
         whileInView={{ x: 0, opacity: 1}}
         transition={{ duration: 1 }}
         onClick={handleOpen}
         className="cursor-pointer group hover:bg-[#33DDB3] duration-300 ease-in hidden md:flex md:flex-col bg-white md:justify-center md:items-center md:h-1/2 md:w-2/5 lg:w-2/5 md:rounded-2xl md:p-2"
         >
            <Typography variant="h5" className="group-hover:text-white lg:group-hover:text-3xl text-base md:text-lg lg:text-2xl font-goodbrush text-[#33DDB3] self-center text-center">
            {data.lang ? (data.title):(data.italianTitle)}
            </Typography>
            <div className="flex flex-col justify-center items-center">
               <Typography className="group-hover:hidden flex justify-center items-center grow font-firacode text-center text-base md:text-sm" variant="paragraph">
                  {data.lang ? (data.engContenuto) : (data.itaContenuto)}
               </Typography>
               {data.preview && data.children}
               <Button fullWidth className="hidden group-hover:flex group-hover:bg-white shadow-lg hover:shadow-xl group-hover:text-[#33DDB3] transition duration-300 hover:ease-in-out bg-[#33DDB3] font-firacodeBold tracking-wider lg:text-xl">
                  {data.lang ? ("Show More"):("Guarda Di Più")}
               </Button>
            </div>
         </motion.div>
         <Dialog open={open} handler={handleOpen} className="pb-14 rounded-3xl w-11/12 lg:w-screen md:max-w-screen-md lg:max-w-screen-lg max-w-max h-11/12 max-h-full flex flex-col">
            <DialogHeader className="flex flex-row">
               <Typography className="grow font-goodbrush text-center justify-center text-base md:text-lg lg:text-2xl">
                  {data.lang ? (data.title):(data.italianTitle)}
               </Typography>
               <IconButton ripple={false} onClick={handleOpen} className="bg-inherit border-0 active:bg-red-500/30 hover:bg-red-500/30 rounded-full text-black" variant="text">
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="#000000"
                  strokeWidth={1}
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                     />
                  </svg>
               </IconButton>
            </DialogHeader>
            <DialogBody divider className="flex flex-col p-2 overflow-auto">
               <Typography className="font-firacode text-center text-sm">
               {data.lang ? (data.engContenuto) : (data.itaContenuto)}
               </Typography>
               {data.dialogElement === 1 && (<MyLangsStats>{data.children}</MyLangsStats>) || data.dialogElement === 2 && (<MyCodingLangs>{data.children}</MyCodingLangs>) || data.dialogElement === 3 && (<MyCertificates lang={data.lang}/>) || data.dialogElement === 4 && (<MyResume/>)}
            </DialogBody>
         </Dialog>
      </Fragment>
   )
}

export function MyLangsStats(data : any) {
   return (
   <div className="flex-grow w-full flex flex-col md:flex-row md:flex-wrap lg:gap-4 gap-2 justify-center items-center mx-auto">
     <div className="md:w-1/3 h-1/4 md:h-min">
     {data.children}
     </div>
     <img className="md:w-1/2 h-1/4 md:h-min" alt="GitHub Stats" src="https://github-readme-stats.vercel.app/api?username=davideochoaa&hide_border=true&title_color=33DDB3&icon_color=33DDB3&hide=contribs,prs&show_icons=true&theme=default#gh-light-mode-only&include-all-commits=true" />
     <img className="md:w-1/2 h-1/4 md:h-min" alt="Wakatime Stats" src="https://github-readme-stats.vercel.app/api/wakatime?username=davideochoaa&title_color=33DDB3&hide_border=true&custom_title=Spent on Coding" />
     <a href="https://github.com/davideochoaa" className="my-2 md:w-1/3 h-1/4 md:h-min">
        <img alt="David Stats" src="https://github-readme-stats.vercel.app/api/top-langs/?username=davideochoaa&langs_count=5&hide_border=true&title_color=33DDB3&hide_title=true" />
     </a>
   </div>
   )
}

export function MyCodingLangs(data:any) {
return(
   <div className="w-3/4 flex-grow flex justify-center mx-auto">
      {data.children}
   </div>
)
}

export function Certificate(data:any) {
      const [open, setOpen] = useState(false);
   const engTitle : string = data.engTitle;
   const itaTitle : string = data.itaTitle;
   const engContenuto : string = data.engContenuto;
   const itaContenuto : string = data.itaContenuto;
   const lang = data.lang;
   const position : number = data.position;
   const handleOpen = () => setOpen(!open);
   return (
      <Fragment>
         <motion.div
         initial={{ x: position , opacity: 0}}
         whileInView={{ x: 0 , opacity: 1}}
         transition={{ duration: 1 }}
         id="myStats-1" onClick={handleOpen}
         className="transition duration-300 hover:ease-in-out group hover:bg-[#33DDB3] hover:skew-x-3 md:h-1/2 cursor-pointer flex flex-col hover:scale-95 p-4 h-full w-full md:w-1/2 lg:w-1/3 bg-white lg:shadow-md rounded-3xl"
         >
            <Typography variant="h5" className="transition duration-300 hover:ease-in-out group-hover:text-white text-base md:text-lg lg:text-xl font-goodbrush text-[#33DDB3] self-center text-center">
            {lang ? (engTitle):(itaTitle)}
            </Typography>
            <img src={data.imgUrl} alt="certificato"/>
               {data.children}
            <div className="grow flex flex-col justify-center items-center md:hidden">
               <Typography className="flex justify-center items-center grow font-firacode py-2 text-center text-sm md:text-base" variant="paragraph">{lang ? (engContenuto) : (itaContenuto)}</Typography>
               <Button fullWidth className="group-hover:bg-white group-hover:text-[#33DDB3] transition duration-300 hover:ease-in-out hidden md:block bg-[#33DDB3] font-firacodeBold tracking-widest">{lang ? ("Show More"):("Guarda Di Più")}</Button>
            </div>
         </motion.div>
         <Dialog open={open} handler={handleOpen} className="pb-14 rounded-3xl w-11/12 lg:w-screen md:max-w-screen-md lg:max-w-screen-lg max-w-max h-11/12 max-h-full flex flex-col">
            <DialogHeader className="flex flex-row">
               <Typography className="grow font-goodbrush text-center justify-center text-base md:text-lg lg:text-2xl">
                  {data.lang ? (engTitle):(itaTitle)}
               </Typography>
               <IconButton ripple={false} onClick={handleOpen} className="bg-inherit border-0 active:bg-red-500/30 hover:bg-red-500/30 rounded-full text-black" variant="text">
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="#000000"
                  strokeWidth={1}
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                     />
                  </svg>
               </IconButton>
            </DialogHeader>
            <DialogBody divider className="flex flex-col p-2 overflow-auto">
               <img src={data.imgUrl} alt="" className="w-full h-min"/>
               <Typography className="font-firacode text-center text-sm">
               {data.lang ? (data.engContenuto) : (data.itaContenuto)}
               </Typography>
            </DialogBody>
         </Dialog>
      </Fragment>
   )
}

export function MyCertificates(data:any) {
   /* const [open, setOpen] = useState(false); */
   /* const handleOpen = () => setOpen(!open); */
   return(
      <div className="w-full flex flex-row gap-4 flex-wrap justify-center items-center">
         <Certificate engTitle={"Junior Full-Stack Web Developer | by Kromin & SeeWeb"} itaTitle={"Junior Full-Stack Web Developer | Rilasciato da Kromin & SeeWeb"} engContenuto={"Certificate of participation in Kromin Academy in collaboration with SeeWeb. Intensive training course covering the fundamentals of Front End and Back End Development. I was able to develop fully functional web applications both independently and in a team, using the latest technologies available and most in-demand in the job market."} itaContenuto={"Attestato di partecipazione alla Kromin Academy in collaborazione con SeeWeb. Corso di formazione intensivo riguardante i fondamenti dello Sviluppo Front End e Back End. Ho potuto sviluppare applicativi web completamente funzionanti sia in autonomia che in team, utilizzando le ultime tecnologie a disposizione e più richieste dal mercato del lavoro."} lang={data.lang} imgUrl={"../assets/img/certificati/1.png"}/>
         <Certificate engTitle={"Upper-Intermediate English: Business and Industry | Universitat Politècnica de València"} itaTitle={"Upper-Intermediate English: Business and Industry | Universitat Politècnica de València"} engContenuto={`This course was designed for students with an intermediate level of English looking to reach a higher intermediate level.The course covers interesting topics such a successful businesses, risk management, industrial design and radio broadcasting. This course also includes preparatory materials and recommendations to take the Cambridge University First Certificate in English Examination (FCE).`} itaContenuto={`Questo corso è stato progettato per studenti con un livello intermedio di inglese che cercano di raggiungere un livello intermedio superiore. Il corso copre argomenti interessanti come le imprese di successo, la gestione del rischio, il design industriale e la radiodiffusione. Questo corso include anche materiali preparatori e raccomandazioni per sostenere l'esame di Cambridge University First Certificate in English (FCE).`} lang={data.lang} imgUrl={"../assets/img/certificati/2.png"}/>
         <Certificate lang={data.lang} imgUrl={"../assets/img/certificati/javascriptfcc.jpeg"} itaTitle={"JavaScript Algorithms and Data Structures | Rilasciato da FreeCodeCamp.org"} engTitle={"JavaScript Algorithms and Data Structures"}/>
         <Certificate lang={data.lang} imgUrl={"../assets/img/certificati/responsivefcc.jpeg"} engTitle={"Responsive Web Design"} itaTitle={"Responsive Web Design | Rilasciato da FreeCodeCamp.org"}/>
      </div>
/*       <Fragment>
         <motion.div
         initial={{ x: -750 }}
         animate={{ x: -500 }}
         whileInView={{ x: 0}}
         transition={{ duration: 1 }}
         onClick={handleOpen} id="myStats-2"
         className="cursor-pointer p-4 h-1/4 w-full md:h-1/2 md:w-1/3 lg:w-1/3 bg-white shadow-md rounded-3xl md:flex md:flex-col transition hover:scale-95 hover:-skew-x-3 justify-start">
         <Typography Typography variant="h5" className="text-md md:text-lg lg:text-xl font-goodbrush text-[#33DDB3] self-center text-center md:justify-self-start">
            {data.lang ? ("My Certifications👨‍🎓") : ("Le mie Certificazioni👨‍🎓")}
         </Typography>
         <div className="grow flex flex-col justify-center items-center">
            <Typography className="flex justify-center items-center grow font-firacode py-2 text-center text-sm md:text-base" variant="paragraph">{data.lang ? ("All my certificates, qualifications and diplomas") : ("Tutte le mie Certificazioni, Attestati e Diplomi.")}</Typography>
            <Button fullWidth className="hidden md:block bg-[#33DDB3] font-firacodeBold tracking-widest">{data.lang ? ("Show More"):("Guarda Di Più")}</Button>
         </div>
         </motion.div>
      </Fragment> */
   )
}


export function MyResume(data: any) {
   return (
      <Card lang={data.lang} engTitle={"English Title"} itaTitle={"Italian Title"} position={100}
      engContenuto = {"This is an example box"}
      itaContenuto = {"Questo è un box d'esempio!"}
      >
      </Card>
   )
}

export default {MyCard, MyLangsStats , MyCodingLangs, MyCertificates, MyResume}

/*             
            {[1, 2, 3, 4, 5].map((image) => (
               <Image id={image} key={image}/>
            ))}
            <motion.div className="progress" style={{ scaleX }} />
*/