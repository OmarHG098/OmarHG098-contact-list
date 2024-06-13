import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

const ContactsForm = ({ btnContent, id }) => {
  const navigate = useNavigate();
  const { actions } = useContext(Context);
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

  return (
    <form
      className="card d-flex justify-content-center flex-column gap-3"
      onSubmit={handleSubmit}
    >
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          aria-describedby="nameHelp"
          value={contact.name}
          onChange={(event) => handleChange(event)}
          placeholder="Contact name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          type="number"
          className="form-control"
          id="phone"
          name="phone"
          aria-describedby="phoneHelp"
          value={contact.phone}
          onChange={(event) => handleChange(event)}
          placeholder="Contact phone"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          aria-describedby="emailHelp"
          value={contact.email}
          onChange={(event) => handleChange(event)}
          placeholder="Contact email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          className="form-control"
          id="address"
          name="address"
          aria-describedby="textHelp"
          value={contact.address}
          onChange={(event) => handleChange(event)}
          placeholder="Contact address"
        />
      </div>

      <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">
        {btnContent}
      </button>
    </form>
  );
};

export default ContactsForm;
