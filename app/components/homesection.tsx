import { InView } from "react-intersection-observer";

export default function HomeSection(data: any) {
   const homeSetInView = data.homeSetInView;
   return(
      <section className="bg-blue-gray-900 h-screen relative">
         <InView as="div" id="home" className="absolute top-0 h-2 w-full" onChange={homeSetInView} />
      </section>
   )
}