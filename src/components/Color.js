import React from 'react';
import PropTypes from 'prop-types';

export default function Color({ match }) {
  const style = {
    backgroundColor: decodeURIComponent(match.params.color),
    width: '400px',
    height: '400px',
    display: 'inline-block'
  };

  return ( 
    <div style={style} />
  );
}

Color.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      color: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};


