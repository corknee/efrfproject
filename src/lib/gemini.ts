import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI('AIzaSyAFN9pOKBLHodW9aOMr1WzYJuAVXLeo4Hs');
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

function cleanResponse(text: string): string {
  return text
    .replace(/```json/g, '')
    .replace(/```/g, '')
    .replace(/^\s*{\s*".*":\s*"/, '')
    .replace(/"\s*}\s*$/, '')
    .trim();
}

export async function generateAdCopy(product: string, target: string, tone: string): Promise<string> {
  const prompt = `Create a compelling ad copy for ${product}. 
    Target audience: ${target}
    Tone: ${tone}
    Include: headline, main copy, and call-to-action
    Format: Return only the ad copy text without any JSON formatting or extra markers.`;
  
  const result = await model.generateContent(prompt);
  const response = await result.response;
  return cleanResponse(response.text());
}

export async function generateLongFormContent(
  topic: string,
  type: 'blog' | 'article',
  wordCount: number,
  keywords: string[]
): Promise<string> {
  const prompt = `Write a ${type} about ${topic}.
    Word count: approximately ${wordCount} words
    Include these keywords: ${keywords.join(', ')}
    Format: Return only the content text with proper headings and paragraphs, without any JSON formatting or extra markers.`;
  
  const result = await model.generateContent(prompt);
  const response = await result.response;
  return cleanResponse(response.text());
}

export async function generateSocialPost(
  topic: string,
  platform: 'twitter' | 'instagram' | 'linkedin',
  goal: string
): Promise<{ content: string; hashtags: string[] }> {
  const prompt = `Create a ${platform} post about ${topic}.
    Goal: ${goal}
    Format: Return a JSON object with 'content' and 'hashtags' fields.
    Example: {"content": "Your post text here", "hashtags": ["tag1", "tag2"]}`;
  
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  
  try {
    const cleaned = text.replace(/```json\s*|\s*```/g, '');
    return JSON.parse(cleaned);
  } catch {
    return {
      content: cleanResponse(text),
      hashtags: [],
    };
  }
}

export async function generateVideoIdeas(videoUrl: string): Promise<string[]> {
  const prompt = `Based on this YouTube video: ${videoUrl}
    Generate 5 unique and engaging video ideas for the next videos.
    Consider the current video's topic and suggest related but diverse content ideas.
    Format: Return only a numbered list of ideas, one per line, without any extra formatting or markers.`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  
  return text
    .split('\n')
    .filter(line => line.trim())
    .map(line => line.replace(/^\d+\.\s*/, ''))
    .map(cleanResponse);
}

export async function generateVideoScript(
  idea: string,
  style: string,
  duration: number
): Promise<string> {
  const prompt = `Create a ${style} YouTube video script for: "${idea}"
    Target Duration: ${duration} minutes
    Include:
    - Engaging introduction
    - Main content sections
    - Call to action
    - Natural transitions
    Format: Return only the script text with clear sections and timing guidelines, without any JSON formatting or extra markers.`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  return cleanResponse(response.text());
}

export async function generateDocument(
  type: string,
  details: Record<string, string>,
  tone: string,
  style: string
): Promise<string> {
  const prompt = `Create a ${type} with a ${tone} tone and ${style} style.
    Details:
    ${Object.entries(details)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n')}
    
    Format: Return the document content with proper formatting and sections.
    Note: Use professional language and standard document structure.`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  return cleanResponse(response.text());
}