import React from "react";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { Box, Heading } from "rebass";
import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Layout from "../components/layout";

export const Intro = styled(Heading)`
  color: ${props => props.theme.colors.black};
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1.2;
  text-align: center;
  margin: 0;
  font-size: ${props => props.theme.fontSizes[5]}px;

  a {
    padding:0 .15em;
    text-decoration: none;
    display: inline-block;
    color: rgba(0,0,0,.95) !important;
  }

  a:nth-of-type(1){
    background: hsl(41, 100%, 60%);
  }

  a:nth-of-type(2){
    background: hsl(312, 100%, 63%);
  }

  a:nth-of-type(3){
    background: hsl(200, 100%, 63%);
  }

  span {
    font-size: .5em;
    line-height: .5em;
    color: ${props => props.theme.colors.grey};
  }

  @media (min-width: ${props => props.theme.breakpoints[2]}) {
    font-size: ${props => props.theme.fontSizes[6]}px;
  }
`;


const Title = styled(Heading)`
  text-transform: uppercase;
  font-weight: 700;
  line-height: 1;
  font-size: 1em;
  hyphens: auto;
  letter-spacing: .05em;
`;

const Grid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 4vw;
  grid-auto-rows: 220px;
  grid-auto-flow: row;
  padding: 4vw;
  font-size: ${props => props.theme.fontSizes[3]}px;

  .hue a {
    display: flex;
    color: rgba(0,0,0,.85);
    justify-content: flex-end;
    flex-direction: column;
    text-decoration: none;
    height: 100%;
  }

  .hue {
    overflow: hidden;
  }

  .hue .gatsby-image-wrapper {
    height: 100%;
    opacity: .15;
    transform: scale(1.12);
  }

  @keyframes hvr-pop {
    50% {
      transform: scale(1)
    }
    100% {
      transform: scale(1.06);
    }
  }
  
  .hue:hover .gatsby-image-wrapper {
    animation-name: hvr-pop;
    animation-duration: 0.3s;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }

  .hue.art:nth-of-type(8n+1) a{ background-color: hsl(41, 100%, 60%); }
  .hue.art:nth-of-type(8n+2) a{ background-color: hsl(51, 100%, 60%); }
  .hue.art:nth-of-type(8n+3) a{ background-color: hsl(61, 100%, 60%); }
  .hue.art:nth-of-type(8n+4) a{ background-color: hsl(51, 100%, 60%); }
  .hue.art:nth-of-type(8n+5) a{ background-color: hsl(41, 100%, 60%); }
  .hue.art:nth-of-type(8n+6) a{ background-color: hsl(31, 100%, 60%); }
  .hue.art:nth-of-type(8n+7) a{ background-color: hsl(21, 100%, 60%); }
  .hue.art:nth-of-type(8n+8) a{ background-color: hsl(31, 100%, 60%); }

  .hue.tools:nth-of-type(8n+1) a{ background-color: hsl(312, 100%, 63%);}
  .hue.tools:nth-of-type(8n+2) a{ background-color: hsl(322, 100%, 63%); }
  .hue.tools:nth-of-type(8n+3) a{ background-color: hsl(332, 100%, 63%); }
  .hue.tools:nth-of-type(8n+4) a{ background-color: hsl(322, 100%, 63%); }
  .hue.tools:nth-of-type(8n+5) a{ background-color: hsl(312, 100%, 63%); }
  .hue.tools:nth-of-type(8n+6) a{ background-color: hsl(302, 100%, 63%); }
  .hue.tools:nth-of-type(8n+7) a{ background-color: hsl(292, 100%, 63%); }
  .hue.tools:nth-of-type(8n+8) a{ background-color: hsl(282, 100%, 63%); }

  .hue.resources:nth-of-type(8n+1) a{ background-color: hsl(200, 100%, 63%); }
  .hue.resources:nth-of-type(8n+2) a{ background-color: hsl(210, 100%, 63%); }
  .hue.resources:nth-of-type(8n+3) a{ background-color: hsl(220, 100%, 63%); }
  .hue.resources:nth-of-type(8n+4) a{ background-color: hsl(210, 100%, 63%); }
  .hue.resources:nth-of-type(8n+5) a{ background-color: hsl(200, 100%, 63%); }
  .hue.resources:nth-of-type(8n+6) a{ background-color: hsl(190, 100%, 63%); }
  .hue.resources:nth-of-type(8n+7) a{ background-color: hsl(180, 100%, 63%); }
  .hue.resources:nth-of-type(8n+8) a{ background-color: hsl(190, 100%, 63%); }

  @media (min-width: ${props => props.theme.breakpoints[1]}) {

    font-size: ${props => props.theme.fontSizes[4]}px;

    .hue:nth-child(3n + 1){
      grid-column: span 2;
      grid-row: span 2;
    }
  }

