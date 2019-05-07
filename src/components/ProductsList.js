import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addLineItem, updateLineItem } from '../reducers';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import Drawer from '@material-ui/core/Drawer';

const ProductsList = ({ addLineItem, updateLineItem, lineItems, cart, products }) => {

  // Will add a new line item or updated quantity if it already exists
  const handleAddToCart = (productId, quantity, cartId) => {
    const lineItem = lineItems.find(lI => lI.productId === productId);
    
    if (cartId && lineItem) {
      const newQuantity = lineItem.quantity + quantity;
      const udatedlineItem = { ...lineItem, quantity: newQuantity };
      updateLineItem(udatedlineItem);
    }
    else if (cartId) {
      addLineItem({ productId, quantity, cartId });
    }
  };

  return (
    <div style={{ marginTop: '80px' }}>
        <Drawer variant="permanent">
          <Typography
            variant="headline"
            color="textPrimary"
            style={{ marginTop: '3em' }}
          >
            Category
          </Typography>
          <List style={{ width: 240 }}>
            <ListItem button={true}>Example</ListItem>
          </List>
          <Typography variant="headline" color="textPrimary">
            Filters
          </Typography>
        </Drawer>
        <Grid
          container
          spacing={40}
          style={{ marginTop: '60px', paddingRight: '1vw', paddingLeft: 250 }}
        >
          {products.map(product => {
            const inCart = lineItems.find(
              item => item.productId === product.id
            );
            return (
              <Grid item xs={12} sm={6} lg={4} xl={3} key={product.id}>
                <Link to={`/products/${product.id}`}>
                  <img
                    src={product.imageUrl}
                    style={{
                      width: 'auto',
                      height: 240,
                      margin: 'auto',
                      display: 'block',
                    }}
                  />
                </Link>
                <Typography
                  variant="headline"
                  color="textPrimary"
                  style={{ textAlign: 'justify' }}
                >
                  ${product.price}
                </Typography>
                <Typography
                  variant="subheading"
                  color="textSecondary"
                  style={{ textAlign: 'justify' }}
                >
                  {product.name}
                </Typography>
                <Button
                  variant={inCart ? 'contained' : 'outlined'}
                  color="primary"
                  size="large"
                  fullWidth={true}
                  onClick={() => handleAddToCart(product.id, 1, cart.id)}
                >
                  {inCart ? 'Add More' : 'Add To Cart'}
                </Button>
              </Grid>
            );
          })}
        </Grid>
      </div>
  );
}

const mapStateToProps = state => ({
  products: state.products,
  user: state.user,
  cart: state.cart,
  lineItems: state.lineItems,
});

const mapDispatchToProps = dispatch => ({
  addLineItem: item => dispatch(addLineItem(item)),
  updateLineItem: lineItem => dispatch(updateLineItem(lineItem)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsList);
