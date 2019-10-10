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
          <h1 className="col-8 align-self-start">Wicked Sales</h1>
          <div className="col-4 align-self-end cart-header">
            <h4 className="row align-items-center">{this.props.cartItemCount + ' Items'}
              <div className="shopping-cart" onClick={this.getSummary}></div>
            </h4>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
