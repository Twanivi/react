import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import "./Header.css";

const setIsActive = ({ isActive }) => (isActive ? "active-link" : "");

export const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const changeTheme = () => {
    setTheme((prevValue) => (prevValue === "light" ? "dark" : "light"));
  };

  return (
    <div>
      <div className="header">
        <NavLink
          to={""}
          style={({ isActive }) => ({ color: isActive ? "red" : "" })}
        >
          Home
        </NavLink>
        <NavLink to={"users"} className={setIsActive}>
          Users
        </NavLink>
        <NavLink to={"aboutus"} className={setIsActive}>
          About Us
        </NavLink>
        <div>
          
            <input className="change-checkbox"
                id='change'
              type="checkbox"
              checked={theme === "dark"}
              onChange={changeTheme}
            />
            <label for='change'></label>
        </div>
      </div>
    </div>
  );
};
