// Button.js

import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'; // Import the CSS file

const Button = ({ children, variant, onClick }) => {
  let className = 'button';

  if (variant === 'outline') {
    className += ' button-outline';
  }

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: 'primary',
  onClick: () => {},
};

export default Button;