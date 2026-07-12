import Card from "../../../../components/common/Card";
import { previewData } from "../../../../data/dashboardPreview";

export default function SkillsCard() {
  return (
    <Card>
      <h3 className="mb-5 text-lg font-semibold">
        Skills
      </h3>

      <div className="space-y-4">
        {previewData.skills.map((skill) => (
          <div key={skill.name}>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm text-zinc-300">
                {skill.name}
              </span>

              <span className="text-xs text-zinc-500">
                {skill.value}%
              </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
              <div
                className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 transition-all duration-700"
                style={{
                  width: `${skill.value}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}