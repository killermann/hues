import React from "react";
import { Box, Text } from "rebass";
import styled from "styled-components";

const Heading = styled(Text)`
  font-size: ${props => props.theme.fontSizes[2]}px;
  font-weight: 900;
  position: relative;
  text-align: center;
  margin: 0 auto -2vw;
  color: ${props => props.theme.colors.grey};
`;

const Rule = styled.hr`
  background: white;
  height: 4px;
  border: 0;
  margin: 0 auto 4vw;
`;

const NextProjectHeading = () => (
  <Box>
    <Rule />
    <Heading>Next hue</Heading>
  </Box>
);

export default NextProjectHeading;
