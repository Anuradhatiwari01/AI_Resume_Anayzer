import { Loader2, Sparkles } from "lucide-react";

export default function AnalyzeButton({
  file,
  loading,
  onAnalyze,
}) {
  return (
    <button
      disabled={!file || loading}
      onClick={onAnalyze}
      className="
      mt-8
      flex
      w-full
      items-center
      justify-center
      gap-3
      rounded-2xl
      bg-violet-600
      py-4
      text-lg
      font-semibold
      transition

      disabled:cursor-not-allowed
      disabled:opacity-50

      hover:bg-violet-700
      "
    >
      {loading ? (
        <>
          <Loader2 className="animate-spin" />
          Analyzing...
        </>
      ) : (
        <>
          <Sparkles />
          Analyze Resume
        </>
      )}
    </button>
  );
}