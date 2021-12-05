import React, { Fragment } from 'react';
import styled from 'styled-components/macro';
import { QUERIES } from '../../constants';

import Header from '../Header';
import ShoeIndex from '../ShoeIndex';

const App = () => {
  const [sortId, setSortId] = React.useState('newest');

  return (
    <Fragment>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </Fragment>
  );
};

const Main = styled.main`
  padding: 64px 32px;

  @media ${QUERIES.TabletAndSmaller}{
    padding:48px 32px;
  }
  @media ${QUERIES.phoneAndSmaller}{
    padding:48px 16px;
  }
`;

export default App;
