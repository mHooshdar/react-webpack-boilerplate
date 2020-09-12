import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Delayed = (props) => {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setHidden(false);
    }, props.delay);

    return () => {
      clearTimeout(timeOutId);
    };
  }, []);

  return hidden ? '' : props.children;
};

Delayed.propTypes = {
  delay: PropTypes.number.isRequired,
};

export default Delayed;
