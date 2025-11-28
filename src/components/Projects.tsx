"use client";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Badge from "./Badge";
import { projects } from "_data/jihoBok";
import { randomColorGenerator } from "_utils/utils";

// on hover -> show < > buttons
// disable < > buttons when no more content
// < slide to left
// > slide to right

function ImageSlider() {
  const [images, setImages] = useState([
    "/bookit-list-main-page.png",
    "/bookit-list-bookshelf.png",
    "/bookit-list-search.png",
    "/temp_image.jpg",
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isLeftButtonDisabled = useMemo(() => currentIndex == 0, [currentIndex]);
  const isRightButtonDisabled = useMemo(
    () => currentIndex == images.length - 1,
    [currentIndex, images]
  );

  const IMAGE_WIDTH = 400;
  const translatedWindow = useMemo(
    () => `-translate-x-[${(currentIndex + 1) / images.length}%]`,
    [currentIndex, images]
  );

  useEffect(() => console.log(currentIndex), [currentIndex]);

  const handleLeftClick = () => {
    if (currentIndex === 0) {
      return;
    }
    setCurrentIndex((prev) => prev - 1);
  };

  const handleRightClick = () => {
    if (currentIndex == images.length - 1) {
      return;
    }
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <div id="wrapper" className="overflow-x-hidden">
      <button
        type="button"
        onClick={handleLeftClick}
        disabled={isLeftButtonDisabled}
      >
        {"<"}
      </button>
      <section
        id="slider"
        className={`flex transition duration-300 ease-in-out ${translatedWindow}`}
      >
        {images.map((img, idx) => (
          <Image
            key={idx}
            src={img}
            alt="project"
            width={IMAGE_WIDTH}
            height={340}
          />
        ))}
      </section>
      <button
        type="button"
        onClick={handleRightClick}
        disabled={isRightButtonDisabled}
      >
        {">"}
      </button>
      {/* <span role="button" title="leftButton">
        {"<"}
      </span>
      <span role="button" title="rightButton">
        {">"}
      </span> */}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects-section" className="mt-6">
      <h2 className="text-2xl font-bold py-1.5">Projects</h2>
      <div className="flex flex-wrap gap-6 lg:max-w-4xl md:grid md:grid-cols-2">
        {projects.map((project, idx) => {
          return (
            <article
              key={idx}
              className="col-span-1 w-full h-auto p-5 border border-gray-200 rounded-2xl hover:shadow-lg scale-100 hover:scale-101 transition-all"
            >
              {/* <ImageSlider /> */}
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
                    height: "auto",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              ))}

              <div className="py-3 inline-flex gap-1.5">
                <h3 className="text-xl font-extrabold mr-1.5">
                  {project.name}
                </h3>
                {project.liveServiceLink && (
                  <a
                    className="inline-flex gap-1 px-1.5 py-1 bg-black hover:bg-black/80 rounded-lg text-white text-sm"
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
                )}
                {project.repositoryLink && (
                  <a
                    className="inline-flex gap-1 px-1.5 py-1 bg-black hover:bg-black/80 rounded-lg text-white text-sm"
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
                )}
              </div>
              <p>{project.description}</p>
              <ul className="flex flex-wrap gap-1 mt-2.5">
                {project.techStack.map((tech, _idx) => (
                  <li key={_idx}>
                    <Badge>
                      {/* <Badge backgroundColor={`${randomColorGenerator()}`}> */}
                      {/* <Badge backgroundColor="oklch(0.828 0.111 230.318)"> */}
                      {tech}
                    </Badge>
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

export { ImageSlider };
