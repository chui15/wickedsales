import React from 'react';
import ProductListItem from './product-list-item';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.getProducts = this.getProducts.bind(this);
  }

  getProducts() {
    fetch('/api/products.php')
      .then(res => res.json())
      .then(data => this.setState({
        products: this.state.products.concat(data)
      }))
      .catch(error => console.error('Fetch failed', error));
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    let products = this.state.products.map(product => {
      return (
        <ProductListItem key={product.id}
          product={product} setView={this.props.setView} />
      );
    });

    return (
      <div className="products-container">
        {products}
      </div>
    );
  }
}

export default ProductList;
