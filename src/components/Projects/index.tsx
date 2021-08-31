import Section from '../Section';
import { H2 } from '../shared/Text';

const Projects = () => (
  <Section alignTop className="bg-white text-neutral-800">
    <div className="box-border w-full px-4 mx-auto">
      <div className="text-left">
        <H2 className="mt-0 mb-2 font-bold">Projects</H2>
      </div>
      <p className="text-sm leading-4 font-regular">
        Some of my most recent projects are listed below
      </p>
      <ul>
        <li>Strava app for renaming activities</li>
        <li>More to come...</li>
      </ul>
    </div>
  </Section>
);

export default Projects;
