import React from "react";
import { Box, Heading, Text } from "rebass";
import styled, { css } from "styled-components";
import Img from "gatsby-image";

import AspectRatioBox from "./aspect-ratio-box";

export const Title = styled(Heading)`
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1;
  text-align: center;
  font-size: ${props => props.theme.fontSizes[5]}px;

  @media (min-width: ${props => props.theme.breakpoints[2]}) {
    font-size: ${props => props.theme.fontSizes[6]}px;
  }
`;

export const Description = styled(Heading)`
  color: ${props => props.theme.colors.grey};
  font-size: ${props => props.theme.fontSizes[2]}px;
  font-family: ${props => props.theme.fonts.sans};
  line-height: 1.2;
  text-align: center;
  margin: 2vw auto 0;
  max-width: 30em;
  font-weight: 500;

  @media (min-width: ${props => props.theme.breakpoints[2]}) {
    font-size: ${props => props.theme.fontSizes[3]}px;
  }
`;

const HeroWrap = styled(Box)`
  ${props =>
    props.truncated &&
    css`
      max-height: 160px;
      overflow: hidden;

      .gatsby-image-wrapper {
        opacity: .3;
      }
      
    `}
`;

const Hero = ({ project, photo, truncated }) => {
  const withFixedAspectRatio = {
    ...photo.fluid,
    aspectRatio: 1200 / 630
  };
  return (
    <HeroWrap mt={[4, 5]} truncated={truncated}>
      <AspectRatioBox ratio={1200 / 630} className={`${project.section.slug}-bg`}>
        <Img
          loading={truncated ? "lazy" : "eager"}
          fluid={withFixedAspectRatio}
        />
      </AspectRatioBox>
    </HeroWrap>
  );
};

const ProjectHeader = ({ project, truncated }) => (
  <Box style={{ padding: "6vw 4vw 0",}}>
      <Box>
        <Title as="h1">{project.title}</Title>
      </Box>
      <Description as="h2" dangerouslySetInnerHTML={{ __html: project.description }} />
    <Hero photo={project.featuredPhoto} project={project} truncated={truncated} />
  </Box>
);

export default ProjectHeader;
