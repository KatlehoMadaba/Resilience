import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
  bottomNav: css`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60px;
    background-color: #ffffff;
    border-top: 1px solid #e8e8e8;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  `,

  bottomNavButton: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 8px 12px;
    font-size: 20px;
    color: #595959;
    background: transparent;
    border: none;
    box-shadow: none;
    height: auto;
    min-width: 60px;

    &:hover {
      background: transparent;
      color: #1677ff;
    }

    .ant-btn-icon {
      margin: 0;
    }
  `,

  bottomNavButtonActive: css`
    color: #1677ff !important;
    background: transparent !important;
  `,

  bottomNavLabel: css`
    font-size: 12px;
    margin-top: 4px;
  `,
});
