import {
  CheckCircle2,
  Sparkles,
  Target,
} from "lucide-react";

import Card from "../../../components/common/Card";
import { demoData } from "../../../data/demo";

export default function ResultPreview() {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">
          Analysis Result
        </h3>

        <Sparkles
          size={20}
          className="text-violet-400"
        />
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div>
          <p className="text-sm text-zinc-400">
            ATS Score
          </p>

          <h2 className="text-5xl font-bold text-violet-400">
            {demoData.result.atsScore}%
          </h2>
        </div>

        <div className="text-right">
          <p className="text-sm text-zinc-400">
            Job Match
          </p>

          <h2 className="text-4xl font-bold text-cyan-400">
            {demoData.result.jobMatch}%
          </h2>
        </div>
      </div>

      <div className="mt-8">
        <div className="mb-4 flex items-center gap-2">
          <Target
            size={18}
            className="text-violet-400"
          />

          <h4 className="font-medium">
            Top Suggestions
          </h4>
        </div>

        <div className="space-y-3">
          {demoData.result.suggestions.map(
            (suggestion) => (
              <div
                key={suggestion}
                className="flex items-center gap-3"
              >
                <CheckCircle2
                  size={18}
                  className="text-emerald-400"
                />

                <span className="text-sm text-zinc-300">
                  {suggestion}
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </Card>
  );
}