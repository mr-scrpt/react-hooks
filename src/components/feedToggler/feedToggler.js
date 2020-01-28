import React from 'react';
import { NavLink } from 'react-router-dom';


export const FeedToggler = ({ tagName }) => {
  return (
    <div className="feed-toggle">
      <ul className="nav nav-pills outlin outline-active">
        <li className="nav-item">
          <NavLink to='/feed' className='nav-link'>Ваши фиды</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/' className='nav-link' exact>Все фиды</NavLink>
        </li>
        {
          tagName && (
            <li className="nav-item">
              <NavLink to={`/tags/${tagName}`} className='nav-link' exact>
                <i className="ion-pound"></i>
                {tagName}
              </NavLink>
            </li>
          )
        }
      </ul>
    </div>
  )
}