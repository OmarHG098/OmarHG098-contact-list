import React, {useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="text-center mt-5">
		<Link to="/addContact" ></Link>
	</div>
);
