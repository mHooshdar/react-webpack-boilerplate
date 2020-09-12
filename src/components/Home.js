import React from 'react';
import { Link } from 'react-router-dom';

import Layout from './Layout';

const Home = () => {
  const items = [0, 1, 2, 3];
  const folan = (item) => {
    return (e) => {
      console.log(e, item, 'asdasdasd');
    }
  }

  return (
    <Layout>
      {items.map(item => <div key={item} onClick={folan(item)}>asdasd</div>)}
      <p>Hello World of React and Webpack asdasd!</p>
      <p>
        <Link to="/dynamic">a to Dynamic Page</Link>
      </p>
    </Layout>
  );
};

export default Home;
