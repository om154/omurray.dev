import Section from '../Section';

const Projects = () => (
  <Section alignTop className="bg-white text-primary-900">
    <div className="box-border w-full px-4 mx-auto">
      <div className="text-left">
        <h2 className="mt-0 mb-2 font-bold">Projects</h2>
      </div>
      <div className="text-sm leading-4 font-regular">
        Some of my most recent projects are listed below
      </div>
      <ul>
        <li>Strava app for renaming activities</li>
        <li>More to come...</li>
      </ul>
    </div>
  </Section>
);

export default Projects;
