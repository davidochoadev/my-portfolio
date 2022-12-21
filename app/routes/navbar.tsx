import { IconButton, MobileNav, Navbar, Tooltip, Typography } from "@material-tailwind/react";
import { NavLink } from "@remix-run/react";
import { useEffect, useState } from "react";
import { Theme } from "../utils/theme-provider";


export default function MyNavBar(data: any) {
  const [openNav, setOpenNav] = useState(false);
  const lang = data.lang;
  const homeIsView = data.homeIsView
  const aboutIsView = data.isView;
  const worksIsView = data.worksIsView;
  const contactsIsView = data.contactsIsView;
  const toggleTheme=data.toggleTheme;

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
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <NavLink
      to="#about"
      >
        <Typography
          as="li"
          variant="small"
          color="white"
          className={aboutIsView ? "p-1 font-firacodeMedium tracking-wider text-[#33DDB3]" : "transition delay-150 hover:text-[#33DDB3] p-1 font-firacodeMedium tracking-wider text-blue-gray-300"}
        >
          {lang ? ("About Me"):("Su di me")}
        </Typography>
      </NavLink>
      <NavLink
      to="#works"
      >
        <Typography
          as="li"
          variant="small"
          color="white"
          className={worksIsView ? "p-1 font-firacodeMedium tracking-wider text-[#33DDB3]" : "transition delay-150 hover:text-[#33DDB3] p-1 font-firacodeMedium tracking-wider text-blue-gray-300"}
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
          className={contactsIsView ? "p-1 font-firacodeMedium tracking-wider text-[#33DDB3]" : "transition delay-150 hover:text-[#33DDB3] p-1 font-firacodeMedium tracking-wider text-blue-gray-300"}
        >
          {lang ? ("Contacts"):("Contatti")}
        </Typography>
      </NavLink>
    </ul>
  );
 
  return (
    <Navbar className="fixed top-0 left-0 right-0 z-10 mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 dark:bg-[#10172a] border-0" shadow={true} blurred={false} >
      <div className="container mx-auto flex items-center">
        <NavLink to="#home" className="mr-4 cursor-pointer py-1.5 grow tracking-wide flex items-center">
          <Typography
            variant="h5"
            className={homeIsView ? "text-[#33DDB3] font-goodbrush":"font-goodbrush dark:text-white text-blue-gray-300 transition delay-150 hover:text-[#33DDB3]"}
          >
            {`davidochoa`}
          </Typography>
          <Typography variant="h5" className={homeIsView ? "font-firacodeBold dark:text-white text-blue-gray-300" : "font-firacodeBold text-[#33DDB3]"}>
            {`.<dev>`}
          </Typography>
        </NavLink>
        <div className="hidden lg:block">
          {navList}
        </div>
        <div className="flex gap-2 mx-4">
          <a href="https://www.linkedin.com/in/j-david-ochoa-arroba-7060091ab" target="_blank" className="group" rel="noreferrer">
            <IconButton title="Visit My Linkedin Profile" className="hidden lg:inline-block border-blue-gray-300 hover:border-blue-400 bg-inherit border">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#90a4ae" className="group-hover:fill-blue-400"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </IconButton>
          </a>
          <a href="https://github.com/davideochoaa" target="_blank" className="group" rel="noreferrer">
            <IconButton title="Visit My Github Profile" className="hidden lg:inline-block border-blue-gray-300 hover:border-[#33DDB3] bg-inherit border">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#90a4ae" className="group-hover:fill-[#33DDB3]"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"/></svg>
            </IconButton>
          </a>
          <Tooltip 
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: -25 },
          }}
          content={data.theme === Theme.DARK ? ("Light Mode") : ("Dark Mode")} placement="bottom">
            <IconButton onClick={toggleTheme} title="Set Theme Mode" ripple={false} className="hidden group md:flex rounded-full bg-inherit border border-blue-gray-300 hover:border-[#33DDB3]">
              {data.theme === Theme.DARK ? (
              <svg className="w-full group-hover:fill-[#33DDB3]" viewBox="0 0 32 32" fill="#90a4ae" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.228 7.9439C10.5176 8.82869 7.75757 12.1054 7.75757 15.9987C7.75757 20.5716 11.5618 24.2919 16.2367 24.2919C19.2323 24.2919 21.9337 22.7699 23.4514 20.3585C23.2779 20.3676 23.1033 20.3722 22.9287 20.3722C17.7826 20.3722 13.5951 16.2772 13.5951 11.2435C13.5951 10.1032 13.8108 8.98914 14.228 7.9439M16.2367 26.4993C10.3171 26.4993 5.50037 21.7899 5.50037 15.9987C5.50037 10.2109 10.3171 5.49927 16.2367 5.49927C16.6598 5.49927 17.0501 5.72963 17.2435 6.09753C17.438 6.46428 17.4087 6.90668 17.1638 7.24363C16.3059 8.42297 15.8535 9.80631 15.8535 11.2435C15.8535 15.06 19.0272 18.1637 22.9287 18.1637C23.6483 18.1637 24.3573 18.0582 25.0359 17.8531C25.4378 17.7293 25.8785 17.8359 26.1738 18.1304C26.4715 18.425 26.5758 18.8559 26.4446 19.2467C25.0019 23.5847 20.9 26.4993 16.2367 26.4993"></path></svg>
              ) : (
              <svg className="w-full group-hover:fill-[#33DDB3]" viewBox="0 0 32 32" fill="#90a4ae" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.0003 21.4194C13.0123 21.4194 10.5813 18.9874 10.5813 15.9994C10.5813 13.0114 13.0123 10.5804 16.0003 10.5804C18.9883 10.5804 21.4193 13.0114 21.4193 15.9994C21.4193 18.9874 18.9883 21.4194 16.0003 21.4194M16.0003 8.64136C11.9423 8.64136 8.64233 11.9414 8.64233 15.9994C8.64233 20.0574 11.9423 23.3574 16.0003 23.3574C20.0573 23.3574 23.3583 20.0574 23.3583 15.9994C23.3583 11.9414 20.0573 8.64136 16.0003 8.64136"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16.0004 7.08447C16.5364 7.08447 16.9704 6.64946 16.9704 6.11446V3.34546C16.9704 2.81046 16.5364 2.37646 16.0004 2.37646C15.4644 2.37646 15.0304 2.81046 15.0304 3.34546V6.11446C15.0304 6.64946 15.4644 7.08447 16.0004 7.08447"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.11559 15.0298H3.34559C2.81059 15.0298 2.37659 15.4648 2.37659 15.9998C2.37659 16.5348 2.81059 16.9688 3.34559 16.9688H6.11559C6.65159 16.9688 7.08459 16.5348 7.08459 15.9998C7.08459 15.4648 6.65159 15.0298 6.11559 15.0298"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16.0004 24.9146C15.4644 24.9146 15.0304 25.3496 15.0304 25.8846V28.6536C15.0304 29.1886 15.4644 29.6236 16.0004 29.6236C16.5364 29.6236 16.9704 29.1886 16.9704 28.6536V25.8846C16.9704 25.3496 16.5364 24.9146 16.0004 24.9146"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M28.6542 15.0298H25.8842C25.3492 15.0298 24.9152 15.4648 24.9152 15.9998C24.9152 16.5348 25.3492 16.9688 25.8842 16.9688H28.6542C29.1902 16.9688 29.6242 16.5348 29.6242 15.9998C29.6242 15.4648 29.1902 15.0298 28.6542 15.0298"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M22.9896 9.97995C23.2376 9.97995 23.4856 9.88495 23.6756 9.69595L24.7036 8.66795C25.0816 8.28995 25.0816 7.67495 24.7036 7.29595C24.3246 6.91795 23.7106 6.91795 23.3316 7.29595L22.3036 8.32495C21.9256 8.70295 21.9256 9.31695 22.3036 9.69595C22.4926 9.88495 22.7416 9.97995 22.9896 9.97995"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8.32507 9.69593C8.51407 9.88493 8.76207 9.97993 9.01107 9.97993C9.25907 9.97993 9.50707 9.88493 9.69607 9.69593C10.0751 9.31693 10.0751 8.70293 9.69607 8.32493L8.66807 7.29693C8.28907 6.91893 7.67507 6.91893 7.29707 7.29693C6.91807 7.67493 6.91807 8.28993 7.29707 8.66793L8.32507 9.69593Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8.32507 22.3043L7.29707 23.3313C6.91807 23.7093 6.91807 24.3243 7.29707 24.7023C7.48607 24.8923 7.73407 24.9873 7.98207 24.9873C8.23007 24.9873 8.47807 24.8923 8.66807 24.7023L9.69607 23.6753C10.0751 23.2973 10.0751 22.6833 9.69607 22.3043C9.31807 21.9253 8.70307 21.9253 8.32507 22.3043"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M23.6752 22.3043C23.2962 21.9253 22.6822 21.9253 22.3032 22.3043C21.9252 22.6833 21.9252 23.2973 22.3042 23.6753L23.3322 24.7023C23.5212 24.8923 23.7692 24.9873 24.0182 24.9873C24.2662 24.9873 24.5142 24.8923 24.7032 24.7023C25.0822 24.3243 25.0822 23.7093 24.7032 23.3313L23.6752 22.3043Z"></path></svg>
              )}
            </IconButton>
          </Tooltip>
          <Tooltip 
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: -25 },
          }}
          content={lang ? ("Change to Italian") : ("Cambia in Inglese")} placement="bottom">
            <button onClick={changeLang} className="hidden md:flex">
            {lang ? 
              (<img src="../assets/img/buttonItaly.png" alt="Italy" className="w-10 h-min"/>)
              : (<img src="../assets/img/buttonEnglish.png" alt="English" className="w-10 h-min"/>)
            }
            </button>
          </Tooltip>
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
              fill="#90a4ae"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="#90a4ae"
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
              fill="#90a4ae"
              stroke="#90a4ae"
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
        <div className="flex flex-row items-center gap-2 mb-2">
          <Tooltip content={data.theme === Theme.DARK ? ("Dark Mode") : ("Light Mode")} placement="bottom">
            <IconButton onClick={toggleTheme} ripple={false} className="group md:hidden lg:hidden rounded-full bg-none bg-inherit border-2 border-blue-gray-300 hover:border-[#33DDB3]">
              {data.theme === Theme.DARK ? (
              <svg className="w-full group-hover:fill-[#33DDB3]" viewBox="0 0 32 32" fill="#90a4ae" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.228 7.9439C10.5176 8.82869 7.75757 12.1054 7.75757 15.9987C7.75757 20.5716 11.5618 24.2919 16.2367 24.2919C19.2323 24.2919 21.9337 22.7699 23.4514 20.3585C23.2779 20.3676 23.1033 20.3722 22.9287 20.3722C17.7826 20.3722 13.5951 16.2772 13.5951 11.2435C13.5951 10.1032 13.8108 8.98914 14.228 7.9439M16.2367 26.4993C10.3171 26.4993 5.50037 21.7899 5.50037 15.9987C5.50037 10.2109 10.3171 5.49927 16.2367 5.49927C16.6598 5.49927 17.0501 5.72963 17.2435 6.09753C17.438 6.46428 17.4087 6.90668 17.1638 7.24363C16.3059 8.42297 15.8535 9.80631 15.8535 11.2435C15.8535 15.06 19.0272 18.1637 22.9287 18.1637C23.6483 18.1637 24.3573 18.0582 25.0359 17.8531C25.4378 17.7293 25.8785 17.8359 26.1738 18.1304C26.4715 18.425 26.5758 18.8559 26.4446 19.2467C25.0019 23.5847 20.9 26.4993 16.2367 26.4993"></path></svg>
              ) : (
              <svg className="w-full group-hover:fill-[#33DDB3]" viewBox="0 0 32 32" fill="#90a4ae" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.0003 21.4194C13.0123 21.4194 10.5813 18.9874 10.5813 15.9994C10.5813 13.0114 13.0123 10.5804 16.0003 10.5804C18.9883 10.5804 21.4193 13.0114 21.4193 15.9994C21.4193 18.9874 18.9883 21.4194 16.0003 21.4194M16.0003 8.64136C11.9423 8.64136 8.64233 11.9414 8.64233 15.9994C8.64233 20.0574 11.9423 23.3574 16.0003 23.3574C20.0573 23.3574 23.3583 20.0574 23.3583 15.9994C23.3583 11.9414 20.0573 8.64136 16.0003 8.64136"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16.0004 7.08447C16.5364 7.08447 16.9704 6.64946 16.9704 6.11446V3.34546C16.9704 2.81046 16.5364 2.37646 16.0004 2.37646C15.4644 2.37646 15.0304 2.81046 15.0304 3.34546V6.11446C15.0304 6.64946 15.4644 7.08447 16.0004 7.08447"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.11559 15.0298H3.34559C2.81059 15.0298 2.37659 15.4648 2.37659 15.9998C2.37659 16.5348 2.81059 16.9688 3.34559 16.9688H6.11559C6.65159 16.9688 7.08459 16.5348 7.08459 15.9998C7.08459 15.4648 6.65159 15.0298 6.11559 15.0298"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16.0004 24.9146C15.4644 24.9146 15.0304 25.3496 15.0304 25.8846V28.6536C15.0304 29.1886 15.4644 29.6236 16.0004 29.6236C16.5364 29.6236 16.9704 29.1886 16.9704 28.6536V25.8846C16.9704 25.3496 16.5364 24.9146 16.0004 24.9146"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M28.6542 15.0298H25.8842C25.3492 15.0298 24.9152 15.4648 24.9152 15.9998C24.9152 16.5348 25.3492 16.9688 25.8842 16.9688H28.6542C29.1902 16.9688 29.6242 16.5348 29.6242 15.9998C29.6242 15.4648 29.1902 15.0298 28.6542 15.0298"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M22.9896 9.97995C23.2376 9.97995 23.4856 9.88495 23.6756 9.69595L24.7036 8.66795C25.0816 8.28995 25.0816 7.67495 24.7036 7.29595C24.3246 6.91795 23.7106 6.91795 23.3316 7.29595L22.3036 8.32495C21.9256 8.70295 21.9256 9.31695 22.3036 9.69595C22.4926 9.88495 22.7416 9.97995 22.9896 9.97995"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8.32507 9.69593C8.51407 9.88493 8.76207 9.97993 9.01107 9.97993C9.25907 9.97993 9.50707 9.88493 9.69607 9.69593C10.0751 9.31693 10.0751 8.70293 9.69607 8.32493L8.66807 7.29693C8.28907 6.91893 7.67507 6.91893 7.29707 7.29693C6.91807 7.67493 6.91807 8.28993 7.29707 8.66793L8.32507 9.69593Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8.32507 22.3043L7.29707 23.3313C6.91807 23.7093 6.91807 24.3243 7.29707 24.7023C7.48607 24.8923 7.73407 24.9873 7.98207 24.9873C8.23007 24.9873 8.47807 24.8923 8.66807 24.7023L9.69607 23.6753C10.0751 23.2973 10.0751 22.6833 9.69607 22.3043C9.31807 21.9253 8.70307 21.9253 8.32507 22.3043"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M23.6752 22.3043C23.2962 21.9253 22.6822 21.9253 22.3032 22.3043C21.9252 22.6833 21.9252 23.2973 22.3042 23.6753L23.3322 24.7023C23.5212 24.8923 23.7692 24.9873 24.0182 24.9873C24.2662 24.9873 24.5142 24.8923 24.7032 24.7023C25.0822 24.3243 25.0822 23.7093 24.7032 23.3313L23.6752 22.3043Z"></path></svg>
              )}
            </IconButton>
          </Tooltip>
          <Tooltip content={lang ? ("Change Language") : ("Cambia Lingua")} placement="bottom">
            <button onClick={changeLang} className="md:hidden lg:hidden">
            {lang ? 
              (<img src="../assets/img/buttonItaly.png" alt="Italy" title="Change to Italian" className="w-10 h-min"/>)
              : (<img src="../assets/img/buttonEnglish.png" alt="English" title="Change to English" className="w-10 h-min"/>)
            }
          </button>
         </Tooltip>
        </div>
      </MobileNav>
    </Navbar>
  );
}