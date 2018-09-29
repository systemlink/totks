import React from 'react'
import styled from "styled-components";
import { StaticQuery, graphql } from 'gatsby'

const query = graphql`
  query {
    contentfulAsset(title: { eq: "default-blog-cover" }) {
      file {
        url
      }
    }
  }
`;

const Card = ({ title, data, children }) => (
  <Container>
    <Picture src={data.contentfulAsset.file.url} alt="ブログ画像" />

    <StyledCard>
      <Title>{title}</Title>

      <Content>
        {children}
      </Content>
    </StyledCard>
  </Container>
);

const Container = styled.li`
  margin: 10px;
  display: inline-block;
  list-style-type: none;
  background-color: #fff;
  width: 250px;

  &:hover {
    cursor: pointer;
  }
`;

const Picture = styled.img`
  margin: 0;
  transition: opacity 0.2s;
  transition-timing-function: ease;
  opacity: 1;

  &:hover {
    opacity: 0.7;
  }
`;

const StyledCard = styled.div`
  padding: 30px;
  height: 240px;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 18px;
  color: #222;
  line-height: 1.6;
`;

const Content = styled.div`
  font-size: 12px;
  color: #666;
  line-height: 1.6;
`;

export default props => (
  <StaticQuery
    query={query}
    render={data => (
      <Card data={data} {...props} />
    )}
  />
);
