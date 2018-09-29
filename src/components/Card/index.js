import React from 'react'
import styled from "styled-components";

const Card = ({ title, children }) => (
  <StyledCard>
    <Title>{title}</Title>

    <Content>
      {children}
    </Content>
  </StyledCard>
);

const StyledCard = styled.li`
  display: inline-block;
  margin: 10px;
  padding: 30px 20px 30px;
  list-style-type: none;
  background-color: #fff;
  width: 270px;
  height: 300px;
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

export default Card;
