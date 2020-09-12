import React from 'react';
import { Header } from 'semantic-ui-react';

import './dynamic-page.scss';
import styles from './dynamic-page.module.scss';
import stylesInPage from './dynamic-page/in-page.module.scss';

import Layout from './Layout';
import Test from './Test';
import Test2 from './Folder/Test2';

const DynamicPage = () => {
  return (
    <Layout>
      <Header as="h2">Dynamic Page</Header>
      <p className="dp">This page was loaded aaaa!!!</p>
      <p className={styles.dpModule}>asdasdasd</p>
      <p className={styles.dpModuleTest}>asdasdasd</p>
      <p className={styles.test}>asdasdasd</p>
      <p className={stylesInPage.bRed}>asdasdasd</p>
      <Test />
      <Test2 />
      <Test2 />
      <Test2 />
    </Layout>
  );
};

export default DynamicPage;
