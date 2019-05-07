import React from 'react';

import Product from './Product';

class Products extends React.Component {
  render() {
    return (
      <div style={{ margin: '2rem 0' }}>
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    );
  }
}

export default Products;
