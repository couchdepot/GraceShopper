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

class Orders extends Component {
  componentDidMount = () => {
    Promise.all([
      this.props.getPastOrders(this.props.user.id),
      this.props.getCurrentOrders(this.props.user.id),
    ]);
    console.log(this.props);
  };

  render() {
    console.log('test');
    const { currentOrders, pastOrders, products } = this.props;
    return (
      <div style={{ marginTop: 80 }}>
        {currentOrders.map(order => (
          <ExpansionPanel key={order.id}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
                Order #{order.id} {order.updatedAt}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Table>
                <TableBody>
                  {order.lineItems.map(lineItem => (
                    <TableRow key={lineItem.id}>
                      <TableCell>{lineItem.id}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ user, currentOrders, pastOrders, products }) => ({
  user,
  currentOrders,
  pastOrders,
  products,
});

const mapDispatchToProps = dispatch => ({
  getCurrentOrders: userId => dispatch(getCurrentOrders(userId)),
  getPastOrders: userId => dispatch(getPastOrders(userId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Orders);
