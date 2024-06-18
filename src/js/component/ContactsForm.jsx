import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const ContactsForm = ({ btnContent, id }) => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const [contact, setContact] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    id: "",
  });

  async function handleSubmit(event) {
    event.preventDefault();
    if (
      contact.name == "" ||
      contact.phone == "" ||
      contact.email == "" ||
      contact.address == ""
    ) {
      alert("Todos los campos son requeridos");
      return;
    }
    if (id) {
      actions.editContact(id, contact);
      navigate("/");
    } else {
      const response = await actions.createContact(contact);
      if (response) {
        navigate("/");
      }
    }
  }

  function handleChange(event) {
    setContact({ ...contact, [event.target.name]: event.target.value });
  }

  useEffect(() =>{
      if(id && store.contacts.length > 0){
        const editingUser = store.contacts.find((item)=> item.id == id)
        if(!editingUser) {
          alert("El usuario no existe");
          navigate("/");
          return;
        }
        setContact(editingUser);
      }
    },[id, store.contacts]) 

  return (
    <form
      className="card d-flex justify-content-center mx-4 px-3"
      onSubmit={handleSubmit}
    >
      <div className="form-group p-2">
        <label htmlFor="name"><i className="fas fa-user"></i>  Name</label>
        <input
          type="text"
          className="form-control bg-light"
          id="name"
          name="name"
          aria-describedby="nameHelp"
          value={contact.name}
          onChange={(event) => handleChange(event)}
          placeholder="Contact name"
        />
      </div>
      <div className="form-group p-2">
        <label htmlFor="phone"><i className="fas fa-phone"></i>  Phone</label>
        <input
          type="number"
          className="form-control bg-light"
          id="phone"
          name="phone"
          aria-describedby="phoneHelp"
          value={contact.phone}
          onChange={(event) => handleChange(event)}
          placeholder="Contact phone"
        />
      </div>
      <div className="form-group p-2">
        <label htmlFor="email"><i className="fas fa-envelope"></i>  Email</label>
        <input
          type="email"
          className="form-control bg-light"
          id="email"
          name="email"
          aria-describedby="emailHelp"
          value={contact.email}
          onChange={(event) => handleChange(event)}
          placeholder="Contact email"
        />
      </div>
      <div className="form-group p-2">
        <label htmlFor="address"><i className="fas fa-map-marker-alt"></i>  Address</label>
        <input
          type="text"
          className="form-control bg-light"
          id="address"
          name="address"
          aria-describedby="textHelp"
          value={contact.address}
          onChange={(event) => handleChange(event)}
          placeholder="Contact address"
        />
      </div>

      <button type="submit" className="btn btn-primary my-2 btn-md" data-bs-dismiss="modal btn-sm" >
        {btnContent}
      </button>
    </form>
  );
};

export default ContactsForm;
