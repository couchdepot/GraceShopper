import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

// Custom hook for form input field
const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  const handleChange = ({ target }) => {
    setValue(target.value);
  };
  return {
    value,
    setValue,
    handleChange,
  };
};

const EditProduct = ({ product, categories }) => {
  const name = useFormInput('');
  const price = useFormInput('');
  const quantity = useFormInput('');
  const categoryId = useFormInput('');
  const description = useFormInput('');
  const imageUrl = useFormInput('');

  useEffect(() => {
    name.setValue(product.name);
    price.setValue(product.price);
    quantity.setValue(product.quantity);
    categoryId.setValue(product.categoryId);
    description.setValue(product.description);
    imageUrl.setValue(product.imageUrl);
  }, [product]);

  return (
    <form>
      <Grid
        container
        justify="center"
        spacing={24}
        style={{
          marginTop: '100px',
          paddingLeft: '40px',
          paddingRight: '40px',
        }}
      >
        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField
              label="Name"
              value={name.value}
              onChange={name.handleChange}
              margin="normal"
            />
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={3}>
          <FormControl fullWidth>
            <TextField
              label="Price"
              value={price.value}
              onChange={price.handleChange}
              margin="normal"
            />
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={3}>
          <FormControl fullWidth>
            <TextField
              label="Quantity"
              value={quantity.value}
              onChange={quantity.value}
              margin="normal"
            />
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <TextField
              select
              label="Category"
              value={categoryId.value}
              onChange={categoryId.handleChange}
              margin="normal"
            >
              {categories.map(ctg => (
                <MenuItem key={ctg.id} value={ctg.id}>
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
              rows="8"
              value={description.value}
              onChange={description.handleChange}
              margin="normal"
            />
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField
              label="Image Url"
              name="imageUrl"
              value={imageUrl.value}
              onChange={imageUrl.handleChange}
              margin="normal"
            />
          </FormControl>
        </Grid>
      </Grid>
    </form>
  );
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id * 1;
  return {
    product: state.products.find(prod => prod.id === id) || {},
    categories: state.categories,
  };
};

export default connect(mapStateToProps)(EditProduct);
