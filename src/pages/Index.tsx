import { Suspense, lazy } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

const PostsCarousel = lazy(() => import("@/components/PostsCarousel"));

const Index = () => {
  return (
    <main className="h-screen overflow-y-auto overflow-x-hidden snap-y snap-mandatory overscroll-y-none scroll-smooth">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Suspense fallback={null}>
        <PostsCarousel />
      </Suspense>
    </main>
  );
};

export default Index;
