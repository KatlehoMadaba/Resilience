"use client"
import TestimonyForm from "@/components/testimony/TestimonyCreation";
import ViewTestimonies from "@/components/testimony/ViewTestimonies";
import React from "react";

const TestimonyPage = () => {
  return (
    <div>
      <TestimonyForm />
      <ViewTestimonies/>
    </div>
  );
};

export default TestimonyPage;
