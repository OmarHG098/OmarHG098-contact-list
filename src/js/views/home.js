import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="text-center mt-5">
      <Link to="/add-contact" className="btn btn-primary rounded-circle ">
        +
      </Link>
      {store.contacts.map((contacts) => {
        return (
          <div className="card" key={contacts.id}>
            <div className="card-body">{contacts.title}</div>
            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={() => actions.deleteContacts(contacts.id)}
              >
                Borrar
              </button>
              <EditModal contacts={contacts} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
