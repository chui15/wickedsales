import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.getSummary = this.getSummary.bind(this);
  }

  getSummary() {
    this.props.setView('cart', {});
  }

  render() {
    return (
      <header>
        <div className="row">
          <h1 className="col-9 align-self-start header-title">Wicked Sales</h1>
          <div className="col-3 align-self-end cart-header">
            <h4 className="row align-items-center header-title">{this.props.cartItemCount + ' Items'}
              <div className="shopping-cart" onClick={this.getSummary}></div>
            </h4>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
