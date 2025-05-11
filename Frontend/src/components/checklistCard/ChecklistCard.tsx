import React from "react";
import styles from "./ChecklistCard.module.css";

interface ChecklistCardProps {
  title: string;
  content: string[];
  isActive: boolean;
  isLast: boolean;
  onNext: () => void;
}

const ChecklistCard: React.FC<ChecklistCardProps> = ({
  title,
  content,
  isActive,
  isLast,
  onNext,
}) => {
  return (
    <div
      className={`${styles.card} ${isActive ? styles.activeCard : ""}`}
      onClick={isActive && !isLast ? onNext : undefined}
      style={{ cursor: isActive && !isLast ? "pointer" : "default" }}
    >
      <h2 className={styles.cardTitle}>
        {title}
        {isActive && !isLast && <span className={styles.arrow}>→</span>}
      </h2>
      {content.map((line, idx) =>
        line.startsWith("-") ? (
          <ul key={idx}>
            <li>{line.slice(1).trim()}</li>
          </ul>
        ) : (
          <p key={idx}>{line}</p>
        )
      )}
    </div>
  );
};

export default ChecklistCard;
