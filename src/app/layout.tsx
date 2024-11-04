import type { Metadata } from "next";

import "../styles/global/globals.css";
import Header from "@/_components/Header/Header";
import Sidebar from "@/_components/Sidebar/Sidebar";
import { AuthContextProvider } from "@/_context/AuthContext";

export const metadata: Metadata = {
  title: "Project Management",
  description: "Project Management Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthContextProvider>
        <body>
          <Header />
          <main>
            <Sidebar />
            <section>{children}</section>
          </main>
        </body>
      </AuthContextProvider>
    </html>
  );
}
