import React from "react";
import Sidebar from "../components/Sidebar";
import "./pages.css";
import yourImage from "./farmer.png";
import Animal from "./anime_cow.gif";
const UploadProduct = () => {
  return (
    <div className="dash-main">
      <Sidebar />

      <div className="rowses">
        <h1 style={{ textAlign: "center" }}>UploadProduct</h1>
        <div className="ffff">
          {" "}
          <div className="columnnn">
            <div className="cardses">
              {/* <h3>Card 1</h3> */}
              <div className="circular-image">
                <a href="/CropsUpload" className="circular-image-link">
                  <img src={yourImage} alt="Description of your image" />
                </a>
                Crops
              </div>
            </div>
          </div>
          <div className="columnnn">
            <div className="cardses">
              {/* <h3>Card 2</h3> */}
              <div className="circular-image">
                <a href="/AnimalsUpload" className="circular-image-link">
                  <img src={Animal} alt="Description of your image" />
                </a>
                Animals
              </div>
            </div>
          </div>
          <div className="columnnn">
            <div className="cardses">
              {/* <h3>Card 3</h3> */}
              <div className="circular-image">
                <a href="/FertilizerUpload" className="circular-image-link">
                  <img src={yourImage} alt="Description of your image" />
                </a>
                Fertilizer
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadProduct;
