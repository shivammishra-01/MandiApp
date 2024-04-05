import React from "react";
import "./Service.css"; // Import the CSS file containing the styles

const Header = () => {
  return <h1 className="hh1">Our Service</h1>;
};

const Cardss = ({ iconClass, title, description }) => {
  return (
    <div className="card-ser">
      <i className={iconClass}></i>
      <h2 className="hh2">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

const ServicePage = () => {
  return (
    <div className="container-ser">
      <div className="service-wrapper-ser">
        <Header />
        <div className="cards-ser">
          <Cardss
            iconClass="fa-brands fa-chromecast"
            title="Connecting"
            description="A business strategy is a systematic plan that helps an organization achieve its goals and objectives. It's based on the organization's mission, vision, and values, and helps staff, customers, investors, and other stakeholders understand how the organization plans to achieve its goals."
          />
          <Cardss
            iconClass="fa-solid fa-layer-group"
            title="Website Development"
            description="Web development, also known as website development, refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser. It may, however, also include web design, web programming, and database management."
          />
          <Cardss
            iconClass="fa-solid fa-user-group"
            title="Farmers"
            description="A marketing strategy is a long-term plan for achieving a company's goals by understanding the needs of customers and creating a distinct and sustainable competitive advantage. It encompasses everything from determining who your customers are to deciding what channels you use to reach those customers."
          />
        </div>
        <br />

        <h3
          style={{
            textAlign: "center",
            backgroundColor: "#00a651",
            padding: "12px",
            marginTop: "20px",
          }}
        >
          <b>----Our Products----</b>
        </h3>

        <div className="m-11 d-flex flex-wrap productss">
          <div className="col-lg-4 col-md-6 col-12 mb-3">
            <div className="card m-2" style={{ width: "22rem" }}>
              <img
                className="card-img-top p-1"
                src="https://source.unsplash.com/random/600x400?Crop"
                style={{ height: "14rem", width: "22rem" }}
                alt="Card cap"
              />
              <div className="card-body">
                <h5 className="card-title">CROP</h5>
                <p className="card-text">
                  Buffalo is a city in the U.S. state of New York and the seat
                  of Erie County.It lies in Western New York, at the eastern end
                  of LakeErie, at the head of the Niagara River
                </p>
                <a href="/Crops" className="btn btn-success">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12 mb-3">
            <div className="card m-2" style={{ width: "22rem" }}>
              <img
                className="card-img-top p-1"
                src="https://source.unsplash.com/random/600x400?Animal"
                style={{ height: "14rem", width: "22rem" }}
                alt="Card cap"
              />
              <div className="card-body">
                <h5 className="card-title">ANIMALS</h5>
                <p className="card-text">
                  Buffalo is a city in the U.S. state of New York and the seat
                  of Erie County.It lies in Western New York, at the eastern end
                  of LakeErie, at the head of the Niagara River
                </p>
                <a href="/Animals" className="btn btn-success">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12 mb-3">
            <div className="card m-2" style={{ width: "22rem" }}>
              <img
                className="card-img-top p-1"
                src="https://source.unsplash.com/random/600x400?Fertiliser"
                style={{ height: "14rem", width: "22rem" }}
                alt="Card cap"
              />
              <div className="card-body">
                <h5 className="card-title">FERTILIZERS</h5>
                <p className="card-text">
                  Buffalo is a city in the U.S. state of New York and the seat
                  of Erie County.It lies in Western New York, at the eastern end
                  of LakeErie, at the head of the Niagara River
                </p>
                <a href="/Fertilizer" className="btn btn-success">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
