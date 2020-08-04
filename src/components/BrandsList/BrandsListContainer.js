import React, { Component } from 'react';
import { connect } from 'react-redux'

import BrandsList from './BrandsList'
import { setBrand, setProduct } from '../../redux/app-reducer'

class BrandsListContainer extends Component {
  render() {
    return (
      <BrandsList {...this.props}/>
    );
  }
}

const mapStateToProps = (state) => ({
  brand: state.app.brand,
  category: state.app.category
})
export default connect(mapStateToProps, { setBrand, setProduct })(BrandsListContainer)
