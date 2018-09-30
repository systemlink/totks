import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from "styled-components";

import Header from '../Header'
import GlobalNavigation from '../GlobalNavigation';

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
        { name: 'description', content: 'モダンな技術を使った自作のおもちゃを紹介します' },
        { name: 'keywords', content: 'おもちゃ,工作,IoT' },
      ]}
    >
      <html lang="ja" />
    </Helmet>

    <Header siteTitle={data.site.siteMetadata.title} />

    <Container>
      {children}
    </Container>

    <GlobalNavigation />
  </>
);

const Container = styled.main`
  position: relative;
  background-color: rgba(230,126,34,1);
  padding: 50px;
  margin-top: 400px;
`;

export default props => (
  <StaticQuery
    query={query}
    render={data => (
      <Layout data={data} {...props} />
    )}
  />
);
