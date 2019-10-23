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
      <SEO title="Resources created by Sam Killermann + Friends" description="Websites, blogs, online courses, social movements, and more resources for global justice offered in the spirit of gift economy." />
      <Box style={{ padding: "6vw 4vw 2vw"}}>
        <Intro as="h1">
        <AniLink paintDrip hex="#2C91C3" to={`/resources/`} duration={.7}>Resources</AniLink><br/> <span>by Sam Killermann + Friends</span>
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
    projects: allDatoCmsProject (filter: { section: { slug: { eq: "resources"} } } ) {
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