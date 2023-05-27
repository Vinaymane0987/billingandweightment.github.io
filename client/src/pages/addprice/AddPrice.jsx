import "./style.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Osidebar from "../../components/osidebar/Osidebar";

const AddPrice = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    price: "",
    veriety: "",
    unit: "",
    Fromdate: "", 
    Todate: "", 
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
    //     price: formValues.price,
    //     veriety: formValues.veriety,
    //     unit: parseInt(formValues.unit),
    //     Fromdate: formValues.Fromdate,
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
          <h1>Add Price</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form onSubmit={handleSubmit}>
              <div className="formInput">
                <label>Price</label>
                <input
                  type="number"
                  id="price"
                  value={formValues.price || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>veriety</label>
                <input
                  type="text"
                  id="veriety"
                  value={formValues.veriety || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Unit</label>
                <input
                  type="number"
                  id="unit"
                  value={formValues.unit || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Fromdate</label>
                <input
                  type="date"
                  id="Fromdate"
                  value={formValues.Fromdate || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Todate</label>
                <input
                  type="date"
                  id="Todate"
                  value={formValues.Todate || ""}
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

export default AddPrice;
