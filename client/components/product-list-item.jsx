import React from 'react';

class ProductListItem extends React.Component {
  constructor(props) {
    super(props);
    this.getDetails = this.getDetails.bind(this);
  }

  getDetails() {
    this.props.setView('details', this.props.product.id);
  }

  render() {
    let price = parseFloat(this.props.product.Price);
    let priceRounded = price / Math.pow(10, 2);
    return (
      <div className="square col-sm-4">
        <span>
          <img src={this.props.product.images[0]} className="product-image" onClick={this.getDetails}></img>
        </span>
        <div className="product-info">
          <span className="product-name" onClick={this.getDetails}>{this.props.product.Name}</span>
          <span className="price">{'$' + priceRounded + '.00'}</span>
          <span className="product-description">{this.props.product['Short Description']}</span>
        </div>
      </div>
    );
  }
}

export default ProductListItem;
