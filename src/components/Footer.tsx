export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row sm:justify-between border-t border-gray-200 w-full p-5 md:max-w-4xl md:mx-auto">
      <ul className="flex">
        <li>About Me</li>
        <span className="px-2"> • </span>
        <li>Experiences</li>
        <span className="px-2"> • </span>
        <li>Projects</li>
        <span className="px-2"> • </span>
        <li>Blog</li>
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
