import React from "react";
import "./sidebar.css";
import {
  ExitToApp,
  Dashboard,
  ContactPage,
  SupportAgentRounded,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/adminhome" style={{ textDecoration: "none", color: "black" }}>
          <span className="logo">Admin</span>
        </Link> 
      </div>
      <hr />
      <div className="middle">
        <ul>
          <p className="title">Main</p>
          <Link
            to="/addop"
            style={{ textDecoration: "none", color: "black" }}
            className="link"
          >
            <li className="listone">
              <SupportAgentRounded className="material__icons" />
              <span>Add Operator</span>
            </li>
          </Link>
          <p className="title">Contacts</p>
          <li>
            <ContactPage className="material__icons" />
            <span>contact</span>
          </li>
          <li>
            <ExitToApp className="material__icons" />
            <button>
              <span>Logout</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
