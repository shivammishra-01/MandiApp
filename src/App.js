import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Layout/Navbar.js";
import Login from "./components/Home/Login.js";
import Home from "./components/Layout/Home.js";
import Signup from "./components/Home/Signup.js";
import Contact from "./components/mandi/Contact.js";
import Animals from "./components/Animals/Animals.js";
import Crops from "./components/Crops/Crops.js";
import Fertilizer from "./components/Fertilizer/Fertilizer.js";
import PrivateRoute from "./components/Farmer/PrivateRoute/PrivateRoute.js";
import DashBoard from "./components/Farmer/DashBoard.js";
import Service from "./components/service/Service.js";
import About from "./components/About/About.js";
import Footer from "./components/Layout/Footer.js";
function App() {
  return (
    <>
      <Router>
        <Navbar />
       

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route exact path="/farmer" element={<PrivateRoute />}>
            <Route exact path={`dashboard`} element={<DashBoard />} />
          </Route>
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/Animals" element={<Animals />}></Route>
          <Route path="/Crops" element={<Crops />}></Route>
          <Route path="/Fertilizer" element={<Fertilizer />}></Route>
          <Route path="/allanimal" element={<Animals />}></Route>
          <Route path="/Service" element={<Service />}></Route>
          <Route path="/About" element={<About />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
