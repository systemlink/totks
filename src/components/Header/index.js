import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from "styled-components";

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
  <Container url={data.contentfulAsset.file.url}>
    <Logo />
  </Container>
);

const Container = styled.header`
  padding: 70px 0 0 70px;
  background-image: url("${props => props.url}");
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: 600px;
  background-size: cover;
`;

export default () => <StaticQuery query={query} render={Header} />;
