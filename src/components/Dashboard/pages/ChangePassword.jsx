import React from "react";
import Sidebar from "../components/Sidebar";
import "./pages.css";
import { useState } from "react";
import { FarmerData } from "../../Farmer/Auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChangePassword = () => {
  const navigate = useNavigate();
  const [oldpass, setOldpass] = useState("");
  const [newpass, setNewpass] = useState("");
  const [confirmpass, setConfirmpass] = useState("");
  const changepassword = async (e) => {
    e.preventDefault();
    if (oldpass !== newpass) {
      if (newpass === confirmpass) {
        const password = {
          farmerid: FarmerData().farmerid,
          oldpass,
          newpass,
        };
        const res = await axios.post(
          "http://localhost:8080/api/updatepasswordfarmer",
          password,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
        if (res.data === 1) {
          toast.success("Password Change..!", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setTimeout(() => {
            navigate("/farmer/Dashboard");
          }, 2000);
        } else {
          toast.error("Password Not Change..!", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      } else {
        toast.error("Password Not Match..!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } else {
      toast.error("Please Enter Diffrent Password..!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  return (
    <div className="dash-main">
      <Sidebar />
      <div className="container d-flex justify-content-center mt-5 pt-4">
        <div
          className={`card shadow`}
          style={{ width: "22rem", height: "18rem" }}
        >
          <h3 className="text-center text-dark fw-bold mt-4">
            Update Password
          </h3>

          <form onSubmit={changepassword}>
            <div className="mx-2 mb-2">
              <div className="mb-3">
                <div className="d-flex bottom-line">
                  <i className="fa-solid fa-lock mt-2 ps-2"></i>&nbsp;
                  <input
                    onChange={(e) => setOldpass(e.target.value)}
                    value={oldpass}
                    type="password"
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
                    onChange={(e) => setNewpass(e.target.value)}
                    value={newpass}
                    type="password"
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
                    onChange={(e) => setConfirmpass(e.target.value)}
                    value={confirmpass}
                    type="password"
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
      <ToastContainer />
    </div>
  );
};

export default ChangePassword;
