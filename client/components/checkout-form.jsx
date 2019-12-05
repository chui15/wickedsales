import React from 'react';
import OrderSummaryItem from './order-summary-item';
import TransactionModal from './transaction-modal';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      shippingAddress: '',
      nameCheck: '',
      creditCardCheck: '',
      shippingAddressCheck: '',
      orderPlaced: false,
      cartItems: this.props.cartItems
    };
    this.switchView = this.switchView.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCreditCard = this.handleCreditCard.bind(this);
    this.handleShippingAddress = this.handleShippingAddress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.switchCart = this.switchCart.bind(this);
  }

  switchView() {
    this.props.setView('catalog', {});
  }

  switchCart() {
    this.props.setView('cart', {});
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleCreditCard(event) {
    this.setState({
      creditCard: event.target.value
    });
  }

  handleShippingAddress(event) {
    this.setState({
      shippingAddress: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.name === '' || this.state.creditCard === '' || this.state.shippingAddress === '') {
      this.setState({
        nameCheck: 'Must enter a valid name.',
        creditCardCheck: 'Must enter valid card info.',
        shippingAddressCheck: 'Must enter a valid shipping address.'
      });
    } else {
      const newOrder = {
        name: this.state.name,
        creditCard: this.state.creditCard,
        shippingAddress: this.state.shippingAddress
      };
      this.props.placeOrder(newOrder);
      this.setState({
        name: '',
        creditCard: '',
        shippingAddress: '',
        orderPlaced: true
      });
    }
  }

  componentWillUnmount() {
    this.setState({
      orderPlaced: false
    });
  }

  render() {
    let confirmationModal;
    if (this.state.orderPlaced === true) {
      confirmationModal = <TransactionModal />;
    } else {
      confirmationModal = null;
    }
    let totalPrice = 0;
    this.props.cartItems.map(item => {
      if (Number.parseInt(item['count']) === 1) {
        totalPrice += Number.parseFloat(item.Price);
      } else {
        totalPrice += (Number.parseFloat(item.Price) * Number.parseInt(item['count']));
      }
    });
    let totalPriceRounded = totalPrice.toFixed(2) / Math.pow(10, 2);
    let orderItem = this.state.cartItems.map(item => {
      return (
        <OrderSummaryItem key={item['ID']} item={item} />
      );
    });
    return (
      <>
      <div className="col-sm-4">
        <span className="returnCatalog" onClick={this.switchCart}> &#8592; Return to Cart</span>
      </div>
      <div>
        <h2 className="col ml-4">Checkout</h2>
      </div>
      <div className="row">
        <div className="form-container">
          <form className="col-11 ml-3">
            <h5>Name</h5>
            <span className="field-check">{this.state.nameCheck}</span>
            <input type="text" className="form-control form-rounded" value={this.state.name} placeholder="Name" onChange={this.handleNameChange}></input>
            <h5 className="credit-card-name">Credit Card</h5>
            <span className="field-check">{this.state.creditCardCheck}</span>
            <input type="text" className="form-control form-rounded credit-card" value={this.state.creditCard} placeholder="Credit Card Number" onChange={this.handleCreditCard}></input>
            <h5 className="shipping-name">Shipping Address</h5>
            <span className="field-check">{this.state.shippingAddressCheck}</span>
            <textarea rows="4" cols="50" className="form-control form-rounded shipping-address" value={this.state.shippingAddress} onChange={this.handleShippingAddress}></textarea>
          </form>
        </div>
        <div className="cart-summary-container col-4">
          <h4 className="ml-2">Order Summary</h4>
          <div className="order-item">{orderItem}</div>
          <h4 className="ml-2 checkout-total">Order Total: {'$' + totalPriceRounded + '.00'}</h4>
        </div>
      </div>
      <div className="row">
        <span className="col-md-12">
          <button type="button" className="btn place-order" onClick={this.handleSubmit}>Place Order</button>
        </span>
      </div>
      {confirmationModal}
      </>
    );
  }
}

export default CheckoutForm;
