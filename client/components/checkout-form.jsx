import React from 'react';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      shippingAddress: ''
    };
    this.switchView = this.switchView.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCreditCard = this.handleCreditCard.bind(this);
    this.handleShippingAddress = this.handleShippingAddress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  switchView() {
    this.props.setView('catalog', {});
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
    const newOrder = {
      name: this.state.name,
      creditCard: this.state.creditCard,
      shippingAddress: this.state.shippingAddress
    };
    this.props.placeOrder(newOrder);
    this.setState({
      name: '',
      creditCard: '',
      shippingAddress: ''
    });
  }

  render() {
    let totalPrice = 0;
    this.props.cartItems.map(individualPrice => {
      totalPrice += Number.parseFloat(individualPrice.Price);
    });
    let totalPriceRounded = totalPrice.toFixed(2) / Math.pow(10, 2);
    return (
      <>
      <div>
        <h2 className="ml-5">Checkout</h2>
      </div>
      <h4 className="ml-5 checkout-total">Order Total: {'$' + totalPriceRounded}</h4>
      <div className="form-container">
        <form className="col-8">
          <h5>Name</h5>
          <input type="text" className="form-control form-rounded" value={this.state.name} placeholder="Name" onChange={this.handleNameChange}></input>
          <h5 className="credit-card-name">Credit Card</h5>
          <input type="text" className="form-control form-rounded credit-card" value={this.state.creditCard} placeholder="Credit Card Number" onChange={this.handleCreditCard}></input>
          <h5 className="shipping-name">Shipping Address</h5>
          <input type="text" className="form-control form-rounded shipping-address" value={this.state.shippingAddress} onChange={this.handleShippingAddress}></input>
        </form>
      </div>
      <div className="row">
        <div className="col-sm-4 align-self-center ml-4">
          <span className="returnCatalog" onClick={this.switchView}> &#8592; Continue Shopping</span>
        </div>
        <span className="col-md-4 align-self-center">
          <button type="button" className="btn btn-primary checkout" onClick={this.handleSubmit}>Place Order</button>
        </span>
      </div>
      </>
    );
  }
}

export default CheckoutForm;
