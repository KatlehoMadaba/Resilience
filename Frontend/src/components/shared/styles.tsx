import { createStyles } from "antd-style";

export const useBottomNavStyles = createStyles(({ token, css }) => ({
  bottomNav: css`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${token.colorBgContainer};
    border-top: 1px solid ${token.colorBorderSecondary};
    box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 64px;
    padding: 0 8px;
    z-index: 100;
  `,

  navButton: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    min-width: 0;
    height: 100%;

    .anticon {
      font-size: 20px;
    }

    .button-text {
      margin-top: 4px;
      font-size: 12px;
    }
  `,

  logoutButton: css`
    color: ${token.colorError};

    &:hover {
      background-color: ${token.colorErrorBg};
    }
  `,

  popconfirmContainer: css`
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
  `,
}));
