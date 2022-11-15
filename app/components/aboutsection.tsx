import { Typography } from "@material-tailwind/react";
import { InView } from "react-intersection-observer";

export default function AboutSection(data: any) {
  const setInView = data.setInView;
  return (
    <section className="relative h-screen flex justify-center">
      <InView
        as="div"
        id="about"
        className="absolute top-0.5 h-2 w-full"
        onChange={setInView}
      />
      <div className="mx-4 bg-white w-full h-full rounded-3xl self-center flex justify-center flex-col relative">
        <Typography variant="h3" className="text-[#111827] self-center pt-4 text-center">
          My Languages from GitHub!
        </Typography>
        <iframe className="hidden md:inline-block" width="100%" height="100%" scrolling="no" src="https://ionicabizau.github.io/github-profile-languages/api.html?davideochoaa" frameBorder="0" title="my programming languages stats" allowFullScreen></iframe>
      </div>
    </section>
  );
}
