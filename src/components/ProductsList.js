import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import Drawer from '@material-ui/core/Drawer';
import { manageLineItemQty } from '../reducers';

const ProductsList = ({
  manageLineItemQty,
  lineItems,
  cart,
  products,
  categories,
  match,
}) => {
  products = match.params.categoryId
    ? products.filter(
        product => product.categoryId === match.params.categoryId * 1
      )
    : products;
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
          {categories.map(category => (
            <ListItem
              button={true}
              component={Link}
              to={`/category/${category.id}`}
              key={category.id}
            >
              {category.name}
            </ListItem>
          ))}
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
          const lineItem = lineItems.find(
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
                variant={lineItem ? 'contained' : 'outlined'}
                color="primary"
                size="large"
                fullWidth={true}
                onClick={() =>
                  manageLineItemQty(product.id, 1, cart.id, lineItem)
                }
              >
                {lineItem ? 'Add More' : 'Add To Cart'}
              </Button>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

const mapStateToProps = state => ({
  products: state.products,
  cart: state.cart,
  lineItems: state.lineItems,
  categories: state.categories,
});

const mapDispatchToProps = dispatch => ({
  manageLineItemQty: (productId, quantity, cartId, lineItem) => {
    return dispatch(manageLineItemQty(productId, quantity, cartId, lineItem));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsList);
