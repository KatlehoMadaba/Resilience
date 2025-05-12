import { createStyles } from "antd-style";

export const useSignUpPageStyles = createStyles(({ css }) => {
  return {
    page: css`
      min-height: 100vh;
      display: flex;
      background-color: #f5f7fa;
    `,
    main: css`
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 24px;
    `,
    authContainer: css`
      display: flex;
      width: 100%;
      max-width: 1200px;
      min-height: 650px;
      background-color: #fff;
      border-radius: 12px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    `,
    brandSide: css`
      flex: 1;
      background: linear-gradient(135deg, #a5d5e8 0%, #9e9ac8 100%);
      color: white;
      padding: 40px;
      display: flex;
      flex-direction: column;
      position: relative;
    `,
    logoWrapper: css`
      display: flex;
      align-items: center;
      margin-bottom: 32px;
    `,
    logoIcon: css`
      width: 42px;
      height: 42px;
      background-color: rgba(255, 255, 255, 0.2);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 12px;
    `,
    logoText: css`
      font-size: 32px;
      font-weight: 600;
      color: white;
    `,
    brandContent: css`
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 20px;
    `,
    brandTitle: css`
      color: white;
      font-size: 32px;
      margin-bottom: 16px;
    `,
    brandMessage: css`
      font-size: 16px;
      line-height: 1.6;
      margin-bottom: 30px;
      max-width: 400px;
    `,
    imageWrapper: css`
      display: flex;
      justify-content: center;
      margin-top: 24px;
    `,
    image: css`
      border-radius: 12px;
      object-fit: cover;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    `,
    formSide: css`
      flex: 1;
      background-color: white;
      padding: 48px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
    `,
    spinnerContainer: css`
      width: 100%;
    `,
    formCard: css`
      width: 100%;
      max-width: 480px;
    `,
    title: css`
      font-size: 28px;
      color: #333;
      margin-bottom: 8px;
      text-align: center;
    `,
    subtitle: css`
      font-size: 16px;
      color: #666;
      margin-bottom: 32px;
      text-align: center;
    `,
    heroLogo: css`
      width: 50px;
      height: 50px;
      display: block;
      margin: 0 auto;
      filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.15));
    `,
  };
});
