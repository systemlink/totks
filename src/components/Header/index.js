import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from "styled-components";

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
  <Container url={data.contentfulAsset.file.url} />
);

const Container = styled.header`
  position: fixed;
  top: 0;
  padding: 10px;
  background-image: url("${props => props.url}");
  background-position: top center;
  background-repeat: no-repeat;
  width: 100%;
  height: 400px;
  background-size: cover;
`;

export default () => <StaticQuery query={query} render={Header} />;
