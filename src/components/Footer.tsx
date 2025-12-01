import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex gap-2 sm:flex-col md:flex-row justify-between border-t border-gray-200 w-full p-5 md:max-w-4xl md:mx-auto">
      <ul className="flex flex-wrap flex-col sm:flex-row">
        <Link href="#about-me-section">About Me</Link>
        <span className="px-2 hidden sm:block"> • </span>
        <Link href="#experiences-section">Experiences</Link>
        <span className="px-2 hidden sm:block"> • </span>
        <Link href="#projects-section">Projects</Link>
        <span className="px-2 hidden sm:block"> • </span>
        <Link href="#blogs-section">Blog Posts</Link>
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
