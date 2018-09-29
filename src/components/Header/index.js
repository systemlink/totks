import React from 'react';
import { StaticQuery, graphql } from 'gatsby'

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
      backgroundImage: `url("${data.contentfulAsset.file.url}")`,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: '600px',
      backgroundSize: 'cover'
    }}
  />
);
export default() => <StaticQuery query={query} render={Header} />;
