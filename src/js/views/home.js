import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="text-center mt-5">
    
      {store.contacts.map((contact) => {
        return (
          <div className="card m-2" key={contact.id}>
            <div className="card-header d-flex justify-content-start gap-3">
            <img src={`https://picsum.photos/id/${contact.id}/50`} className="rounded-circle" alt="..."/> 
            <h1 className="card-title d-flex justify-content-start pt-2">{contact.name}</h1>
            </div>
            <div className="card-body justify-content-start">
              <h6 className="card-subtitle mb-2 text-muted"><i className="fas fa-phone text-dark"></i> {contact.phone}</h6>
              <h6 className="card-subtitle mb-2 text-muted"><i className="fas fa-envelope text-dark"></i>  {contact.email}</h6>
              <p className="card-text "><i className="fas fa-map-marker-alt"></i>  {contact.address}</p>
            </div> 
            <div className="card-footer d-flex justify-content-end gap-3">
            <Link to={`/edit-contacts/${contact.id}`} className="btn btn-warning m-3 border-dark">
            <i className="fas fa-pen"></i>
      </Link>
              <button
                className="btn btn-danger border-dark m-3"
                onClick={() => actions.deleteContact(contact.id)}
              >
                <i className="fas fa-ban"></i>
              </button>
            </div>
          </div>
        );
      })}
        <Link to="/add-contact" className="btn btn-primary m-3 border-dark">
        <i className="fas fa-user-plus"></i>
      </Link>
    </div>
  );
};
