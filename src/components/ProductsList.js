import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProducts } from '../reducers';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

class ProductsList extends Component {
  //   componentDidMount() {
  //     return this.props.getProducts();
  //   }

  render() {
    return (
      <div>
        <AppBar>
          <Toolbar style={{ margin: 'auto' }}>
            <Typography variant="headline" color="inherit">
              Products
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent">
          <Typography variant="headline" color="textPrimary">
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
          style={{ marginTop: '60px', paddingLeft: 250 }}
        >
          {this.props.products.map(product => (
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
                variant="outlined"
                color="primary"
                size="large"
                fullWidth={true}
              >
                Add To Cart
              </Button>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(getProducts()),
});

const mapStateToProps = state => ({
  products: state.products,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsList);
