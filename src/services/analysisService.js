export async function analyzeResume(file) {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(
        "http://localhost:8000/analyze",
        {
            method: "POST",
            body: formData,
        }
    );

    if (!response.ok) {
        throw new Error(`Failed to analyze resume: ${response.statusText}`);
    }

    const result = await response.json();

    // Return analysis from backend
    return {
        atsScore: result.analysis.atsScore,
        jobMatch: result.analysis.jobMatch,
        resumeScore: result.analysis.resumeScore,
        extractedText: result.text,
        missingSkills: result.analysis.missingSkills,
        suggestions: result.analysis.suggestions,
        sections: result.analysis.sections,
    };
}