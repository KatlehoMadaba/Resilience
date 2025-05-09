"use client"
import { useEffect, useRef } from "react";

interface ElevenLabsConvAIProps {
  agentId: string;
  className?: string;
}

const Phoenix = ({ agentId, className = "" }: ElevenLabsConvAIProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create the widget elements
    const widgetElement = document.createElement("elevenlabs-convai");
    widgetElement.setAttribute("agent-id", agentId);

    // Create the script element
    const scriptElement = document.createElement("script");
    scriptElement.src = "https://elevenlabs.io/convai-widget/index.js";
    scriptElement.async = true;
    scriptElement.type = "text/javascript";

    // Append elements to the container
    if (containerRef.current) {
      containerRef.current.appendChild(widgetElement);
      containerRef.current.appendChild(scriptElement);
    }

    // Cleanup function to remove the elements when component unmounts
    return () => {
      if (containerRef!.current) {
        if (containerRef!.current.contains(widgetElement)) {
          containerRef!.current.removeChild(widgetElement);
        }
        if (containerRef!.current.contains(scriptElement)) {
          containerRef!.current.removeChild(scriptElement);
        }
      }
    };
  }, [agentId]);

  return <div ref={containerRef} className={className}></div>;
};

export default Phoenix;
