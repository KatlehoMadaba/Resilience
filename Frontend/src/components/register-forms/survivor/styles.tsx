import { createStyles } from "antd-style";

export const useRegisterStyles = createStyles(({ css }) => ({
  formContainer: css`
    width: 100%;
    max-width: 500px;
  `,
  formIntro: css`
    margin-bottom: 24px;
  `,
  introText: css`
    font-size: 16px;
    color: #666;
    line-height: 1.6;
  `,
  form: css`
    width: 100%;
  `,
  submitItem: css`
    margin-bottom: 16px;
  `,
  submitButton: css`
    height: 48px;
    font-size: 16px;
    background-color: #9e9ac8;
    border-color: #9e9ac8;
    border-radius: 6px;
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
    transition: all 0.3s ease;

    &:hover,
    &:focus {
      background-color: #7b75aa;
      border-color: #7b75aa;
    }
  `,
}));
