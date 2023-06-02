import { useState } from "react";
import AboutSection from "~/components/aboutsection";
import ContactsSection from "~/components/contactssection";
import HomeSection from "~/components/homesection";
import WorksSection from "~/components/workssection";
import MyNavBar from "./navbar";
import { Theme, useTheme } from "../utils/theme-provider";
import type { LoaderArgs} from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, useMatches } from "@remix-run/react";

export const loader = async ({ request }: LoaderArgs) => {
  return json(
    [
    { id: "TypeScript", value: 45.45 },
    { id: "JavaScript", value: 18.18 },
    { id: "HTML" , value: 9.09 },
    { id: "CSS" , value: 18.18 },
    { id: "Others", value: 9.09 },
  ]
  );
};

export default function Index() {
/*   const user = useOptionalUser(); */
  const [lang, setLang] = useState(true);
  const [titleBox, setTitleBox] = useState(true);
  const [inView, setInView] = useState(false);
  const [worksInView, worksSetInView] = useState(false);
  const [contactsInView, contactsSetInView] = useState(false);
  const [homeInView, homeSetInView] = useState(false);
  const [theme, setTheme] = useTheme();
  const products = useLoaderData<typeof loader>();
  const works = useMatches()[0].data.works;
  
  const toggleTheme = () => {
    setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };
/*   const objs = [{typescript: 1,html: 3},{javascript: 2}]

  for(var i=0; i<objs.length; i++){
    console.log("ao",i,[Object.keys(objs[i])]);
  } */
  
  return (
    <main className="snap-y snap-mandatory h-screen lg:overflow-scroll lg:scroll-pt-10">
      <MyNavBar theme={theme} toggleTheme={toggleTheme} titleBox={titleBox} setTitleBox={setTitleBox} lang={lang} setLang={setLang} isView={inView} worksIsView={worksInView} contactsIsView={contactsInView} homeIsView={homeInView}/>
      <HomeSection titleBox={titleBox} lang={lang} homeSetInView={homeSetInView} />
      <AboutSection lang={lang} products={products} setInView={setInView} />
      <WorksSection worksSetInView={worksSetInView} works={works}/>
      <ContactsSection contactsSetInView={contactsSetInView} />
    </main>
  );
}
