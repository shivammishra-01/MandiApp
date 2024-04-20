import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Sidebar from "../components/Sidebar";
import "./pages.css";
import img from "./farmer.png";
import axios from 'axios'
import { FarmerData } from "../../Farmer/Auth";
import { createAnimals } from "../../services/animalServices";

const AnimalUpload = () => {
  const [name, setName] = useState("");
  const [qnt, setQnt] = useState("");
  const [price, setPrice] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [milk, setMilk] = useState("");
  const [image, setImage] = useState(null);

  function handleImageChange(e) {
    setImage(e.target.files[0]);
  }


  const saveOrUpdateAnimal=async(e)=> {
    e.preventDefault();

    const animals = { name, qnt, price, image ,
      farmerid: FarmerData().farmerid,
      state: FarmerData().state,
       breed, age , milk

    };
    console.log(animals );

    createAnimals(animals )
      .then((response) => {
        console.log(response.data);

          // Clear the form 
          setName("");
          setQnt("");
          setPrice("");
          setBreed("");
          setAge("");
          setMilk("");
          setImage(null);
          document.getElementById('image').value = null;



        toast.success('Animal Added successfully..!', {
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
          <h1 className="text-center">Animal Upload</h1>
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
              <form onSubmit={saveOrUpdateAnimal}>

                {/* <div className="mb-3">
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
                      placeholder="Animal Name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div> */}

                    <div className="mb-3">
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="fa-solid fa-bag-shopping"></i>
                      </span>
                      <select
                        className="form-select"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      >
                        <option value="">Select Animal Name</option>
                        <option value="Cows">Cows</option>
                        <option value="Buffalos ">Buffalos</option>
                        <option value="Goats ">Goats</option>
                        {/* Add more options as needed */}
                      </select>
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
                      placeholder="Total no of Animal"
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
                      placeholder="Animal price"
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
                      id="breed"
                      name="breed"
                      value={breed}
                      autoComplete="off"
                      placeholder="Aniamal breed"
                      onChange={(e) => setBreed(e.target.value)}
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
                      id="age"
                      name="age"
                      value={age}
                      autoComplete="off"
                      placeholder="Animal age"
                      onChange={(e) => setAge(e.target.value)}
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
                      id="milk"
                      name="milk"
                      value={milk}
                      autoComplete="off"
                      placeholder="Animal milk in kg"
                      onChange={(e) => setMilk(e.target.value)}
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
                      setBreed("");
                      setAge("");
                      setMilk("");
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

export default AnimalUpload;
