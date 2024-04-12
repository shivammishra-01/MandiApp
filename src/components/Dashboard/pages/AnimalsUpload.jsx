import React from "react";
import Sidebar from "../components/Sidebar";
import "./pages.css";

import img from "./farmer.png";
const AnimalsUpload = () => {
  return (
    <div className="dash-main">
      <Sidebar />
      <div className="container mt-3 d-flex justify-content-center">
        <div
          className={` card shadow`}
          style={{
            width: "60rem",
            height: "30rem",
            backgroundColor: "green",
          }}
        >
          <h1 className="text-center">Animals Upload</h1>
          <div className="row">
            <div className="col-lg-5">
              <img alt={img} className="img-fluid" />
            </div>
            <div className="col-lg-7">
              <div className="mx-2 my-2">
                <form>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <div className={`d-flex `}>
                          {/* <i className="fa-solid fa-user mt-2 ps-2"></i> */}
                          <i class="fa-solid fa-bag-shopping  mt-2 ps-2 "></i>
                          &nbsp;
                          <input
                            type="text"
                            className={`form-control `}
                            id="name"
                            name="name"
                            autoComplete="off"
                            placeholder="Product Name"
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className={`d-flex `}>
                          <i class="fa-solid fa-thumbs-up mt-2 ps-2"></i>
                          &nbsp;
                          <input
                            type="email"
                            className={`form-control `}
                            id="email"
                            name="email"
                            autoComplete="off"
                            placeholder="Product Quality"
                          />
                        </div>
                      </div>

                      <div className="mb-3">
                        <div className={`d-flex `}>
                          <i class="fa-solid fa-indian-rupee-sign mt-2 ps-3"></i>
                          &nbsp;
                          <input
                            type="number"
                            className={`form-control `}
                            id="number"
                            name="number"
                            autoComplete="off"
                            placeholder="Product Price"
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className={`d-flex `}>
                          <i className="fa-solid fa-address-card mt-2 ps-2"></i>
                          &nbsp;
                          <input
                            type="number"
                            className={`form-control `}
                            id="adhar"
                            autoComplete="off"
                            name="farmeradhar"
                            placeholder="Number of Products"
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className={`d-flex `}>
                          <i className="fa-solid fa-lock mt-2 ps-3"></i>&nbsp;
                          <div className="password-toggle">
                            <textarea
                              rows="4"
                              cols="50"
                              className={`form-control `}
                              id="password"
                              name="password"
                              autoComplete="off"
                              placeholder="Description products"
                            />
                            <i className={`fa-regular `}></i>
                          </div>
                        </div>
                      </div>
                      {/* <div className="mb-3">
                          <div className={`d-flex `}>
                            <i className="fa-solid fa-lock mt-2 ps-2"></i>&nbsp;
                            <div className="password-toggle">
                              <input
                              
                                className={`form-control `}
                                id="cpassword"
                                placeholder="Confirm Password"
                              />
                              <i className={`fa-regular `}></i>
                            </div>
                          </div>
                        </div> */}
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <div className={`d-flex `}>&nbsp;</div>
                        <div className="mt-3">
                          <div className={`d-flex `}>
                            &nbsp;
                            <select
                              className="form-select"
                              id="district"
                              aria-label="Default select example"
                              name="diss"
                            >
                              <option>Which types of products</option>{" "}
                              {/* Your option */}
                              <option value="district1">Crops</option>
                              <option value="district2">Animals</option>
                              <option value="district3">Fertilizers</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className={`d-flex `}>
                          &nbsp;
                          <input
                            type="text"
                            name="mandiname"
                            className={`form-control `}
                            id="mandiname"
                            autoComplete="off"
                            placeholder="Mandi"
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className={`d-flex `}>
                          &nbsp;
                          <input
                            type="file"
                            name="filename"
                            className={`form-control `}
                            id="mandiname"
                            autoComplete="off"
                            placeholder="Mandi"
                          />
                        </div>
                      </div>
                      {/* <div className="mb-3">
                                            <div className="d-flex" >
                                                <label htmlFor="image"><i className="fa-solid fa-image mt-2"></i> Upload Img</label>&nbsp;<input type="file" id='image' accept='image/jpeg, image/png, image/jpg' className={`form-control ${signupcss.formControl}`} name='image' style={{ display: "none" }} />
                                                <img src={singup} alt="" className='img-fluid rounded-4' style={{ height: "30px", width: "30px" }} />
                                            </div>
                                        </div>  */}

                      <div className="mt-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="checkbox"
                          style={{ cursor: "pointer" }}
                          aria-label="..."
                        />{" "}
                        <label htmlFor="checkbox" style={{ cursor: "pointer" }}>
                          {" "}
                          Terms and Condtion.
                        </label>
                      </div>
                      <div className="mt-3 text-center">
                        <button className="btn btn-success" type="submit">
                          {" "}
                          Upload
                        </button>
                      </div>
                      {/* <div className='mt-3 text-center'>
                                            <button className="btn btn-danger" type="button">
                                                <i className="fa-brands fa-google"></i>  LOGIN IN WITH GOOGLE
                                            </button>
                                        </div> */}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimalsUpload;
