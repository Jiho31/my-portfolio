"use client";
import { basic } from "_data/jihoBok";

function AboutMe() {
  const copyToClipboard = (event: React.MouseEvent<HTMLDivElement>) => {
    // console.log(event.currentTarget.innerHTML);
    navigator.clipboard.writeText(event.currentTarget.innerHTML);
  };
  return (
    <section>
      <h1>{basic.name}</h1>
      <p>{basic.roleTitle}</p>
      <div onClick={copyToClipboard}>{basic.email}</div>
    </section>
  );
}

export default AboutMe;
