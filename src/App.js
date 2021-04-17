import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { connect } from 'react-redux';

function App({ counter, increment}) {
  return (
    <div>
      <Header />
      <div>
        Counter: {counter}
        <button onClick={increment}>+</button>
      </div>
      <Footer />
    </div>
  );
}

const mapStateToProps = state => {
  return ({
    counter: state.counter,
  })
};

const mamDispatchToProps = dispatch => {
  return ({
    increment: () => dispatch({type: 'INCREMENT'})
  });
};

export default connect(mapStateToProps, mamDispatchToProps)(App);
