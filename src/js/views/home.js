import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import EditContact from "../component/EditContact.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="text-center mt-5">
    
      {store.contacts.map((contacts) => {
        return (
          <div className="card m-2" key={contacts.id}>
            <div className="card-header d-flex justify-content-start gap-3">
            <img src='https://picsum.photos/id/1/50' className="rounded-circle" alt="..."/> 
            <h1 className="card-title d-flex justify-content-start pt-2">{contacts.name}</h1>
            </div>
            <div className="card-body justify-content-start">
              <h6 className="card-subtitle mb-2 text-muted"><i className="fas fa-phone text-dark"></i> {contacts.phone}</h6>
              <h6 className="card-subtitle mb-2 text-muted"><i className="fas fa-envelope text-dark"></i>  {contacts.email}</h6>
              <p className="card-text "><i className="fas fa-map-marker-alt"></i>  {contacts.address}</p>
            </div> 
            <div className="card-footer d-flex justify-content-end gap-3">
            <EditContact contact={contacts}/>
              <button
                className="btn btn-danger border-dark"
                onClick={() => actions.deleteContact(contacts.id)}
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
