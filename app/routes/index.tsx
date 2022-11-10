
import { Typography } from "@material-tailwind/react";
import { Link } from "@remix-run/react";
import { useEffect, useState } from "react";
import { InView, useInView } from "react-intersection-observer";
import AboutSection from "~/components/aboutsection";
import ContactsSection from "~/components/contactssection";
import HomeSection from "~/components/homesection";
import WorksSection from "~/components/workssection";

import { useOptionalUser } from "~/utils";
import MyNavBar from "./navbar";

export default function Index() {
  const user = useOptionalUser();
  const [inView, setInView] = useState(false);
  const [worksInView, worksSetInView] = useState(false);
  const [contactsInView, contactsSetInView] = useState(false);
  const [homeInView, homeSetInView] = useState(false);
  const [ ref1, inView1, entry1 ] = useInView({
    /* Optional options */
    threshold: 0.5,
  });
  

  const isView = () => {
    console.log(inView1);
  }
  return (
    <main className="scroll-smooth">
      <MyNavBar isView={inView} worksIsView={worksInView} contactsIsView={contactsInView} homeIsView={homeInView}/>
      <HomeSection homeSetInView={homeSetInView} />
      <AboutSection setInView={setInView} />
      <WorksSection worksSetInView={worksSetInView} />
      <ContactsSection contactsSetInView={contactsSetInView} />
    </main>
  );
}
