const MAX_SIZE = 5 * 1024 * 1024;

const SUPPORTED_TYPES = [
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export function validateFile(file) {
  if (!file) {
    return "Please select a file.";
  }

  if (!SUPPORTED_TYPES.includes(file.type)) {
    return "Only PDF and DOCX files are allowed.";
  }

  if (file.size > MAX_SIZE) {
    return "Maximum file size is 5 MB.";
  }

  return null;
}