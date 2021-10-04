import React from 'react';
import './Welcome.css';
import { NavLink } from "react-router-dom";

function Welcome() {
  return (
    <div className="welcome">
this will be welocome page
<NavLink className="none" to="/home">
  <button className="none">
    Home
  </button>
  </NavLink>

    </div>
  );
}

export default Welcome;
