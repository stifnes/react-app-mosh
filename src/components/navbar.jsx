import React, { Component } from "react";

// Stateless Functional Component

const Navbar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-secondary mx-2">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
