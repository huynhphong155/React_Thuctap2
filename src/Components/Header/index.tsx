import React from "react";
import "./index.css";
import iconSearch from "../../assets/search.svg";
import user from "../../assets/userColor.svg";
import icon5 from "../../assets/icon5.svg";
import icon6 from "../../assets/icon6.svg";

function Header() {
  const handleSearch = (e: any) => {
    const { value } = e.target;
    console.log(value);
  };

  return (
    <header>
      <div className="header-wrapper">
        <div className="header-search">
          <input
            type="text"
            placeholder="Nhập tên hoặc mã khoản thu"
            onChange={handleSearch}
          />
          <img src={iconSearch} alt="" />
        </div>
        <ul>
          <li>
            <img src={icon5} alt="" />
          </li>
          <li>
            <img src={icon6} alt="" />
          </li>
          <li>
            <img src={user} alt="" />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
