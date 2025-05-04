// testGemini.js
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const MODEL = 'gemini-2.5-flash';

const prompt = `
Explique brevemente como funciona o processo de aprendizagem de máquina.
`;

async function testGemini() {
  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Erro na resposta Gemini:', data);
      return;
    }

    const content = data.candidates?.[0]?.content?.parts?.[0]?.text;
    console.log('\nResposta do Gemini:\n', content);
  } catch (error) {
    console.error('Erro ao testar Gemini:', error);
  }
}

testGemini();
