import React, { Component } from 'react'
import { connect } from 'react-redux'
import Content from './Content'

import { setCategory, setBrand } from '../../redux/app-reducer'

import { getHookahBrandQuery, getAssectoryCategoryQuery } from '../../queries/queries'


class ContentContainer extends Component {

  render() {
    return (
      <Content {...this.props} getHookahBrandQuery={getHookahBrandQuery} getAssectoryCategoryQuery={getAssectoryCategoryQuery}/>
    );
  }
}

const mapStateToProps = (state) => ({
  category: state.app.category,
  brand: state.app.brand,
  brandName: state.app.brandName,
  product: state.app.product,
})


export default connect(mapStateToProps, {setCategory, setBrand})(ContentContainer);
