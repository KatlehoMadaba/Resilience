"use client";
import React, { useEffect } from "react";
import {
  useTestimonyActions,
  useTestimonyState,
} from "@/providers/testimony-provider";

const ViewTestimonies = () => {
  const { testimonies } = useTestimonyState();
  const { getAllTestimonies } = useTestimonyActions();
  
  useEffect(() => {
    if (!testimonies || testimonies.length === 0) {
      getAllTestimonies();
    }
  }, [testimonies]);

  return (
    <div>
      {testimonies && testimonies.length > 0 ? (
        testimonies.map((testimony, index) => (
          <div key={index}>
            <h3>{testimony.title || "untitled"}</h3>
            <p>{testimony.content || "no content avail"}</p>
            <p>{testimony.tags || "no content avail"}</p>
          </div>
        ))
      ) : (
        <p>No testimonies available.</p>
      )}
    </div>
  );
};

export default ViewTestimonies;
