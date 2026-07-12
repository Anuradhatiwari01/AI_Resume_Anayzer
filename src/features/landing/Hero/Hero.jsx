import Container from "../../../components/common/Container";

import HeroContent from "./HeroContent";
import HeroPreview from "./HeroPreview";

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

          <HeroPreview />

        </div>
      </Container>
    </section>
  );
}