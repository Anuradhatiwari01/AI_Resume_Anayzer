import Card from "../../../../components/common/Card";
import { previewData } from "../../../../data/dashboardPreview";

export default function ATSCard() {
  return (
    <Card className="flex h-full flex-col items-center justify-center text-center">
      <p className="text-sm text-zinc-400">
        ATS Score
      </p>

      <h2 className="mt-3 text-5xl font-bold text-violet-400">
        {previewData.atsScore}%
      </h2>

      <span className="mt-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
        Excellent
      </span>
    </Card>
  );
}