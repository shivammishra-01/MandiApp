import React from "react";
import Sidebar from "../components/Sidebar";
import "./pages.css";
const UpdateProfiles = () => {
  return (
    <div className="dash-main">
      <Sidebar />
      {/* <UserListPage /> */}
      <div className="container d-flex justify-content-center mt-5 pt-4">
        <div
          className={`card shadow`}
          style={{ width: "22rem", height: "20rem" }}
        >
          <h3 className="text-center text-dark fw-bold mt-3">Update Profile</h3>
          <div className="text-center mt-3" style={{ height: "3rem" }}></div>
          <form>
            <div className="mx-2 mb-2">
              <div className="mb-3">
                <div className="d-flex bottom-line">
                  <i className="fa-solid fa-user mt-2 ps-2"></i>&nbsp;
                  <input
                    type="text"
                    className="form-control"
                    id="Adminid"
                    autoComplete="off"
                    placeholder="Update Name"
                  />
                </div>
              </div>
              <div className="mb-3">
                <div className="d-flex bottom-line">
                  <i class="fa-solid fa-mobile mt-2 ps-2"></i>&nbsp;
                  <input
                    type="text"
                    className="form-control"
                    id="Adminid"
                    autoComplete="off"
                    placeholder="Mobile Number"
                  />
                </div>
              </div>

              <div className="mb-3">
                <div className="d-flex bottom-line">
                  <i class="fa-regular fa-image mt-2 ps-2 "></i>&nbsp;
                  <input
                    type="file"
                    className="form-control"
                    id="Adminid"
                    autoComplete="off"
                    placeholder="New Password"
                  />
                </div>
              </div>

              <div className="text-center">
                <button className="btn btn-danger" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfiles;
