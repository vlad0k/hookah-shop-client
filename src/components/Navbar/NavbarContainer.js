import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setCategory } from '../../redux/app-reducer'

import Navbar from './Navbar'

class NavbarContainer extends Component {

  render() {
    return (
      <Navbar { ...this.props} />
    );
  }
}

const mapStateToProps = (state) => ({
  category: state.app.category,
})

export default connect(mapStateToProps, { setCategory })(NavbarContainer);
