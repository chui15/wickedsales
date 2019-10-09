import React from 'react';

function Header(props) {
  return (
    <header>
      <div className="row">
        <h1 className="col-8 align-self-start">Wicked Sales</h1>
        <div className="col-4 align-self-end cart-header">
          <h4 className="row align-items-center">{props.cartItemCount + ' Items'}
            <div className="shopping-cart"></div>
          </h4>
        </div>
      </div>
    </header>
  );
}

export default Header;
