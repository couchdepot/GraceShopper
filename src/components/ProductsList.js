import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getProducts } from '../reducers'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import Button from '@material-ui/core/Button'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'

class ProductsList extends Component {

    componentDidMount() {
        return this.props.getProducts()
            .then(console.log(this.props))
    }

    render() {
        console.log(this.props)
        return (
            <div >
                <Drawer variant='permanent' >
                    <Typography variant='headline' color='textPrimary' style={{ textAlign: 'center', width: 240 }} >
                        Category
                    </Typography>
                    <List >
                        <ListItem button={true} >
                            Example
                        </ListItem>
                    </List>
                    <Typography variant='headline' color='textPrimary' style={{ textAlign: 'center', width: 240 }} >
                        Filters
                    </Typography>
                    <Divider />
                </Drawer>
                <main style={{ paddingLeft: 240 }}>
                    <Grid container spacing={40} style={{ marginTop: '60px' }}>
                        {this.props.products.map(product => (
                            <Grid item xs={12} sm={6} lg={4} xl={3} key={product.id} >
                                <Link to={`/products/${product.id}`}>
                                    <img src={product.imageUrl} style={{ width: '100%' }} />
                                </Link>
                                <Typography variant='headline' color='textPrimary' style={{ textAlign: 'justify' }} >
                                    ${product.price}
                                </Typography>
                                <Typography variant='subheading' color='textPrimary' style={{ textAlign: 'justify' }} >
                                    {product.name}
                                </Typography>
                                <Button variant='outlined' color='primary' size='large' fullWidth={true} >Add To Cart</Button>
                            </Grid>
                        ))}
                    </Grid>
                </main>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => (
    {
        getProducts: () => dispatch(getProducts())
    }
)

const mapStateToProps = (state) => (
    {
        products: state.products
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList)
