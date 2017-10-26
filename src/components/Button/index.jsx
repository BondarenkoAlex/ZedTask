import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

function Button(props) {
  const {
    children,
    onClick,
    type,
  } = props;
  return (
    <button
      className={style.buttonBg}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
};
Button.defaultProps = {
  type: 'button',
};

export default Button;
