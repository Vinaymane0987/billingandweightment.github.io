import "./style.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Osidebar from "../../components/osidebar/Osidebar";

const Addpayment = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    balance: "",
    status: "",
    remark: "",
    mode: "", 
    tax: "", 
    date: "", 
    amount: "", 
    id: "",
  });

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form values:", formValues);
    // try {
    //   // Location a POST request to the API
    //   const response = await axios.post(baseUrl, {
    //     balance: formValues.balance,
    //     status: formValues.status,
    //     remark: parseInt(formValues.remark),
    //     mode: formValues.mode,
    //     id: parseInt(formValues.id),
    //   });
    //   // Handle the response
    //   console.log("response :", response.data);
    // } catch (error) {
    //   // Handle error
    //   console.error(error.response.data);
    // }
    navigate("/ophome");
  };

  return (
    <div className="new">
      <Osidebar />
      <div className="newContainer">
        <Topbar />
        <div className="topheading">
          <h1>Add payment</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form onSubmit={handleSubmit}>
              <div className="formInput">
                <label>balance</label>
                <input
                  type="number"
                  id="balance"
                  value={formValues.balance || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Status</label>
                <input
                  type="text"
                  id="status"
                  value={formValues.status || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>remark</label>
                <input
                  type="text"
                  id="remark"
                  value={formValues.remark || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>mode</label>
                <input
                  type="text"
                  id="mode"
                  value={formValues.mode || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>tax</label>
                <input
                  type="number"
                  id="tax"
                  value={formValues.tax || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>amount</label>
                <input
                  type="number"
                  id="amount"
                  value={formValues.amount || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>date</label>
                <input
                  type="date"
                  id="date"
                  value={formValues.date || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>ID</label>
                <input
                  type="number"
                  id="id"
                  value={formValues.id || ""}
                  onChange={handleInputChange}
                />
              </div>
              <button className="sendbtn" type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addpayment;
