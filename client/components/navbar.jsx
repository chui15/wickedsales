import React from 'react';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.getTops = this.getTops.bind(this);
    this.getOuterwear = this.getOuterwear.bind(this);
    this.getBottoms = this.getBottoms.bind(this);
    this.getAccessories = this.getAccessories.bind(this);
  }

  getTops() {
    this.props.setView('tops', {});
  }

  getOuterwear() {
    this.props.setView('outerwear', {});
  }

  getBottoms() {
    this.props.setView('bottoms', {});
  }

  getAccessories() {
    this.props.setView('accessories', {});
  }

  render() {
    return (
      <div className="row nav-bar">
        <div className="col align-items-start">
          <h6 className="nav-link" onClick={this.getTops}>Tops</h6>
          <h6 className="nav-link" onClick={this.getOuterwear}>Outerwear</h6>
          <h6 className="nav-link" onClick={this.getBottoms}>Bottoms</h6>
          <h6 className="nav-link" onClick={this.getAccessories}>Accessories</h6>
        </div>
      </div>
    );
  }
}

export default NavBar;
