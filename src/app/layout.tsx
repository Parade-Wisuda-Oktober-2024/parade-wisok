import "~/styles/globals.css";

import {GeistSans} from "geist/font/sans";
import {type Metadata} from "next";
import {eagleLake, fraunces, medieval} from "~/styles/font";
import Footer from "~/app/footer";
import {Toaster} from "~/components/ui/sonner";
import WrappedNavbar from "~/components/wrapped-navbar";

export const metadata: Metadata = {
  title: "Parade Wisokto ITB 2024",
  description: "Official website of Parade Wisokto ITB 2024",
  icons: [{rel: "icon", url: "/favicon.ico"}],
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${eagleLake.variable} ${fraunces.variable}`}>
    <body className={`${medieval.variable}`}>
    <WrappedNavbar/>
    {children}
    <Toaster/>
    <Footer/>
    </body>
    </html>
  );
}
