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
          <div className="card" key={contacts.id}>
            <div className="card-body">
              <h5 className="card-title">{contacts.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{contacts.phone}</h6>
              <p className="card-text">{contacts.address}</p>
            </div> 
            <div className="card-footer d-flex justify-content-between mx-1">
            <EditContact contact={contacts}/>
              <button
                className="btn btn-danger"
                onClick={() => actions.deleteContact(contacts.id)}
              >
                <i class="fas fa-ban"></i>
              </button>
  
            </div>
          </div>
        );
      })}
        <Link to="/add-contact" className="btn btn-primary rounded-circle ">
        +
      </Link>
    </div>
  );
};
