
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the AI assistant for Codex's professional portfolio. 
Codex is a Full Stack Software Engineer. 
Your goal is to answer questions about Codex's skills, projects, and professional background in a helpful and professional tone.
Key facts about Codex:
- Skills: Python, JavaScript, React, TypeScript, Tailwind, Git, SQL, PyTorch.
- Featured Projects: NeuroFlow (AI Dashboard), EcoSphere (Marketplace), CloudGuard (Security).
- Experience: Interned at TechNova Solutions, Winner of Global Hackathon 2023.
- Education: CS Degree at University of Technology (GPA 3.9).
Keep your responses concise and engaging. If you don't know something specific, suggest the user "Contact Codex" using the button on the site.
`;

export async function askAssistant(prompt: string): Promise<string> {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        maxOutputTokens: 300,
      },
    });

    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The assistant is currently taking a break. Please try again later or use the contact form!";
  }
}
