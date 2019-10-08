import React from 'react';
import ProductList from './product-list';
import Header from './header';
import ProductDetails from './product-details';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      }
    };
    this.setView = this.setView.bind(this);
  }

  setView(name, params) {
    this.setState({
      view: {
        name: name,
        params: params
      }
    });
  }

  render() {
    let product;
    if (this.state.view.name === 'catalog') {
      product = <ProductList setView={this.setView} />;
    } else {
      product = <ProductDetails setView={this.setView} params={this.state.view.params}/>;
    }

    return (
      <>
      <Header />
      {product}
      </>
    );
  }
}

export default App;
