
import { GoogleGenAI, Chat } from "@google/genai";
import { Message } from '../types';

let chat: Chat | null = null;

const initializeChat = (): Chat => {
    if (chat) {
        return chat;
    }
    
    if (!process.env.API_KEY) {
        throw new Error("API_KEY environment variable not set");
    }

    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    chat = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
            systemInstruction: `You are Mo-Pal, an expert AI business advisor for mobile money agents in Ghana. 
Your goal is to provide actionable, data-driven advice to help them grow their business. 
Analyze their questions and provide concise, practical recommendations. 
Keep your responses helpful, friendly, and under 100 words.
Base your analysis on common patterns in the Ghanaian mobile money market (e.g., peak hours, popular services like cash-out, airtime, bill payments).`,
        },
    });
    return chat;
};

export const generateChatResponse = async (prompt: string): Promise<string> => {
    try {
        const chatSession = initializeChat();
        const response = await chatSession.sendMessage({ message: prompt });
        return response.text;
    } catch (error) {
        console.error("Error generating chat response:", error);
        chat = null; // Reset chat on error
        return "I'm sorry, I'm having trouble connecting right now. Please try again later.";
    }
};
