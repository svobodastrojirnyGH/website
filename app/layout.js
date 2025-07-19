import Navbar from "@/components/ui/Navbar";
import "./globals.css";
import { Exo_2, Stardos_Stencil } from "next/font/google";

const exo2 = Exo_2({
    subsets: ['latin'],
    variable: "--font-exo2"
})

const stardosStencil = Stardos_Stencil({
    weight: ["400", "700"],
    subsets: ['latin'],
    variable: "--font-stardos-stencil"
})

export const metadata = {
  title: 'STROJÍRNY SVOBODA s.r.o.',
  description: 'CNC obrábění, zámečnické práce, laserové popisování a svařování – kvalita zaručena.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${exo2.variable} ${stardosStencil.variable}`}>
      <body className="font-exo2 overflow-x-hidden">
            {children}

      </body>
    </html>
  );
}
