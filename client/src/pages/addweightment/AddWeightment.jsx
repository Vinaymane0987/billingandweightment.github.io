import "./style.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Osidebar from "../../components/osidebar/Osidebar";

const AddWeightment = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    netweight: "",
    orderno: "",
    Grossweight: "",
    date: "", 
    weightment: "", 
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
    //     netweight: formValues.netweight,
    //     orderno: formValues.orderno,
    //     Grossweight: parseInt(formValues.Grossweight),
    //     date: formValues.date,
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
          <h1>Add Weightment</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form onSubmit={handleSubmit}>
              <div className="formInput">
                <label>Net Weight</label>
                <input
                  type="number"
                  id="netweight"
                  value={formValues.netweight || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>order Number</label>
                <input
                  type="number"
                  id="orderno"
                  value={formValues.orderno || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Grossweight</label>
                <input
                  type="number"
                  id="Grossweight"
                  value={formValues.Grossweight || ""}
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
                <label>weightment</label>
                <input
                  type="weightment"
                  id="weightment"
                  value={formValues.weightment || ""}
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

export default AddWeightment;
