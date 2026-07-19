import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud } from "lucide-react";

export default function UploadDropzone({
  file,
  error,
  handleFile,
}) {
  const onDrop = useCallback(
    (acceptedFiles) => {
      if (!acceptedFiles.length) return;

      handleFile(acceptedFiles[0]);
    },
    [handleFile]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      "application/pdf": [".pdf"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".docx"],
    },
  });

  return (
    <div>
      <div
        {...getRootProps()}
        className={`
        cursor-pointer
        rounded-3xl
        border-2
        border-dashed
        p-14
        transition-all
        duration-300
        text-center

        ${
          isDragActive
            ? "border-violet-500 bg-violet-500/10"
            : "border-zinc-700 hover:border-violet-500"
        }
        `}
      >
        <input {...getInputProps()} />

        <UploadCloud
          size={60}
          className="mx-auto mb-5 text-violet-500"
        />

        <h3 className="text-2xl font-semibold">
          {isDragActive
            ? "Drop your resume"
            : "Drag & Drop Resume"}
        </h3>

        <p className="mt-3 text-zinc-400">
          PDF or DOCX • Maximum 5 MB
        </p>

        <button
          type="button"
          className="mt-8 rounded-xl bg-violet-600 px-6 py-3 font-medium transition hover:bg-violet-700"
        >
          Browse Files
        </button>
      </div>

      {error && (
        <p className="mt-4 text-center text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}