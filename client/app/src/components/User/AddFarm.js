import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

function AddFarm() {
  const [farmName, setName] = useState("");
  const [crop, setCrop] = useState("");
  const [location, setLocation] = useState("");
  const [formDeviceId, setformDeviceId] = useState("");

  const history = useHistory();

  async function addFarm(e) {
    e.preventDefault();

    const name = farmName;

    const deviceId = [formDeviceId];

    try {
      const farmData = {
        name,
        crop,
        location,
        deviceId,
      };

      await axios.post("/farm", farmData);
      history.push("/dashboard");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="container">
      <div className="page-title">
        <h1>Welcome back!</h1>
        <h3>Add a farm to your account.</h3>
      </div>
      <div className="panel_body">
        <form className="form-control" onSubmit={addFarm}>
          <div className="form-feild">
            <label>FARM NAME</label>
            <input
              type="name"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              value={farmName}
            />
          </div>
          <div className="form-feild">
            <label>CROP NAME</label>
            <input
              type="text"
              placeholder="Crop"
              onChange={(e) => setCrop(e.target.value)}
              value={crop}
            />
          </div>
          <div className="form-feild">
            <label>LOCATION</label>
            <input
              type="text"
              placeholder="Location"
              onChange={(e) => setLocation(e.target.value)}
              value={location}
            />
          </div>

          <div className="form-feild">
            <label>DEVICE ID</label>
            <input
              type="text"
              placeholder="Device Id"
              onChange={(e) => setformDeviceId(e.target.value)}
              value={formDeviceId}
            />
          </div>

          <button type="submit" className="btn btn--m">
            Add a new farm
          </button>
        </form>
      </div>
      <div className="page-title">
        Having doubts?
        <Link style={{ textDecoration: "underline", color: "blue" }} to="login">
          Contact us
        </Link>
      </div>
    </div>
  );
}

export default AddFarm;
