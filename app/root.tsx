import type { LinksFunction, LoaderArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import tailwindStylesheetUrl from "./styles/tailwind.css";
import globals from "./styles/globals.css";
import { getUser } from "./session.server";
import { ThemeProvider, useTheme } from './utils/theme-provider';
import { clsx } from "clsx";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindStylesheetUrl },{rel: "stylesheet" , href: globals}];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "David Ochoa",
  viewport: "width=device-width,initial-scale=1",
});

export async function loader({ request }: LoaderArgs) {
  return json({
    user: await getUser(request),
  });
}

function App() {
  const [theme] = useTheme();
  return (
      <html lang="en" className={clsx(theme)}>
        <head>
          <Meta />
          <Links />
        </head>
        <body className="h-full dark:bg-[#111827] bg-[#E8F2FF]">
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
  );
}

export default function AppWithProviders() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
