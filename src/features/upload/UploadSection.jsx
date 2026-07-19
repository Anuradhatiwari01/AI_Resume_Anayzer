import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    file,
    error,
    handleFile,
    removeFile,
  } = useFileUpload();

  const [loading, setLoading] = useState(false);

  const onAnalyze = async () => {
    if (!file) return;

    setLoading(true);

    // Temporary
    setTimeout(() => {
      setLoading(false);
      navigate("/dashboard");
    }, 1800);
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