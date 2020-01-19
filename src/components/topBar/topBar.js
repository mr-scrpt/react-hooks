import React from "react";
import { NavLink } from "react-router-dom";
export const TopBar = () => {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <NavLink to="/" className="navbar-brand" exact>
          Главная
        </NavLink>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" exact>
              Домой
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/login" className="nav-link">
              Войти
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/registration" className="nav-link">
              Регистрация
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
