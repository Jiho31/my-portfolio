import { techStack } from "_data/jihoBok";
import Badge from "./Badge";

function TechStack() {
  return (
    <section className="mt-6">
      <h2 className="text-xl font-bold py-1.5">Tech Stack</h2>
      <ul className="flex flex-wrap gap-2">
        {techStack.map((item, id) => {
          return (
            <li
              // className="px-1.5 py-1 rounded-lg bg-blue-600 text-white text-sm"
              key={item.label + id}
            >
              <Badge>{item.label}</Badge>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default TechStack;
