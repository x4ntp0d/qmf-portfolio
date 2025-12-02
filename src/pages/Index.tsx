import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import PostsCarousel from "@/components/PostsCarousel";

const Index = () => {
  return (
    <main className="h-screen overflow-y-auto overflow-x-hidden snap-y snap-mandatory overscroll-y-none scroll-smooth">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <PostsCarousel />
    </main>
  );
};

export default Index;
