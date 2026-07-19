import os
from typing import Dict, Any
import json

# Try to import AI provider libraries
try:
    from groq import Groq
    GROQ_AVAILABLE = True
except ImportError:
    GROQ_AVAILABLE = False

try:
    import google.generativeai as genai
    GEMINI_AVAILABLE = True
except ImportError:
    GEMINI_AVAILABLE = False

try:
    from openai import OpenAI
    OPENAI_AVAILABLE = True
except ImportError:
    OPENAI_AVAILABLE = False


def get_system_prompt() -> str:
    """Return the system prompt for resume analysis"""
    return """You are an expert resume analyst and ATS (Applicant Tracking System) specialist. 
Analyze the provided resume text and return a comprehensive analysis in JSON format with the following structure:

{
    "atsScore": number (0-100),
    "resumeScore": string (e.g., "Excellent", "Good", "Fair", "Poor"),
    "jobMatch": number (0-100),
    "missingSkills": array of strings (skills that should be included),
    "strengths": array of strings (what the resume does well),
    "weaknesses": array of strings (areas for improvement),
    "sections": array of objects with "name" and "score" (0-100),
    "suggestions": array of strings (specific actionable improvements)
}

Evaluate based on:
- ATS compatibility (keywords, formatting, structure)
- Content quality (achievements, quantifiable results)
- Section completeness (summary, experience, education, skills)
- Industry relevance and modern best practices
- Clarity and impact"""


def analyze_with_groq(resume_text: str) -> Dict[str, Any]:
    """Analyze resume using Groq API"""
    if not GROQ_AVAILABLE or not os.getenv("GROQ_API_KEY"):
        return None
    
    try:
        client = Groq(api_key=os.getenv("GROQ_API_KEY"))
        response = client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[
                {"role": "system", "content": get_system_prompt()},
                {"role": "user", "content": f"Analyze this resume:\n\n{resume_text}"}
            ],
            temperature=0.7,
            response_format={"type": "json_object"}
        )
        analysis_json = json.loads(response.choices[0].message.content)
        return validate_and_format_analysis(analysis_json)
    except Exception as e:
        print(f"Groq API Error: {str(e)}")
        return None


def analyze_with_gemini(resume_text: str) -> Dict[str, Any]:
    """Analyze resume using Google Gemini API"""
    if not GEMINI_AVAILABLE or not os.getenv("GOOGLE_API_KEY"):
        return None
    
    try:
        genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))
        model = genai.GenerativeModel('gemini-1.5-flash')
        
        response = model.generate_content(
            f"{get_system_prompt()}\n\nAnalyze this resume:\n\n{resume_text}",
            generation_config=genai.GenerationConfig(
                response_mime_type="application/json"
            )
        )
        
        analysis_json = json.loads(response.text)
        return validate_and_format_analysis(analysis_json)
    except Exception as e:
        print(f"Gemini API Error: {str(e)}")
        return None


def analyze_with_openai(resume_text: str) -> Dict[str, Any]:
    """Analyze resume using OpenAI API"""
    if not OPENAI_AVAILABLE or not os.getenv("OPENAI_API_KEY"):
        return None
    
    try:
        client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
        response = client.chat.completions.create(
            model="gpt-4o",
            messages=[
                {"role": "system", "content": get_system_prompt()},
                {"role": "user", "content": f"Analyze this resume:\n\n{resume_text}"}
            ],
            temperature=0.7,
            response_format={"type": "json_object"}
        )
        analysis_json = json.loads(response.choices[0].message.content)
        return validate_and_format_analysis(analysis_json)
    except Exception as e:
        print(f"OpenAI API Error: {str(e)}")
        return None


def validate_and_format_analysis(analysis_json: Dict[str, Any]) -> Dict[str, Any]:
    """Validate and ensure all required fields exist in analysis"""
    return {
        "atsScore": analysis_json.get("atsScore", 75),
        "resumeScore": analysis_json.get("resumeScore", "Good"),
        "jobMatch": analysis_json.get("jobMatch", 70),
        "missingSkills": analysis_json.get("missingSkills", []),
        "strengths": analysis_json.get("strengths", []),
        "weaknesses": analysis_json.get("weaknesses", []),
        "sections": analysis_json.get("sections", []),
        "suggestions": analysis_json.get("suggestions", [])
    }


def analyze_resume_with_ai(resume_text: str) -> Dict[str, Any]:
    """
    Analyze resume text using available AI providers
    Priority: Groq > Google Gemini > OpenAI > Fallback
    Returns structured analysis matching frontend model
    """
    
    # Try Groq first (fast, free tier available)
    print("Attempting Groq analysis...")
    result = analyze_with_groq(resume_text)
    if result:
        print("✓ Groq analysis successful")
        return result
    
    # Try Google Gemini second (free tier available)
    print("Attempting Gemini analysis...")
    result = analyze_with_gemini(resume_text)
    if result:
        print("✓ Gemini analysis successful")
        return result
    
    # Try OpenAI third (paid)
    print("Attempting OpenAI analysis...")
    result = analyze_with_openai(resume_text)
    if result:
        print("✓ OpenAI analysis successful")
        return result
    
    # Use fallback if no provider is available or all fail
    print("✓ Using fallback analysis (no AI provider configured)")
    return get_fallback_analysis()


def get_fallback_analysis() -> Dict[str, Any]:
    """Return fallback analysis when no AI provider is available"""
    return {
        "atsScore": 75,
        "resumeScore": "Good",
        "jobMatch": 70,
        "missingSkills": [
            "Quantifiable achievements",
            "Industry-specific keywords",
            "Technical certifications"
        ],
        "strengths": [
            "Clear structure",
            "Relevant experience",
            "Good formatting"
        ],
        "weaknesses": [
            "Lacks specific metrics",
            "Could improve summary section",
            "Missing some key skills"
        ],
        "sections": [
            {"name": "Summary", "score": 70},
            {"name": "Experience", "score": 75},
            {"name": "Education", "score": 80},
            {"name": "Skills", "score": 72}
        ],
        "suggestions": [
            "Add quantifiable achievements to experience",
            "Include more industry-specific keywords",
            "Strengthen professional summary",
            "Add relevant certifications"
        ]
    }
