import React, { Fragment } from 'react';
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
  const product =
    props.products.find(prod => prod.id === props.match.params.productId * 1) ||
    {};
  return (
    <Fragment>
      <Grid container spacing={16}>
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
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth={true}
            >
              Add To Cart
            </Button>
          </Paper>
        </Grid>
      </Grid>
      <ExpansionPanel style={{ marginTop: '3em' }}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="headline">Product Description</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography variant="subheading">{product.description}</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  products: state.products,
});

export default connect(mapStateToProps)(SingleProduct);
