import React, { useEffect, useState } from "react";
import axios from "axios";
// import "./pages.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CropsLista = () => {
  const [cropsList, setCropsList] = useState([]);

  useEffect(() => {
    fetchCropsList();
  }, []);

  const fetchCropsList = () => {
    axios
      .get("http://localhost:8080/api/crops", {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response.data);
        setCropsList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDeleteCrop = (id) => {
    axios
    .delete(`http://localhost:8080/api/crops/${id}`, {
      headers: { "Content-Type": "application/json" },
    })
    .then(() => {
      fetchCropsList(); 
      toast.success("Crops deleted successfully", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    })
    .catch((error) => {
      console.error(error);
      toast.error("Failed to delete crops. Please try again.", {
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
  };

  return (
    <div className="dash-main">
      <div className="container">
        <h2 className="text-center">List of Crops</h2>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Crops Id</th>
              <th>Crops Type</th>
              <th>Crops Name</th>
              <th>Crops Quantity</th>
              <th>Crops price</th>
              <th>Crops variety</th>
              <th>Farmers State</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cropsList.map((crop, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{crop.type}</td>
                <td>{crop.name}</td>
                <td>{crop.qnt}</td>
                <td>{crop.price}</td>
                <td>{crop.variety}</td>
                <td>{crop.state}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteCrop(crop.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CropsLista;
