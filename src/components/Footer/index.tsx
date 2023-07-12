import { ReactComponent as LinkedInLogo } from '../../assets/linkedin-logo.svg';
import { ReactComponent as GitHubLogo } from '../../assets/github-logo.svg';
import { ReactComponent as TwitterLogo } from '../../assets/twitter-logo.svg';

const Footer = () => (
  <div className="box-border flex justify-center w-full pl-2 mx-auto text-center rounded-lg bg-white/70">
    {process.env.REACT_APP_TWITTER_URL && (
    <a className="flex m-2" href={process.env.REACT_APP_TWITTER_URL} target="_blank" rel="noreferrer">
        <TwitterLogo className="w-5 h-5 transition-all duration-250 fill-neutral-500 hover:fill-neutral-700 " />
    </a>
    )}
    {process.env.REACT_APP_GITHUB_URL && (
    <a className="flex m-2" href={process.env.REACT_APP_GITHUB_URL} target="_blank" rel="noreferrer">
        <GitHubLogo className="w-5 h-5 transition-all duration-250 fill-neutral-500 hover:fill-neutral-700 " />
    </a>
    )}
    {process.env.REACT_APP_LINKEDIN_URL && (
    <a className="flex m-2" href={process.env.REACT_APP_LINKEDIN_URL} target="_blank" rel="noreferrer">
        <LinkedInLogo className="w-5 h-5 transition-all duration-250 fill-neutral-500 hover:fill-neutral-700 " />
    </a>
    )}
  </div>
);

export default Footer;
