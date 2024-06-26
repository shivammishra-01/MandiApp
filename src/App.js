import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Layout/Navbar.js";
import Login from "./components/Home/Login.js";
import AdminLogin from "./components/Home/AdminLogin.js";
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
import OrganicFer from "./components/Fertilizer/Fertilizers/OrganicFer.js";
// import Profile from "./components/Dashboard/Profile.jsx";
// Farmer Dashboard
import Sidebar from "./components/Dashboard/components/Sidebar.jsx";
import Dashboard from "./components/Dashboard/pages/Dashboard.jsx";
import User from "./components/Dashboard/pages/UserList.jsx";
import Analytics from "./components/Dashboard/pages/Analytics.jsx";
import Comment from "./components/Dashboard/pages/Comment.jsx";
import Userlist from "./components/Dashboard/pages/Product.jsx";
import ProductList from "./components/Dashboard/pages/ProductList.jsx";
import UploadProduct from "./components/Dashboard/pages/UploadProduct.jsx";
import CropsUpload from "./components/Dashboard/pages/CropsUpload.jsx";
import CropsList from "./components/Dashboard/pages/CropsList.jsx";
import AnimalsUpload from "./components/Dashboard/pages/AnimalsUpload.jsx";
import AnimalList from "./components/Dashboard/pages/AnimalList.jsx";
import FertilizerUpload from "./components/Dashboard/pages/FertilizerUpload.jsx";
import FertilizerList from "./components/Dashboard/pages/FertilizerList.jsx";

import ChangePassword from "./components/Dashboard/pages/ChangePassword.jsx";
import UpdateProfiles from "./components/Dashboard/pages/UpdateProfiles.jsx";
// AdminDashboard
import AdminSidebar from "./components/Dashboard/Admin/components/AdminSidebar.jsx";
import FarmerList from "./components/Dashboard/Admin/Pages/FarmerList.jsx";
import AdminDashboard from "./components/Dashboard/Admin/Pages/AdminDashboard.jsx";
import UpdateProfile from "./components/Dashboard/Admin/Pages/UpdateProfile.jsx";
import UpdatePassword from "./components/Dashboard/Admin/Pages/UpdatePassword.jsx";
import Farmerproduct from "./components/Dashboard/Admin/Pages/Farmerproduct.jsx";
import ContactList from "./components/Dashboard/Admin/Pages/ContactList.js";
import CropsLista from "./components/Dashboard/Admin/Pages/cropsLista.jsx";
import AnimalsList from "./components/Dashboard/Admin/Pages/AnimalsList.jsx";
import FertilizersList from "./components/Dashboard/Admin/Pages/FertilizersList.jsx";


import AboutUpdate from "./components/Dashboard/Admin/Pages/AboutUpdate.jsx";
import AdminRoute from "./components/Dashboard/Admin/AdminRoute.js";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/AdminLogin" element={<AdminLogin />} />
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
          <Route path="Fertilizer/OrganicFertilizers/Product" element={<OrganicFer />} />
          <Route
            path="Crops/PlantationsCrops/Product"
            element={<PlantationsProduct />}
          />
          <Route exact path="Crops/Foodcrops/Product" element={<Foodcrops />} />
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/comment" element={<Comment />} />
          <Route exact path="/analytics" element={<Analytics />} />
          <Route exact path="/Userlist" element={<Userlist />} />

          {/* Farmer Dahboard */}

          <Route exact path="/farmer" element={<PrivateRoute />}>
            <Route exact path={`dashboard`} element={<Dashboard />} />
            <Route exact path={`Sidebar`} element={<Sidebar />} />
            <Route exact path={`CropsUpload`} element={<CropsUpload />} />
            <Route exact path={`CropsList`} element={<CropsList />} />

            <Route
              exact
              path={`FertilizerUpload`}
              element={<FertilizerUpload />}
            />

            <Route exact path={`FertilizerList`} element={<FertilizerList />} />
            <Route exact path={`AnimalsUpload`} element={<AnimalsUpload />} />
            <Route exact path={`AnimalList`} element={<AnimalList/>} />

            <Route exact path={`UploadProduct`} element={<UploadProduct />} />
            <Route exact path={`productList`} element={<ProductList />} />
            <Route exact path={`ChangePassword`} element={<ChangePassword />} />
            <Route exact path={`UpdateProfiles`} element={<UpdateProfiles />} />
          </Route>

            {/* Admin DashBoard */}
             
          <Route exact path="/admin" element={<AdminRoute />}>
            <Route exact path={`AdminSidebar`} element={<AdminSidebar />} />
            <Route exact path={`FarmerList`} element={<FarmerList />} />
            <Route exact path={`AdminDashboard`} element={<AdminDashboard />} />
            <Route exact path={`UpdateProfile`} element={<UpdateProfile />} />
            <Route exact path={`UpdatePassword`} element={<UpdatePassword />} />
            <Route exact path={`Farmerproduct`} element={<Farmerproduct />} />
            <Route exact path={`ContactList`} element={<ContactList />} />
            <Route exact path={`AboutUpdate`} element={<AboutUpdate />} />
            <Route exact path={`CropsLista`} element={<CropsLista />} />
            <Route exact path={`AnimalsList`} element={<AnimalsList />} />
            <Route exact path={`FertilizersList`} element={<FertilizersList />} />

          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
