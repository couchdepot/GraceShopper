import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

// Custom hook
const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const handleChange = ({target}) => {
    setValue(target.value);
  };
  return {
    value,
    handleChange
  }
}


const EditProduct = ({product, categories}) => {
  return (
    <form>
      <Grid container justify="center" spacing={24} style={{marginTop: "100px", paddingLeft: "40px", paddingRight: "40px"}}>
        <Grid item xs={12}>
        <FormControl fullWidth>
          <TextField
            label="Name"
            name="name"
            value={"name"}
            margin="normal"
          />
          </FormControl>
          </Grid>
          
          
          <Grid item xs={12} sm={3}>
          <FormControl fullWidth>
          <TextField
            label="Price"
            name="price"
            value={"price"}
            margin="normal"
          />
          </FormControl>
          </Grid>
          
          <Grid item xs={12} sm={3}>
          <FormControl fullWidth>
          <TextField
            label="Quantity"
            name="quantity"
            value={"quantity"}
            margin="normal"
          />
          </FormControl>
          </Grid>
          
          <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
          <TextField
          select
          label="Category"
          value={"category"}
          margin="normal"
        >
          {categories.map(ctg => (
            <MenuItem key={ctg.id} value={ctg.name}>
              {ctg.name}
            </MenuItem>
          ))}
        </TextField>
        </FormControl>
          </Grid>
      
          <Grid item xs={12}>
          <FormControl fullWidth>
          <TextField
            label="Description"
            name="description"
            multiline
            rows="4"
            value={"description"}
            margin="normal"
          />
          </FormControl>
          </Grid>
          
          <Grid item xs={12}>
          <FormControl fullWidth>
          <TextField
            label="Image Url"
            name="imageUrl"
            value={"imageUrl"}
            margin="normal"
          />
          </FormControl>
          </Grid>
      
        </Grid>
    </form>
  )
}


const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params.id * 1
  return {
    product: state.products.find(prod => prod.id === id) || {},
    categories: state.categories
  }
};

export default connect(mapStateToProps)(EditProduct);
