import React from 'react';
import ProductListItem from './product-list-item';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.getProducts = this.getProducts.bind(this);
    this.abortController = new window.AbortController();
  }

  getProducts() {
    fetch('/api/products.php', { signal: this.abortController.signal })
      .then(res => res.json())
      .then(data => this.setState({
        products: this.state.products.concat(data)
      }))
      .catch(error => console.error('Fetch failed', error));
  }

  componentDidMount() {
    this.getProducts();
  }

  componentWillUnmount() {
    this.abortController.abort();
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
