import type { Metadata } from 'next';
import Travel from 'src/components/Travel';

export const metadata: Metadata = {
  title: 'Travel',
  description:
    "Places Oliver has travelled to around the world, and where he's headed next.",
  alternates: {
    canonical: '/travel',
  },
};

export default function Page() {
  return <Travel />;
}
