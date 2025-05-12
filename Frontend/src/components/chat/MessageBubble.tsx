import styles from "./MessageBubble.module.css";

interface Props {
  content: string;
  isOwn: boolean;
}

export default function MessageBubble({ content, isOwn }: Props) {
  return (
    <div className={`${styles.bubble} ${isOwn ? styles.own : styles.other}`}>
      {content}
    </div>
  );
}

