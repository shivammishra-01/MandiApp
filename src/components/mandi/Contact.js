import React, { useState } from "react";
// import css from "../css/conta.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import far from "../mandi/img/contact.gif";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [mandiName, setMandiName] = useState("");
  const [message, setMessage] = useState("");

  const saveContact = async (e) => {
    e.preventDefault();

    const contact = { name, mobileNumber, email, mandiName, message };
    console.log(contact);

    try {
      const res = await axios.post(
        "http://localhost:8080/api/farmercontact",
        contact,
        { headers: { "Content-Type": "application/json" } }
      );

      // clear the form
      setName("");
      setMobileNumber("");
      setEmail("");
      setMandiName("");
      setMessage("");

      if (res.status === 200) {
        toast.success("Thank you for contacting us. We will reply shortly!", {
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
      console.error("Error on contact:", error);
      toast.error("Failed to Contact Us. Please try again.", {
        position: "top-center",
        autoClose: 2000,
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
                <form onSubmit={saveContact}>
                  <div className="mb-3">
                    <div className="input-group">
                      <span className="input-group-text">
                        <i class="fa-solid fa-user"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={name}
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                        required
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
                        id="mobileNumber"
                        name="mobileNumber"
                        value={mobileNumber}
                        placeholder="Mobile number"
                        onChange={(e) => setMobileNumber(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="input-group">
                      <span className="input-group-text">
                        <i class="fa-solid fa-envelope"></i>
                      </span>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={email}
                        placeholder="Email ID"
                        onChange={(e) => setEmail(e.target.value)}
                        required
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
                        id="mandiName"
                        name="mandiName"
                        value={mandiName}
                        placeholder="Mandi Name"
                        onChange={(e) => setMandiName(e.target.value)}
                        required
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
                        id="message"
                        name="message"
                        rows="4"
                        cols="30"
                        value={message}
                        placeholder="Write message "
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="text-center mt-4">
                    <button className="btn btn-success" type="submit">
                      ContactUs
                    </button>
                    <button
                      className="btn btn-danger"
                      type="button"
                      onClick={() => {
                        setName("");
                        setMobileNumber("");
                        setEmail("");
                        setMandiName("");
                        setMessage("");
                      }}
                    >
                      Reset
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-lg-1 "></div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
export default Contact;
