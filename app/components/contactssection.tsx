import { InView } from "react-intersection-observer";

export default function ContactsSection(data: any) {
  const contactsSetInView = data.contactsSetInView;
  return (
    <section className="relative h-screen bg-blue-gray-900 snap-start">
      <InView
        as="div"
        id="contacts"
        className="absolute top-0.5 h-2 w-full"
        onChange={contactsSetInView}
      />
    </section>
  );
}
