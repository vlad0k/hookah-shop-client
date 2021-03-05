import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setCartDisplay } from '../../redux/app-reducer'

import Header from './Header'

class HeaderContainer extends Component {
  render() {
    return (
      <Header {...this.props}/>
    );
  }
}

const mapStateToProps = (state) => ({
  category: state.app.category,
  displayCart: state.app.displayCart
})

export default connect(mapStateToProps, {setCartDisplay})(HeaderContainer);
