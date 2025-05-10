"use client"
import { useState } from 'react';

import { useRouter } from "next/navigation";
import { Button, Menu } from 'antd';
import { 
  HomeOutlined, 
  FileTextOutlined, 
  MessageOutlined, 
  EnvironmentOutlined, 
  GlobalOutlined, 
  LogoutOutlined 
} from '@ant-design/icons';


import styles from './sidebar.module.css';

// const routeMap = {
//   dashboard: "/dashboard",
//   report: "/report",
//   therapist: "/hospitals",
//   hospital: "/hospitals",
//   post: "/createPost",
// };
const Sidebar = ({ 
  width = 200,
  onMenuItemClick,
  onLogout
}) => {
  // const pathname = usePathname();
  const [selectedKey, setSelectedKey] = useState("dasboard");
  const router = useRouter();
  const handleMenuClick = (e) => {
    setSelectedKey(e.key);
    if (onMenuItemClick) {
      onMenuItemClick(e.key);
    }
  };

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
      router.push("/")
      sessionStorage.removeItem("jwt")
    }
  };

  return (
    <div className={styles.sidebar} style={{ width: width }}>
      <div className={styles.logo} />
      <Menu
        mode="inline"
        selectedKeys={[selectedKey]}
        onClick={handleMenuClick}
        className={styles.menu}
      >
        <Menu.Item key="dashboard" icon={<HomeOutlined />}onClick={()=>router.push("/dashboard")}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="report" icon={<FileTextOutlined />} onClick={()=>router.push("/report")}>
          Generate a report
        </Menu.Item>
        <Menu.Item key="therapist" icon={<MessageOutlined />} onClick={()=>router.push("/hospitals")}>
          Personal Therapist
        </Menu.Item>
        <Menu.Item key="hospital" icon={<EnvironmentOutlined />} onClick={()=>router.push("/hospitals")}>
          Nearest Hospital
        </Menu.Item>
        <Menu.Item key="post" icon={<GlobalOutlined />} onClick={()=>router.push("/createPost")}>
          Create A Post
        </Menu.Item>
      </Menu>
      <Button
        icon={<LogoutOutlined />}
        type="text"
        onClick={handleLogout}
        className={styles.logout}
      >
        Logout
      </Button>
    </div>
  );
};

export default Sidebar;