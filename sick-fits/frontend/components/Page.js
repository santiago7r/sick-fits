import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import Header from './Header';

const GlobalStyles = createGlobalStyle`
  html {
    --red: #ff0000;
    --black: #393939;
    --grey: #3A3A3A;
    --gray: var(--grey);
    --lightGray: #e1e1e1;
    --maxWidth: 1000px;
    -bs: 0 12px 24px 0 rgba(0,0,0,0.09);
  }
`;

export default function Page({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <h2>I'm the page component</h2>
      {children}
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
