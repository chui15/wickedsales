import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import ProductList from './product-list';
import Header from './header';
import NavBar from './navbar';
import ProductDetails from './product-details';
import CartSummary from './cartsummary';
import CheckoutForm from './checkout-form';
import Tops from './tops';
import Outerwear from './outerwear';
import Bottoms from './bottoms';
import Accessories from './accessories';

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
    this.placeOrder = this.placeOrder.bind(this);
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
      .then(data => {
        this.setState({
          cart: this.state.cart.concat(data)
        });
      })
      .catch(error => console.error('Fetch failed', error));
  }

  addToCart(product) {
    fetch('/api/cart.php', { method: 'POST', body: JSON.stringify(product), headers: { 'Content-Type': 'application/json' } })
      .then(data => {
        let copy = [...this.state.cart];
        copy.push(product);
        this.setState({
          cart: copy
        });
      })
      .catch(error => console.error(error));
  }

  placeOrder(order) {
    this.setState({
      cart: this.state.cart.concat(order)
    });
    fetch('/api/orders.php', { method: 'POST', body: JSON.stringify(order) })
      .then(response => response.json())
      .then(this.setView('catalog', {}))
      .then(this.setState({
        cart: []
      }))
      .catch(err => console.error(err));
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
    let checkoutForm;
    if (this.state.view.name === 'checkout') {
      checkoutForm = <CheckoutForm cartItems={this.state.cart} setView={this.setView} placeOrder={this.placeOrder}/>;
    } else {
      checkoutForm = null;
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
      <NavBar setView={this.setView} params={this.state.view.params}/>
      {product}
      {cartSummary}
      {checkoutForm}
      <div>
        <Switch>
          <Route path="/tops">
            <Tops />
          </Route>
          <Route path="/outerwear">
            <Outerwear />
          </Route>
          <Route path="/bottoms">
            <Bottoms />
          </Route>
          <Route path="/accessories">
            <Accessories />
          </Route>
        </Switch>
      </div>
      </>
    );
  }
}

export default withRouter(App);
