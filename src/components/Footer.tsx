import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row sm:justify-between border-t border-gray-200 w-full p-5 md:max-w-4xl md:mx-auto">
      <ul className="flex">
        <Link href="#about-me-section">About Me</Link>
        <span className="px-2"> • </span>
        <Link href="#experiences-section">Experiences</Link>
        <span className="px-2"> • </span>
        <Link href="#projects-section">Projects</Link>
        {/* <span className="px-2"> • </span>
        <li>Blog</li> */}
      </ul>
      <span>© Jiho Bok</span>
      {/* <ul>
        <header>Contacts</header>
        <li>email</li>
        <li>linkedin</li>
      </ul> */}
    </footer>
  );
}
