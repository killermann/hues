import React from "react";
import { Heading } from "rebass";
import styled from "styled-components";

const Title = styled(Heading)`
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1;
  margin: 1rem auto;
  text-align: center;
  font-size: ${props => props.theme.fontSizes[4]}px;

  @media (min-width: ${props => props.theme.breakpoints[2]}) {
    font-size: ${props => props.theme.fontSizes[6]}px;
  }
`;

export default Title;
