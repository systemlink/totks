import React from 'react';
import { StaticQuery, graphql } from 'gatsby'

import Logo from '../Logo';

const query = graphql`
  query {
    contentfulAsset(title: { eq: "cover" }) {
      file {
        url
      }
    }
  }
`;

const Header = data => (
  <header
    style={{
      padding: '70px 0 0 70px',
      backgroundImage: `url("${data.contentfulAsset.file.url}")`,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: '600px',
      backgroundSize: 'cover'
    }}
  >
    <Logo />
  </header>
);
export default() => <StaticQuery query={query} render={Header} />;
