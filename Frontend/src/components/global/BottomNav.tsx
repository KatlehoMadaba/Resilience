"use client";
import { Button, Space } from "antd";
import { usePathname, useRouter } from "next/navigation";
import { useStyles } from "../styles";

interface NavItem {
  key: string;
  label: string;
  icon: React.ReactNode;
}

interface BottomNavProps {
  navItems: NavItem[];
}

const BottomNav = ({ navItems }: BottomNavProps) => {
  const { styles } = useStyles();
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (key: string) => {
    router.push(key);
  };

  return (
    <div className={styles.bottomNav}>
      <Space align="center" size="large">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.key);
          return (
            <Button
              key={item.key}
              type="text"
              icon={item.icon}
              className={`${styles.bottomNavButton} ${
                isActive ? styles.bottomNavButtonActive : ""
              }`}
              onClick={() => handleNavClick(item.key)}
              aria-label={item.label}
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div className={styles.bottomNavLabel}>{item.label}</div>
            </Button>
          );
        })}
      </Space>
    </div>
  );
};

export default BottomNav;
