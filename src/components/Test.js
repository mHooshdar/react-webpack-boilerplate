import React from 'react'
import classNames from 'classnames/bind';

import styles from './test.module.scss';
import Test2 from './Folder/Test2';


const cx = classNames.bind(styles);

const Test = () => {
  return (
    <div className={cx('test')}>
      ellp
      <div className={cx('test2')}>
        ttt
      </div>
      <Test2 />
    </div>
  )
}

export default Test;