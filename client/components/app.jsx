import React from 'react';
import ProductList from './product-list';
import Header from './header';

class App extends React.Component {
  render() {
    return (
      <>
      <Header />
      <ProductList />
      </>
    );
  }
}

export default App;
