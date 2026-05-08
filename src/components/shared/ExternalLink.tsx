import cn from "classnames";
import { ReactNode } from "react";

interface ExternalLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
}

const ExternalLink = ({ href, className, children }: ExternalLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className={cn(
      'decoration-primary-800 decoration-1 underline-offset-2 hover:decoration-primary-900 hover:text-primary-900',
      className
    )}
  >
    {children}
  </a>
);

export default ExternalLink;
