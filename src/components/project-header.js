import React from "react";
import { Box, Heading, Text } from "rebass";
import styled, { css } from "styled-components";
import Img from "gatsby-image";
import Title from "../components/title";
import Description from "../components/description";
import AspectRatioBox from "./aspect-ratio-box";

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
      <Description as="h2" style={{ color: "#6B6F71" }} dangerouslySetInnerHTML={{ __html: project.description }} />
    <Hero photo={project.featuredPhoto} project={project} truncated={truncated} />
  </Box>
);

export default ProjectHeader;
