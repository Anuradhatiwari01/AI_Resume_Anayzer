import { FileText, Trash2 } from "lucide-react";

export default function SelectedFile({
  file,
  removeFile,
}) {
  if (!file) return null;

  const size = (file.size / 1024 / 1024).toFixed(2);

  return (
    <div
      className="
      mt-8
      flex
      items-center
      justify-between
      rounded-2xl
      border
      border-zinc-700
      bg-zinc-900
      p-5
      "
    >
      <div className="flex items-center gap-4">
        <FileText className="text-violet-500" />

        <div>
          <h4 className="font-medium">{file.name}</h4>

          <p className="text-sm text-zinc-400">
            {size} MB
          </p>
        </div>
      </div>

      <button
        onClick={removeFile}
        className="text-red-500 transition hover:scale-110"
      >
        <Trash2 />
      </button>
    </div>
  );
}