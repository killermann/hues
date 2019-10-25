import React from "react";
import { Box, Text } from "rebass";
import styled from "styled-components";
import Img from "gatsby-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import AspectRatioBox from "./aspect-ratio-box";

export const Category = styled(Text)`
  color: ${props => props.theme.colors.grey};
  font-family: "Barlow Condensed", "Arial Condensed", Impact, sans-serif;
  font-size: ${props => props.theme.fontSizes[2]}px;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: .15em;
  margin: 0;

  a {
    color: ${props => props.theme.colors.grey};
    text-decoration: none;
  }
  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    font-size: ${props => props.theme.fontSizes[3]}px;
  }
`;

export const ProjectStatus = styled(Text)`
  font-size: ${props => props.theme.fontSizes[2]}px;
  color: ${props => props.theme.colors.grey};

  span {
    display: flex;
    align-items: center;
  }

  span:before {
    display: inline-block;
    width: .5em;
    height: .5em;
    padding: .25em;
    margin-right: .25em;
    content: '';
    border-radius: 1em;
    background: ${props => props.theme.colors.grey};
  }

  span.Dormant:before { background: #7933D3; }
  span.Active:before { background: #81BC41; }
  span.Ceased:before { background: #E02726; }
  span.Backburner:before { background: #FFCD00; }
`;

const Grid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 4vw;
`;

const CMS = styled(Box)`
  color: ${props => props.theme.colors.grey};
  font-size: 18px;
  
  p {
    margin-bottom: 1.5em;
    line-height: 1.444;
    text-align: justify;
  }

  p:last-of-type {
    margin-bottom: 4vw;
  }

  a {
    color: black;
  }

  a:visited {
    color: black;
  }

  @media screen and (min-width: 1024px) {
    font-size: 21px;
  } 
`


const ProjectContent = ({ photos, project }) => {
  return (
    <Grid style={{ padding: "4vw 4vw 0"}}>
      <Box>
        <Box style={{ marginBottom: "4vw", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
         <Category as="h3">
          <AniLink
            fade
            to={`/`}
            duration={0.2}
          >hues</AniLink> / <AniLink
            className={`${project.section.slug}-text`}
            fade
            to={`/${project.section.slug}`}
            duration={0.2}
          >{project.section.name}</AniLink>
          </Category>
          <ProjectStatus title="Project Status">
            <span className={project.projectStatus}>{project.projectStatus}</span>
          </ProjectStatus>
        </Box>
        <CMS dangerouslySetInnerHTML={{ __html: project.content }} />
      </Box>
      <Box>
        {photos.length ? (
          photos.map((photo, index) => {
            const withFixedAspectRatio = {
              ...photo.fluid,
              aspectRatio: 8 / 5
            };
            return (
              <AspectRatioBox key={index} ratio={8 / 5} style={{ marginBottom: "4vw" }} >
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
