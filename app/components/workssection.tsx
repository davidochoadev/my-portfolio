import { Typography } from "@material-tailwind/react";
import { InView } from "react-intersection-observer";

export default function WorksSection(data: any) {
	const worksSetInView = data.worksSetInView;
  return (
    <section className="relative h-screen flex flex-col justify-center items-center snap-start">
      <InView
        as="div"
        id="works"
        className="absolute top-0.5 h-2 w-full"
        onChange={worksSetInView}
      />
      {/* TITLE ELEMENT OF WORKS SECTION */}
      <Typography as="div" id="title-about-section" className="text-[#33DDB3] font-goodbrush text-center" variant="h2">
        {data.lang ? ("My Works & Projects") : ("I miei Progetti")}
      </Typography>
      {/* MAIN CONTAINER OF WORKS SECTION */}
      <div id="works-section"className="gap-4 shadow-md overflow-hidden py-4 px-4 bg-inherit lg:shadow-none w-full h-3/4 rounded-3xl self-center flex justify-start flex-col md:flex-row md:flex-wrap relative lg:gap-4 md:justify-center">
      </div>
    </section>
  );
}
