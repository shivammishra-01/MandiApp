import React, { useEffect } from "react";

const About = () => {
  return (
    <>
      <div className="font" style={{ backgroundColor: "#FEFCFF" }}>
        <div className="container" style={{ backgroundColor: "#FEFCFF" }}>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
