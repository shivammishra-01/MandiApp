import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Sidebar from "../components/Sidebar";
import "./pages.css";
import img from "./farmer.png";
import axios from 'axios'
import { FarmerData } from "../../Farmer/Auth";
import { createFertilizer } from "../../services/fertilizerServices";

const FertilizerUpload = () => {
  const [name, setName] = useState("");
  const [qnt, setQnt] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState(null);

  function handleImageChange(e) {
    setImage(e.target.files[0]);
  }


  const saveOrUpdateFertilizer=async(e)=> {
    e.preventDefault();

    const fertilizer = { name, qnt, price, type, image ,
      farmerid: FarmerData().farmerid,
      state: FarmerData().state,

    };
    console.log(fertilizer);

    createFertilizer(fertilizer)
      .then((response) => {
        console.log(response.data);

          // Clear the form 
          setName("");
          setQnt("");
          setPrice("");
          setType("");
          setImage(null);
          document.getElementById('image').value = null;



        toast.success('Fertilizer Added successfully..!', {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      })
      .catch((error) => {
        console.error('Error adding Fertilizer:', error);
        toast.error('Failed to add Fertilizer. Please try again.', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  }

  return (
    <div className="dash-main">
      <Sidebar />
      <div className="container mt-3">
        <div className="card shadow" style={{ backgroundColor: "green" }}>
          <h1 className="text-center">Fertilizer Upload</h1>
          <div className="row">
            <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
              <img
                src={img}
                className="img-fluid"
                style={{ marginBottom: "20px", padding: "10px" }}
                alt="Farmer"
              />
            </div>
            <div className="col-lg-5 col-md-12 mt-5">
              <form onSubmit={saveOrUpdateFertilizer}>
                <div className="mb-3">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fa-solid fa-bag-shopping"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={name}
                      placeholder="Fertilizer Name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i class="fas fa-sort-amount-up"></i>
                    </span>
                    <input
                      type="number"
                      className="form-control"
                      id="qnt"
                      name="qnt"
                      value={qnt}
                      autoComplete="off"
                      placeholder="Fertilizer Quantity in kg"
                      onChange={(e) => setQnt(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fa-solid fa-indian-rupee-sign"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      id="price"
                      autoComplete="off"
                      name="price"
                      value={price}
                      placeholder="Fertilizer price"
                      onChange={(e) => setPrice(e.target.value)}
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
                      id="type"
                      name="type"
                      value={type}
                      autoComplete="off"
                      placeholder="Fertilizer Type"
                      onChange={(e) => setType(e.target.value)}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="fa-solid fa-thumbs-up"></i>
                    </span>
                    <input
                      type="file"
                      className="form-control"
                      id="image"
                      name="image"
                      autoComplete="off"
                      onChange={handleImageChange}
                    />
                  </div>
                </div>

                <div className="text-center mt-4">
                  <button
                    className="btn btn-success"
                    type="submit"
                  >
                    Upload
                  </button>
                  <button
                    className="btn btn-danger"
                    type="button"
                    onClick={() => {
                      setName("");
                      setQnt("");
                      setPrice("");
                      setType("");
                      setImage(null);
                      document.getElementById('image').value = null;
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
      <ToastContainer />
    </div>
  );
};

export default FertilizerUpload;
