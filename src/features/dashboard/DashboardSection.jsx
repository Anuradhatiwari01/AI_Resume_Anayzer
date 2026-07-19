import Container from "../../components/common/Container";

import ResumePreview from "./components/ResumePreview";
import ATSScoreCard from "./components/ATSScoreCard";
import JobMatchCard from "./components/JobMatchCard";
import MissingSkillsCard from "./components/MissingSkillsCard";
import SuggestionsCard from "./components/SuggestionsCard";
import SectionAnalysis from "./components/SectionAnalysis";

import HistoryList from "../history/components/HistoryList";

import { useResume } from "../../context/ResumeContext";

export default function DashboardSection() {
  const { resumeFile, analysis } = useResume();

  return (
    <section className="py-20">
      <Container>
        <h1 className="mb-12 text-4xl font-bold">
          Resume Analysis Dashboard
        </h1>

        {/* Top Section */}
        <div className="grid gap-6 lg:grid-cols-4">
          {/* Resume Preview */}
          <div className="lg:col-span-2">
            <ResumePreview file={resumeFile} />
          </div>

          {/* Score Cards */}
          <div className="space-y-6">
            <ATSScoreCard score={analysis?.atsScore ?? 0} />
            <JobMatchCard match={analysis?.jobMatch ?? 0} />
          </div>

          {/* Analysis History */}
          <HistoryList />
        </div>

        {/* Missing Skills + AI Suggestions */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <MissingSkillsCard
            skills={analysis?.missingSkills ?? []}
          />

          <SuggestionsCard
            suggestions={analysis?.suggestions ?? []}
          />
        </div>

        {/* Section Analysis */}
        <div className="mt-8">
          <SectionAnalysis
            sections={analysis?.sections ?? []}
          />
        </div>
      </Container>
    </section>
  );
}