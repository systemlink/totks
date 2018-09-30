import React from 'react';
import styled from "styled-components";

import Logo from '../Logo';

const GlobalNavigation = ({ hiddenHeader }) => (
  <Container hiddenHeader={hiddenHeader}>
    <Logo />
  </Container>
);

const Container = styled.div`
  padding: 5px;
  position: fixed;
  ${props => !props.hiddenHeader && 'background-color: #fff'};
  width: 100%;
  top: 0;
  height: 48px;
`;

export default GlobalNavigation;
