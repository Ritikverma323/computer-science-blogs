'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface ChatBotProps {
  className?: string;
}

const ChatBot: React.FC<ChatBotProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m your CS Blog assistant. I can help you find articles about data structures, algorithms, networks, operating systems, and more. What would you like to learn about?',
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const predefinedResponses: Record<string, string> = {
    'data structures': 'Great! I can help you with data structures. We have articles covering arrays, linked lists, stacks, queues, trees, and graphs. Which specific data structure interests you?',
    'algorithms': 'Algorithms are fascinating! Our blog covers sorting algorithms, searching algorithms, graph algorithms, and dynamic programming. What type of algorithm would you like to explore?',
    'networks': 'Network topics are available! We cover network models, protocols, security, devices, and network types. Check out our networking section for detailed articles.',
    'operating systems': 'OS concepts are important! We have content on process management, memory management, file systems, and deadlock handling. Ubuntu-specific topics are also covered.',
    'queues': 'Queues follow the FIFO (First In, First Out) principle. They\'re used in scheduling, breadth-first search, and handling requests. Check our data structures section for detailed queue implementations.',
    'deadlocks': 'Deadlocks occur when processes wait indefinitely for resources. Our OS section covers deadlock prevention, avoidance, detection, and recovery strategies.',
    'security': 'Network security is crucial! We cover topics like encryption, authentication, firewalls, and secure protocols. Visit our network security articles for more details.',
    'hello': 'Hello! Welcome to our Computer Science blog. I can help you find articles on various CS topics. What would you like to learn about today?',
    'help': 'I can assist you with finding articles on:\n• Data Structures (arrays, queues, stacks, trees)\n• Algorithms (sorting, searching, graph algorithms)\n• Networks (protocols, security, models)\n• Operating Systems (processes, memory, deadlocks)\n• And much more! Just ask about any topic.',
  };

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Check for exact matches first
    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }

    // Check for common programming terms
    if (lowerMessage.includes('programming') || lowerMessage.includes('coding')) {
      return 'Programming concepts are covered throughout our blog! From basic data structures to advanced algorithms and system design. What specific programming topic interests you?';
    }

    if (lowerMessage.includes('tutorial') || lowerMessage.includes('learn')) {
      return 'Our tutorials cover fundamental CS concepts with practical examples. Browse by category or let me know what specific topic you\'d like to learn!';
    }

    if (lowerMessage.includes('beginner')) {
      return 'Perfect for beginners! Start with our basic data structures like arrays and linked lists, then progress to algorithms and system concepts. What\'s your current experience level?';
    }

    // Default response
    return 'I\'d be happy to help! Could you be more specific about what CS topic you\'re interested in? Try asking about data structures, algorithms, networks, or operating systems.';
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputValue),
        isBot: true,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className={`chatbot-container ${className}`}>
      {/* Chat Toggle Button */}
      <button
        className={`chatbot-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle chatbot"
      >
        {isOpen ? (
          <span style={{ fontSize: '24px', fontWeight: 'bold' }}>×</span>
        ) : (
          <span style={{ fontSize: '24px' }}>💬</span>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>CS Blog Assistant</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="chatbot-close"
              aria-label="Close chatbot"
            >
              ×
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`message ${message.isBot ? 'bot' : 'user'}`}
              >
                <div className="message-content">
                  {message.text}
                </div>
                <div className="message-time">
                  {message.timestamp.toLocaleTimeString([], { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="message bot typing">
                <div className="message-content">
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

          <div className="chatbot-input">
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about CS topics..."
              rows={1}
              className="chatbot-textarea"
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim()}
              className="chatbot-send"
              aria-label="Send message"
            >
              <span style={{ fontSize: '16px', fontWeight: 'bold' }}>→</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;