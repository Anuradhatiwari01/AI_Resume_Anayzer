import { CheckCircle2 } from "lucide-react";

import Card from "../../../../components/common/Card";
import { previewData } from "../../../../data/dashboardPreview";

export default function SuggestionCard() {
  return (
    <Card>
      <h3 className="mb-5 text-lg font-semibold">
        AI Suggestions
      </h3>

      <div className="space-y-4">
        {previewData.suggestions.map((suggestion) => (
          <div
            key={suggestion}
            className="flex items-start gap-3"
          >
            <CheckCircle2
              size={18}
              className="mt-0.5 text-emerald-400"
            />

            <p className="text-sm text-zinc-300">
              {suggestion}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}