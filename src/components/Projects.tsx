import { projects } from "_data/jihoBok";
import Image from "next/image";
import Badge from "./Badge";

export default function Projects() {
  return (
    <section className="mt-6">
      <h2 className="text-xl font-bold py-1.5">Projects</h2>
      <div className="flex flex-wrap gap-6">
        {projects.map((project, idx) => {
          return (
            <article key={idx} className="w-full h-auto">
              {project.imageSrcs.map((img, imgIdx) => (
                <Image
                  key={imgIdx}
                  src={img}
                  alt={`Screenshot #${imgIdx + 1} from ${project.name}`}
                  width={400}
                  height={300}
                  style={{
                    aspectRatio: 3 / 2,
                    width: "100%",
                    height: " auto",
                    borderRadius: "10px",
                  }}
                />
              ))}

              <div className="py-3 inline-flex gap-1.5">
                <h3 className="text-lg font-semibold mr-1.5">{project.name}</h3>
                <a
                  className="inline-flex gap-1 px-1.5 py-1 bg-black rounded-lg text-white text-sm"
                  href={project.liveServiceLink}
                  target="_blank"
                >
                  <Image
                    src="portal.svg"
                    alt="globe with cursor"
                    width={20}
                    height={20}
                    style={{
                      filter:
                        "invert(100%) sepia(0%) saturate(0%) hue-rotate(128deg) brightness(100%) contrast(101%)",
                    }}
                  />
                  Live
                </a>
                <a
                  className="inline-flex gap-1 px-1.5 py-1 bg-black rounded-lg text-white text-sm"
                  href={project.repositoryLink}
                  target="_blank"
                >
                  <Image
                    src="github.svg"
                    alt="cat (github logo)"
                    width={20}
                    height={20}
                    style={{
                      filter:
                        "invert(100%) sepia(0%) saturate(0%) hue-rotate(128deg) brightness(100%) contrast(101%)",
                    }}
                  />
                  Github
                </a>
              </div>
              <p>{project.description}</p>
              <ul className="flex flex-wrap gap-1 mt-2.5">
                {project.techStack.map((tech, _idx) => (
                  <li key={_idx}>
                    <Badge>{tech}</Badge>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}
