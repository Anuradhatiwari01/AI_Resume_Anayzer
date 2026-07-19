import { FileText } from "lucide-react";

export default function ResumePreview({ file }) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6 h-full">
      <h2 className="mb-5 text-xl font-semibold">
        Resume Preview
      </h2>

      {file ? (
        <div className="flex h-80 flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-700">
          <FileText size={64} className="text-violet-500" />

          <p className="mt-4 font-medium">
            {file.name}
          </p>

          <p className="text-sm text-zinc-400">
            Preview will appear here
          </p>
        </div>
      ) : (
        <div className="flex h-80 items-center justify-center rounded-2xl border border-dashed border-zinc-700 text-zinc-500">
          No Resume Uploaded
        </div>
      )}
    </div>
  );
}