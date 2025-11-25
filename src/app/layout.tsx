import {
  Geist,
  Geist_Mono,
  Inter,
  Montserrat,
  Raleway,
} from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
});

const raleway = Raleway({
  subsets: ["latin"],
});

export const metadata = {
  title: "Jiho Bok",
  description: "Portfolio v.1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${raleway.className} ${inter.className} ${montserrat.className}`}
      >
        {children}
      </body>
    </html>
  );
}
