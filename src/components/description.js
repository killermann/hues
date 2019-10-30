import React from "react";
import { Heading } from "rebass";
import styled from "styled-components";

const Description = styled(Heading)`
  font-weight: 500;
  font-size: ${props => props.theme.fontSizes[2]}px;
  font-family: ${props => props.theme.fonts.sans};
  line-height: 1.2;
  text-align: center;
  margin: 2vw auto 0;
  max-width: 30em;

  @media (min-width: ${props => props.theme.breakpoints[2]}) {
    font-size: ${props => props.theme.fontSizes[3]}px;
  }
`;

export default Description;
