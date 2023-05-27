import "./style.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

const AddOperator = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    Company: "", 
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
    //     name: formValues.name,
    //     email: formValues.email,
    //     phone: parseInt(formValues.phone),
    //     Company: formValues.Company,
    //     id: parseInt(formValues.id),
    //   });
    //   // Handle the response
    //   console.log("response :", response.data);
    // } catch (error) {
    //   // Handle error
    //   console.error(error.response.data);
    // }
    navigate("/adminhome");
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Topbar />
        <div className="topheading">
          <h1>Add Operator</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form onSubmit={handleSubmit}>
              <div className="formInput">
                <label>Name</label>
                <input
                  type="text"
                  id="name"
                  value={formValues.name || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>email</label>
                <input
                  type="email"
                  id="email"
                  value={formValues.email || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Phone</label>
                <input
                  type="number"
                  id="phone"
                  value={formValues.phone || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInput">
                <label>Company</label>
                <input
                  type="text"
                  id="Company"
                  value={formValues.Company || ""}
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

export default AddOperator;
