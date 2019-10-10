import React from 'react';

class CartSummaryItem extends React.Component {

  render() {
    let price = Number.parseFloat(this.props.item.Price);
    let priceRounded = price / Math.pow(10, 2);
    return (
      <div className="row">
        <span>
          <img src={this.props.item.images[0]} className="item-image"></img>
        </span>
        <h3>{this.props.item.Name}</h3>
        <span className="price">{'$' + priceRounded}</span>
        <span>{this.props.item['Short Description']}</span>
      </div>
    );
  }
}

export default CartSummaryItem;
