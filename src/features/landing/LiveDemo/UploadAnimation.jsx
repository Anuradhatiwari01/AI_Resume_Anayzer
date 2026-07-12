import { UploadCloud, FileText } from "lucide-react";
import Card from "../../../components/common/Card";
import { demoData } from "../../../data/demo";

export default function UploadAnimation() {
  return (
    <Card className="flex items-center gap-4">
      <div className="rounded-xl bg-violet-500/10 p-4">
        <UploadCloud className="text-violet-400" size={28} />
      </div>

      <div>
        <h3 className="font-semibold">
          {demoData.fileName}
        </h3>

        <div className="mt-2 flex items-center gap-2 text-sm text-zinc-400">
          <FileText size={16} />

          Resume Uploaded Successfully
        </div>
      </div>
    </Card>
  );
}