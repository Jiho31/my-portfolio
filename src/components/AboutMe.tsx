"use client";
import { toast } from "sonner";
import { basic } from "_data/jihoBok";
import Image from "next/image";

function AboutMe() {
  const copyToClipboard = (event: React.MouseEvent<HTMLButtonElement>) => {
    navigator.clipboard.writeText(event.currentTarget.innerHTML);
    toast.success("Email is copied to clipboard!");
  };
  return (
    <section className="flex flex-col gap-4">
      <div className="w-full justify-baseline flex gap-6 mt-4">
        <div className="flex justify-center align-middle w-24 h-24 rounded-full bg-gray-300">
          <Image
            src="/myAvatar.png"
            alt="Girl avatar wearing glasses with a donut in mouth"
            width={96}
            height={96}
          />
        </div>
        <div className="flex flex-col items-baseline">
          <h1 className="text-2xl font-extrabold">{basic.name}</h1>
          <p className="text-xl">{basic.roleTitle}</p>
          <button
            className="inline-flex gap-1.5 cursor-pointer"
            onClick={copyToClipboard}
          >
            <Image src="/mail.svg" alt="@" width={16} height={16} />
            {basic.email}
          </button>
          <div className="inline-flex gap-2">
            <a href={basic.linkedIn} target="_blank">
              <Image
                src="/linkedin.svg"
                alt="linkedin logo"
                width={16}
                height={16}
              />
              {/* LinkedIn */}
            </a>
            <a href={basic.github} target="_blank">
              <Image
                src="/github.svg"
                alt="github logo"
                width={16}
                height={16}
              />
              {/* Github */}
            </a>
          </div>
        </div>
      </div>
      <div className="text-md">{basic.summary}</div>
    </section>
  );
}

export default AboutMe;
