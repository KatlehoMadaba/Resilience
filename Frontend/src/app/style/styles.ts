import { createStyles} from "antd-style";

export const useStyles = createStyles(({ token, css }) => ({
    layoutContainer: css`
    min-height: 100vh;
  `,

    sider: css`
    .ant-layout-sider-children {
      display: flex;
      flex-direction: column;
    }
  `,

    logo: css`
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.2);
  `,

    logoutContainer: css`
    margin-top: auto;
    padding: 16px;
    text-align: center;
  `,

    logoutButton: css`
    &.ant-btn {
      width: 80%;
    }
    
    &.ant-btn-collapsed {
      width: 100%;
    }
  `,

    header: css`
    padding: 0;
    background: ${token.colorBgContainer};
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  `,

    content: css`
    margin: 24px 16px;
    padding: 24px;
    min-height: 280px;
    background: ${token.colorBgContainer};
  `,

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
}));