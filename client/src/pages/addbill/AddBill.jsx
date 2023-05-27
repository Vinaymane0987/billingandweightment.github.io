import "./style.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Osidebar from "../../components/osidebar/Osidebar";

const AddBill = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    tax: "",
    total: "",
    Price: "",
    qty: "", 
    billing: "", 
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
    //     tax: formValues.tax,
    //     total: formValues.total,
    //     Price: parseInt(formValues.Price),
    //     qty: formValues.qty,
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
          <h1>Add Bill</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form onSubmit={handleSubmit}>
              <div className="formInput">
                <label>Tax</label>
                <input
                  type="number"
                  id="tax"
                  value={formValues.tax || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Total</label>
                <input
                  type="number"
                  id="total"
                  value={formValues.total || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Price</label>
                <input
                  type="number"
                  id="Price"
                  value={formValues.Price || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Billing</label>
                <input
                  type="number"
                  id="billing"
                  value={formValues.billing || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Quantity</label>
                <input
                  type="number"
                  id="qty"
                  value={formValues.qty || ""}
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

export default AddBill;
