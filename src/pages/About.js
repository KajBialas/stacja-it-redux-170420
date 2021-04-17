import React from 'react';
import { connect } from 'react-redux';

function About({counter}) {
  return (
    <>
      <div>About</div>
      <div>Counter: {counter}</div>
    </>
  )
}

const mapStateToProps = state => {
  return ({
    counter: state.counter,
  })
};

export default connect(mapStateToProps, null)(About);