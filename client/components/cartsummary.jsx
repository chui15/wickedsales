import React from 'react';
import CartSummaryItem from './cart-summary-item';

class CartSummary extends React.Component {

  render() {
    let displayMessage;
    if (this.props.cartItems.length === 0) {
      displayMessage = 'There are currently no items in your cart';
    } else {
      displayMessage = '';
    }
    let totalPrice = 0;
    return (
      this.props.cartItems.map(item => {
        return (
          <>
          <div className="col-sm-4">
            <span className="returnCatalog" onClick={this.switchView}> &#8592; Back To Catalog</span>
          </div>
          <CartSummaryItem key={item.id}
            item={item} setView={this.setView} />
          <span>Item Total: {'$' + totalPrice}</span>
          <div>{displayMessage}</div>
          </>
        );
      })
    );
  }
}

export default CartSummary;
