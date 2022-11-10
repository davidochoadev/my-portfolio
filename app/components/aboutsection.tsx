import { InView } from "react-intersection-observer";

export default function AboutSection(data: any) {
  const setInView = data.setInView;
  return (
    <section className="relative h-screen bg-blue-gray-900">
      <InView
        as="div"
        id="about"
        className="absolute top-0.5 h-2 w-full"
        onChange={setInView}
      />
    </section>
  );
}
