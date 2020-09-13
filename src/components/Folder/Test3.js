import React from 'react'
import classNames from 'classnames/bind';

import styles from '../../global.scss';
import stylesPure from '../dynamic-page.scss';

const cx = classNames.bind({...styles, ...stylesPure});

const Test3 = () => {
  return (
    <>
      <div className={cx('global')}>
        Hello 3
      </div>
      <div className={cx('dp')}>
        dp red
      </div>
    </>
  )
}

export default Test3