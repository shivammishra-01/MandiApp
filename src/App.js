import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Layout/Navbar.js";
import Alert from "./components/mandi/Alert.js";
import Card from "./components/mandi/Card.js";
import Footer from "./components/Layout/Footer.js";
import Login from "./components/Home/Login.js";
import Home from "./components/Layout/Home.js";
import Signup from "./components/Home/Signup.js";
import Contact from "./components/mandi/Contact.js";
import Animals from "./components/Animals/Animals.js";
import Anislider from "./components/Animals/Anislider.js";
import AniCard from "./components/Animals/AniCard.js";
import Crops from "./components/Crops/Crops.js";
import Fertilizer from "./components/Fertilizer/Fertilizer.js";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Alert" element={<Alert />}></Route>
          <Route path="/Card" element={<Card />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/Animals" element={<Animals />}></Route>
          <Route path="/Crops" element={<Crops />}></Route>
          <Route path="/Fertilizer" element={<Fertilizer />}></Route>
          <Route path="/Anislider" element={<Anislider />}></Route>
          <Route path="/AniCard" element={<AniCard />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
