import React from 'react';
import { Loader } from 'semantic-ui-react';
import Delayed from './Delayed';

const Loading = () => (
  <Delayed delay={300}>
    <Loader active size="massive" />
  </Delayed>
);

export default Loading;
