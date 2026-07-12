import MainLayout from "../layouts/MainLayout";

import Button from "../components/common/Button";
import Card from "../components/common/Card";
import SectionTitle from "../components/common/SectionTitle";

export default function Landing() {
  return (
    <MainLayout>
      <div className="mx-auto max-w-6xl p-10">

        <SectionTitle
          title="AI Resume Analyzer"
          subtitle="Premium React Dashboard UI"
        />

        <Card className="space-y-5">

          <p>
            This is our reusable Card component.
          </p>

          <div className="flex gap-4 flex-wrap">

            <Button>
              Primary
            </Button>

            <Button variant="secondary">
              Secondary
            </Button>

            <Button variant="outline">
              Outline
            </Button>

            <Button variant="ghost">
              Ghost
            </Button>

          </div>

        </Card>

      </div>
    </MainLayout>
  );
}