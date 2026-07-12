import MainLayout from "../layouts/MainLayout";

import Hero from "../features/landing/Hero";
import LiveDemo from "../features/landing/LiveDemo";

export default function Landing() {
  return (
    <MainLayout>
      <Hero />

      <LiveDemo />
    </MainLayout>
  );
}