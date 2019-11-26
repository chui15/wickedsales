import React from 'react';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.setView = this.props.setView;
  }

  render() {
    return (
      <div className="row nav-bar">
        <div className="col align-items-start">
          <h5 className="nav-link">Tops</h5>
          <h5 className="nav-link">Outerwear</h5>
          <h5 className="nav-link">Bottoms</h5>
          <h5 className="nav-link">Accessories</h5>
        </div>
      </div>
    );
  }
}

export default NavBar;
