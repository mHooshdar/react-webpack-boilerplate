import React from 'react'
import classNames from '../../globalClassess';

import styles from '../dynamic-page.scss';

const cx = classNames.bind(styles);

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