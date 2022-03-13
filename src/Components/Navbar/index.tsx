import React from "react";
import logo from "../../assets/logo.svg";
import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";
import icon4 from "../../assets/icon4.svg";
import "./index.css";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav className="nav-wrapper">
      <div className="nav-logo">
        <NavLink to="/">
          <img src={logo} alt="Logo" />
        </NavLink>
      </div>
      <ul>
        <NavLink style={{ display: "block" }} to="/">
          <li>
            <img src={icon1} alt="icon1" />
            <span>Trang chủ</span>
          </li>
        </NavLink>
        <NavLink style={{ display: "block" }} to="/Management">
          <li>
            <img src={icon2} alt="icon2" />
            <span>Quản lý vé</span>
          </li>
        </NavLink>
        <NavLink style={{ display: "block" }} to="/CheckingTickets">
          <li>
            <img src={icon3} alt="icon3" />
            <span>Đối soát vé</span>
          </li>
        </NavLink>
        <NavLink style={{ display: "block" }} to="/Setting">
          <li>
            <img src={icon4} alt="icon4" />
            <span>Cài đặt</span>
          </li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
