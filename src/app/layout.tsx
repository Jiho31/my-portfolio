import "./globals.css";
import { Inter, Montserrat, Raleway } from "next/font/google";
import Providers from "./providers";

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${raleway.className} ${inter.className} ${montserrat.className} bg-white dark:bg-gray-800 dark:text-white`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
