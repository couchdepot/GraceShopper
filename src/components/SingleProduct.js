import React from 'react';
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

const SingleProduct = props => {
  console.log(props);
  const product = props.products.find(
    prod => prod.id === props.match.params.productId * 1
  );
  return (
    <div>
      <Paper
        style={{
          marginTop: '5vh',
          paddingLeft: '2vw',
          paddingRight: '2vw',
          marginBottom: '2vh',
        }}
      >
        <Grid container spacing={16}>
          <Grid
            item
            xs={12}
            sm={12}
            lg={8}
            xl={7}
            style={{ borderRight: '0.1em solid lightGray' }}
          >
            <Typography align="left" variant="headline">
              {product.name}
            </Typography>
            <img
              src={product.imageUrl}
              style={{
                width: '100%',
                maxWidth: '800px',
                height: 'auto',
                margin: 'auto',
                display: 'block',
              }}
            />
          </Grid>
          <Hidden lgDown>
            <Grid item xl={2} style={{ borderRight: '0.1em solid lightGray' }}>
              <Typography variant="headline">Product Description</Typography>
              <Typography variant="subheading">
                {product.description}
              </Typography>
            </Grid>
          </Hidden>
          <Grid
            item
            xs={12}
            sm={12}
            lg={4}
            xl={3}
            style={{
              paddingTop: '2vh',
              paddingLeft: '3vw',
              paddingRight: '3vw',
            }}
          >
            <Typography variant="headline" style={{ fontSize: '2em' }}>
              ${product.price}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth={true}
            >
              Add To Cart
            </Button>
          </Grid>
        </Grid>
      </Paper>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="headline">Product Description</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography variant="subheading">{product.description}</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

const mapStateToProps = state => ({
  products: state.products,
});

export default connect(mapStateToProps)(SingleProduct);
