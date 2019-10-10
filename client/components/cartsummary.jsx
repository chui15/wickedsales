import React from 'react';
import CartSummaryItem from './cart-summary-item';

class CartSummary extends React.Component {
  constructor(props) {
    super(props);
    this.switchView = this.switchView.bind(this);
  }

  switchView() {
    this.props.setView('catalog', {});
  }

  render() {
    let initialPrice = (0).toFixed(2);
    let totalPrice = 0;
    this.props.cartItems.map(individualPrice => {
      totalPrice += Number.parseFloat(individualPrice.Price);
    });
    let totalPriceRounded = totalPrice.toFixed(2) / Math.pow(10, 2);
    if (this.props.cartItems.length === 0) {
      return (
        <>
        <div>
          <span className="returnCatalog ml-3" onClick={this.switchView}> &#8592; Back To Catalog</span>
        </div>
        <div className>
          <h3 className="ml-4">There are currently no items in your cart.</h3>
        </div>
        <h3 className="ml-4 item-total">Item Total: {'$' + initialPrice}</h3>
        </>
      );
    } else {
      let cartItem = this.props.cartItems.map(item => {
        return (
          <CartSummaryItem key={item.id}
            item={item} setView={this.setView} />
        );
      });
      return (
        <>
        <div className="col-sm-4">
          <span className="returnCatalog" onClick={this.switchView}> &#8592; Back To Catalog</span>
        </div>
        <div className="row">
          <h2 className="ml-5">My Cart</h2>
        </div>
        <div>{cartItem}</div>
        <h3 className="ml-3 item-total align-self-center">Item Total: {'$' + totalPriceRounded}</h3>
        </>
      );
    }
  }
}

export default CartSummary;
