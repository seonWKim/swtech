import { Container } from '../components/common';
import { Hero, Notice, Services, About, Contact } from '../components/sections';

export function HomePage() {
  return (
    <>
      <Hero />
      <main className="flex-1 py-12 md:py-16">
        <Container>
          <Notice />
          <Services />
          <About />
          <Contact />
        </Container>
      </main>
    </>
  );
}
