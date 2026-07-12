import { heroData } from "../../../data/landing";

import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

export default function HeroContent() {
  return (
    <div>

      <span
        className="
        inline-flex
        rounded-full
        border
        border-violet-500/30
        bg-violet-500/10
        px-4
        py-2
        text-sm
        text-violet-300
      "
      >
        {heroData.badge}
      </span>

      <h1
        className="
        mt-8
        text-5xl
        font-bold
        leading-tight
        lg:text-7xl
      "
      >
        {heroData.title}
      </h1>

      <p
        className="
        mt-8
        max-w-xl
        text-lg
        leading-relaxed
        text-zinc-400
      "
      >
        {heroData.description}
      </p>

      <HeroButtons />

      <HeroStats />

    </div>
  );
}