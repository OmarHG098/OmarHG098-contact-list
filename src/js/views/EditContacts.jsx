import React, { useState, useContext } from "react";
import ContactsForm from "../component/ContactsForm.jsx";
import { useParams } from "react-router-dom";

const EditContacts = () => {
  const {id} = useParams() 
  return (
      <div className="modal-body">
        <h1 className="modal-title fs-2" >
          Edit contact
        </h1>
        <ContactsForm btnContent={"Edit"} id={id} />
      </div>
  );
};

export default EditContacts;
