import React from 'react';
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
import InitialModal from './initial-modal';
import ScrollButton from './scrollbutton';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      },
      cart: [],
      initialModal: true
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
      .then(this.setState({
        cart: []
      }))
      .then(() => {
        setTimeout(() => {
          this.setView('catalog', {});
        }, 4500);
      })
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
    let tops;
    if (this.state.view.name === 'tops') {
      tops = <Tops setView={this.setView} />;
    } else {
      tops = null;
    }
    let outerwear;
    if (this.state.view.name === 'outerwear') {
      outerwear = <Outerwear setView={this.setView} />;
    } else {
      outerwear = null;
    }
    let bottoms;
    if (this.state.view.name === 'bottoms') {
      bottoms = <Bottoms setView={this.setView} />;
    } else {
      bottoms = null;
    }
    let accessories;
    if (this.state.view.name === 'accessories') {
      accessories = <Accessories setView={this.setView} />;
    } else {
      accessories = null;
    }
    let initialModal;
    if (this.state.initialModal === true) {
      initialModal = <InitialModal showModal={this.state.initialModal}/>;
    } else {
      initialModal = null;
    }
    let scrollButton;
    if (this.state.view.name === 'catalog') {
      scrollButton = <ScrollButton scrollStepInPx="50" delayInMs="16.66" />;
    } else {
      scrollButton = null;
    }
    return (
      <>
      {initialModal}
      <Header cartItemCount={cartCount} setView={this.setView} params={this.state.view.params} />
      <NavBar setView={this.setView} params={this.state.view.params} />
      {product}
      {cartSummary}
      {checkoutForm}
      {tops}
      {outerwear}
      {bottoms}
      {accessories}
      {scrollButton}
      </>
    );
  }
}

export default App;
