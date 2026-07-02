import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import { DEFAULT_DESCRIPTION, createPageMetadata } from "./lib/seo";

export const metadata = createPageMetadata({
  title: "Home",
  description: DEFAULT_DESCRIPTION,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Contact />
    </>
  );
}
