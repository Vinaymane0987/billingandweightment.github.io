import React from "react";
import "./style.css";
import {
  ExitToApp,
  ContactPage,
  TripOriginRounded,
  LineWeightRounded,
  PaymentRounded,
  PriceCheckRounded,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Osidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/ophome" style={{ textDecoration: "none", color: "black" }}>
          <span className="logo">Operator</span>
        </Link> 
      </div>
      <hr />
      <div className="middle">
        <ul>
          <p className="title">Main</p>
          <Link
            to="/addtrip"
            style={{ textDecoration: "none", color: "black" }}
            className="link"
          >
            <li className="listone">
              <TripOriginRounded className="material__icons" />
              <span>Add Trip</span>
            </li>
          </Link>
          <Link
            to="/addweightment"
            style={{ textDecoration: "none", color: "black" }}
            className="link"
          >
            <li className="listone">
              <LineWeightRounded className="material__icons" />
              <span>Add weightment</span>
            </li>
          </Link>
          <Link
            to="/addbill"
            style={{ textDecoration: "none", color: "black" }}
            className="link"
          >
            <li className="listone">
              <PaymentRounded className="material__icons" />
              <span>Add Bill</span>
            </li>
          </Link>
          <Link
            to="/addprice"
            style={{ textDecoration: "none", color: "black" }}
            className="link"
          >
            <li className="listone">
              <PriceCheckRounded className="material__icons" />
              <span>Add Price</span>
            </li>
          </Link>
          <Link
            to="/addpayment"
            style={{ textDecoration: "none", color: "black" }}
            className="link"
          >
            <li className="listone">
              <PaymentRounded className="material__icons" />
              <span>Add Payment Model</span>
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

export default Osidebar;
