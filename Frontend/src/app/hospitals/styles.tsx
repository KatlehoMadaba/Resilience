import { createStyles } from "antd-style";

const colors = {
  primary: "#9E9AC8",
};

export const useHospitalStyles = createStyles(({ css, token }) => {
  token.colorPrimary = colors.primary;

  return {
    page: css`
      padding: 2rem;
      min-height: 100vh;
      display: flex;
      justify-content: center; /* Center horizontally */
      align-items: center; /* Center vertically */
      background-color: ${token.colorBgLayout};
      flex-direction: column;
      text-align: center; /* Center text */
    `,
    title: css`
      color: ${token.colorPrimary};
      font-size: 2.7rem;
      font-weight: 800;
      margin-bottom: 2rem;
    `,
    subtitle: css`
      font-size: 1.2rem;
      color: ${token.colorTextSecondary};
      max-width: 650px;
      margin: 0 auto;
      line-height: 1.6;
    `,
    spinnerWrapper: css`
      display: flex;
      justify-content: center;
      margin: 2rem 0;
    `,
    error: css`
      color: ${token.colorError};
      font-size: 1rem;
      margin: 1rem 0;
      text-align: center;
    `,
    card: css`
      border-radius: 12px;
      padding: 1.5rem;
      background-color: ${token.colorBgContainer};
      border: 2px solid ${token.colorPrimary}; /* Purple border */
      transition: transform 0.3s ease;
      margin-bottom: 1rem;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

      &:hover {
        transform: translateY(-3px);
        border-color: ${token.colorPrimary}; /* Darker on hover */
      }
    `,
    cardTitle: css`
      color: ${token.colorPrimary};
      font-size: 1.4rem;
      font-weight: 700;
      margin-bottom: 1rem;
    `,
    info: css`
      font-size: 1.15rem;
      margin: 0.6rem 0;
    `,
    icon: css`
      font-size: 1.8rem;
      margin-right: 12px;
      color: ${token.colorPrimary};
    `,
    locationBox: css`
      border-radius: 12px;
      padding: 2rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      align-items: center;
      justify-content: center;
      height: 100%;
      background-color: ${token.colorInfo};
      color: ${token.colorText};
    `,
    locationIcon: css`
      font-size: 3.2rem;
    `,
    supportiveMessage: css`
      font-size: 1.15rem;
      text-align: center;
    `,
    nextButton: css`
      border-radius: 8px;
      padding: 0 2rem;
      height: 42px;
      font-weight: 600;
      background-color: ${token.colorPrimary};
      color: white;
      border: none;

      &:hover {
        background-color: ${token.colorPrimary}dd;
      }
    `,
  };
});
