import React, { useEffect, useState } from "react";
import { Avatar, Button, Typography, Menu } from "antd";
import icon from "../images/cryptocurrency.png";
import {
  HomeOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize < 768) {
      setActive(false);
    } else {
      setActive(true);
    }
  }, [screenSize]);

  return (
    <React.Fragment>
      <div className="nav-container">
        <div className="logo-container">
          <Avatar src={icon} size="large" />
          <Typography.Title level={3}>
            <Link to="/">Cryptoverse</Link>
          </Typography.Title>
          <Button
            className="menu-control-container"
            onClick={() => setActive(!active)}
          >
            <MenuOutlined />
          </Button>
        </div>
        {active && (
          <Menu theme="dark">
            <Menu.Item icon={<HomeOutlined />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item icon={<FundOutlined />}>
              <Link to="/cryptocurrency">Cryptocurrency</Link>
            </Menu.Item>
            <Menu.Item icon={<BulbOutlined />}>
              <Link to="/news">News</Link>
            </Menu.Item>
          </Menu>
        )}
      </div>
    </React.Fragment>
  );
};

export default Navbar;
