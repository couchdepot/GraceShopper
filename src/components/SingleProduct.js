import React, { useState } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Icon from '@material-ui/core/Icon';
import Fab from '@material-ui/core/Fab';
import { addLineItem, updateLineItem } from '../reducers';


const SingleProduct = ({ addLineItem, updateLineItem, lineItems, cart, product }) => {
  const [itemQty, setItemQty] = useState(1);

  const onPlusMinus = (num) => {
    setItemQty(itemQty + num);
  }

  // Will add a new line item or updated quantity if it already exists
  const handleAddToCart = (productId, quantity, cartId) => {
    const lineItem = lineItems.find(lnItm => lnItm.productId === productId);

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
    <Grid container spacing={16} style={{ marginTop: '60px' }}>
        <Grid
          item
          xs={12}
          sm={12}
          lg={8}
          xl={7}
          style={{ paddingLeft: '3vw', paddingRight: '3vw' }}
        >
          <Typography
            align="left"
            variant="headline"
            style={{ marginTop: '2vh' }}
          >
            {product.name}
          </Typography>
          <img
            src={product.imageUrl}
            style={{
              width: '100%',
              maxWidth: '900px',
              height: 'auto',
              margin: 'auto',
              display: 'block',
            }}
          />
        </Grid>
        <Hidden lgDown>
          <Grid item xl={2} style={{ marginTop: '6vh' }}>
            <Typography variant="headline">Product Description</Typography>
            <Typography variant="subheading">{product.description}</Typography>
          </Grid>
        </Hidden>
        <Grid
          item
          xs={12}
          sm={12}
          lg={4}
          xl={3}
          style={{
            paddingTop: '3vh',
            paddingLeft: '3vw',
            paddingRight: '3vw',
          }}
        >
          <Paper style={{ height: '100%', padding: '1em' }}>
            <Typography variant="headline" style={{ fontSize: '2em' }}>
              ${product.price}
            </Typography>
            
          <Grid container justify="flex-start" alignItems="center">
            <TextField
              id="outlined-number"
              label="Quantity"
              value={itemQty}
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
              variant="outlined"
           />
            <Fab color="primary" style={{marginLeft: '10px'}}>
            <AddIcon onClick={() => onPlusMinus(1)}/>
            </Fab>
            <Fab color="secondary" style={{marginLeft: '10px'}}>
            <RemoveIcon onClick={() => {if (itemQty > 1) onPlusMinus(-1)}}/>
            </Fab>
          </Grid>
        
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth={true}
              style={{marginTop: '10px'}}
              onClick={() => handleAddToCart(product.id, itemQty, cart.id )}
            >
              Add To Cart
            </Button>
          </Paper>
        </Grid>
        <Grid item style={{
            paddingTop: '3vh',
            paddingLeft: '3vw',
            paddingRight: '3vw',
          }}>
      <ExpansionPanel style={{ marginTop: '3em' }}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="headline">Product Description</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography variant="subheading">{product.description}</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </Grid>
      </Grid>
  );
};


const mapStateToProps = (state, ownProps) => ({
  product: state.products.find(prod => prod.id === ownProps.match.params.productId * 1) || {},
  cart: state.cart,
  lineItems: state.lineItems,
});


const mapDispatchToProps = dispatch => ({
  addLineItem: item => dispatch(addLineItem(item)),
  updateLineItem: lineItem => dispatch(updateLineItem(lineItem)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
