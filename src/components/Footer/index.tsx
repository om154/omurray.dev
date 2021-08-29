import Section from '../Section';
import gitHubIconLight120px from '../../assets/GitHub-Mark-Light-120px-plus.png';
import linkedInIconWhite128px from '../../assets/In-White-128.png';

const GitHubIcon = () => (
  <img src={gitHubIconLight120px} alt="GitHub" />
);

const LinkedInIcon = () => (
  <img src={linkedInIconWhite128px} alt="LinkedIn" />
);

const Footer = () => (
  <Section alignTop className="text-white bg-neutral-800">
    <div className="box-border flex justify-center w-full px-4 mx-auto text-center">
      <a className="w-6 h-6 m-2 md:w-8 md:h-8" href={process.env.REACT_APP_GITHUB_URL}>
        <GitHubIcon />
      </a>
      <a className="w-6 h-6 m-2 md:w-8 md:h-8" href={process.env.REACT_APP_LINKEDIN_URL}>
        <LinkedInIcon />
      </a>
    </div>
  </Section>
);

export default Footer;
