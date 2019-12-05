import React from 'react';
import CartSummaryItem from './cart-summary-item';

class CartSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: []
    };
    this.switchView = this.switchView.bind(this);
    this.getCheckout = this.getCheckout.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  componentDidMount() {
    this.setState({
      cartItems: this.props.cartItems
    });
  }

  switchView() {
    this.props.setView('catalog', {});
  }

  getCheckout() {
    this.props.setView('checkout', {});
  }

  deleteItem(itemID) {
    let copy = this.state.cartItems.filter(item => {
      const copyItems = Object.assign({}, item);
      if (Number.parseInt(copyItems['ID']) === itemID) {
        return false;
      }
      return true;
    });
    fetch('/api/cart_delete.php', { method: 'POST', body: JSON.stringify(itemID), headers: { 'Content-Type': 'application/json' } })
      .then(res => res.json())
      .then(this.setState({ cartItems: copy }))
      .catch(err => { console.error('There was an error:', err); });
  }

  render() {
    let initialPrice = (0).toFixed(2);
    let totalPrice = 0;
    this.state.cartItems.map(item => {
      if (Number.parseInt(item['count']) === 1) {
        totalPrice += Number.parseFloat(item.Price);
      } else {
        totalPrice += (Number.parseFloat(item.Price) * Number.parseInt(item['count']));
      }
    });
    let totalPriceRounded = totalPrice.toFixed(2) / Math.pow(10, 2);
    if (this.state.cartItems.length === 0) {
      return (
        <>
        <div>
          <span className="returnCatalog ml-3" onClick={this.switchView}> &#8592; Back To Catalog</span>
        </div>
        <div>
          <h3 className="ml-4 empty-cart">There are currently no items in your cart.</h3>
        </div>
        <h3 className="ml-4 item-total">Item Total: {'$' + initialPrice}</h3>
        </>
      );
    } else {
      let cartItem = this.state.cartItems.map(item => {
        return (
          <CartSummaryItem key={item['ID']}
            item={item} setView={this.setView} deleteItem={this.deleteItem}/>
        );
      });
      return (
        <>
        <div className="col-sm-4">
          <span className="returnCatalog" onClick={this.switchView}> &#8592; Back To Catalog</span>
        </div>
        <div className="row">
          <h2 className="cart-title">My Cart</h2>
        </div>
        <div className="cart-container">
          <div className="cart-item">{cartItem}</div>
        </div>
          <div className="row">
            <h3 className="col-md-9 ml-5 item-total align-self-center">Item Total: {'$' + totalPriceRounded + '.00'}</h3>
            <span className="col-md-2 align-self-end">
              <button type="button" className="btn checkout" onClick={this.getCheckout}>Checkout</button>
            </span>
          </div>
        </>
      );
    }
  }
}

export default CartSummary;
