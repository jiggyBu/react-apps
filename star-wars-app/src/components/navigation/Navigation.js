import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
        <nav>
            <div className="nav-wrapper">
                <NavLink className="brand-logo" exact to="/">Logo</NavLink>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <NavLink exact to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/people">People</NavLink>
                    </li>
                    <li>
                        <NavLink to="/planets">Planets</NavLink>
                    </li>
                    <li>
                        <NavLink to="/starships">Starships</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
  }
}

export default Navigation
