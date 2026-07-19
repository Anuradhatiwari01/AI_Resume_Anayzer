import { useState } from "react";
import { validateFile } from "../utils/validation";

export default function useFileUpload() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const handleFile = (selectedFile) => {
    const validationError = validateFile(selectedFile);

    if (validationError) {
      setError(validationError);
      setFile(null);
      return;
    }

    setError("");
    setFile(selectedFile);
  };

  const removeFile = () => {
    setFile(null);
    setError("");
  };

  return {
    file,
    error,
    handleFile,
    removeFile,
  };
}