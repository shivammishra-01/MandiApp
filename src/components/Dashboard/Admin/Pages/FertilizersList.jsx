import React, { useEffect, useState } from "react";
import axios from "axios";
// import "./pages.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FertilizersList = () => {
  const [fertilzerList, setFertilizerList] = useState([]);

  useEffect(() => {
    fetchFertilizerList();
  }, []);

  const fetchFertilizerList= () => {
    axios
      .get("http://localhost:8080/api/fertilizer", {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response.data);
        setFertilizerList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDeletefertilizer = (id) => {
    axios
    .delete(`http://localhost:8080/api/fertilizer/${id}`, {
      headers: { "Content-Type": "application/json" },
    })
    .then(() => {
      fetchFertilizerList();
      toast.success("fertilizer deleted successfully", {
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
      toast.error("Failed to delete fertilizer. Please try again.", {
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
        <h2 className="text-center">List of fertilizer</h2>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Fertilizer Id</th>
              <th>Fertilizer Name</th>
              <th>Fertilizer Quantity</th>
              <th>Fertilizer price</th>
              <th>Fertilizer Type</th>
              <th>Farmers State</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {fertilzerList.map((fertilizer, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{fertilizer.name}</td>
                <td>{fertilizer.qnt}</td>
                <td>{fertilizer.price}</td>
                <td>{fertilizer.type}</td>
                <td>{fertilizer.state}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeletefertilizer(fertilizer.id)}
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

export default FertilizersList;
