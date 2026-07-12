import { CheckCircle2, Circle } from "lucide-react";

import Card from "../../../../components/common/Card";
import { previewData } from "../../../../data/dashboardPreview";

export default function TimelineCard() {
  return (
    <Card>
      <h3 className="mb-5 text-lg font-semibold">
        Analysis Timeline
      </h3>

      <div className="space-y-4">
        {previewData.timeline.map((step) => (
          <div
            key={step.title}
            className="flex items-center gap-3"
          >
            {step.done ? (
              <CheckCircle2
                size={18}
                className="text-emerald-400"
              />
            ) : (
              <Circle
                size={18}
                className="text-zinc-500"
              />
            )}

            <span
              className={
                step.done
                  ? "text-zinc-200"
                  : "text-zinc-500"
              }
            >
              {step.title}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}