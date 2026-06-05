import AnimateDown from "src/components/animations/AnimateDown";
import AnimateFadeIn from "src/components/animations/AnimateFadeIn";
import Image from "next/image";
import Link from "next/link";
import { P } from "src/components/shared/Text";

export interface ProjectItemModel {
  url: string;
  paragraphs: string[];
  technologies: string[];
  imagePath: string;
}

interface ProjectItemProps {
  item: ProjectItemModel;
  animationDelay: number;
}

const ProjectItem = ({
  item: { paragraphs, technologies, url, imagePath },
  animationDelay,
}: ProjectItemProps) => (
  <AnimateDown
    delay={animationDelay}
    className="flex flex-col w-full px-6 py-4 overflow-hidden transition-colors duration-200 ease-in-out rounded-lg md:flex-row-reverse md:gap-8 xl:col-span-2 bg-neutral-100 hover:bg-neutral-200 lg:justify-between md:px-8 md:py-6 xl:max-w-5xl xl:m-auto xl:h-full"
  >
    <div className="flex flex-col justify-between flex-1 order-last mt-4 md:m-0">
      <div>
        <div className="flex flex-row justify-start">
          <Link
            href={url}
            className="overflow-hidden text-center text-ellipsis text-primary-700 md:text-left hover:text-primary-800 font-extrabold"
            target="_blank"
            rel="noreferrer"
          >
            <AnimateFadeIn duration={0.35}>
              <h3 className="overflow-hidden text-ellipsis box-border font-mono text-lg leading-tight lg:text-xl underline decoration-primary-700 decoration-1 hover:decoration-primary-800 transition-[color,text-decoration] duration-300 ease">
                {url}
              </h3>
            </AnimateFadeIn>
          </Link>
        </div>
        <div className="mt-4">
          {paragraphs.map((paragraph: string, i: number) => (
            <P key={`hobbies-item-p-${i}`} className="mt-1">
              {paragraph}
            </P>
          ))}
        </div>
      </div>
      <div>
        <div className="w-full my-3 border-t border-neutral-300" />
        <div className="self-end text-black/40">
          {technologies.map((t, i) => (
            <span key={`tech-${i}`}>
              {i > 0 && <span>・</span>}
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
    <div className="relative flex justify-center order-first h-60 md:h-full md:w-[20%] xl:w-[40%] md:shrink-0 shadow-md rounded-md">
      <Image
        src={imagePath}
        fill
        placeholder="blur"
        alt={`Screenshot of the ${new URL(url).hostname.replace(/^www\./, "")} website`}
        className="object-cover object-top max-w-full rounded-md select-none"
      />
    </div>
  </AnimateDown>
);

export default ProjectItem;
