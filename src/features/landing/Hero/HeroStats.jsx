import { heroData } from "../../../data/landing";

export default function HeroStats() {
  return (
    <div className="mt-10 grid grid-cols-3 gap-8">
      {heroData.stats.map((item) => (
        <div key={item.label}>
          <h3 className="text-3xl font-bold text-white">
            {item.value}
          </h3>

          <p className="mt-2 text-sm text-zinc-400">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}