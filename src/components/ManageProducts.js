import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditProduct from './EditProduct';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { deleteProduct } from '../reducers'


const styles = theme => ({
  root: {
    width: 'auto',
    marginTop: theme.spacing.unit * 10,
    marginBottom: theme.spacing.unit * 10,
    marginLeft: theme.spacing.unit * 5,
    marginRight: theme.spacing.unit * 5,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

const ManageProducts = ({ classes, products, deleteProduct }) => {
  return (
    // Will have add product functionality 
    // Will have list of products with edit product functionality

    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="center">Edit</TableCell>
            <TableCell align="center">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map(product => (
            <TableRow key={product.id}>
              <TableCell component="th" scope="row">{product.name}</TableCell>
              <TableCell align="right">{product.id}</TableCell>
              <TableCell align="right">{product.price}</TableCell>
              <TableCell align="right">{product.quantity}</TableCell>
              <TableCell align="center">
              <IconButton aria-label="EditIcon" component={Link} to={`/admin/products/edit/${product.id}`}>
                  <EditIcon />
                </IconButton>
              </TableCell>
              <TableCell align="center">
                <IconButton aria-label="Delete" onClick={()=> deleteProduct(product.id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>


  )
}

const mapStateToProps = state => {
  return {
    products: state.products,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    deleteProduct: (productId) => dispatch(deleteProduct(productId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ManageProducts));
