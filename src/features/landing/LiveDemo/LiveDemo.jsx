import Container from "../../../components/common/Container";
import SectionTitle from "../../../components/common/SectionTitle";

import UploadAnimation from "./UploadAnimation";
import AnalysisAnimation from "./AnalysisAnimation";
import ResultPreview from "./ResultPreview";

export default function LiveDemo() {
  return (
    <section className="py-28">
      <Container>
        <SectionTitle
          title="See ResumeLens AI in Action"
          subtitle="Experience how ResumeLens AI analyzes a resume from upload to intelligent insights."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          <UploadAnimation />

          <AnalysisAnimation />

          <ResultPreview />
        </div>
      </Container>
    </section>
  );
}