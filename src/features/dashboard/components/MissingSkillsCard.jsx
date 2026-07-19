import { TriangleAlert } from "lucide-react";

export default function MissingSkillsCard({ skills }) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6">
      <div className="flex items-center gap-3">
        <TriangleAlert className="text-yellow-500" />
        <h2 className="text-xl font-semibold">
          Missing Skills
        </h2>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-yellow-500/10 px-4 py-2 text-sm text-yellow-400"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}