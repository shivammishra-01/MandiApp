import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import farmerimg from "../img/farmer.png";
import logincss from "../css/signup.module.css";
import { isAdminLoggedIn } from "../Dashboard/Admin/AdminAuth";
export default function AdminLogin() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showpass, setShowpass] = useState({
    pass: "fa-eye",
    type: "password",
  });
  useEffect(() => {
    if (isAdminLoggedIn()) navigate("/");
  });
  const loginFarmer = async (e) => {
    e.preventDefault();
    const login = { email, password };
    console.log(login);
    if (email === "") {
      toast.error("Please Enter Farmerid..!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (password === "") {
      toast.error("Please Enter Password..!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      try {
        const res = await axios.post(
          "http://localhost:8080/api/loginadmin",
          login,
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        if (res.status === 200 && res.data) {
          localStorage.setItem("admin", JSON.stringify(res.data));
          navigate("/");
        } else {
          toast.error("Please Enter Valid Id and Password..!", {
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
      } catch (error) {
        console.log(error);
      }
    }
  };
  const togglePassword = () => {
    if (showpass.type === "password")
      setShowpass({ pass: "fa-eye-slash", type: "text" });
    else setShowpass({ pass: "fa-eye", type: "password" });
  };
  return (
    <div className="container d-flex justify-content-center mt-5 pt-4">
      <div
        className={`card shadow ${logincss.registrationForm}`}
        style={{ width: "22rem" }}
      >
        <h1 className="text-center text-light fw-bold">AdminLogin</h1>
        <div className="text-center mt-3" style={{ height: "12rem" }}>
          <img
            src={farmerimg}
            alt=""
            className="img-fluid"
            style={{ height: "10rem" }}
          />
        </div>
        <form onSubmit={loginFarmer}>
          <div className="mx-2 mb-2">
            <div className="mb-3">
              <div className="d-flex bottom-line">
                <i className="fa-solid fa-user mt-2 ps-2"></i>&nbsp;
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  id="Adminid"
                  autoComplete="off"
                  placeholder="Adminid"
                />
              </div>
            </div>
            <div className="mb-3">
              <div className="d-flex bottom-line">
                <i className="fa-solid fa-lock mt-2 ps-2"></i>&nbsp;
                <div className="password-toggle">
                  <input
                    type={showpass.type}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    id="farmerpass"
                    autoComplete="off"
                    placeholder="Password"
                  />
                  <i
                    className={`fa-regular ${showpass.pass}`}
                    onClick={togglePassword}
                  ></i>
                </div>
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
      <ToastContainer />
    </div>
  );
}
