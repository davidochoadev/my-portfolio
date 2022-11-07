
import { Typography } from "@material-tailwind/react";
import { Link } from "@remix-run/react";

import { useOptionalUser } from "~/utils";

export default function Index() {
  const user = useOptionalUser();
  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <Typography variant="h1" color="green">Under construction...</Typography>
    </main>
  );
}
