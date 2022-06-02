import React from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";

const PageContainer = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">about</NavLink>
      {/* <p onClick={() => navigate("/about")}>about</p> */}
      </div>
      <div className="page-content">
        <Outlet />
      </div>
    </div>
  );
};

export default PageContainer;
