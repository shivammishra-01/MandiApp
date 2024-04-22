import React from "react";
import AdminSidebar from "../components/AdminSidebar";
import { Link } from 'react-router-dom'
import yourImage from "./farmer.png";
import Animal from "./anime_cow.gif";
import "./Pages.css";
const Farmerproduct = () => {
  return (
    <div className="dash-main">
      <AdminSidebar />
      

      <div className="rowses">
        <h1 style={{ textAlign: "center" }}>Product List</h1>
        <div className="ffff">
          {" "}
          <div className="columnnn">
            <div className="cardses">
              {/* <h3>Card 1</h3> */}
              <div className="circular-image">
                <Link to="/admin/CropsLista" className="circular-image-link">
                  <img src={yourImage} alt="Description of your image" />
                </Link>
                Crops
              </div>
            </div>
          </div>
          <div className="columnnn">
            <div className="cardses">
              {/* <h3>Card 2</h3> */}
              <div className="circular-image">
                <Link to="/admin/AnimalsList" className="circular-image-link">
                  <img src={Animal} alt="Description of your image" />
                </Link>
                Animals
              </div>
            </div>
          </div>
          <div className="columnnn">
            <div className="cardses">
              {/* <h3>Card 3</h3> */}
              <div className="circular-image">
                <Link to="/admin/FertilizersList" className="circular-image-link">
                  <img src={yourImage} alt="Description of your image" />
                </Link>
                Fertilizer
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};


export default Farmerproduct;
