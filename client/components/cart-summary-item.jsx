import React from 'react';
import RemoveModal from './remove-modal';

class CartSummaryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      removeClicked: false
    };
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove() {
    this.setState({
      removeClicked: true
    });
  }

  render() {
    let price = this.props.item.Price;
    let priceRounded = price / Math.pow(10, 2);
    let count = Number.parseFloat(this.props.item.count);
    let removeModal;
    if (this.state.removeClicked) {
      removeModal = <RemoveModal showModal={this.state.removeClicked} item={this.props.item} deleteItem={this.props.deleteItem} />;
    } else {
      removeModal = null;
    }
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
            <span className="item-count">Quantity: {count}</span>
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
