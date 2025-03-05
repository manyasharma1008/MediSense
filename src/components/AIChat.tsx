import { useState, useRef, useEffect } from 'react';
import { Send, Bot, Loader2 } from 'lucide-react';
import { useAI } from '../context/AIContext';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  category?: string;
  aiResponse?: {
    products?: Array<{
      name: string;
      description: string;
      price: number;
      usage: string;
    }>;
    specialists?: Array<{
      type: string;
      reason: string;
      priority: 'high' | 'medium' | 'low';
    }>;
    lifestyle?: string[];
  };
}

export default function AIChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [category, setCategory] = useState('medical');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { isLoading, getAIResponse } = useAI();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Add initial welcome message
  useEffect(() => {
    const welcomeMessage: Message = {
      id: 'welcome',
      type: 'ai',
      content: 'Hello! I\'m your AI health assistant. How can I help you today? You can ask me about medical concerns, skincare advice, or wellness tips.',
    };
    setMessages([welcomeMessage]);
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
      category
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');

    try {
      const aiResponse = await getAIResponse(input, category);
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: aiResponse.recommendation,
        aiResponse: {
          products: aiResponse.products,
          specialists: aiResponse.specialists,
          lifestyle: aiResponse.lifestyle
        }
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error getting AI response:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: 'I apologize, but I encountered an error. Please try again.'
      };

      setMessages(prev => [...prev, errorMessage]);
    }
  };

  return (
    <div className="flex flex-col h-[600px] bg-white rounded-xl shadow-xl overflow-hidden">
      {/* Chat Header */}
      <div className="p-4 border-b bg-gradient-to-r from-blue-600 to-blue-700 rounded-t-xl flex-shrink-0">
        <div className="flex items-center space-x-2">
          <Bot className="h-6 w-6 text-white" />
          <h2 className="text-lg font-semibold text-white">AI Health Assistant</h2>
        </div>
      </div>

      {/* Category Selection */}
      <div className="flex space-x-2 p-4 bg-gray-50 flex-shrink-0">
        <button
          onClick={() => setCategory('medical')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            category === 'medical' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Medical
        </button>
        <button
          onClick={() => setCategory('skincare')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            category === 'skincare' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Skincare
        </button>
        <button
          onClick={() => setCategory('wellness')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            category === 'wellness' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Wellness
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map(message => (
          <div
            key={message.id}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-4 ${
                message.type === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-900 shadow-md'
              }`}
            >
              <p>{message.content}</p>
              
              {message.aiResponse && (
                <div className="mt-4 space-y-4">
                  {message.aiResponse.products && message.aiResponse.products.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-900">Recommended Products:</h4>
                      <div className="space-y-2">
                        {message.aiResponse.products.map((product, index) => (
                          <div key={index} className="bg-gray-50 rounded-lg p-3 shadow-sm">
                            <div className="flex justify-between items-start">
                              <div>
                                <p className="font-medium text-gray-900">{product.name}</p>
                                <p className="text-sm text-gray-600">{product.description}</p>
                                <p className="text-sm text-gray-600">Usage: {product.usage}</p>
                              </div>
                              <span className="font-semibold text-blue-600">₹{product.price}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {message.aiResponse.specialists && message.aiResponse.specialists.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-900">Recommended Specialists:</h4>
                      <div className="space-y-2">
                        {message.aiResponse.specialists.map((specialist, index) => (
                          <div key={index} className="bg-gray-50 rounded-lg p-3 shadow-sm">
                            <p className="font-medium text-gray-900">{specialist.type}</p>
                            <p className="text-sm text-gray-600">{specialist.reason}</p>
                            <p className="text-sm text-gray-600">Priority: {specialist.priority}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {message.aiResponse.lifestyle && message.aiResponse.lifestyle.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-900">Lifestyle Recommendations:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {message.aiResponse.lifestyle.map((tip, index) => (
                          <li key={index} className="text-sm text-gray-600">{tip}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 border-t bg-white flex-shrink-0">
        <div className="flex space-x-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder={`Ask about ${category}...`}
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[44px]"
          >
            {isLoading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <Send className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}