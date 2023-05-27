import React from "react";
import "./style.css";
import OperatorList from "../operatorlist/OperatorList";
const ListContainer = ({title}) => {
  return (
    <div className="listcontainer">
      <div className="operatorlist">
        <h1 style={{ fontSize: "24px", paddingBottom: "10px" }}>
          {title}
        </h1>
        <OperatorList />
        <OperatorList />
        <OperatorList />
      </div>
    </div>
  );
};

export default ListContainer;
