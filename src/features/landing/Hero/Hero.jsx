import Container from "../../../components/common/Container";

import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      <Container>

        <div
          className="
          grid
          min-h-[90vh]
          items-center
          gap-16
          py-16
          lg:grid-cols-2
        "
        >

          <HeroContent />

          <div />

        </div>

      </Container>

    </section>
  );
}