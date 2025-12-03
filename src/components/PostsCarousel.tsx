import { memo } from "react";
import { ArrowUpRight } from "lucide-react";
import { featuredBlogPosts } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Chip } from "./Chip";

const PostsCarousel = () => {
  const posts = featuredBlogPosts;

  return (
    <section id="blog" className="section-shell posts-shell surface-soft">
      <div className="max-w-5xl w-full space-y-10 animate-slide-up">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="space-y-3">
            <h2 className="text-4xl md:text-6xl font-bold">Posts</h2>
          </div>
        </div>

        <Carousel
          opts={{ align: "start", loop: true, dragFree: true }}
          className="relative"
        >
          <CarouselContent className="-ml-3">
            {posts.map((post) => (
              <CarouselItem key={post.title} className="pl-3 md:basis-1/2 lg:basis-1/3">
                <article className="h-full p-6 bg-card border border-border rounded shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col gap-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground font-mono">
                    <span>{post.date}</span>
                    {post.readingTime && <span>{post.readingTime}</span>}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold leading-snug">{post.title}</h3>
                    <p className="text-foreground/80 leading-relaxed text-sm">{post.excerpt}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Chip key={`${post.title}-${tag}`} label={tag} />
                    ))}
                  </div>
                  <div className="pt-2">
                    <Button variant="ghost" className="px-0 text-accent hover:text-accent/80 font-mono" asChild>
                      <a href={post.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                        Leer artículo
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>

      <footer className="w-full border-t border-border pt-6 text-center text-sm text-muted-foreground">
        <p className="font-mono">© 2025 Queralt Martínez Fernández. Diseñado y programado con ❤️</p>
      </footer>
    </section>
  );
};

export default memo(PostsCarousel);
