import React from 'react';
import { connect } from 'react-redux';

import Product from './Product';

class Products extends React.Component {
  render() {
    const { productsInCart } = this.props;
    console.log(productsInCart);
    return (
      <div style={{ margin: '2rem 0' }}>
        {productsInCart.map((lineItem, idx) => {
          return <Product key={idx} lineItem={lineItem} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = ({ lineItems, products }) => {
  const productsInCart = lineItems.map(lineItem => {
    lineItem.productInfo = products.find(product => {
      return product.id === lineItem.productId;
    });

    return lineItem;
  });

  return {
    productsInCart,
  };
};

export default connect(mapStateToProps)(Products);
