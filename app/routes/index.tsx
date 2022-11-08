
import { Typography } from "@material-tailwind/react";
import { Link } from "@remix-run/react";

import { useOptionalUser } from "~/utils";
import MyNavBar from "./navbar";

export default function Index() {
  const user = useOptionalUser();
  return (
    <main className="bg-gray-500 h-screen">
      <MyNavBar />
    </main>
  );
}
