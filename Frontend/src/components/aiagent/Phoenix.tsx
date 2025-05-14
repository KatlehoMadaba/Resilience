"use client"
import { useEffect, useRef } from "react";
const agentId = process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID!;
const Phoenix = () => {
  //creating a refrence to a div in the DOM ,which will act as a container for the widget and script
  //where the widget will go
  const containerRef = useRef<HTMLDivElement>(null);

  //running after mounting or changes
  useEffect(() => {
    // Create the widget element
    const widgetElement = document.createElement("elevenlabs-convai");
    //pasing agent-id to know which agent to load
    widgetElement.setAttribute("agent-id", agentId);

    // Creation of the widget element
    const scriptElement = document.createElement("script");
    scriptElement.src = "https://elevenlabs.io/convai-widget/index.js"; //AI widget
    scriptElement.async = true;
    scriptElement.type = "text/javascript";

    // Append elements to the container
    //script that run/renders the wiidgt
    if (containerRef.current) {
      containerRef.current.appendChild(widgetElement);
      containerRef.current.appendChild(scriptElement);
    }

    // Cleanup function to remove the elements when component unmounts
    //removes the both the widget and script from the DOM
    //Preventing memory leaks as well as duplicates if you navigate away and back
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

  return <div ref={containerRef}></div>;
};

export default Phoenix;
