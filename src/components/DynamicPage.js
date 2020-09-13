import React from 'react';
import { Header } from 'semantic-ui-react';
import classNames from 'classnames/bind';

import stylesPure from './dynamic-page.scss';
import styles from './dynamic-page.module.scss';
import stylesInPage from './dynamic-page/in-page.module.scss';

import Layout from './Layout';
import Test from './Test';
import Test2 from './Folder/Test2';
import Test3 from './Folder/Test3';

const cx = classNames.bind({...stylesPure, ...styles, ...stylesInPage});

const DynamicPage = () => {
  return (
    <Layout>
      <Header as="h2">Dynamic Page</Header>
      <p className={cx('dp')}>This page was loaded aaaa!!!</p>
      <p className={cx('dp-module')}>asdasdasd</p>
      <p className={cx('dpModuleTest')}>asdasdasd</p>
      <p className={cx('test')}>asdasdasd</p>
      <p className={cx('b-red')}>asdasdasd</p>
      <Test />
      <Test2 />
      <Test2 />
      <Test2 />
      {/* <Test3 /> */}
    </Layout>
  );
};

export default DynamicPage;
