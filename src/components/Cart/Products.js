import React from 'react';
import { connect } from 'react-redux';

import Product from './Product';
import { mapArrByProps, filterArrByKey } from '../../util';

class Products extends React.Component {
  render() {
    const { productsInCart } = this.props;
    return (
      <div style={{ margin: '2rem 0' }}>
        {productsInCart.map(({ price, name, id, imageUrl }) => {
          return (
            <Product
              key={id}
              price={price}
              name={name}
              imageUrl={imageUrl}
              lineItemId={id}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = ({ lineItems, products }) => {
  const productIds = mapArrByProps(lineItems, 'productId');
  const productsInCart = filterArrByKey(products, 'id', productIds);
  return {
    productsInCart,
  };
};

export default connect(mapStateToProps)(Products);
