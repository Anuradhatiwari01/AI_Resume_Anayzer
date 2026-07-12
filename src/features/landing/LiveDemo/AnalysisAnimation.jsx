import { useEffect, useState } from "react";
import { BrainCircuit, CheckCircle2 } from "lucide-react";

import Card from "../../../components/common/Card";
import { demoData } from "../../../data/demo";

export default function AnalysisAnimation() {
  const [visibleSteps, setVisibleSteps] = useState(1);

  useEffect(() => {
    if (visibleSteps >= demoData.analysisSteps.length) return;

    const timer = setTimeout(() => {
      setVisibleSteps((prev) => prev + 1);
    }, 700);

    return () => clearTimeout(timer);
  }, [visibleSteps]);

  return (
    <Card>
      <div className="mb-5 flex items-center gap-2">
        <BrainCircuit className="text-violet-400" size={22} />

        <h3 className="font-semibold">
          AI Analysis
        </h3>
      </div>

      <div className="space-y-4">
        {demoData.analysisSteps
          .slice(0, visibleSteps)
          .map((step) => (
            <div
              key={step}
              className="flex items-center gap-3"
            >
              <CheckCircle2
                size={18}
                className="text-emerald-400"
              />

              <span className="text-sm text-zinc-300">
                {step}
              </span>
            </div>
          ))}
      </div>
    </Card>
  );
}