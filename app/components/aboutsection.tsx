import { Typography } from "@material-tailwind/react";
import { InView } from "react-intersection-observer";
import { Progress } from "@material-tailwind/react";

export default function AboutSection(data: any) {
  const setInView = data.setInView;
  return (
    <section className="relative h-screen flex justify-center snap-start">
      <InView
        as="div"
        id="about"
        className="absolute top-0.5 h-2 w-full"
        onChange={setInView}
      />
      <div className="mx-4 bg-white w-full h-4/5 rounded-3xl self-center flex justify-center flex-col relative">
        <Typography variant="h3" className="text-[#111827] self-center pt-4 text-center">
          My Languages from GitHub!
        </Typography>
        <Progress value={50} color="blue" />
      </div>
    </section>
  );
}
