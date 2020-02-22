import React from 'react';
import { connect } from 'react-redux';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

function Spinner() {
  return (
    <span className="spinner">
      <Loader type="Puff" color="#00BFFF" height={100} width={100} />
    </span>
  );
}

export default connect()(Spinner);
