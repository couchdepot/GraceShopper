import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';


const EditProduct = () => {
  const categories = [1, 2, 3, 4];
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
          {categories.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option}
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


export default EditProduct;
