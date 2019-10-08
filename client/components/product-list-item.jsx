import React from 'react';

class ProductListItem extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.getDetails = this.getDetails.bind(this);
  }

  getDetails() {
    this.props.setView('details', this.props.product.ID);
  }

  render() {
    let price = Number.parseFloat(this.props.product.Price);
    let priceRounded = price / Math.pow(10, 2);
    return (
      <div className="square col-sm-4">
        <span>
          <img src={this.props.product.Image} className="product-image"></img>
        </span>
        <h3>{this.props.product.Name}</h3>
        <span className="price">{'$' + priceRounded}</span>
        <span>{this.props.product['Short Description']}</span>
        <button type="button" className="btn btn-info" onClick={this.getDetails}>View Product Details</button>
      </div>
    );
  }
}

export default ProductListItem;
