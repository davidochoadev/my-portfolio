import { Typography } from "@material-tailwind/react";
import { InView } from "react-intersection-observer";

export default function WorksSection(data: any) {
	const worksSetInView = data.worksSetInView;
  const works = data.works;
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
        <div className="grid grid-cols-3 grid-rows-2 grow w-min gap-4 h-full max-w-screen-lg">
        {works.map((work : any) => (
          <div key={work.id} className="bg-white p-4 w-full h-min rounded-xl">
            <h3>{work.title}</h3>
            <picture>
              <img src={work.picture_url} alt= {`${work.title}`} className="w-min h-4/5"/>
            </picture>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
