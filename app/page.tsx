import Home from "src/components/Home";
import { Metadata } from "next";
import JsonLd from "src/components/seo/JsonLd";
import { profilePageSchema } from "src/lib/structuredData";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={profilePageSchema()} />
      <Home />
    </>
  );
}
