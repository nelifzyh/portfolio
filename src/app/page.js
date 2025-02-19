import Hero from "@/components/section/Hero";
import Experience from "@/components/section/Experience";

export default function Home() {
  return (
    <div className="py-4 px-10 md:px-20">
      <section id="home">
        <Hero />
      </section>
      <section id="experience">
        <Experience />
      </section>
    </div>
  );
}
