import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProducts } from '../reducers'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import ListSubheader from '@material-ui/core/ListSubheader'
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
                    <h4 style={{ width: 240 }}>Departments:</h4>
                </Drawer>
                <main style={{ paddingLeft: 240 }}>
                    <Grid container spacing={24} style={{ marginTop: '60px' }}>
                        {this.props.products.map(product => (
                            <Grid item xs={12} sm={6} lg={4} xl={3} key={product.id} >
                                <img src={product.imageUrl} style={{ width: '100%' }} />
                                <div>
                                    <Typography variant='title' color='textPrimary' style={{ textAlign: 'center' }} >
                                        <div>
                                            {product.name}
                                        </div>
                                        <div>
                                            ${product.price}
                                        </div>
                                    </Typography>
                                </div>
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
