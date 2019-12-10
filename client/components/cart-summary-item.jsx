import React from 'react';
import RemoveModal from './remove-modal';

class CartSummaryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      removeClicked: false,
      quantity: this.props.item.count
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
  }

  handleRemove() {
    this.setState({
      removeClicked: true
    });
  }

  handleQuantityChange(event) {
    this.setState({
      quantity: event.target.value
    });
    let updateObj = {
      productID: this.props.item['ID'],
      count: event.target.value
    };
    fetch('/api/cart_update.php', { method: 'POST', body: JSON.stringify(updateObj), headers: { 'Content-Type': 'application/json' } })
      .then(res => res.json())
      .catch(err => console.error('There was an error:', err));
  }

  render() {
    let price = this.props.item.Price;
    let priceRounded = price / Math.pow(10, 2);
    let count = Number.parseFloat(this.state.quantity);
    let removeModal;
    if (this.state.removeClicked) {
      removeModal = <RemoveModal showModal={this.state.removeClicked} item={this.props.item} deleteItem={this.props.deleteItem} />;
    } else {
      removeModal = null;
    }
    let selectQuantity = <select className="custom-select quantity" onChange={this.handleQuantityChange} defaultValue={count}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>;
    return (
      <>
        <div className="cart-square row">
          <div className="col-12 col-md-4">
            <span className="col-md-5">
              <img src={this.props.item.Image} className="item-image"></img>
            </span>
          </div>
          <div className="col-xs-4 ml-5 align-self-center">
            <h4 className="item-title">{this.props.item.Name}</h4>
            <span className="price">{'$' + priceRounded + '.00'}</span>
            <span className="item-count">Quantity: {selectQuantity}</span>
            <span>{this.props.item['Short Description']}</span>
            <span className="delete-cart" onClick={this.handleRemove}>&times; Remove from cart</span>
          </div>
        </div>
        {removeModal}
      </>
    );
  }
}

export default CartSummaryItem;
