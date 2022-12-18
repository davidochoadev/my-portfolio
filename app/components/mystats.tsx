import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Progress, Typography } from "@material-tailwind/react";
import { Fragment, useState } from "react";
import {
  motion,
} from "framer-motion";



export function Card(data : any) {
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
         className="transition duration-300 hover:ease-in-out group hover:bg-[#33DDB3] hover:skew-x-3 md:h-1/2 cursor-pointer flex flex-col transition hover:scale-95 p-4 h-1/4 w-full md:w-1/2 lg:w-1/3 bg-white lg:shadow-md rounded-3xl"
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

export function MyLangsStats(data : any) {
   const [open, setOpen] = useState(false);
   const products : any = data.products
 
   const handleOpen = () => setOpen(!open);
   return (
      <Fragment>
         <motion.div
         initial={{ x: -100 , opacity: 0}}
         whileInView={{ x: 0, opacity: 1}}
         transition={{ duration: 1 }}
         id="myStats-1" onClick={handleOpen} className="hover:skew-x-3 md:h-1/2 cursor-pointer transition hover:scale-95 p-4 h-1/4 w-full md:w-1/2 lg:w-1/3 bg-white lg:shadow-md rounded-3xl"
         >
            <Typography variant="h5" className="text-base md:text-lg lg:text-xl font-goodbrush text-[#33DDB3] self-center text-center">
            {data.lang ? ("Most Used Languages on GitHub🧑🏻‍💻"):("Linguaggi Più Usati Su GitHub🧑🏻‍💻")}
            </Typography>
            <div id="container-stats-1" className="hidden md:block">
               {products.map((product : any) => (
               <div key={product.id} className="mx-4 my-2 md:my-1">
                  <Typography variant="h6" className="font-firacodeBold text-blue-gray-600 ">{product.id}</Typography>
                  {/* @ts-ignore */}
                  <Progress value={product.value} color={product.id === "TypeScript" && "blue" || product.id === "JavaScript" && "yellow" || product.id === "HTML" && "orange" || product.id === "CSS" && "light-blue" || product.id === "Others" && "purple"} 
                  className=""/>
               </div>))}
            </div>
            <div id="container-desc-stats-1" className="md:hidden">
               <Typography className="font-firacode py-2 text-center text-sm md:text-base" variant="paragraph">{data.lang ? ("Check my github stats about the coding languages that i use.") : ("Controlla le mie statistiche di GitHub riguardo i linguaggio di programmazione che utlizzo!")}</Typography>
               <Button fullWidth className="hidden md:block bg-[#33DDB3] font-firacodeBold tracking-widest">{data.lang ? ("Show More"):("Guarda Di Più")}</Button>
            </div>
         </motion.div>
         <Dialog open={open} handler={handleOpen} id="popup-1" className="rounded-3xl w-11/12 max-w-max h-5/6 max-h-full flex flex-col">
            <DialogHeader className="font-goodbrush text-center justify-center">
               {data.lang ? ("Most Used Languages on GitHub🧑🏻‍💻"):("Linguaggi Più Usati Su GitHub🧑🏻‍💻")}
            </DialogHeader>
            <DialogBody divider className="flex flex-col">
               <Typography className="font-firacode text-center">
               {data.lang ? ("These are the coding languages ​​that i've been using on GitHub.") : ("Questi sono i linguaggio di programmazione che ho utilizzato di più su GitHub.")}
               </Typography>
               <div className="flex-grow">
                  {products.map((product : any) => (
                  <div key={product.id} className="mx-4 my-2 md:my-4 lg:my-2">
                     <Typography variant="h6" className="font-firacodeBold text-blue-gray-600">{product.id}</Typography>
                     {/* @ts-ignore */}
                     <Progress value={product.value} color={product.id === "TypeScript" && "blue" || product.id === "JavaScript" && "yellow" || product.id === "HTML" && "orange" || product.id === "CSS" && "light-blue" || product.id === "Others" && "purple"} 
                     className=""/>
                  </div>))}
               </div>
            </DialogBody>
            <DialogFooter>
               <Button fullWidth className="bg-[#33DDB3] font-firacodeBold tracking-widest hover:bg-red-500" onClick={handleOpen}>
               {data.lang ? ("Show Less"):("Chiudi")}
               </Button>
            </DialogFooter>
         </Dialog>
      </Fragment>
   )
}

export function MyCodingLangs(data:any) {
   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(!open);
   const itemsList = (
      <div id="TechContainerPic" className="flex flex-row flex-wrap gap-2 md:gap-2 items-center md:my-4 lg:my-0 justify-center md:flex-grow">
         <img src="https://user-images.githubusercontent.com/1500684/157764276-a516a239-e377-4a20-b44a-0ac7b65c8c14.svg" alt="TailwindCSS" 
         className="h-16 w-32 opacity-80 grayscale transition hover:scale-110 hover:opacity-100 hover:grayscale-0"></img>
         <img src="https://user-images.githubusercontent.com/1500684/157764397-ccd8ea10-b8aa-4772-a99b-35de937319e1.svg" alt="Fly.io" className="h-12 w-24 opacity-80 grayscale transition hover:scale-110 hover:opacity-100 hover:grayscale-0"></img>
         <img src="https://user-images.githubusercontent.com/1500684/157764484-ad64a21a-d7fb-47e3-8669-ec046da20c1f.svg" alt="Prisma ORM" className="h-10 w-20 opacity-80 grayscale transition hover:scale-110 hover:opacity-100 hover:grayscale-0"></img>
         <img src="https://user-images.githubusercontent.com/1500684/157773063-20a0ed64-b9f8-4e0b-9d1e-0b65a3d4a6db.svg" alt="TypeScript" className="h-14 w-14  opacity-60 grayscale transition hover:scale-110 hover:opacity-100 hover:grayscale-0"></img>
         <img src="https://seeklogo.com/images/R/remix-logo-862D8B1019-seeklogo.com.png" alt="Remix.run" className="h-14 w-14  opacity-60 grayscale transition hover:scale-110 hover:opacity-100 hover:grayscale-0"></img>
         <img src="https://seeklogo.com/images/J/javascript-js-logo-2949701702-seeklogo.com.png" alt="JavaScript" className="h-14 w-14  opacity-60 grayscale transition hover:scale-110 hover:opacity-100 hover:grayscale-0"></img>
         <img src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" alt="NodeJS" className="h-14 w-13  opacity-60 grayscale transition hover:scale-110 hover:opacity-100 hover:grayscale-0"></img>
         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="ReactJS" className="h-14 w-16  opacity-60 grayscale transition hover:scale-110 hover:opacity-100 hover:grayscale-0"></img>
         <img src="https://seeklogo.com/images/S/sqlite-logo-5E9F462E6A-seeklogo.com.png" alt="SQLite" className="h-11 w-24  opacity-100 grayscale transition hover:scale-110 hover:opacity-100 hover:grayscale-0"></img>
         <img src="https://seeklogo.com/images/P/postgresql-logo-6DBC096ED4-seeklogo.com.png" alt="PostgreSQL" className="h-8 w-32  opacity-100 grayscale transition hover:scale-110 hover:opacity-100 hover:grayscale-0"></img>
         <img src="https://seeklogo.com/images/D/docker-inc-logo-4A9A703EFB-seeklogo.com.png" alt="Docker" className="h-8 w-32  opacity-100 grayscale transition hover:scale-110 hover:opacity-100 hover:grayscale-0"></img>
      </div>
   )
return(
   <Fragment>
      <motion.div
      initial={{ x: 100 }}
      whileInView={{ x:0 }}
      transition={{ duration: 1}}
      onClick={handleOpen} id="myStats-2" className="cursor-pointer p-4 h-1/4 w-full md:w-1/2 md:h-1/2 lg:w-1/3 bg-white shadow-md rounded-3xl md:flex md:flex-col transition hover:scale-95 hover:-skew-x-3">
         <Typography Typography variant="h5" className="text-md md:text-lg lg:text-xl font-goodbrush text-[#33DDB3] self-center text-center md:justify-self-start">
            {data.lang ? ("Tools That I Use⚛️") : ("Strumenti Che Utilizzo⚛️")}
         </Typography>
         <div className="hidden md:block flex-grow lg:flex lg:flex-col lg:justify-center lg:items-center">
            {itemsList}
         </div>
         <div id="Desc-tech-container" className="md:hidden">
            <Typography className="font-firacode py-2 text-center text-sm md:text-base" variant="paragraph">{data.lang ? ("Check my Favorite Frameworks, Coding Languages, Softwares and more stuff.") : ("I miei Frameworks Preferiti, Software, Linguaggi di Programmazione ed altro ancora.")}</Typography>
            <Button fullWidth className="hidden md:block bg-[#33DDB3] font-firacodeBold tracking-widest">{data.lang ? ("Show More"):("Guarda Di Più")}</Button>
         </div>
      </motion.div>
      <Dialog open={open} handler={handleOpen} id="popup-1" className="rounded-3xl w-11/12 max-w-max h-5/6 max-h-full flex flex-col">
            <DialogHeader className="font-goodbrush text-center justify-center">
               {data.lang ? ("Tools That I Use⚛️"):("Strumenti Che Utilizzo⚛️")}
            </DialogHeader>
            <DialogBody divider className="flex flex-col">
               <Typography className="font-firacode text-center">
               {data.lang ? ("These are the coding languages ​​that i've been using on GitHub.") : ("Questi sono i linguaggio di programmazione che ho utilizzato di più su GitHub.")}
               </Typography>
               <div className="flex-grow lg:w-4/6 lg:items-center lg:flex lg:mx-auto">
                  {itemsList}
               </div>
            </DialogBody>
            <DialogFooter>
               <Button fullWidth className="bg-[#33DDB3] font-firacodeBold tracking-widest hover:bg-red-500" onClick={handleOpen}>
               {data.lang ? ("Show Less"):("Chiudi")}
               </Button>
            </DialogFooter>
         </Dialog>
   </Fragment>
)
}

export function MyCertificates(data:any) {
   /* const [open, setOpen] = useState(false); */
   /* const handleOpen = () => setOpen(!open); */
   return(
      <Card lang={data.lang} engTitle={"My Certifications👨‍🎓"} itaTitle={"Le mie Certificazioni👨‍🎓"} position={-100}
      engContenuto = {"All my certifications, qualifications and diplomas"}
      itaContenuto = {"Tutte le mie Certificazioni, Attestati e Diplomi."}
      >
         <div className="hidden grow md:flex flex-col justify-center items-center">
            <Typography className="flex justify-center items-center grow font-firacode py-2 text-center text-sm md:text-base" variant="paragraph">{data.lang ? ("All my certificates, qualifications and diplomas") : ("Tutte le mie Certificazioni, Attestati e Diplomi.")}</Typography>
            <Button fullWidth className="group-hover:bg-white group-hover:text-[#33DDB3] transition duration-300 hover:ease-in-out hidden bg-[#33DDB3] font-firacodeBold tracking-widest">{data.lang ? ("Show More"):("Guarda Di Più")}</Button>
         </div>
      </Card>
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

export function MyPresentation(data: any) {
   return (
      <Card lang={data.lang} engTitle={"English Title"} itaTitle={"Italian Title"} position={100}
      engContenuto = {"This is an example box"}
      itaContenuto = {"Questo è un box d'esempio!"}
      >
      </Card>
   )
}

export default {MyLangsStats , MyCodingLangs, MyCertificates, MyPresentation}

/*             
            {[1, 2, 3, 4, 5].map((image) => (
               <Image id={image} key={image}/>
            ))}
            <motion.div className="progress" style={{ scaleX }} />
*/