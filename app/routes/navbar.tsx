import { Button, IconButton, MobileNav, Navbar, Typography } from "@material-tailwind/react";
import { NavLink } from "@remix-run/react";
import { useEffect, useState } from "react";

export default function MyNavBar(data: any) {
  const [openNav, setOpenNav] = useState(false);
  const lang = data.lang;
  const homeIsView = data.homeIsView
  const aboutIsView = data.isView;
  const worksIsView = data.worksIsView;
  const contactsIsView = data.contactsIsView;

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );

  }, []);

  function changeLang() {
    data.setLang(!data.lang)
    data.setTitleBox(!data.titleBox);
  }

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <NavLink
      to="#about"
      >
        <Typography
          as="li"
          variant="small"
          color="white"
          className={aboutIsView ? "p-1 font-mono tracking-wider text-gray-200" : "transition delay-150 hover:text-gray-200 p-1 font-mono tracking-wider text-blue-gray-300"}
        >
          {lang ? ("About"):("Chi sono?")}
        </Typography>
      </NavLink>
      <NavLink
      to="#works"
      >
        <Typography
          as="li"
          variant="small"
          color="white"
          className={worksIsView ? "p-1 font-mono tracking-wider text-gray-200" : "transition delay-150 hover:text-gray-200 p-1 font-mono tracking-wider text-blue-gray-300"}
        >
          {lang ? ("Works"):("Lavori")}
        </Typography>
      </NavLink>
      <NavLink
      to="#contacts"
      >
        <Typography
          as="li"
          variant="small"
          color="white"
          className={contactsIsView ? "p-1 font-mono tracking-wider text-gray-200" : "transition delay-150 hover:text-gray-200 p-1 font-mono tracking-wider text-blue-gray-300"}
        >
          {lang ? ("Contacts"):("Contatti")}
        </Typography>
      </NavLink>
    </ul>
  );
 
  return (
    <Navbar className="fixed top-0 left-0 right-0 z-10 mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 bg-blue-gray-900 border-0" shadow={false} blurred={false} >
      <div className="container mx-auto flex items-center">
        <Typography
          as="a"
          href="#home"
          variant="h5"
          className={homeIsView ? "mr-4 cursor-pointer py-1.5 grow text-gray-200 font-mono tracking-wide":"font-mono tracking-wide text-blue-gray-300 mr-4 cursor-pointer py-1.5 grow transition delay-150 hover:text-gray-200"}
        >
          David Ochoa
        </Typography>
        <div className="hidden lg:block">
          {navList}
        </div>
        <div className="flex gap-2 mx-4">
          <a href="https://www.linkedin.com/in/j-david-ochoa-arroba-7060091ab" target="_blank" className="group" rel="noreferrer">
            <IconButton variant="outlined" size="md" className="hidden lg:inline-block" color="blue-gray">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" className="group-hover:fill-blue-400"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </IconButton>
          </a>
          <a href="https://github.com/davideochoaa" target="_blank" className="group" rel="noreferrer">
            <IconButton variant="outlined" size="md" className="hidden lg:inline-block" color="blue-gray">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" className="group-hover:fill-blue-gray-300"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"/></svg>
            </IconButton>
          </a>
          <button onClick={changeLang}>
          {lang ? 
            (<img src="../assets/img/buttonItaly.png" alt="Italy" title="Change to Italian" className="w-10 h-min"/>)
            : (<img src="../assets/img/buttonEnglish.png" alt="English" title="Change to English" className="w-10 h-min"/>)
          }
          </button>
        </div>

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        {navList}
        <Button variant="gradient" size="sm" fullWidth className="mb-2">
          <span>Buy Now</span>
        </Button>
      </MobileNav>
    </Navbar>
  );
}