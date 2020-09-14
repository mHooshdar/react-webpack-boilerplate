import classNames from 'classnames/bind';

import globalStyles from './global.scss'

export default {
  bind: function(styles) {
    return classNames.bind({ ...globalStyles, ...styles });  
  },
}
