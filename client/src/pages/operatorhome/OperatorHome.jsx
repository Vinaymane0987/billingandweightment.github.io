import React from "react";
import "./style.css";
import Topbar from "../../components/topbar/Topbar";
import Osidebar from "../../components/osidebar/Osidebar";
import ListContainer from "../../components/listcontainer/ListContainer";
const OperatorHome = () => {
  return (
    <div className="home">
      <Osidebar />
      <div className="home__container">
        <Topbar />
        <div className="listcontainer2">
          <div className="home__lists">
            <ListContainer title="Trip List" />
            <ListContainer title="Price List" />
          </div>
          <div className="home__lists">
            <ListContainer title="Bill list" />
            <ListContainer title="payment list" />
          </div>
          <div className="home__lists">
            <ListContainer title="weightment list" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperatorHome;
