import React from "react";
import Sidebar from "../components/Sidebar";
import "./pages.css";

import img from "./farmer.png";

const FertilizerUpload = () => {





  
  return (
    <div className="dash-main">
      <Sidebar />
      <div className="container mt-3">
        <div className="card shadow" style={{ backgroundColor: "green" }}>
          <h1 className="text-center">Fertiliser Upload</h1>
          <div className="row">
            <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
              <img
                src={img}
                className="img-fluid"
                style={{ marginBottom: "20px", padding: "10px" }}
              />
            </div>

            <div className="col-lg-5 col-md-12 mt-5">
              <div className="mb-3">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fa-solid fa-bag-shopping"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="cpname"
                    autoComplete="off"
                    placeholder="Crops Name"
                  />
                </div>
              </div>
              <div className="mb-3">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fa-solid fa-indian-rupee-sign"></i>
                  </span>
                  <input
                    type="number"
                    className="form-control"
                    id="cpprice"
                    name="cpprice"
                    autoComplete="off"
                    placeholder="price Price"
                  />
                </div>
              </div>
              <div className="mb-3">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fa-solid fa-address-card"></i>
                  </span>
                  <input
                    type="number"
                    className="form-control"
                    id="cpnumber"
                    autoComplete="off"
                    name="cpnumber"
                    placeholder="Number of crops"
                  />
                </div>
              </div>
              <div className="mb-3">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fa-solid fa-thumbs-up"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="cpvariety"
                    name="cpvariety"
                    autoComplete="off"
                    placeholder="crops variety"
                  />
                </div>
              </div>
              <div className="mb-3">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fa-solid fa-file"></i>
                  </span>
                  <input
                    type="file"
                    name="cpfilename"
                    className="form-control"
                    id="cpfilename"
                    autoComplete="off"
                    placeholder="file"
                  />
                </div>
              </div>
              <div className="text-center">
                <button className="btn btn-success" type="submit">
                  Upload
                </button>
              </div>
            </div>
            <div className="col-lg-1 "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FertilizerUpload;
