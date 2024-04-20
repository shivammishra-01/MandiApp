import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Sidebar from "../components/Sidebar";
import "./pages.css";
import img from "./farmer.png";
import axios from 'axios'
import { createCrops } from "../../services/cropsService";
import { FarmerData } from "../../Farmer/Auth";

const CropsUpload = () => {
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [qnt, setQnt] = useState("");
  const [price, setPrice] = useState("");
  const [variety, setVariety] = useState("");
  const [image, setImage] = useState(null);

  function handleImageChange(e) {
    setImage(e.target.files[0]);
  }


  const saveOrUpdateCrops=async(e)=> {
    e.preventDefault();

    const crops = { type, name, qnt, price, variety, image ,
      farmerid: FarmerData().farmerid,
      state: FarmerData().state,

    };
    console.log(crops);

    createCrops(crops)
      .then((response) => {
        console.log(response.data);

          // Clear the form 
          setType("");
          setName("");
          setQnt("");
          setPrice("");
          setVariety("");
          setImage(null);
          document.getElementById('image').value = null;



        toast.success('Crops Added successfully..!', {
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
        console.error('Error adding crops:', error);
        toast.error('Failed to add crops. Please try again.', {
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
          <h1 className="text-center">Crops Upload</h1>
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
              <form onSubmit={saveOrUpdateCrops}>

                 {/* <div className="mb-3">
                    <div className="input-group">
                      <span className="input-group-text">
                        <i class="fas fa-sort-amount-up"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        id="type"
                        name="type"
                        value={type}
                        autoComplete="off"
                        placeholder="Crops Type"
                        onChange={(e) => setType(e.target.value)}
                      />
                    </div>
                  </div> */}

                    <div className="mb-3">
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="fas fa-sort-amount-up"></i>
                      </span>
                      <select
                        className="form-select"
                        id="type"
                        name="type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                      >
                        <option value="">Select Crop Type</option>
                        <option value="Foodcrops">Foodcrops</option>
                        <option value="Plantationcrops">Plantationcrops</option>
                        <option value="Cashcrops">Cashcrops</option>
                      </select>
                    </div>
                    </div>



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
                      placeholder="Crops Name"
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
                      placeholder="Crops Quantity in kg"
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
                      placeholder="Crops price"
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
                      id="variety"
                      name="variety"
                      value={variety}
                      autoComplete="off"
                      placeholder="Crops variety"
                      onChange={(e) => setVariety(e.target.value)}
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
                      setType("");
                      setName("");
                      setQnt("");
                      setPrice("");
                      setVariety("");
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

export default CropsUpload;
