import React from "react";
import "./home.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import { Link } from "react-router-dom";
import OperatorList from "../../components/operatorlist/OperatorList";
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home__container">
        <Topbar />
        <div className="operatorlist">
          <h1 style={{ fontSize: "24px", paddingBottom: "10px" }}>
            Operator List
          </h1>
          <OperatorList />
          <OperatorList />
          <OperatorList />
          <OperatorList />
          <OperatorList />
          <OperatorList />
          <OperatorList />
          <OperatorList />
          <OperatorList />
          <OperatorList />
          <OperatorList />
          <OperatorList />
          <OperatorList />
          <OperatorList />
        </div>
      </div>
    </div>
  );
};

export default Home;
