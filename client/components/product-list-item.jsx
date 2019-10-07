import React from 'react';

class ProductListItem extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    let price = Number.parseFloat(this.props.product.price);
    let priceRounded = price / Math.pow(10, 2);
    return (
      <div className="square col-sm-4">
        <span>
          <img src={this.props.product.image} className="product-image"></img>
        </span>
        <h2>{this.props.product.name}</h2>
        <span className="price">{'$' + priceRounded}</span>
        <span>{this.props.product.shortDescription}</span>
      </div>
    );
  }
}

export default ProductListItem;
