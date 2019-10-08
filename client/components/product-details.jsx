import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {}
    };
    this.params = this.props.params;
    this.switchView = this.switchView.bind(this);
  }

  componentDidMount() {
    fetch(`/api/products.php?id=${this.params}`)
      .then(res => res.json())
      .then(data => this.setState({
        product: data[0]
      }))
      .catch(error => console.error('Fetch failed', error));
  }

  switchView() {
    this.props.setView('catalog', {});
  }

  render() {
    if (this.state.product) {
      let productName = this.state.product.Name;
      let productPrice = Number.parseInt(this.state.product.Price);
      let priceRounded = productPrice / Math.pow(10, 2);
      let productImage = this.state.product.Image;
      let productShort = this.state.product['Short Description'];
      return (
      <>
      <div className="col-sm-4">
        <span className="returnCatalog" onClick={this.switchView}> &#8592; Back To Catalog</span>
      </div>
      <div className="single-product row">
        <div className="col-12 col-md-6">
          <span>
            <img src={productImage} className="product-details-image"></img>
          </span>
        </div>
        <div className="col-6 col-md-6">
          <span className="product-details-name">{productName}</span>
          <span className="product-price">{'$' + priceRounded}</span>
          <span>{productShort}</span>
        </div>
      </div>
      </>
      );
    }
    return null;
  }
}

export default ProductDetails;
