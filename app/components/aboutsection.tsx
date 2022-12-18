import { InView } from "react-intersection-observer";
import { MyCertificates, MyCodingLangs, MyLangsStats, MyPresentation } from "./mystats";

export default function AboutSection(data: any) {
  const setInView = data.setInView;
  const products : any = data.products;
  
  return (
    <section className="relative h-screen flex justify-center snap-start">
      <InView
        as="div"
        id="about"
        className="absolute top-0.5 h-2 w-full"
        onChange={setInView}
      />
      <div id="about-section"className="gap-4 shadow-md md:overflow-hidden py-4 mx-4 bg-inherit lg:shadow-none w-full h-5/6 rounded-3xl self-center flex justify-start flex-col md:flex-row md:flex-wrap relative lg:gap-4 md:justify-center">
        <MyLangsStats products={products} lang={data.lang}/>
        <MyCodingLangs lang={data.lang} />
        <MyCertificates lang={data.lang} />
        <MyPresentation lang={data.lang} />
      </div>
    </section>
  );
}
