import React from "react";
import { Context } from "../store/appContext";

const ContactsForm = ({ btnContent }) => {
  return (
    <div className="card d-flex justify-content-center flex-column gap-3">
      <div className="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          aria-describedby="nameHelp"
          placeholder="Contact name"
        />
      </div>
      <div className="form-group">
        <label for="phone">Phone</label>
        <input
          type="number"
          className="form-control"
          id="phone"
          aria-describedby="phoneHelp"
          placeholder="Contact phone"
        />
      </div>
      <div className="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder="Contact email"
        />
      </div>
      <div className="form-group">
        <label for="address">Address</label>
        <input
          type="text"
          className="form-control"
          id="address"
          aria-describedby="textHelp"
          placeholder="Contact address"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        {btnContent}
      </button>
    </div>
  );
};

export default ContactsForm;
