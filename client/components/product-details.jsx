import React from 'react';
import AddModal from './add-modal';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      quantity: 1,
      addClicked: false
    };
    this.params = this.props.params;
    this.switchView = this.switchView.bind(this);
    this.switchCart = this.switchCart.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  componentDidMount() {
    fetch(`/api/products.php?id=${this.params}`)
      .then(res => res.json())
      .then(data => this.setState({
        product: data[0]
      }));
  }

  switchView() {
    this.props.setView('catalog', {});
  }

  switchCart() {
    this.props.setView('cart', {});
  }

  handleQuantityChange(event) {
    this.setState({
      quantity: event.target.value
    });
  }

  handleAdd() {
    this.setState({
      addClicked: true
    });
  }

  render() {
    let addModal;
    if (this.state.addClicked) {
      addModal = <AddModal showModal={this.state.addClicked} setView={this.props.setView}/>;
    } else {
      addModal = null;
    }
    if (this.state.product) {
      let productName = this.state.product.Name;
      let productPrice = Number.parseInt(this.state.product.Price);
      let priceRounded = productPrice / Math.pow(10, 2);
      if (this.state.product.images) {
        var productImage1 = this.state.product['images'][1];
        var productImage2 = this.state.product['images'][2];
      }
      let productLong = this.state.product['Long Description'];
      let productQuantity = this.state.quantity;
      let productToAdd = {
        'Long Description': productLong,
        'Name': productName,
        'Price': productPrice,
        'Short Description': this.state.product['Short Description'],
        'id': this.state.product.id,
        'Image': productImage1,
        'count': productQuantity
      };
      return (
      <>
      <div className="col-sm-4">
        <span className="returnCatalog" onClick={this.switchView}> &#8592; Home</span>
      </div>
      <div className="single-product row">
        <div className="col-5 col-md-5">
          <span>
            <img src={productImage1} className="product-details-image1"></img>
            <img src={productImage2} className="product-details-image2"></img>
          </span>
        </div>
        <div className="col-8 col-md-6 ml-5 align-self-center">
          <span className="product-details-name">{productName}</span>
          <span className="product-price">{'$' + priceRounded + '.00'}</span>
          <span>*One Size.</span>
          <p className="product-title">Product Description:</p>
          <p className="product-long">{productLong}</p>
          <span>Select Item Quantity: </span>
          <select className="custom-select quantity" onChange={this.handleQuantityChange} defaultValue="1">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <button type="button" onClick={() => { this.handleAdd(); this.props.addToCart(productToAdd); }} className="btn align-self-start add-cart">Add To Cart</button>
        </div>
      </div>
      {addModal}
      </>
      );
    }
    return null;
  }
}

export default ProductDetails;
