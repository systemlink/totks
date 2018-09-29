import React from 'react';
import { StaticQuery, graphql } from 'gatsby'

const query = graphql`
query {
  contentfulAsset(title: { eq: "logo" }) {
    file {
      url
         }
    }
}
`;

const Logo = data => (
  <img src={data.contentfulAsset.file.url} alt="ロゴ" />
);

export default() => <StaticQuery query={query} render={Logo} />;
