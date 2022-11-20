import { useLoaderData } from "@remix-run/react";
import { link } from "fs";
import { useState } from "react";
import AboutSection from "~/components/aboutsection";
import ContactsSection from "~/components/contactssection";
import HomeSection from "~/components/homesection";
import WorksSection from "~/components/workssection";
import { getLangs, getLinkLanguages } from "~/models/gits.server";

import MyNavBar from "./navbar";

export async function loader() {
  const gits = await getLinkLanguages();
  const array = [];
  for (var i = 0; i < gits.length; i++) {
    array.push(await getLangs(gits[i]));
  }
  const langs = await getLangs(gits[0]);
  console.log("loader...");
  return { gits, array, langs };
}

export default function Index() {
  const [inView, setInView] = useState(false);
  const [worksInView, worksSetInView] = useState(false);
  const [contactsInView, contactsSetInView] = useState(false);
  const [homeInView, homeSetInView] = useState(false);

  const gits = useLoaderData();
  const array = gits.array;
  const javascriptArray : number[] = [];
  const typescriptArray : number[] = [];
  const htmlArray : number[] = [];
  const cssArray : number[] = [];
  const dockerArray : number[] = [];
  const shellArray : number[] = [];
  let total = 0;

  array.map((langs: any) => {
    const obj : any = langs.data;

    for(var i=0; i < Object.keys(obj).length; i++){
      total += obj[Object.keys(obj)[i]]
      switch(Object.keys(obj)[i]){
        case ("TypeScript") : 
          typescriptArray.push(obj[Object.keys(obj)[i]]);
          break;
        case ("JavaScript") :
          javascriptArray.push(obj[Object.keys(obj)[i]]);
          break;
        case ("HTML") :
          htmlArray.push(obj[Object.keys(obj)[i]]);
          break;
        case ("CSS") :
          cssArray.push(obj[Object.keys(obj)[i]]);
          break;
        case ("Dockerfile") :
          dockerArray.push(obj[Object.keys(obj)[i]]);
          break;
        case ("Shell") : 
          shellArray.push(obj[Object.keys(obj)[i]]);
          break;
      }
      
    }
  })

  function percentage(partialValue: any, totalValue: any) {
    let value = partialValue.reduce((pv : any, cv : any) => pv + cv, 0);
    return (100 * value) / totalValue;
  }

const shell = percentage(shellArray, total);
const docker = percentage(dockerArray, total);
const css = percentage(cssArray, total);
const html = percentage(htmlArray, total);
const javascript = percentage(javascriptArray, total);
const typescript = percentage(typescriptArray, total);
  
  return (
    <main className="scroll-smooth">
      <MyNavBar
        isView={inView}
        worksIsView={worksInView}
        contactsIsView={contactsInView}
        homeIsView={homeInView}
      />
      <HomeSection homeSetInView={homeSetInView} />
      <AboutSection setInView={setInView} />
      <WorksSection worksSetInView={worksSetInView} />
      <ContactsSection contactsSetInView={contactsSetInView} />
    </main>
  );
}
