import React from "react";
import millify from "millify";
import { Typography, Statistic, Row, Col } from "antd";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import { Link } from "react-router-dom";
import Cryptocurrency from "./Cryptocurrency";
import News from "./News";
import Loader from "../Loader";

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(12);

  const globalStats = data?.data?.stats;

  if (isFetching) return <Loader />;

  return (
    <React.Fragment>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Crypocurrencies" value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchange"
            value={millify(globalStats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={millify(globalStats.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={millify(globalStats.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 12 Cryptocurrency in the World
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrency"> Show More</Link>
        </Title>
      </div>
      <Cryptocurrency simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3} className="show-more">
          <Link to="/news"> Show More</Link>
        </Title>
      </div>
      <News simplified />
    </React.Fragment>
  );
};

export default Homepage;
