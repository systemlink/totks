import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from "styled-components";

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
      <html lang="ja" />
    </Helmet>

    <Header siteTitle={data.site.siteMetadata.title} />

    <Container>
      {children}
    </Container>
  </>
);

const Container = styled.main`
  position: relative;
  background-color: #ffecd2;
  padding: 50px;
  margin-top: 300px;
  box-shadow: 0 0 200px gray;
`;

export default props => (
  <StaticQuery
    query={query}
    render={data => (
      <Layout data={data} {...props} />
    )}
  />
);
