"use client";
import { toast } from "sonner";
import { basic } from "_data/jihoBok";
import Image from "next/image";
import { useEffect } from "react";
import useTypingEffect from "_utils/useTypingEffect";

function AboutMe() {
  const copyToClipboard = (event: React.MouseEvent<HTMLButtonElement>) => {
    navigator.clipboard.writeText(event.currentTarget.innerText);
    toast.success("Email is copied to clipboard!");
  };

  return (
    <section id="about-me-section">
      <div className="flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between">
        <div className="w-full md:flex-1 flex flex-row md:flex-col md:items-center md:justify-center gap-6 md:gap-4 mt-4 md:mt-0">
          <div className="flex justify-center align-middle w-24 h-24 md:shrink-0 rounded-full bg-gray-300">
            <Image
              src="/myAvatar.png"
              alt="Girl avatar wearing glasses with a donut in mouth"
              width={96}
              height={96}
            />
          </div>
          <div className="flex flex-col md:shrink-0 md:items-center">
            <h1 className="text-2xl font-extrabold">{basic.name}</h1>
            <p className="text-xl">{basic.roleTitle}</p>
            <button
              className="inline-flex gap-1.5 cursor-pointer"
              onClick={copyToClipboard}
            >
              <Image
                className="dark:invert"
                src="/mail.svg"
                alt="@"
                width={16}
                height={16}
              />
              {basic.email}
            </button>
            <div className="inline-flex gap-2 mt-1">
              <a href={basic.linkedIn} target="_blank">
                <Image
                  src="/linkedin.svg"
                  alt="linkedin logo"
                  width={16}
                  height={16}
                />
              </a>
              <a href={basic.github} target="_blank">
                <Image
                  className="dark:invert"
                  src="/github.svg"
                  alt="github logo"
                  width={16}
                  height={16}
                />
              </a>
              <a href={basic.techBlog} target="_blank">
                <Image
                  className="dark:invert"
                  src="/medium.svg"
                  alt="medium logo"
                  width={16}
                  height={16}
                />
              </a>
            </div>
          </div>
        </div>
        <p className="text-md py-5 md:flex-2 md:py-15 md:pl-5">
          {basic.summary.map((line, idx) => {
            return (
              <span key={idx}>
                {line}
                <br />
              </span>
            );
          })}
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
