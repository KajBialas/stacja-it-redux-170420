import React from 'react';
import { connect } from 'react-redux';

function Header({counter}) {
  return (
    <header>
      Header: {counter}
    </header>
  )
}

const mapStateToProps = state => {
  return ({
    counter: state.counter,
  })
};

export default connect(mapStateToProps, null)(Header);