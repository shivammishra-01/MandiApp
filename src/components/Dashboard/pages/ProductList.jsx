import React from "react";

import Sidebar from "../components/Sidebar";
import "./pages.css";

const ProductList = () => {
  return (
    <div className="dash-main">
      <Sidebar />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form className="professional-form border border-success p-4 rounded">
              <h1 className="text-center mb-4">Create Interview Room</h1>
              <div className="form-group">
                <label htmlFor="conferenceType">Conference System Type:</label>
                <input
                  type="text"
                  className="form-control"
                  id="conferenceType"
                  name="conferenceType"
                  placeholder="Enter conference system type"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="interviewLink">Interview Link Room:</label>
                <input
                  type="text"
                  className="form-control"
                  id="interviewLink"
                  name="interviewLink"
                  placeholder="Enter interview link room"
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-success btn-lg btn-block"
              >
                Create Room
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
