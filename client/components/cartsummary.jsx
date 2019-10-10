import React from 'react';
import CartSummaryItem from './cart-summary-item';

class CartSummary extends React.Component {

  render() {
    return (
      this.props.cart.map(item => {
        return (
          <CartSummaryItem key={item.id}
            item={item} setView={this.setView} />
        );
      })
    );
  }
}

export default CartSummary;
