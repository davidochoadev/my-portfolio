import { useEffect, useState } from "react";
import AboutSection from "~/components/aboutsection";
import ContactsSection from "~/components/contactssection";
import HomeSection from "~/components/homesection";
import WorksSection from "~/components/workssection";
import MyNavBar from "./navbar";
import { getRepos } from "~/models/repos.server";
import { useLoaderData } from "@remix-run/react";

export default function Index() {
/*   const user = useOptionalUser(); */
  const [inView, setInView] = useState(false);
  const [worksInView, worksSetInView] = useState(false);
  const [contactsInView, contactsSetInView] = useState(false);
  const [homeInView, homeSetInView] = useState(false);
  const repoNames = useLoaderData();
  const arrayRepos : any[] = [];
  const objs = [{typescript: 1,html: 3},{javascript: 2}]

  for(var i=0; i<objs.length; i++){
    console.log("ao",i,[Object.keys(objs[i])]);
  }
  
  return (
    <main className="snap-y snap-mandatory h-screen overflow-scroll">
      <MyNavBar isView={inView} worksIsView={worksInView} contactsIsView={contactsInView} homeIsView={homeInView}/>
      <HomeSection homeSetInView={homeSetInView} />
      <AboutSection setInView={setInView} />
      <WorksSection worksSetInView={worksSetInView} />
      <ContactsSection contactsSetInView={contactsSetInView} />
    </main>
  );
}
