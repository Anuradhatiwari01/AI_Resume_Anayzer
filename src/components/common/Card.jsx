import GlassCard from "../ui/GlassCard";

export default function Card({
  children,
  className = "",
}) {
  return (
    <GlassCard
      className={`p-6 ${className}`}
    >
      {children}
    </GlassCard>
  );
}