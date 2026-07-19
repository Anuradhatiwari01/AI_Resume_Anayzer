import { createContext, useContext, useState } from "react";
import { useEffect } from "react";



const ResumeContext = createContext();

export function ResumeProvider({ children }) {
  const [resumeFile, setResumeFile] = useState(null);

  const [analysis, setAnalysis] = useState(null);

const [history, setHistory] = useState(() => {
  const saved = localStorage.getItem("resume-history");
  return saved ? JSON.parse(saved) : [];
});

useEffect(() => {
  localStorage.setItem(
    "resume-history",
    JSON.stringify(history)
  );
}, [history]);
  return (
    <ResumeContext.Provider
      value={{
        resumeFile,
        setResumeFile,
        analysis,
        setAnalysis,
        history,
        setHistory,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
}

export function useResume() {
  return useContext(ResumeContext);
}