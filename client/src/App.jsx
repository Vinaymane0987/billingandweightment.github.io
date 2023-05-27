import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AdminLogin from "./pages/loginPage/AdminLogin";
import Operator from "./pages/loginPage/Operator";
import Home from "./pages/Home/AdminHome";
import AdminRegister from "./pages/register/AdminRegister";
import OperatorRegister from "./pages/register/OperatorRegister";
import AddOperator from "./pages/addoperator/AddOperator";
import SingleOperator from "./pages/signleoperator/SingleOperator";
import OperatorHome from "./pages/operatorhome/OperatorHome";
import AddTrip from "./pages/addtrip/AddTrip";
import AddPrice from "./pages/addprice/AddPrice";
import AddBill from "./pages/addbill/AddBill";
import AddWeightment from "./pages/addweightment/AddWeightment";
import Addpayment from "./pages/addpayment/Addpayment";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminLogin />} />
          <Route path="/operator" element={<Operator />} />
          <Route path="/adminhome" element={<Home />} />
          <Route path="/adminhome/:id" element={<SingleOperator />} />
          <Route path="/asignup" element={<AdminRegister />} />
          <Route path="/osignup" element={<OperatorRegister />} />
          <Route path="/addop" element={<AddOperator />} />
          <Route path="/addtrip" element={<AddTrip />} />
          <Route path="/addprice" element={<AddPrice />} />
          <Route path="/addbill" element={<AddBill />} />
          <Route path="/addweightment" element={<AddWeightment />} />
          <Route path="/addpayment" element={<Addpayment />} />
          <Route path="/Ophome" element={<OperatorHome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
