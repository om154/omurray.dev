import type { MDXComponents } from 'mdx/types';
import ExternalLink from 'src/components/shared/ExternalLink';

const components: MDXComponents = {
  h2: ({ children }) => (
    <h2 className="mt-10 font-heading font-semiBold text-2xl leading-tight tracking-[-0.01em] text-balance text-neutral-1000">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 font-heading font-semiBold text-xl leading-tight tracking-[-0.01em] text-balance text-neutral-1000">
      {children}
    </h3>
  ),
  p: ({ children }) => <p className="mt-4 leading-7 text-pretty">{children}</p>,
  ul: ({ children }) => (
    <ul className="mt-4 pl-5 space-y-2 list-disc marker:text-neutral-500">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mt-4 pl-5 space-y-2 list-decimal marker:text-neutral-500">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="pl-1 leading-7 text-pretty">{children}</li>
  ),
  a: ({ href = '', children }) => (
    <ExternalLink href={href} className="text-primary-700 underline">
      {children}
    </ExternalLink>
  ),
  code: ({ children }) => (
    <code className="font-mono text-[0.9em] rounded-sm bg-neutral-100 px-1 py-0.5 [pre_&]:bg-transparent [pre_&]:p-0">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="mt-4 overflow-x-auto rounded-lg bg-neutral-100 p-4 text-sm leading-6">
      {children}
    </pre>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
