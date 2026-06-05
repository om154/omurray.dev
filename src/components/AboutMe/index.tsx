import { H2, H3, P } from "../shared/Text";

import AboutMeHero from "../Hero/AboutMe";
import AccenturePill from "../Pill/AccenturePill";
import AmbientPill from "../Pill/AmbientPill";
import AnimateDown from "../animations/AnimateDown";
import ContactLinks from "../Navigation/ContactLinks";
import ExternalLink from "../shared/ExternalLink";
import GlimpsePill from "../Pill/GlimpsePill";
import PunchupPill from "../Pill/PunchupPill";
import { ReactNode } from "react";
import Section from "../Section";
import ShippitPill from "../Pill/ShippitPill";
import TwinePill from "../Pill/TwinePill";
import aboutMeImg from "public/static/img/oliver.jpeg";

export function calculateAge(birthday: string) {
  const splitDate = birthday.split("-");
  const birthYear = Number(splitDate[2]);
  const birthMonth = Number(splitDate[1]);
  const birthDay = Number(splitDate[0]);

  const dateOfBirth = new Date(birthYear, birthMonth - 1, birthDay);
  const monthDiff = Date.now() - dateOfBirth.getTime();
  const ageDate = new Date(monthDiff);

  const year = ageDate.getUTCFullYear();
  const age = Math.abs(year - 1970);
  return age;
}

interface AboutMeCardProps extends AboutMeCard {
  index: number;
}

const AboutMeCard = ({
  index,
  content,
  stage,
  year,
  Pill,
}: AboutMeCardProps) => (
  <AnimateDown
    delay={0.1 + index * 0.1}
    className="flex flex-col justify-between px-5 pt-3 pb-5 font-sans transition-colors duration-200 ease-in-out rounded-lg bg-neutral-100 hover:bg-neutral-200"
  >
    <div>
      <div className="mb-2 text-sm text-left font-regular text-neutral-600">
        {year}
      </div>
      <P>{content}</P>
    </div>
    <div>
      {stage ? (
        <div className="mt-2 text-sm text-right text-neutral-600">{stage}</div>
      ) : (
        <div />
      )}
      <div className="flex flex-col items-center mt-3 space-x-2 lg:space-x-0 lg:flex-row lg:justify-around">
        {Pill}
      </div>
    </div>
  </AnimateDown>
);

interface AboutMeCard {
  content: ReactNode;
  year: string;
  stage?: string;
  Pill: ReactNode;
}

const cards: AboutMeCard[] = [
  // Punchup
  {
    content: (
      <>
        <ExternalLink href="https://punchup.live/">Punchup</ExternalLink> is the
        digital growth engine for live entertainment.
        <div className="mt-1" />
        We empower comedians with the data they need to sell out shows and our
        product connects comedians with their biggest fans for exclusive
        content.
        <div className="mt-1" />
      </>
    ),
    year: "2024 – present",
    stage: "Seed stage, Social Leverage",
    Pill: <PunchupPill />,
  },
  // twine
  {
    content: (
      <>
        <ExternalLink href="https://www.twine.us/">twine</ExternalLink> is
        building products to connect remote teams - think Donut.com, but
        synchronous. Our real-time matchmaking platform has powered thousands of
        conversations!
        <div className="mt-1" />
        <ExternalLink href="https://www.twine.us/ambient">
          twine Ambient
        </ExternalLink>{" "}
        is our AI Chief of Staff that summarizes, threads, and shares important
        context from all across your business.
      </>
    ),
    year: "2022 – 2023",
    stage: "Seed stage, Zoom Ventures",
    Pill: (
      <div className="flex flex-col w-full gap-2 my-1 md:flex-row lg:flex-col">
        <AmbientPill className="select-none " />
        <TwinePill className="select-none lg:m-0" />
      </div>
    ),
  },
  // Glimpse
  {
    content: (
      <>
        At{" "}
        <ExternalLink
          href="https://web.archive.org/web/20231201103631/https://www.joinglimpse.com/"
          className="inline whitespace-break-spaces"
        >
          Glimpse
        </ExternalLink>{" "}
        I joined 4 ex-Duke students as the company's first external hire. I
        defined our platform's architecture and shipped new features to scale
        and refine our video chat platform. <div className="mt-1 " />I also lead
        the development of our Zoom app, which ultimately made us a prime target
        for acquisition.
      </>
    ),
    year: "2021 – 2022",
    stage: "Seed stage, Y Combinator",
    Pill: <GlimpsePill className="mt-1 select-none lg:m-0" />,
  },
  // Shippit
  {
    content: (
      <>
        I previously worked in Engineering at a Sydney-based start-up named{" "}
        <ExternalLink href="https://www.shippit.com/">Shippit</ExternalLink>.{" "}
        Their multi-carrier shipping software for ecommerce companies
        streamlines shipping & fulfilment for some of Australia's biggest
        retailers.
      </>
    ),
    year: "2020 – 2021",
    stage: "Series B, Tiger Global",
    Pill: <ShippitPill className="my-1 select-none lg:m-0" />,
  },
  // Accenture
  {
    content: (
      <>
        At{" "}
        <ExternalLink href="https://www.accenture.com/">Accenture</ExternalLink>{" "}
        I worked on multiple projects developing large-scale enterprise
        applications to help clients effectively capture, manage and analyze
        their data from dozens of sources.
      </>
    ),
    year: "2018 – 2020",
    Pill: <AccenturePill className="my-1 select-none lg:my-0 lg:ml-1" />,
  },
];

const AboutMe = () => (
  <Section alignTop>
    <div className="box-border w-full">
      <div className="mb-4 text-left">
        <H2 as="h1">About me</H2>
      </div>
      <AboutMeHero imgSrc={aboutMeImg} animationDuration={0.35}>
        <P>
          Hey 👋🏻 I&apos;m Oliver, a
          {process.env.NEXT_PUBLIC_DATE_OF_BIRTH &&
            ` ${calculateAge(process.env.NEXT_PUBLIC_DATE_OF_BIRTH)} year old `}
          Software Engineer originally from Melbourne, Australia. I moved to the
          United States in 2021 to work for early-stage start-ups! 🇺🇸
        </P>
        <div className="flex flex-row justify-end w-full mt-2 md:hidden">
          <ContactLinks />
        </div>
        <div className="w-full mt-2 mb-4 border-t border-neutral-300" />
        <div className="w-full text-left md:mt-2">
          <H3>Companies I've worked for</H3>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-flow-row-dense lg:grid-cols-2">
          {cards.map((c, i) => (
            <AboutMeCard
              key={c.year}
              index={i}
              content={c.content}
              Pill={c.Pill}
              stage={c.stage}
              year={c.year}
            />
          ))}
        </div>
      </AboutMeHero>
    </div>
  </Section>
);

export default AboutMe;
