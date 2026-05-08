import Link from "next/link";
import { ReactNode, CSSProperties } from "react";

interface AccentLinkProps {
  href: string;
  accentColor?: string;
  children: ReactNode;
}

const AccentLink = ({ href, accentColor, children }: AccentLinkProps) => {
  const style: CSSProperties | undefined = accentColor
    ? ({ ['--accent-color' as string]: accentColor } as CSSProperties)
    : undefined;

  const className = accentColor
    ? 'inline-block text-primary-600 decoration-[transparent] hover:decoration-[var(--accent-color)] hover:text-[var(--accent-color)] transition-colors duration-300 ease-in-out underline-offset-[6px] break-inside-avoid'
    : 'inline-block text-primary-600 decoration-[transparent] hover:decoration-primary-700 hover:text-primary-700 transition-colors duration-300 ease-in-out underline-offset-[6px] break-inside-avoid';

  return (
    <Link href={href} className={className} style={style}>
      {children}
    </Link>
  );
};

export default AccentLink;
