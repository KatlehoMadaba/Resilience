import { createStyles } from "antd-style";

export const useDashboardStyles = createStyles(({ css }) => ({
    content: css`
    background-color: #f9f5f0;
    padding: 2rem;
  `,
    welcomeCard: css`
    background-color: #9E9AC8;
    color: white;
    border: none;
    font-size: 1.1rem;
    margin-bottom: 2rem;
  `,
    moodSection: css`
    margin-top: 24px;
    text-align: center;
  `,
    emojiContainer: css`
    font-size: 32px;
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-top: 12px;
  `,
    emoji: css`
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.2);
    }
  `,
    quoteBox: css`
    margin: 24px auto;
    padding: 16px;
    background-color: #f0f2f5;
    border-radius: 8px;
    max-width: 600px;
    text-align: center;
  `,
    card: css`
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
      transform: translateY(-5px);
    }
  `,
    testimonyCard: css`
    height: 150px;
    background-color: #e6f7ff;
    background-size: cover;
    background-position: center;
    border-radius: 8px;
  `,
    journalCard: css`
    height: 150px;
    background-color: #fff7e6;
    background-size: cover;
    background-position: center;
    border-radius: 8px;
  `,
    chatCard: css`
    height: 150px;
    background-color: #fff1f0;
    background-size: cover;
    background-position: center;
    border-radius: 8px;
  `,
}));
