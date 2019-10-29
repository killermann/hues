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
  font-size: ${props => props.theme.fontSizes[1]}px;
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

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    font-size: ${props => props.theme.fontSizes[2]}px;
  }
`;

const Links = styled(Box)`
  margin: 3vw auto 0 !important; 
  display: flex; 
  flex-wrap: wrap;
  align-items: center; 

  a {
    padding: .9em 1.5em 1.1em; 
    display: inline-block;
    text-decoration: none;
    text-transform: uppercase;
    line-height: 1;
    letter-spacing: .2em;
    font-family: "Barlow Condensed", "Arial Condensed", Impact, sans-serif;
    margin: 1vw 1vw 0 0;
    border-radius: .25em;
    box-shadow: inset 0px -.25em 0 0 currentColor;
  }

  a.art-bg { color: #704D00; }
  a.tools-bg { color: #520041; }
  a.resources-bg { color: #004B70; }
  

  a:active {
    box-shadow: inset 0px 0 .25em 0 currentColor;
    padding: 1em 1.5em;
  }
`

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

  a {
    color: black;
  }

  a:visited {
    color: black;
  }

  p:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 1024px) {
    font-size: 21px;
  } 
`


const ProjectContent = ({ photos, project }) => {
  return (
    <Grid style={{ padding: "4vw 4vw 0"}}>
      <Box style={{ paddingBottom: "4vw" }}>
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
          <ProjectStatus 
            title={`Project Status ${ project.projectStatus === `Active` ? `Active: published and still regularly updated` : project.projectStatus === `Ceased` ? `Ceased: completed, but no longer active, with no future plans to bring back` : project.projectStatus === `Dormant` ? `Dormant: not currently active, but not ceased` : project.projectStatus === `Backburner` ? `Backburner: a work-in-progress, not ready for the world yet` : project.projectStatus }`}>
            <span className={project.projectStatus}>{project.projectStatus}</span>
          </ProjectStatus>
        </Box>
        <CMS dangerouslySetInnerHTML={{ __html: project.content }} />
        { project.link && 
        <Links>
          { project.link &&
            <a className={`${project.section.slug}-bg`} href={ project.link } title={`Visit website for ${project.title}`} target="_blank" rel="noreferrer noopener">
              Visit URL
            </a>
          } { project.downloadLink &&
            <a className={`${project.section.slug}-bg`} href={ project.downloadLink } title={` Download ${project.title}`} target="_blank" rel="noreferrer noopener">
              Download
            </a>
          }{ project.purchaseLink &&
            <a className={`${project.section.slug}-bg`} href={ project.purchaseLink } title={` Purchase ${project.title}`} target="_blank" rel="noreferrer noopener">
              Purchase
            </a>
          }
        </Links>
        }
      </Box>
      <Box>
        {photos.length ? (
          photos.map((photo, index) => {
            const withFixedAspectRatio = {
              ...photo.fluid,
              aspectRatio: 8 / 5
            };
            return (
              <AspectRatioBox key={index} ratio={8 / 5} style={{ marginBottom: "4vw" }}>
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
