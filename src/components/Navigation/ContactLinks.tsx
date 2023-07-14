import Link from "next/link"
import TwitterLogo from "./TwitterLogo"
import GitHubLogo from "./GitHubLogo"
import LinkedInLogo from "../shared/LinkedInLogo"
import EmailIcon from "./EmailIcon"

const ContactLinks = () => {
  return <>
    {process.env.NEXT_PUBLIC_USER_EMAIL_ADDRESS && (
      <Link className="flex p-1 m-1 fill-neutral-600 hover:fill-primary-900" href={`mailto:${process.env.NEXT_PUBLIC_USER_EMAIL_ADDRESS as string}`} target="_blank" rel="noreferrer">
        <EmailIcon className="transition-colors duration-200 ease-linear fill-[inherit]" />
      </Link>
    )}
    {process.env.NEXT_PUBLIC_LINKEDIN_URL && (
      <Link className="flex p-1 m-1 fill-neutral-600 hover:fill-primary-900" href={process.env.NEXT_PUBLIC_LINKEDIN_URL as string} target="_blank" rel="noreferrer">
        <LinkedInLogo className="transition-colors duration-200 ease-linear fill-[inherit]" />
      </Link>
    )}
    {process.env.NEXT_PUBLIC_GITHUB_URL && (
      <Link className="flex p-1 m-1 fill-neutral-600 hover:fill-primary-900" href={process.env.NEXT_PUBLIC_GITHUB_URL as string} target="_blank" rel="noreferrer">
        <GitHubLogo className="transition-colors duration-200 ease-linear fill-[inherit]" />
      </Link>
    )}
    {/* {process.env.NEXT_PUBLIC_TWITTER_URL && (
      <Link className="flex p-1 m-1 fill-neutral-600 hover:fill-primary-900" href={process.env.NEXT_PUBLIC_TWITTER_URL as string} target="_blank" rel="noreferrer">
        <TwitterLogo className="transition-colors duration-200 ease-linear fill-[inherit]" />
      </Link>
    )} */}
  </>
}

export default ContactLinks
