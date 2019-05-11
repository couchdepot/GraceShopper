import React, { Component } from 'react';

import {
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from '@material-ui/core';

import HomeIcon from '@material-ui/icons/HomeOutlined';

import { withStyles } from '@material-ui/core/styles';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddressForm from './AddressForm';
import PromoCode from './PromoCode';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

class ExpansionList extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div style={{ width: '100%' }}>
        <ExpansionPanel
          defaultExpanded
          style={{
            borderRadius: '0',
            boxShadow: 'none',
            border: '1px solid lightGrey',
          }}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            style={{ dislay: 'flex', padding: '0' }}
          >
            <HomeIcon style={{ color: 'grey', padding: '0 1rem' }} />
            <Typography className={classes.heading}>
              Delivery address
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{ width: '100%' }}>
            <AddressForm style={{ width: '100%' }} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <PromoCode />
      </div>
    );
  }
}

export default withStyles(styles)(ExpansionList);
