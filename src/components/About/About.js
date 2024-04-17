import React, { useEffect } from "react";
import "./About.css";
import sk from "./img/skmishra.jpg";
import shivam from "./img/shivam.jpg";
import ujjwal from "./img/ujjwal.jpg";
const About = () => {
  return (
    <>
      <div className="font" style={{ backgroundColor: "#C7F6C7" }}>
        <div className="container  ">
          <div className="about" id="about">
            <h3
              style={{
                textAlign: "center",
                backgroundColor: "#00a651",
                padding: "12px",
                marginTop: "20px",
              }}
            >
              <b>----About us----</b>
            </h3>
            <div classNamme="accordion-body">
              <ul className="ulpara">
                <li>
                  <p>
                    Our website <strong>MANDI.COM</strong> is e-commerce
                    websites play a crucial role in modernizing agricultural
                    trade, eliminating geographical barriers, and empowering
                    farmers and buyers with greater market access and
                    transparency.
                    <strong> Product Listings:</strong> These platforms host a
                    wide range of agricultural products, including fruits,
                    vegetables, grains, spices, and more. Each product is
                    typically listed with details such as price, quantity,
                    quality, and origin.
                  </p>
                </li>
                <li>
                  <p>
                    <strong> Seller Profiles:</strong>
                    Farmers and wholesalers can create profiles showcasing their
                    products, farming practices, certifications, and contact
                    information. This helps buyers make informed decisions and
                    establishes trust between buyers and sellers.
                  </p>
                </li>
                <li>
                  <p>
                    <strong> Search and Filter Options:</strong>
                    Users can search for specific products or browse through
                    categories. Filter options based on price range, location,
                    quality, and other parameters enable users to find relevant
                    listings efficiently.
                  </p>
                </li>
                <li>
                  <p>
                    <strong> Order Management:</strong>
                    Buyers can place orders directly on the platform, specifying
                    quantity, delivery preferences, and payment method. Sellers
                    receive notifications of incoming orders and manage them
                    through a centralized dashboard.
                  </p>
                </li>
                <li>
                  <p>
                    <strong> Payment Gateway Integration:</strong>
                    Secure payment gateways allow buyers to make online payments
                    using various methods such as credit/debit cards, net
                    banking, or digital wallets. Sellers receive payments
                    directly into their accounts upon successful transactions.
                  </p>
                </li>
                <li>
                  <p>
                    <strong> Logistics and Delivery: </strong>
                    Some mandi e-commerce websites offer integrated logistics
                    services for transporting products from sellers to buyers.
                    Real-time tracking systems keep both parties informed about
                    the status of their shipments.
                  </p>
                </li>
                <li>
                  <p>
                    <strong> Rating and Review System:</strong>
                    Users can leave feedback and ratings for products and
                    sellers, helping to build a reputation-based system within
                    the platform. Positive reviews boost seller credibility,
                    while negative feedback prompts improvement efforts.
                  </p>
                </li>
                <li>
                  <p>
                    <strong> Support and Assistance:</strong>
                    Customer support channels such as live chat, email, or
                    helpline numbers are provided to address queries, resolve
                    disputes, and offer assistance throughout the buying
                    process.
                  </p>
                </li>
                <li>
                  <p>
                    <strong> Market Insights and Analytics:</strong>
                    These platforms may offer analytics tools to track market
                    trends, demand-supply dynamics, and price fluctuations. This
                    data can help farmers and traders make informed decisions
                    regarding production and pricing strategies.
                  </p>
                </li>
              </ul>
            </div>
            <h3
              style={{
                textAlign: "center",
                backgroundColor: "#00a651",
                padding: "12px",
                marginTop: "20px",
              }}
            >
              <b>--------Project Developers--------</b>
            </h3>

            <div class="container">
              <div class="profile-card">
                <div className="DevBox d-flex flex-row flex-wrap mx-3 justify-content-center">
                  <div className="image">
                    <img src={sk} alt="" className="profile-pic" />
                  </div>
                  <div className="data">
                    <h2>Shivam Kumar</h2>
                    <span>B-Tech in CSE</span>
                    <span>Full Stack Web Developer</span>
                  </div>
                  <div className="buttons">
                    <a
                      href="https://www.linkedin.com/in/s-k-mishra-615109262/"
                      className="btn"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                    <a
                      href="https://github.com/shivammishra-01"
                      className="btn"
                      target="_blank"
                    >
                      GitHub
                    </a>
                  </div>

                  {/* <!-- Repeat this div for each additional card --> */}
                </div>
              </div>
              <div class="profile-card">
                <div className="DevBox d-flex flex-row flex-wrap mx-3 justify-content-center">
                  <div className="image">
                    <img src={sk} alt="" className="profile-pic" />
                  </div>
                  <div className="data">
                    <h2>Manish Patel</h2>
                    <span>B-Tech in CSE</span>
                    <span>Full Stack Web Developer</span>
                  </div>
                  <div className="buttons">
                    <a
                      href="https://www.linkedin.com/in/vicky-cse03"
                      className="btn"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                    <a
                      href="https://github.com/vicky0004"
                      className="btn"
                      target="_blank"
                    >
                      GitHub
                    </a>
                  </div>

                  {/* <!-- Repeat this div for each additional card --> */}
                </div>
              </div>
              <div class="profile-card">
                <div className="DevBox d-flex flex-row flex-wrap mx-3 justify-content-center">
                  <div className="image">
                    <img
                      src=".\assets\images\vicky.png"
                      alt=""
                      className="profile-pic"
                    />
                  </div>
                  <div className="data">
                    <h2>Shubham Kumar</h2>
                    <span>B-Tech in CSE</span>
                    <span>Full Stack Web Developer</span>
                  </div>
                  <div className="buttons">
                    <a
                      href="https://www.linkedin.com/in/vicky-cse03"
                      className="btn"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                    <a
                      href="https://github.com/vicky0004"
                      className="btn"
                      target="_blank"
                    >
                      GitHub
                    </a>
                  </div>

                  {/* <!-- Repeat this div for each additional card --> */}
                </div>
              </div>
              <div class="profile-card">
                <div className="DevBox d-flex flex-row flex-wrap mx-3 justify-content-center">
                  <div className="image">
                    <img
                      src=".\assets\images\vicky.png"
                      alt=""
                      className="profile-pic"
                    />
                  </div>
                  <div className="data">
                    <h2>Aniket Kumar</h2>
                    <span>B-Tech in CSE</span>
                    <span>Full Stack Web Developer</span>
                  </div>
                  <div className="buttons">
                    <a
                      href="https://www.linkedin.com/in/aniket-kumar-552788249/"
                      className="btn"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                    <a
                      href="https://github.com/Aniket3741"
                      className="btn"
                      target="_blank"
                    >
                      GitHub
                    </a>
                  </div>

                  {/* <!-- Repeat this div for each additional card --> */}
                </div>
              </div>
              <div class="profile-card">
                <div className="DevBox d-flex flex-row flex-wrap mx-3 justify-content-center">
                  <div className="image">
                    <img
                      src=".\assets\images\vicky.png"
                      alt=""
                      className="profile-pic"
                    />
                  </div>
                  <div className="data">
                    <h2>Guddu Kumar</h2>
                    <span>B-Tech in CSE</span>
                    <span>Full Stack Web Developer</span>
                  </div>
                  <div className="buttons">
                    <a
                      href="https://www.linkedin.com/in/vicky-cse03"
                      className="btn"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                    <a
                      href="https://github.com/vicky0004"
                      className="btn"
                      target="_blank"
                    >
                      GitHub
                    </a>
                  </div>

                  {/* <!-- Repeat this div for each additional card --> */}
                </div>
              </div>
              <div class="profile-card">
                <div className="DevBox d-flex flex-row flex-wrap mx-3 justify-content-center">
                  <div className="image">
                    <img
                      src=".\assets\images\vicky.png"
                      alt=""
                      className="profile-pic"
                    />
                  </div>
                  <div className="data">
                    <h2>Abhishek Tiwari</h2>
                    <span>B-Tech in CSE</span>
                    <span>Full Stack Web Developer</span>
                  </div>
                  <div className="buttons">
                    <a
                      href="https://www.linkedin.com/in/vicky-cse03"
                      className="btn"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                    <a
                      href="https://github.com/vicky0004"
                      className="btn"
                      target="_blank"
                    >
                      GitHub
                    </a>
                  </div>

                  {/* <!-- Repeat this div for each additional card --> */}
                </div>
              </div>
              <div class="profile-card">
                <div className="DevBox d-flex flex-row flex-wrap mx-3 justify-content-center">
                  <div className="image">
                    <img src={shivam} alt="" className="profile-pic" />
                  </div>
                  <div className="data">
                    <h2>Shivam Tiwari</h2>
                    <span>B-Tech in CSE</span>
                    <span>Full Stack Web Developer</span>
                  </div>
                  <div className="buttons">
                    <a
                      href="https://www.linkedin.com/in/shivam-tiwari-a57b93223/"
                      className="btn"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                    <a
                      href="https://github.com/Shivam1035"
                      className="btn"
                      target="_blank"
                    >
                      GitHub
                    </a>
                  </div>

                  {/* <!-- Repeat this div for each additional card --> */}
                </div>
              </div>
              <div class="profile-card">
                <div className="DevBox d-flex flex-row flex-wrap mx-3 justify-content-center">
                  <div className="image">
                    <img
                      src=".\assets\images\vicky.png"
                      alt=""
                      className="profile-pic"
                    />
                  </div>
                  <div className="data">
                    <h2>Niraj Upadhyay</h2>
                    <span>B-Tech in CSE</span>
                    <span>Full Stack Web Developer</span>
                  </div>
                  <div className="buttons">
                    <a
                      href="https://www.linkedin.com/in/vicky-cse03"
                      className="btn"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                    <a
                      href="https://github.com/vicky0004"
                      className="btn"
                      target="_blank"
                    >
                      GitHub
                    </a>
                  </div>

                  {/* <!-- Repeat this div for each additional card --> */}
                </div>
              </div>
              <div class="profile-card">
                <div className="DevBox d-flex flex-row flex-wrap mx-3 justify-content-center">
                  <div className="image">
                    <img src={ujjwal} alt="" className="profile-pic" />
                  </div>
                  <div className="data">
                    <h2>Ujjwal Tiwari</h2>
                    <span>B-Tech in CSE</span>
                    <span>Full Stack Web Developer</span>
                  </div>
                  <div className="buttons">
                    <a
                      href="https://www.linkedin.com/in/ujjwal-tiwari-7a431a240/3"
                      className="btn"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                    <a
                      href="https://github.com/Ujjwal-shandilya"
                      className="btn"
                      target="_blank"
                    >
                      GitHub
                    </a>
                  </div>

                  {/* <!-- Repeat this div for each additional card --> */}
                </div>
              </div>
            </div>
            <h3
              style={{
                textAlign: "center",
                backgroundColor: "#00a651",
                padding: "12px",
                marginTop: "20px",
              }}
            >
              <b>--------Project Mentor--------</b>
            </h3>
            <div className="DevBox d-flex flex-row flex-wrap mx-3 justify-content-center">
              <div className="profile-card">
                <div className="image">
                  <img
                    src=".\assets/images/dean.jpg"
                    alt=""
                    className="profile-pic"
                  />
                </div>
                <div className="data">
                  <h3>Devendra Maharana </h3>
                  <span>HOD of CSE, SoET</span>
                  <span className="text-center">CUTM , Paralakhemundi</span>
                </div>
                <div className="buttons">
                  <a
                    href="mailto:ashish.dash@cutm.ac.in"
                    className="btn"
                    target="_blank"
                  >
                    Mail
                  </a>
                  <a
                    href="https://wa.me/+919437268679"
                    className="btn"
                    target="_blank"
                  >
                    WhatsApp
                  </a>
                  <a
                    href="https://wa.me/+919437268679"
                    className="btn"
                    target="_blank"
                  >
                    phone
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
