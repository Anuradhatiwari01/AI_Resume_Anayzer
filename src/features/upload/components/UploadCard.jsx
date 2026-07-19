export default function UploadCard({ children }) {
  return (
    <div
      className="
      rounded-3xl
      border
      border-zinc-800
      bg-zinc-900/40
      backdrop-blur-xl
      p-8
      "
    >
      {children}
    </div>
  );
}