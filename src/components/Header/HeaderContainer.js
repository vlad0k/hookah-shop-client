import React, { Component } from 'react'
import { connect } from 'react-redux'

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
})

export default connect(mapStateToProps)(HeaderContainer);
