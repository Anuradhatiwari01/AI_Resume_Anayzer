import { Sparkles } from "lucide-react";

export default function SuggestionsCard({ suggestions }) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6">
      <div className="flex items-center gap-3">
        <Sparkles className="text-violet-400" />

        <h2 className="text-xl font-semibold">
          AI Suggestions
        </h2>
      </div>

      <ul className="mt-6 space-y-4">
        {suggestions.map((item) => (
          <li
            key={item}
            className="rounded-xl border border-zinc-800 p-4"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}