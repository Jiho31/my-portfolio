"use client";
import { useEffect } from "react";
import useTypingEffect from "_utils/useTypingEffect";
import Image from "next/image";
import Link from "next/link";

export default function Landing() {
  const { initTypingAnimation, isTyping, typedTextContent } = useTypingEffect({
    textArray: ["Software Engineer", "Adaptable & Collaborative Teammate"],
  });

  useEffect(() => {
    initTypingAnimation();
  }, []);

  return (
    <div className="flex flex-col justify-center h-dvh text-2xl typing-container">
      <p className="flex-8 place-content-center">
        Hi, I&apos;m Jiho 👩🏻‍💻 <br />
        <span className={`typed-text ${isTyping && "typing"}`}>
          {typedTextContent}
        </span>
        <span className="cursor">&nbsp;</span>
      </p>
      <div className="flex-1 self-center animate-bounce">
        <Link
          href="#about-me-section"
          className="hover:cursor-pointer place-self-center text-lg"
        >
          Scroll down{" "}
          <Image
            className="place-self-center dark:invert"
            src="/double_arrow_down.svg"
            alt="double arrow downward"
            width={36}
            height={36}
          />
        </Link>
      </div>
    </div>
  );
}
