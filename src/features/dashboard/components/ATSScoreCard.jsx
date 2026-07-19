import { Award } from "lucide-react";

export default function ATSScoreCard({ score }) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6">
      <div className="flex items-center gap-3">
        <Award className="text-violet-500" />
        <h3 className="font-semibold text-lg">
          ATS Score
        </h3>
      </div>

      <h1 className="mt-6 text-6xl font-bold text-violet-400">
        {score}
      </h1>

      <p className="mt-2 text-zinc-400">
        out of 100
      </p>
    </div>
  );
}