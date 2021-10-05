import React from 'react';
import './Welcome.css';
import { NavLink } from "react-router-dom";

function Welcome() {
  return (
    <div className="welcome">
<NavLink className="none" to="/home">
  <button className="none">
    Home
  </button>
  </NavLink>

  <div className="body-of-welcome">
  <img className="volfeylogo" src={process.env.PUBLIC_URL + "/Volfey.png"} alt="HeartLogo" />
  </div>

    </div>
  );
}

export default Welcome;
