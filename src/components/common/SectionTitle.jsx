export default function SectionTitle({
  title,
  subtitle,
}) {
  return (
    <div className="mb-10">
      <h2 className="text-4xl font-bold">
        {title}
      </h2>

      <p className="mt-3 text-zinc-400">
        {subtitle}
      </p>
    </div>
  );
}