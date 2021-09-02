import Section from '../Section';
import { ReactComponent as LinkedInLogo } from '../../assets/linkedin-logo.svg';
import { ReactComponent as GitHubLogo } from '../../assets/github-logo.svg';
import { ReactComponent as TwitterLogo } from '../../assets/twitter-logo.svg';

const Footer = () => (
  <Section alignTop className="text-white bg-primary-900">
    <div className="box-border flex justify-center w-full px-4 mx-auto text-center">
      <a className="flex w-5 h-5 m-2" href={process.env.REACT_APP_TWITTER_URL} target="_blank" rel="noreferrer">
        <TwitterLogo className="fill-current" />
      </a>
      <a className="flex w-5 h-5 m-2" href={process.env.REACT_APP_GITHUB_URL} target="_blank" rel="noreferrer">
        <GitHubLogo className="fill-current" />
      </a>
      <a className="flex w-5 h-5 m-2" href={process.env.REACT_APP_LINKEDIN_URL} target="_blank" rel="noreferrer">
        <LinkedInLogo className="fill-current" />
      </a>
    </div>
  </Section>
);

export default Footer;
