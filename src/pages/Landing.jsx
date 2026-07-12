import MainLayout from "../layouts/MainLayout";

export default function Landing() {
  return (
    <MainLayout>
      <main className="flex min-h-screen items-center justify-center">
        <h1 className="text-6xl font-bold">
          AI Resume Analyzer
        </h1>
      </main>
    </MainLayout>
  );
}