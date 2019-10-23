import React from "react";
import { Box, Text } from "rebass";
import styled from "styled-components";
import Img from "gatsby-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import AspectRatioBox from "./aspect-ratio-box";

export const Category = styled(Text)`
  color: ${props => props.theme.colors.grey};
  font-family: "Barlow Condensed", "Arial Condensed", Impact, sans-serif;
  font-size: ${props => props.theme.fontSizes[3]}px;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: .15em;
  margin: 0;
  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    font-size: ${props => props.theme.fontSizes[4]}px;
  }
`;

const Grid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 4vw;
`;

const ProjectContent = ({ photos, project }) => {
  return (
    <Grid style={{ padding: "4vw 4vw 0"}}>
      <Box>
        <Box style={{ marginBottom: "4vw" }}>
         <Category as="h3">
         <AniLink
            style={{ textDecoration: "none", color: "#485658" }}
            fade
            to={`/`}
            duration={0.2}
          >hues</AniLink> / <AniLink
            style={{ textDecoration: "none" }}
            className={`${project.section.slug}-text`}
            fade
            to={`/${project.section.slug}`}
            duration={0.2}
          >{project.section.name}</AniLink></Category>
        </Box>
        <Box className="cms" dangerouslySetInnerHTML={{ __html: project.content }} />
      </Box>
      <Box>
        {photos.length ? (
          photos.map((photo, index) => {
            const withFixedAspectRatio = {
              ...photo.fluid,
              aspectRatio: 8 / 5
            };
            return (
              <AspectRatioBox key={index} ratio={8 / 5} style={{ marginBottom: "4vw", }} >
                <Img fluid={withFixedAspectRatio}/>
              </AspectRatioBox>
            );
          })
        ) : (
          <>
            
          </>
        )}
    </Box>
  </Grid>
  );
};

export default ProjectContent;
