import React from 'react';
import RemoveModal from './remove-modal';

class CartSummaryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      removeClicked: false,
      quantity: this.props.item.count,
      quantityConfirm: '',
      canEnter: false
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleRemove() {
    this.setState({
      removeClicked: true
    });
  }

  handleCancel() {
    this.setState({
      removeClicked: false
    });
  }

  handleKeyPress(event) {
    let updateObj = {
      productID: this.props.item['ID'],
      count: event.target.value
    };
    if (this.state.canEnter === true) {
      if (event.key === 'Enter') {
        fetch('/api/cart_update.php', { method: 'POST', body: JSON.stringify(updateObj), headers: { 'Content-Type': 'application/json' } })
          .then(res => res.json())
          .catch(err => console.error('There was an error:', err));
        this.setState({
          quantityConfirm: 'Quantity successfully updated.'
        });
        setTimeout(() => {
          this.setState({
            quantityConfirm: ''
          });
        }, 3000);
      }
    } else {
      this.setState({
        quantityConfirm: 'Must enter a quantity greater than zero.'
      });
      return null;
    }
  }

  handleQuantityChange(event) {
    if (event.target.value < 1) {
      this.setState({
        quantity: event.target.value,
        quantityConfirm: 'Must enter a quantity greater than zero.'
      });
    } else {
      this.setState({
        quantity: event.target.value,
        quantityConfirm: '',
        canEnter: true
      });
    }
  }

  render() {
    let price = this.props.item.Price;
    let priceRounded = price / Math.pow(10, 2);
    let removeModal;
    if (this.state.removeClicked) {
      removeModal = <RemoveModal showModal={this.state.removeClicked} item={this.props.item} deleteItem={this.props.deleteItem} handleCancel={this.handleCancel}/>;
    } else {
      removeModal = null;
    }
    let editQuantity = <div className="form-container row">
      <input type="text" className="form-control quantity align-self-start" placeholder="i.e. 3" value={this.state.quantity} onChange={this.handleQuantityChange} onKeyPress={this.handleKeyPress}></input>
    </div>;
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
            <span>Quantity: {editQuantity}</span>
            <span className="quantity-confirm">{this.state.quantityConfirm}</span>
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
