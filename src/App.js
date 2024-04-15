import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Layout/Navbar.js";
import Login from "./components/Home/Login.js";
import Home from "./components/Layout/Home.js";
import Signup from "./components/Home/Signup.js";
import Contact from "./components/mandi/Contact.js";
import Animals from "./components/Animals/AnimalsHome/Animals.js";
import Crops from "./components/Crops/Crophome/Crops.js";
import Fertilizer from "./components/Fertilizer/Fertilizerhome/Fertilizer.js";
import PrivateRoute from "./components/Farmer/PrivateRoute/PrivateRoute.js";
import Service from "./components/service/Service.js";
import About from "./components/About/About.js";
import Footer from "./components/Layout/Footer.js";
import Cowproduct from "./components/Animals/Cowsproduct/Cowproduct.jsx";
import Product from "./components/Animals/Buffaloproduct/Product.jsx";
import Goatproduct from "./components/Animals/Goatproduct/Goatproduct.jsx";
import Foodcrops from "./components/Crops/Foodcrops/Foodcrops.jsx";
import CashProduct from "./components/Crops/Cashcrops/CashProduct.jsx";
import PlantationsProduct from "./components/Crops/Plantationcrops/PlantationsProduct.jsx";
// import Profile from "./components/Dashboard/Profile.jsx";
// Dashboard
import Sidebar from "./components/Dashboard/components/Sidebar.jsx";
import Dashboard from "./components/Dashboard/pages/Dashboard.jsx";
import User from "./components/Dashboard/pages/UserList.jsx";
import Analytics from "./components/Dashboard/pages/Analytics.jsx";
import Comment from "./components/Dashboard/pages/Comment.jsx";
import Userlist from "./components/Dashboard/pages/Product.jsx";
import ProductList from "./components/Dashboard/pages/ProductList.jsx";
import UploadProduct from "./components/Dashboard/pages/UploadProduct.jsx";
import CropsUpload from "./components/Dashboard/pages/CropsUpload.jsx";
import AnimalsUpload from "./components/Dashboard/pages/AnimalsUpload.jsx";
import FertilizerUpload from "./components/Dashboard/pages/FertilizerUpload.jsx";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Animals" element={<Animals />} />
          <Route path="/Crops" element={<Crops />} />
          <Route path="/Fertilizer" element={<Fertilizer />} />
          <Route path="/allanimal" element={<Animals />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/About" element={<About />} />
          <Route path="Animals/Cows/Product" element={<Cowproduct />} />
          <Route path="Animals/Buffalo/Product" element={<Product />} />
          <Route path="Animals/Goat/Product" element={<Goatproduct />} />
          <Route path="Crops/CashCrops/Product" element={<CashProduct />} />
          <Route
            path="Crops/PlantationsCrops/Product"
            element={<PlantationsProduct />}
          />
          <Route exact path="Crops/Foodcrops/Product" element={<Foodcrops />} />
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/comment" element={<Comment />} />
          <Route exact path="/analytics" element={<Analytics />} />
          <Route exact path="/Userlist" element={<Userlist />} />

          <Route exact path="/farmer" element={<PrivateRoute />}>
            <Route exact path={`dashboard`} element={<Dashboard />} />
            <Route exact path={`Sidebar`} element={<Sidebar />} />
            <Route exact path={`CropsUpload`} element={<CropsUpload />} />
            <Route
              exact
              path={`FertilizerUpload`}
              element={<FertilizerUpload />}
            />
            <Route exact path={`AnimalsUpload`} element={<AnimalsUpload />} />
            <Route exact path={`UploadProduct`} element={<UploadProduct />} />
            <Route exact path={`productList`} element={<ProductList />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
