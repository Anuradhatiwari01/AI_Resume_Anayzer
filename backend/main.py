from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import pdfplumber
from docx import Document
import io
from dotenv import load_dotenv
from openai_service import analyze_resume_with_ai

load_dotenv()

app = FastAPI(title="ResumeLens AI API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:5174", "http://localhost:5175", "http://localhost:5176", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def extract_text_from_pdf(file_content: bytes) -> str:
    """Extract text from PDF using pdfplumber"""
    text = ""
    try:
        with pdfplumber.open(io.BytesIO(file_content)) as pdf:
            for page in pdf.pages:
                page_text = page.extract_text()
                if page_text:
                    text += page_text + "\n"
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Error parsing PDF: {str(e)}")
    return text


def extract_text_from_docx(file_content: bytes) -> str:
    """Extract text from DOCX using python-docx"""
    text = ""
    try:
        doc = Document(io.BytesIO(file_content))
        for paragraph in doc.paragraphs:
            text += paragraph.text + "\n"
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Error parsing DOCX: {str(e)}")
    return text


@app.post("/analyze")
async def analyze_resume(file: UploadFile = File(...)):
    """
    Analyze uploaded resume file (PDF or DOCX)
    Extracts text and analyzes using OpenAI
    Returns comprehensive resume analysis
    """
    # Validate file type
    if not file.filename.lower().endswith(('.pdf', '.docx')):
        raise HTTPException(
            status_code=400,
            detail="Invalid file type. Only PDF and DOCX files are supported."
        )
    
    # Read file content
    file_content = await file.read()
    
    # Extract text based on file type
    try:
        if file.filename.lower().endswith('.pdf'):
            extracted_text = extract_text_from_pdf(file_content)
        elif file.filename.lower().endswith('.docx'):
            extracted_text = extract_text_from_docx(file_content)
        else:
            raise HTTPException(
                status_code=400,
                detail="Unsupported file format"
            )
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Error extracting text from file: {str(e)}"
        )
    
    # Analyze extracted text using OpenAI
    try:
        analysis = analyze_resume_with_ai(extracted_text)
        
        return {
            "filename": file.filename,
            "text": extracted_text,
            "analysis": analysis,
            "message": "Resume analyzed successfully"
        }
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Error analyzing resume: {str(e)}"
        )


@app.get("/")
async def root():
    return {
        "message": "ResumeLens AI API",
        "version": "1.0.0",
        "endpoints": {
            "analyze": "POST /analyze - Upload and analyze resume"
        }
    }


@app.get("/health")
async def health_check():
    return {"status": "healthy"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
