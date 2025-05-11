import React from "react";
import { useRouter } from "next/navigation";
import { Button, Popconfirm } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { useBottomNavStyles } from "./styles";

const BottomNav = ({ navItems, onLogout }) => {
  const router = useRouter();
  const { styles } = useBottomNavStyles();

  // Only display the first 5 nav items to ensure they fit on mobile
  const displayedNavItems = navItems.slice(0, 5);

  return (
    <div className={styles.bottomNav}>
      {/* Navigation Items */}
      {displayedNavItems.map((item) => (
        <Button
          key={item.key}
          type="text"
          icon={item.icon}
          onClick={() => router.push(item.key)}
          className={styles.navButton}
        >
          <span className="button-text">{item.label}</span>
        </Button>
      ))}

      {/* Logout Button */}
      <div className={styles.popconfirmContainer}>
        <Popconfirm
          title="Logout"
          description="Are you sure you want to logout?"
          onConfirm={onLogout}
          okText="Yes"
          cancelText="No"
          placement="topRight"
        >
          <Button
            type="text"
            icon={<LogoutOutlined />}
            className={`${styles.navButton} ${styles.logoutButton}`}
          >
            <span className="button-text">Logout</span>
          </Button>
        </Popconfirm>
      </div>
    </div>
  );
};

export default BottomNav;
