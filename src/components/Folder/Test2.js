import React from 'react'
import styles from './test2.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

console.log(styles, 'asdasd');

const Test2 = () => {
  return (
    <div className={cx(['test2', 'test2__hello'])}>
      ttt222
    </div>
  )
}

export default Test2;