import { InView } from "react-intersection-observer";

export default function WorksSection(data: any) {
	const worksSetInView = data.worksSetInView;
  return (
    <section className="relative h-screen bg-blue-gray-900 snap-start">
      <InView
        as="div"
        id="works"
        className="absolute top-0.5 h-2 w-full"
        onChange={worksSetInView}
      />
    </section>
  );
}
