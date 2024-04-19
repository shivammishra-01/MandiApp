import React from "react";
import AdminSidebar from "../components/AdminSidebar";
import "./Pages.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const UpdatePassword = () => {
  const navigate = useNavigate();
  const [oldpass, setOldpass] = useState("");
  const [newpass, setNewpass] = useState("");
  const [confirmpass, setConfirmpass] = useState("");
  return (
    <div className="dash-main">
      <AdminSidebar />
      <div className="container d-flex justify-content-center mt-5 pt-4">
        <div
          className={`card shadow`}
          style={{ width: "22rem", height: "18rem" }}
        >
          <h3 className="text-center text-dark fw-bold mt-4">
            Update Password
          </h3>

          <form>
            <div className="mx-2 mb-2">
              <div className="mb-3">
                <div className="d-flex bottom-line">
                  <i className="fa-solid fa-lock mt-2 ps-2"></i>&nbsp;
                  <input
                    type="text"
                    className="form-control"
                    id="Adminid"
                    autoComplete="off"
                    placeholder="Old Password"
                  />
                </div>
              </div>
              <div className="mb-3">
                <div className="d-flex bottom-line">
                  <i className="fa-solid fa-lock mt-2 ps-2"></i>&nbsp;
                  <input
                    type="text"
                    className="form-control"
                    id="Adminid"
                    autoComplete="off"
                    placeholder="New Password"
                  />
                </div>
              </div>
              <div className="mb-3">
                <div className="d-flex bottom-line">
                  <i className="fa-solid fa-lock mt-2 ps-2"></i>&nbsp;
                  <input
                    type="text"
                    className="form-control"
                    id="Adminid"
                    autoComplete="off"
                    placeholder="conform Password"
                  />
                </div>
              </div>

              <div className="text-center">
                <button className="btn btn-danger" type="submit">
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;
