import React, { useEffect, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import "./Pages.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = () => {
    axios.get(
      "http://localhost:8080/api/farmercontact",
      { headers: { "Content-Type": "application/json" } }
    )
    .then((response) => {
      console.log(response.data);
      setContacts(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
  };

  const handleDeleteContact = (id) => {
    axios
    .delete(`http://localhost:8080/api/farmercontact/${id}`, {
      headers: { "Content-Type": "application/json" },
    })
    .then(() => {
      fetchContacts(); // Fetch contacts again after deletion to update the list
      toast.success("Contact deleted successfully", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    })
    .catch((error) => {
      console.error(error);
      toast.error("Failed to delete contact. Please try again.", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    });
  };

  return (
    <>
      <div className="dash-main">
        <AdminSidebar />
        <div className="mx-5">
          <div className="row">
            {contacts.map((contact, index) => (
              <div className="col-md-4" key={index}>
                <div className="card mt-5" style={{ width: "18rem", height: "17rem" }}>
                  <div className="card-header text-center">Farmer Contact</div>
                  <div className="card-body">
                    <h5 className="name">Name : {contact.name}</h5>
                    <h5 className="name">Contact : {contact.mobileNumber}</h5>
                    <h5 className="name">Email : {contact.email}</h5>
                    <h5 className="name">Mandi Name : {contact.mandiName}</h5>

                    <div className="text-center">
                    <button onClick={() => handleDeleteContact(contact.id)} className="btn btn-danger text-center">Delete</button>

                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default ContactList;
