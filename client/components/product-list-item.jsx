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
      <div className="container">
        <div className="square">
          <div className="content">
            <div className="table">
              <div className="table-cell">
                <span>
                  <img src={this.props.product.image} className="product-image"></img>
                </span>
                <h3>{this.props.product.name}</h3>
                <span>{'$' + priceRounded}</span>
                <span>{this.props.product.shortDescription}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductListItem;
