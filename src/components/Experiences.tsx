import { experiences } from "_data/jihoBok";
import { useMemo } from "react";

export default function Experiences() {
  // group by companyName
  // const experienceItems = useMemo(() => experiences.map((ex) => {}), []);

  return (
    <section className="mt-6">
      <h2 className="text-xl font-bold py-1.5">Experiences</h2>
      <div>
        {experiences.map((data, idx) => {
          return (
            <article key={idx}>
              <div>{data.companyName}</div>
              <div className="flex gap-2">
                <div className="font-semibold">{data.roleTitle}</div>
                <div>({data.roleType})</div>
              </div>
              <div>
                {data.startDate}-{data.endDate}
              </div>
              <ul>
                {data.description.map((d, idx) => (
                  <li key={idx} className="list-disc ml-4.5">
                    {d}
                  </li>
                ))}
              </ul>
              <div>{data.techStack.join(", ")}</div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
