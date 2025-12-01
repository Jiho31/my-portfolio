import { techStack } from "_data/jihoBok";
import Badge from "./Badge";
import Image from "next/image";

function TechStack() {
  return (
    <section className="mt-6">
      <h2 className="text-2xl font-bold py-1.5">Tech Stack</h2>
      <ul className="flex flex-wrap gap-2">
        {techStack.map((item, id) => {
          return (
            <li key={item.label + id}>
              <Image
                src={item.imgSrc}
                alt={`${item.label} logo`}
                width={40}
                height={40}
                unoptimized
              />
              <label className="hidden">{item.label}</label>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default TechStack;
