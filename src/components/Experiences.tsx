import { experiences } from "_data/jihoBok";
import Badge from "./Badge";

export default function Experiences() {
  return (
    <section id="experiences-section" className="mt-6">
      <h2 className="text-2xl font-bold py-1.5">Experiences</h2>
      <div className="flex flex-col gap-4">
        {experiences.map((data, idx) => {
          return (
            <article key={idx}>
              <div className="text-lg text-neutral-700 dark:invert font-semibold">
                {data.companyName}
              </div>
              <div className="flex gap-1">
                <div className="font-bold">{data.roleTitle}</div>
                <div>({data.roleType})</div>
              </div>
              <div>
                {data.startDate} - {data.endDate}
              </div>
              <ul>
                {data.description.map((d, idx) => (
                  <li key={idx} className="list-disc ml-4.5">
                    {d}
                  </li>
                ))}
              </ul>
              {/* <div>{data.techStack.join(" • ")}</div> */}
              <ul className="flex flex-wrap gap-1 mt-2.5">
                {data.techStack.map((tech, _idx) => (
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
