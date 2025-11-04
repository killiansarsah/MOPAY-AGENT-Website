import React, { useState, useRef, useEffect } from 'react';
import { Message } from '../types';
import { generateChatResponse } from '../services/geminiService';

const AIAssistant: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([
        {
            role: 'model',
            content: "Hi there! I'm Mo-Pal, your AI business assistant. How can I help you grow your business today?",
        },
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isLoading]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage: Message = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        const response = await generateChatResponse(input);
        const modelMessage: Message = { role: 'model', content: response };
        
        setMessages(prev => [...prev, modelMessage]);
        setIsLoading(false);
    };

    return (
        <section className="section-padding bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="text-center mb-16 fade-in-up">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Your Personal
                        <span className="text-violet-500"> Business Assistant</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Ask our AI, Mo-Pal, for tips and advice on how to improve your mobile money business.
                    </p>
                </div>

                <div className="glass-effect shadow-2xl rounded-2xl overflow-hidden fade-in-up">
                    <div className="p-6 h-96 overflow-y-auto bg-white/30 space-y-4">
                        {messages.map((msg, index) => (
                             <div key={index} className={`flex items-end gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                {msg.role === 'model' && <div className="w-8 h-8 rounded-full bg-violet-500 text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">AI</div>}
                                <div className={`max-w-md p-3 rounded-2xl ${msg.role === 'user' ? 'bg-violet-500 text-white rounded-br-none' : 'bg-gray-200 text-gray-800 rounded-bl-none'}`}>
                                    <p className="text-sm">{msg.content}</p>
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex items-end gap-2 justify-start">
                                <div className="w-8 h-8 rounded-full bg-violet-500 text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">AI</div>
                                <div className="max-w-md p-3 rounded-2xl bg-gray-200">
                                    <div className="typing-indicator">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                    <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200/50 bg-white/50">
                        <div className="flex items-center space-x-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask about business hours, popular services, etc."
                                className="w-full p-3 bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400"
                                disabled={isLoading}
                            />
                            <button 
                                type="submit" 
                                className="bg-violet-500 text-white rounded-lg px-5 py-3 font-semibold hover:bg-violet-600 disabled:bg-violet-300 disabled:cursor-not-allowed transition-colors cta-button"
                                disabled={isLoading || !input.trim()}
                            >
                                <i className="fas fa-paper-plane"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AIAssistant;
