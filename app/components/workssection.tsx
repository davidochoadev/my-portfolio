import { Typography } from "@material-tailwind/react";
import { InView } from "react-intersection-observer";

export default function WorksSection(data: any) {
  const worksSetInView = data.worksSetInView;
  const works = data.works;
  return (
    <section className="relative flex h-screen snap-start flex-col items-center justify-center">
      <InView
        as="div"
        id="works"
        className="absolute top-0.5 h-2 w-full"
        onChange={worksSetInView}
      />
      {/* TITLE ELEMENT OF WORKS SECTION */}
      <Typography
        as="div"
        id="title-about-section"
        className="text-center font-goodbrush text-[#33DDB3]"
        variant="h2"
      >
        {data.lang ? "My Works & Projects" : "I miei Progetti"}
      </Typography>
      {/* MAIN CONTAINER OF WORKS SECTION */}
      <div
        id="works-section"
        className="relative flex h-3/4 w-full justify-center gap-4 self-center overflow-hidden rounded-3xl bg-inherit px-4 py-4 shadow-md md:flex-row md:flex-wrap lg:gap-4 lg:shadow-none"
      >
        <div className="grid h-full w-full max-w-screen-sm grow grid-cols-2 grid-rows-3 gap-2 md:max-w-screen-md">
          {works.map((work: any) => (
            <div
              key={work.id}
              className="h-full w-full rounded-xl bg-white p-2 flex flex-col hover:bg-[#33DDB3] duration-300 ease-in "
            >
              <h3 className="text-center font-firacode text-xs">
                {work.title}
              </h3>
              <picture className="row-span-4 flex items-center grow h-full">
                <img
                  src={work.picture_url}
                  alt={`${work.title}`}
                  className="mx-auto h-4/5 w-min rounded-xl"
                />
              </picture>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
