import React, { Component } from 'react';
import { getCurrentOrders, getPastOrders } from '../reducers';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Paper from '@material-ui/core/Paper';

class Orders extends Component {
  render() {
    console.log(this.props);
    const { currentOrders, pastOrders, products, userAddresses } = this.props;
    return (
      <div style={{ marginTop: 80 }}>
        <Typography variant="h3">Your Orders</Typography>
        {currentOrders.map(order => {
          const address = userAddresses.find(
            address => address.id === order.addressId
          );
          const total = 0;
          return (
            <Paper key={order.id}>
              <Typography variant="h5">
                {new Date(order.updatedAt).toDateString()} - {order.status}
              </Typography>
              <Typography variant="subtitle1">
                <span style={{ height: '2em', display: 'inline-block' }}>
                  Shipping Address:
                </span>
                <span>
                  {address.streetAddress}
                  <br />
                  {address.streetAddress2}
                  {address.city}, {address.state} {address.zipCode}
                </span>
              </Typography>
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6">Order Details</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Table>
                    <TableBody>
                      {order.lineItems.map(lineItem => {
                        const product = products.find(
                          prod => prod.id === lineItem.productId
                        );
                        return (
                          <TableRow key={lineItem.id}>
                            <TableCell>
                              <img
                                src={product.imageUrl}
                                style={{ height: '100px' }}
                              />
                              <span style={{ paddingtop: '45px' }}>
                                {product.name}
                              </span>
                            </TableCell>
                            <TableCell>{product.name}</TableCell>
                            <TableCell>{lineItem.quantity}</TableCell>
                            <TableCell>{product.price}</TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </Paper>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = ({
  user,
  currentOrders,
  pastOrders,
  products,
  addresses,
}) => {
  return {
    user,
    currentOrders,
    pastOrders,
    products,
    userAddresses: addresses.userAddresses,
  };
};

export default connect(mapStateToProps)(Orders);
