import "./style.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Osidebar from "../../components/osidebar/Osidebar";

const AddTrip = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    source: "",
    verity: "",
    staff: "",
    date: "", 
    arrival: "", 
    vehicle: "", 
    farmer: "", 
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
    //     source: formValues.source,
    //     verity: formValues.verity,
    //     staff: parseInt(formValues.staff),
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
          <h1>Add Trip</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form onSubmit={handleSubmit}>
              <div className="formInput">
                <label>Source</label>
                <input
                  type="text"
                  id="source"
                  value={formValues.source || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>verity</label>
                <input
                  type="text"
                  id="verity"
                  value={formValues.verity || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Staff</label>
                <input
                  type="text"
                  id="staff"
                  value={formValues.staff || ""}
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
                <label>arrival</label>
                <input
                  type="time"
                  id="arrival"
                  value={formValues.arrival || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>vehicle</label>
                <input
                  type="text"
                  id="vehicle"
                  value={formValues.vehicle || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Farmer</label>
                <input
                  type="text"
                  id="farmer"
                  value={formValues.farmer || ""}
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

export default AddTrip;
