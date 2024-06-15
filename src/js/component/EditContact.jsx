import React from "react";
import ContactsForm from "./ContactsForm.jsx";

const EditContact = ({ contact }) => {
  return (
    <>
      <button
        type="button"
        className="btn btn-warning btn-outline-dark"
        data-bs-toggle="modal"
        data-bs-target={`#edit-modal-${contact.id}`}
      >
        <i className="fas fa-pen"></i>
      </button>
      <div
        className="modal fade"
        id={`edit-modal-${contact.id}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit contact
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <ContactsForm btnContent="Edit" id={contact.id} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditContact;
