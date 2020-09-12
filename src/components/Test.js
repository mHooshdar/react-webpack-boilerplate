import React from 'react'
import styles from './test.module.scss';
import Test2 from './Folder/Test2';

const Test = () => {
  return (
    <div className={styles.test}>
      ellp
      <div className={styles.test2}>
        ttt
      </div>
      <Test2 />
    </div>
  )
}

export default Test;