import React from "react";
import { Box } from "rebass";
import styled from "styled-components";

const Heading = styled(Box)`
  font-size: 3em;
  font-weight: 900;
  position: relative;
  text-align: center;
  display: block;
  padding-top: 4vw;
  margin: 0 auto -4vw !important;
`;

const Rule = styled.hr`
  height: 0px;
  border: none;

  :after, :before {
    display: block;
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }

  :after {
    height: 80px;
    z-index: 50;
    opacity: 0;
    transition: opacity .3s ease-in; 
  }

  :before {
    background: #fff;
    top: 0;
    z-index: -1;
  }
`;

const NextProjectHeading = ({ project }) => (
  <Box>
    <Rule />
    <Heading className={`${project.section.slug}-color`}><svg height="1em" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><g><path fill="currentColor" d="M224.1 284.64l-56.89 56.78-154-154.31a24 24 0 0 1 0-33.94l22.65-22.7a23.93 23.93 0 0 1 33.84 0z" opacity="0.4"></path><path class="fa-primary" fill="currentColor" d="M435 187.15L241 381.48a23.94 23.94 0 0 1-33.84 0l-40-40 211.34-211a23.93 23.93 0 0 1 33.84 0L435 153.21a24 24 0 0 1 0 33.94z"></path></g></svg></Heading>
  </Box>
);

export default NextProjectHeading;
