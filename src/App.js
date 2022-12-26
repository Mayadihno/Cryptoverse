import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Space, Typography } from "antd";

import {
  Navbar,
  Homepage,
  Cryptocurrency,
  CryptoDetails,
  News,
} from "./Components/index";

function App() {
  return (
    <div className="app">
      <div className="navber">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage />} />

              <Route path="/cryptocurrency" element={<Cryptocurrency />} />
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>

        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Cryptoverse <br />
            All right Reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/cryptocurrency">Cryptocurrency</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