`;

const GridItem = ({ project }) => {

  if (project.section.slug == "art") {
    return (
      <Box className={`hue ${project.section.slug}`} mb={1}>
        <AniLink
          paintDrip
          hex="#FFC033"
          to={`/${project.slug}`}
          duration={.7}
        >
          <Img fluid={project.featuredPhoto.fluid} />
          <Box style={{
            background: "#F7F7F7",
            padding: ".125em 0 0",
            position: "relative",
            zIndex: "3"
          }}>
            <Title as="h3">{project.title}</Title>
          </Box>
        </AniLink>
      </Box>
    );
  } else if (project.section.slug == "tools") {
    return (
      <Box className={`hue ${project.section.slug}`} mb={1}>
        <AniLink
          paintDrip
          hex="#FF40DA"
          to={`/${project.slug}`}
          duration={.7}
        >
          <Img fluid={project.featuredPhoto.fluid} />
          <Box style={{
            background: "#F7F7F7",
            padding: ".125em 0 0",
            position: "relative",
            zIndex: "3"
          }}>
            <Title as="h3">{project.title}</Title>
          </Box>
        </AniLink>
      </Box>
    );
  } else if (project.section.slug == "resources") {
    return (
      <Box className={`hue ${project.section.slug}`} mb={1}>
        <AniLink
          paintDrip
          hex="#41C0FF"
          to={`/${project.slug}`}
          duration={.7}
        >
          <Img fluid={project.featuredPhoto.fluid} />
          <Box style={{
            background: "#F7F7F7",
            padding: ".125em 0 0",
            position: "relative",
            zIndex: "3"
          }}>
            <Title as="h3">{project.title}</Title>
          </Box>
        </AniLink>
      </Box>
    );
  }
  else {
    return (
      <Box className={`hue ${project.section.slug}`} mb={1}>
        <AniLink
          paintDrip
          hex="#FFFFFF"
          to={`/${project.slug}`}
          duration={.7}
        >
          <Img fluid={project.featuredPhoto.fluid} />
          <Box style={{
            background: "#F7F7F7",
            padding: ".125em 0 0",
            position: "relative",
            zIndex: "3"
          }}>
            <Title as="h3">{project.title}</Title>
          </Box>
        </AniLink>
      </Box>
    );
  }
};

const Home = ({ data }) => {
  const Projects = data.projects.edges;
  return (
    <Layout>
      <SEO title="hues: Art, Tools, & Resources for Global Justice" description="Created by Sam Killermann + Friends and offered in the spirit of gift economy." />
      <Box style={{ padding: "6vw 4vw 2vw"}}>
        <Intro as="h1">
          hues is <AniLink paintDrip hex="#FFC033" to={`/art/`} duration={.7}>Art</AniLink>, <AniLink paintDrip hex="#FF40DA" to={`/tools/`} duration={.7}>Tools</AniLink>, &amp; <AniLink paintDrip hex="#2C91C3" to={`/resources/`} duration={.7}>Resources</AniLink> for Global Justice created by Sam Killermann + Friends<br/> <span>Offered in the spirit of the gift economy</span>
        </Intro>
      </Box>
      <Grid>
      {Projects.map(project => (
        <GridItem key={project.node.title} project={project.node} />
      ))}
      </Grid>
    </Layout>
  );
};

export const query = graphql`
  {
    projects: allDatoCmsProject {
      edges {
        node {
          slug
          title
          section {
            slug
          }
          featuredPhoto {
            fluid {
              ...GatsbyDatoCmsFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export default Home;