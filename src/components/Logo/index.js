import React from 'react';
import { StaticQuery, graphql } from 'gatsby'
import styled from "styled-components";

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
  <StyledImg
    src={data.contentfulAsset.file.url}
    alt="ロゴ"
  />
);

const StyledImg = styled.img`
  height: 48px;
`;

export default () => <StaticQuery query={query} render={Logo} />;
