import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

  render() {
    return (
      <div className="row nav-bar">
        <div className="col align-items-start">
          <Link to="/tops" className="nav-link">Tops</Link>
          <Link to="/outerwear" className="nav-link">Outerwear</Link>
          <Link to="/bottoms" className="nav-link">Bottoms</Link>
          <Link to="/accessories" className="nav-link">Accessories</Link>
        </div>
      </div>
    );
  }
}

export default NavBar;
