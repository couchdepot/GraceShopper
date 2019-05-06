import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addLineItem } from '../reducers';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import Drawer from '@material-ui/core/Drawer';

class ProductsList extends Component {
  render() {
    const { cart, lineItems, addLineItem } = this.props;

    return (
      <div>
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
          {this.props.products.map(product => {
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
                  onClick={() =>
                    addLineItem({
                      productId: product.id,
                      quanitity: 1,
                      cartId: cart.id,
                    })
                  }
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
}

const mapStateToProps = state => ({
  products: state.products,
  user: state.user,
  cart: state.cart,
  lineItems: state.lineItems,
});

const mapDispatchToProps = dispatch => ({
  addLineItem: item => dispatch(addLineItem(item)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsList);
