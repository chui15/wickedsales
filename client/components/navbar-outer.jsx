import React from 'react';

class NavBarOuter extends React.Component {
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
          <div className="nav-link" onClick={this.getTops}>Tops</div>
          <div className="nav-clicked" onClick={this.getOuterwear}>Outerwear</div>
          <div className="nav-link" onClick={this.getBottoms}>Bottoms</div>
          <div className="nav-link" onClick={this.getAccessories}>Accessories</div>
        </div>
      </div>
    );
  }
}

export default NavBarOuter;
