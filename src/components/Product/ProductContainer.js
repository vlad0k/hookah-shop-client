import React, { Component } from 'react';
import { connect } from 'react-redux'

import Product from './Product'
import { setProduct } from '../../redux/app-reducer'


class ProductContainer extends Component {
  render() {
    return (
      <Product {...this.props}/>
    );
  }
}

const mapStateToProps = (state) => ({
  product: state.app.product,
})
export default connect(mapStateToProps, { setProduct })(ProductContainer)
