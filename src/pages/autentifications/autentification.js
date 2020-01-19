import React from "react";
import { NavLink } from "react-router-dom";
export const Autentifications = () => {
  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Auth</h1>
            <p className="text-xs-center">
              <NavLink to="/registration" className>
                Регистрация
              </NavLink>
            </p>
            <form>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Пароль"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email"
                  />
                </fieldset>
                <button className="btn btn-lg btn-primary pull-xs-right">
                  Войти
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
