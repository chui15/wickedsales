import React from 'react';
import ProductListItem from './product-list-item';

class Bottoms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.getProducts = this.getProducts.bind(this);
  }

  getProducts() {
    fetch('/api/bottoms.php')
      .then(res => res.json())
      .then(data => {
        this.setState({
          products: this.state.products.concat(data)
        });
      })
      .catch(err => console.error('Fetch failed', err));
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    return (
      this.state.products.map(product => {
        return (
          <ProductListItem key={product.id} product={product} setView={this.props.setView} />
        );
      })
    );
  }
}

export default Bottoms;
