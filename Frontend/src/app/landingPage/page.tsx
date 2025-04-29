"use client";

import { useState } from "react";
import Image from "next/image";
import "./style.css";
export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="page-container">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="logo-container">
            <div className="logo-icon">
              <span className="icon">🌿</span>
            </div>
            <div className="logo-text">Resilience</div>
          </div>
          <button onClick={() => setModalOpen(true)} className="sos-button">
            🚨 SOS
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content">
            <Image
              //"https://images.unsplash.com/photo-1506744038136-46273834b3fb"
              src="/images/Landing-Page.jpeg"
              alt="Flowers"
              className="hero-image-circle"
              width={150}
              height={160}
            />
            <h1 className="hero-title">Welcome to Resilience</h1>
            <p className="hero-description">
              A safe space for healing and empowerment. Whether you are seeking
              immediate support or starting your journey, we are here for you.
            </p>
            <div className="button-group">
              <button className="login-button">Login</button>
              <button className="signup-button">
                Continue without Signing Up
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="features-section">
        <div className="container features-grid">
          <div className="feature-card">
            <h2 className="feature-title">Secure Login</h2>
            <p className="feature-description">
              Log in anonymously to access Resilience’s secure and confidential
              platform, free from judgment.
            </p>
          </div>
          <div className="feature-card">
            <h2 className="feature-title">Immediate Checklist</h2>
            <p className="feature-description">
              Receive a step-by-step guide on what to do in the critical hours
              and days.
            </p>
          </div>
          <div className="feature-card">
            <h2 className="feature-title">Medical Help & Reports</h2>
            <p className="feature-description">
              Helping you find a hospital nearby. Generate police reports if
              needed.
            </p>
          </div>
          <div className="feature-card">
            <h2 className="feature-title">Emotional Support</h2>
            <p className="feature-description">
              Work with our AI therapist to overcome feelings of panic and fear
              in a safe space.
            </p>
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalOpen && (
        <div className="modal" onClick={() => setModalOpen(false)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <span className="close" onClick={() => setModalOpen(false)}>
              &times;
            </span>
            <h2>Support Contacts</h2>
            <ul>
              <li>24/7 Toll Free Helpline: 08000 53277</li>
              <li>Voice Prompt: 134*7355#</li>
              <li>Ambulance: 10177</li>
              <li>Police: 10111</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
