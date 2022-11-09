
import { Typography } from "@material-tailwind/react";
import { Link } from "@remix-run/react";
import { useEffect, useState } from "react";
import { InView, useInView } from "react-intersection-observer";

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
      <section className="bg-gray-500 h-screen relative">
        <InView as="div" id="home" className="absolute top-0 h-2 w-full" onChange={homeSetInView} />
      </section>
      <section className="bg-gray-600 h-screen relative">
        <InView as="div" id="about" className="absolute top-0.5 h-2 w-full" onChange={setInView} />
      </section>
      <section className="bg-gray-700 h-screen relative">
        <InView as="div" id="works" className="absolute top-0.5 h-2 w-full" onChange={worksSetInView} />
      </section>
      <section className="bg-gray-800 h-screen relative">
        <InView as="div" id="contacts" className="absolute top-0.5 h-2 w-full" onChange={contactsSetInView} />
      </section>
    </main>
  );
}
