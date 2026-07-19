import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useResume } from "../../context/ResumeContext";
import { analyzeResume } from "../../services/analysisService";
import Container from "../../components/common/Container";

import UploadHeader from "./components/UploadHeader";
import UploadCard from "./components/UploadCard";
import UploadDropzone from "./components/UploadDropzone";
import SelectedFile from "./components/SelectedFile";
import AnalyzeButton from "./components/AnalyzeButton";

import useFileUpload from "./hooks/useFileUpload";

export default function UploadSection() {
  const navigate = useNavigate();
  const {
    setResumeFile,
    setAnalysis,
    history,
    setHistory,
  } = useResume();
  const {
    file,
    error,
    handleFile,
    removeFile,
  } = useFileUpload();

  const [loading, setLoading] = useState(false);

const onAnalyze = async () => {
    if (!file) return;

    setLoading(true);

    setResumeFile(file);

   const result = await analyzeResume(file);

setResumeFile(file);

setAnalysis(result);

setHistory((prev) => [
  {
    id: Date.now(),

    name: file.name,

    date: new Date().toLocaleString(),

    atsScore: result.atsScore,

    analysis: result,
  },

  ...prev,
]);

setLoading(false);

navigate("/dashboard");
};

  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-4xl">
          <UploadHeader />

          <UploadCard>
            <UploadDropzone
              file={file}
              error={error}
              handleFile={handleFile}
            />

            <SelectedFile
              file={file}
              removeFile={removeFile}
            />

            <AnalyzeButton
              file={file}
              loading={loading}
              onAnalyze={onAnalyze}
            />
          </UploadCard>
        </div>
      </Container>
    </section>
  );
}