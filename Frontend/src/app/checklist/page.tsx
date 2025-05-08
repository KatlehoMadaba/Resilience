'use client';

import { useState } from 'react';
import { Button } from 'antd';
import styles from './checklist.module.css';
import Link from "next/link";
const steps = [
  {
    title: '🛡 Step 1: Get to a Safe Place',
    content: [
      'Move safely comes first.',
      'Near somewhere safe as soon as you can. Call someone you trust. Feel comfortable.'
    ],
  },
  {
    title: '✔ Step 2: If You Have NOT Washed or Changed',
    content: [
      'As hard as it feels, try not to wash, change clothes, or clean up yet.',
      'Wrap your dirty clothes you were wearing in a clean paper bag if you do change.'
    ],
  },
  {
    title: '🧼 Step 3: If You Have Already Washed or Changed',
    content: [
      'It’s okay.',
      'You can still be provided with medical help. Discarded evidence is still possible.'
    ],
  },
  {
    title: '🏥 Step 4: I Can Help You Find Medical Attention',
    content: [
      'This step can help you:',
      '- Find hospitals and clinics with rape kits.',
      '- Connect with trained counselors and support services.',
      '- Learn your options in a safe, private space.',
      'Take your time. Every step takes bravery.',
    ],
  },
  {
    title: '📝 Step 5: Decide if You Want to Report the Assault',
    content: [
      'This step can help you:',
      '- Find help before you file a report or talk to the next step.',
      '- It will help you find the nearest police station.',
      "- If you don’t report immediately, it’s okay."
    ],
  },
  {
    title: '🌻 Step 6: Remember: It Was Never Your Fault',
    content: [
      'What happened wasn’t your fault — no matter the circumstances.',
      'You are strong. You are worthy. You deserve peace.',
      'In the next step, you can speak to a therapist or advocate.'
    ],
  },
];

export default function ChecklistPage() {
  const [currentStep, setCurrentStep] = useState(0);
  // const [loading,setLoading]=useState(true)
  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };
  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>You Are Not Alone</h1>
        <p className={styles.subtitle}>
          We are here to support you — every step of the way. This checklist will gently guide you through what to do next after a traumatic experience.
        </p>
      </div>

      <div className={styles.grid}>
        {steps.slice(0, currentStep + 1).map((step, index) => (
          <div
            key={index}
            className={styles.card}
            onClick={handleNextStep}
            style={{ cursor: currentStep < steps.length - 1 ? 'pointer' : 'default' }}
          >
            <h2 className={styles.cardTitle}>
              {step.title}
              {index === currentStep && currentStep < steps.length - 1 && (
                <span className={styles.arrow}>→</span>
              )}
            </h2>
            {step.content.map((line, idx) =>
              line.startsWith('-') ? (
                <ul key={idx}>
                  <li>{line.slice(1).trim()}</li>
                </ul>
              ) : (
                <p key={idx}>{line}</p>
              )
            )}
          </div>
        ))}
      </div>

      {currentStep === steps.length - 1 && (
        <Link href="/hospitals">
          <Button type="primary" className={styles.nextButton}>Next</Button>
        </Link>
        
      )}
    </main>
  );
}
