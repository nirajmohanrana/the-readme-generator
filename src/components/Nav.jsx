import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex justify-between items-center gap-2">
      <h1>Readme gen</h1>

      <div>
      <Link to="/form">Form</Link>
      <Link to="/about">About</Link>
      </div>
    </div>
  );
};

export default Nav;
