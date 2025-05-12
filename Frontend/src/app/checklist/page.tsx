"use client";
// ChecklistPage.tsx
import { useState } from "react";
import { Button } from "antd";
import Link from "next/link";
import ChecklistCard from "@/components/checklistCard/ChecklistCard";
import styles from "./checklist.module.css";

const steps = [
  {
    title: "🛡 Step 1: Get to a Safe Place",
    content: [
      "Move safely comes first.",
      " Go near somewhere safe as soon as you can. Call someone you trust. Feel comfortable.",
      "Use the SOS button to call for the support contacts to call",
    ],
  },
  {
    title: "✔ Step 2: If You Have NOT Washed or Changed",
    content: [
      "As hard as it feels, try not to wash, change clothes, or clean up yet.",
      "Wrap your dirty clothes you were wearing in a clean paper bag if you do change.",
    ],
  },
  {
    title: "🧼 Step 3: If You Have Already Washed or Changed",
    content: [
      "It is okay.",
      "You can still be provided with medical help. Discarded evidence is still possible.",
    ],
  },
  {
    title: "🏥 Step 4: I Can Help You Find Medical Attention",
    content: [
      "This step can help you:",
      "- Find hospitals and clinics with rape kits after you compelte the checklist.",
      "-I will also help you find the nearest Police Station around you",
      "Take your time. Every step takes bravery.",
    ],
  },
  {
    title: "📝 Step 5: Decide if You Want to Report the Assault",
    content: [
      "After you have recieved medical attention",
      "- I can help you create a  police report or talk to the next step.",
      "- If you do not report immediately, it is okay.",
    ],
  },
  {
    title: "🌻 Step 6: Remember: It Was Never Your Fault",
    content: [
      "What happened was not your fault — no matter the circumstances.",
      "You are strong. You are worthy. You deserve peace.",
      "In the next step, you can speak to a therapist or advocate.",
    ],
  },
];

export default function ChecklistPage() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#f0f6fb",
        minHeight: "100vh",
        paddingTop: "2rem",
      }}
    >
      <main className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>You Are Not Alone</h1>
          <p className={styles.subtitle}>
            We are here to support you — every step of the way. This checklist
            will gently guide you through what to do next after a traumatic
            experience.
          </p>
        </div>

        <div className={styles.grid}>
          {steps.slice(0, currentStep + 1).map((step, index) => (
            <ChecklistCard
              key={index}
              title={step.title}
              content={step.content}
              isActive={index === currentStep}
              isLast={currentStep === steps.length - 1}
              onNext={handleNextStep}
            />
          ))}
        </div>

        {currentStep === steps.length - 1 && (
          <Link href="/hospitals">
            <Button type="primary" className={styles.nextButton}>
              Next
            </Button>
          </Link>
        )}
      </main>
    </div>
  );
}
