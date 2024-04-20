import React from "react";
import css from "../css/conta.css";
import far from "../img/about.gif";

const Contact = () => {
  return (
    <div>
      <div className="dash-main">
        <div className="container mt-3">
          <div className="card shadow" style={{ backgroundColor: "green" }}>
            <h1 className="text-center">ℂ𝕠𝕟𝕥𝕒𝕔𝕥 𝕌𝕤</h1>
            <div className="row">
              <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
                <img
                  src={far}
                  className="img-fluid"
                  style={{ marginBottom: "20px", padding: "10px" }}
                  alt="Farmer"
                />
              </div>
              <div className="col-lg-5 col-md-12 mt-5">
                <form>
                  <div className="mb-3">
                    <div className="input-group">
                      <span className="input-group-text">
                        <i class="fa-solid fa-user"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        id="price"
                        autoComplete="off"
                        name="price"
                        placeholder="Name"
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="input-group">
                      <span className="input-group-text">
                        <i class="fa-solid fa-mobile"></i>
                      </span>
                      <input
                        type="number"
                        className="form-control"
                        id="price"
                        autoComplete="off"
                        name="price"
                        placeholder="Mobile number"
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="input-group">
                      <span className="input-group-text">
                        <i class="fa-solid fa-envelope"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        id="price"
                        autoComplete="off"
                        name="price"
                        placeholder="Email ID"
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="input-group">
                      <span className="input-group-text">
                        <i class="fa-solid fa-house"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        id="price"
                        autoComplete="off"
                        name="price"
                        placeholder="Mandi Name"
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="input-group">
                      <span className="input-group-text">
                        <i class="fa-solid fa-message"></i>
                      </span>
                      <textarea
                        type="text"
                        className="form-control"
                        id="price"
                        autoComplete="off"
                        name="price"
                        rows="4"
                        cols="30"
                        placeholder="Write message "
                      />
                    </div>
                  </div>

                  <div className="text-center mt-4">
                    <button className="btn btn-success" type="submit">
                      Upload
                    </button>
                    <button className="btn btn-danger" type="button">
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-lg-1 "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
