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
    this.getCartItems = this.getCartItems.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
  }

  componentDidMount() {
    this.getCartItems();
  }

  componentWillReceiveProps() {
    this.setState({
      cartItems: []
    });
    this.getCartItems();
  }

  getCartItems() {
    fetch('/api/cart.php')
      .then(res => res.json())
      .then(data => {
        this.setState({
          cartItems: this.state.cartItems.concat(data)
        });
      })
      .catch(error => console.error('Fetch failed', error));
  }

  switchView() {
    this.props.setView('catalog', {});
  }

  getCheckout() {
    this.props.setView('checkout', {});
  }

  calculateTotal() {
    let totalPrice = 0;
    this.state.cartItems.map(item => {
      if (parseInt(item['count']) === 1) {
        totalPrice += parseFloat(item.Price);
      } else {
        totalPrice += (parseFloat(item.Price) * parseInt(item['count']));
      }
    });
    let totalPriceRounded = totalPrice.toFixed(2) / Math.pow(10, 2);
    return totalPriceRounded;
  }

  render() {
    let initialPrice = (0).toFixed(2);
    let total = this.calculateTotal();
    if (this.state.cartItems.length === 0) {
      return (
        <>
        <div className="back">
          <span className="returnCatalog ml-3" onClick={this.switchView}> &#8592; Back To Catalog</span>
        </div>
        <div>
          <h3 className="ml-4 empty-cart">There are currently no items in your cart.</h3>
        </div>
        <h3 className="ml-4 item-total">Item Total: {'$' + initialPrice}</h3>
        </>
      );
    } else {
      let cartItem = this.state.cartItems.map((item, index) => {
        return (
          <CartSummaryItem key={index}
            item={item} setView={this.setView} deleteItem={this.props.deleteItem}/>
        );
      });
      return (
        <>
        <div className="col-sm-4 back">
          <span className="returnCatalog" onClick={this.switchView}> &#8592; Back To Catalog</span>
        </div>
        <div className="row">
          <h2 className="cart-title">My Cart</h2>
        </div>
        <div className="cart-container">
          <div className="cart-item">{cartItem}</div>
          <div className="row">
            <h3 className="col-md-9 ml-4 item-total align-self-center">Item Total: {'$' + total + '.00'}</h3>
            <span className="col-md-2 align-self-end">
              <button type="button" className="btn checkout" onClick={this.getCheckout}>Checkout</button>
            </span>
          </div>
        </div>
        </>
      );
    }
  }
}

export default CartSummary;
