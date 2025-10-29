"use client";

import { useEffect, useRef, useState } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  isLoading?: boolean;
}

interface ChatPanelProps {
  initialMessage?: string | null;
  projectId: string;
}

export default function ChatPanel({
  initialMessage,
  projectId,
}: ChatPanelProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialMessage) {
      const userMessage: Message = {
        id: Date.now().toString(),
        role: "user",
        content: initialMessage,
        timestamp: new Date(),
      };
      setMessages([userMessage]);

      // Simulate assistant response
      setTimeout(() => {
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content:
            "Building your miniapp... This will take a moment as we generate the smart contracts, UI, and deploy everything.",
          timestamp: new Date(),
          isLoading: true,
        };
        setMessages((prev) => [...prev, assistantMessage]);
        setIsLoading(true);

        // Simulate completion
        setTimeout(() => {
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === assistantMessage.id
                ? {
                    ...msg,
                    content:
                      "Your miniapp is ready! Check the preview on the right.",
                    isLoading: false,
                  }
                : msg
            )
          );
          setIsLoading(false);
        }, 3000);
      }, 500);
    }
  }, [initialMessage]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);

    // Simulate assistant response
    setIsLoading(true);
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "I'm processing your request and updating the miniapp...",
        timestamp: new Date(),
        isLoading: true,
      };
      setMessages((prev) => [...prev, assistantMessage]);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === assistantMessage.id
              ? {
                  ...msg,
                  content: "Updates applied! Your miniapp has been refreshed.",
                  isLoading: false,
                }
              : msg
          )
        );
        setIsLoading(false);
      }, 2000);
    }, 500);
  };

  return (
    <div className="flex-1 h-full flex flex-col bg-muted overflow-hidden">
      {/* Messages */}
      <div className="flex-1 overflow-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full text-muted-foreground">
            <div className="text-center">
              <p className="text-sm">Start by describing your miniapp idea</p>
            </div>
          </div>
        ) : (
          <>
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      {/* Input */}
      <div className="h-36 pb-4 px-2">
        <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
      </div>

      {/* <div className="border-t border-border p-4 bg-muted">
        <div className="bg-card rounded-xl border border-border shadow-sm h-20 flex items-center px-3">
        </div>
      </div> */}
    </div>
  );
}
