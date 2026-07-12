import clsx from "clsx";

export default function GlassCard({
  children,
  className = "",
}) {
  return (
    <div
      className={clsx(
        "rounded-3xl",
        "border border-white/10",
        "bg-white/5",
        "backdrop-blur-xl",
        "shadow-xl",
        "transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
}