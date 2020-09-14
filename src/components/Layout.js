import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Header, Container, Divider, Icon } from 'semantic-ui-react';

import styles from './layout.css';
const cx = classNames.bind(styles);

const Layout = ({ children }) => {
  return (
    <Container>
      <Link to="/">
        <Header as="h1" className={cx('h1')}>
          webpack-for-react
        </Header>
      </Link>
      {children}
      <Divider />
      <p className={cx('pull-right')}>
        Made with <Icon name="heart" color="red" /> by Esau Silva
      </p>
    </Container>
  );
};

export default Layout;
