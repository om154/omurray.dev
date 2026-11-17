'use client';

import { CheckIcon, CopyIcon } from 'lucide-react';
import { type ReactNode, useEffect, useRef, useState } from 'react';

type Status = 'idle' | 'copied' | 'failed';

const MESSAGES: Record<Status, string> = {
  idle: '',
  copied: 'Copied',
  failed: 'Copy failed',
};

const CodeBlock = ({ children }: { children: ReactNode }) => {
  const preRef = useRef<HTMLPreElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const repeat = useRef(false);
  const [status, setStatus] = useState<Status>('idle');
  const [announcement, setAnnouncement] = useState('');

  useEffect(() => () => clearTimeout(timer.current), []);

  const report = (next: Status) => {
    clearTimeout(timer.current);
    setStatus(next);
    // VoiceOver skips a message identical to the last one, so alternate a no-break space.
    repeat.current = !repeat.current;
    setAnnouncement(MESSAGES[next] + (repeat.current ? '\u00A0' : ''));
    timer.current = setTimeout(() => {
      setStatus('idle');
      setAnnouncement('');
    }, 2000);
  };

  const copy = async () => {
    const text = preRef.current?.textContent?.trim();
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      report('copied');
    } catch {
      report('failed');
    }
  };

  return (
    <div className="relative mt-4">
      <pre
        ref={preRef}
        className="py-4 pl-4 overflow-x-auto text-sm leading-6 rounded-lg pr-28 bg-neutral-100"
      >
        {children}
      </pre>
      <button
        type="button"
        onClick={copy}
        className="absolute inline-flex items-center gap-1.5 px-2 py-1 text-xs font-medium transition-colors border rounded-md top-3 right-3 min-w-6 min-h-6 border-neutral-300 bg-white/90 text-neutral-700 hover:border-neutral-500 hover:text-primary-900 focus-visible:outline-2 focus-visible:outline-primary-700"
      >
        {status === 'copied' ? (
          <CheckIcon aria-hidden size={14} />
        ) : (
          <CopyIcon aria-hidden size={14} />
        )}
        {status === 'idle' ? 'Copy' : MESSAGES[status]}
      </button>
      <span role="status" className="sr-only">
        {announcement}
      </span>
    </div>
  );
};

export default CodeBlock;
