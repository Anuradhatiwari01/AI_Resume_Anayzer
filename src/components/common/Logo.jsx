import { Sparkles } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="rounded-xl bg-violet-600 p-2">
        <Sparkles size={18} />
      </div>

      <div>
        <h1 className="font-bold text-lg">
          ResumeLens AI
        </h1>

        <p className="text-xs text-zinc-400">
          Smart Resume Analyzer
        </p>
      </div>
    </div>
  );
}