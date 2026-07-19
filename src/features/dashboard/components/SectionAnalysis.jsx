export default function SectionAnalysis({ sections }) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6">
      <h2 className="mb-8 text-xl font-semibold">
        Resume Section Analysis
      </h2>

      <div className="space-y-6">
        {sections.map((section) => (
          <div key={section.name}>
            <div className="mb-2 flex justify-between">
              <span>{section.name}</span>

              <span>{section.score}%</span>
            </div>

            <div className="h-3 rounded-full bg-zinc-800">
              <div
                className="h-3 rounded-full bg-violet-500 transition-all"
                style={{
                  width: `${section.score}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}