import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

function App({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}

App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]),
};
App.defaultProps = {};

export default App;
