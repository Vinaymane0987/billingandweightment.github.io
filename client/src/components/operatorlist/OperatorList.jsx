import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
const OperatorList = () => {
  return (
    <div className="operatorlist__container">
      <div className="operatorname">
        <h2>Vinay Mane</h2>
      </div>
      <div className="actionbuttons">
        <Link className="viewlink">Edit</Link>
        <div className="deletebutton">
          <button>delete</button>
        </div>
      </div>
    </div>
  );
};

export default OperatorList;
