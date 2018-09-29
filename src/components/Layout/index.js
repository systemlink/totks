import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../Header'
import './layout.css'

const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const Layout = ({ data, children }) => (
  <>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <html lang="en" />
    </Helmet>

    <Header siteTitle={data.site.siteMetadata.title} />

    <main>
      {children}
    </main>
  </>
);

export default props => (
  <StaticQuery
    query={query}
    render={data => (
      <Layout data={data} {...props} />
    )}
  />
);
