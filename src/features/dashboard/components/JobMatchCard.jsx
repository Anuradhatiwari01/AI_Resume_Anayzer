import { BriefcaseBusiness } from "lucide-react";

export default function JobMatchCard({ match }) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6">
      <div className="flex items-center gap-3">
        <BriefcaseBusiness className="text-cyan-400" />

        <h3 className="font-semibold text-lg">
          Job Match
        </h3>
      </div>

      <h1 className="mt-6 text-6xl font-bold text-cyan-400">
        {match}%
      </h1>

      <p className="mt-2 text-zinc-400">
        Keyword similarity
      </p>
    </div>
  );
}