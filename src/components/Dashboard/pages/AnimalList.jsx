import React, { useEffect, useState } from "react";
import axios from "axios";
import "./pages.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AnimalList = () => {
  const [animalList, setAnimalList] = useState([]);

  useEffect(() => {
    fetchAnimalList();
  }, []);

  const fetchAnimalList = () => {
    axios
      .get("http://localhost:8080/api/animal", {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response.data);
        setAnimalList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDeleteanimal = (id) => {
    axios
    .delete(`http://localhost:8080/api/animal/${id}`, {
      headers: { "Content-Type": "application/json" },
    })
    .then(() => {
      fetchAnimalList(); 
      toast.success("animal deleted successfully", {
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
      toast.error("Failed to delete animal. Please try again.", {
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
        <h2 className="text-center">List of animal</h2>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>animal Id</th>
              <th>animal Name</th>
              <th>animal Quantity</th>
              <th>animal price</th>
              <th>animal Breed</th>
              <th>animal Age</th>
              <th>animal Milk</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {animalList.map((animal, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{animal.name}</td>
                <td>{animal.qnt}</td>
                <td>{animal.price}</td>
                <td>{animal.breed}</td>
                <td>{animal.age}</td>
                <td>{animal.milk}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteanimal(animal.id)}
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

export default AnimalList;
