import React from 'react';
import ProductList from './product-list';
import Header from './header';
import ProductDetails from './product-details';
import CartSummary from './cartsummary';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      },
      cart: []
    };
    this.setView = this.setView.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  setView(name, params) {
    this.setState({
      view: {
        name: name,
        params: params
      }
    });
  }

  getCartItems() {
    fetch('/api/cart.php')
      .then(res => res.json())
      .then(data => this.setState({
        cart: this.state.cart.concat(data)
      }))
      .catch(error => console.error('Fetch failed', error));
  }

  addToCart(product) {
    fetch('/api/cart.php', { method: 'POST', body: JSON.stringify(product), headers: { 'Content-Type': 'application/json' } })
      .then(res => res.json())
      .then(data => {
        let copy = [...this.state.cart];
        copy.push(data);
        this.setState({
          cart: copy
        });
      });
  }

  componentDidMount() {
    this.getCartItems();
  }

  render() {
    let product;
    if (this.state.view.name === 'catalog') {
      product = <ProductList setView={this.setView} />;
    } else if (this.state.view.name === 'details') {
      product = <ProductDetails setView={this.setView} params={this.state.view.params} addToCart={this.addToCart}/>;
    } else {
      product = null;
    }
    let cartSummary;
    if (this.state.view.name === 'cart') {
      cartSummary = <CartSummary cartItems={this.state.cart} setView={this.setView}/>;
    } else {
      cartSummary = null;
    }
    let cartCount;
    if (this.state.cart.length !== 0) {
      cartCount = this.state.cart.length;
    } else {
      cartCount = 0;
    }
    return (
      <>
      <Header cartItemCount={cartCount} setView={this.setView} params={this.state.view.params}/>
      {product}
      {cartSummary}
      </>
    );
  }
}

export default App;
