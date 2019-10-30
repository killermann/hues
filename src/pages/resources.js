import React from "react";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { Box, Heading, Text } from "rebass";
import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Layout from "../components/layout";

export const Intro = styled(Heading)`
  color: ${props => props.theme.colors.black};
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1;
  text-align: center;
  margin: 0 auto;
  font-size: ${props => props.theme.fontSizes[4]}px;

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    font-size: ${props => props.theme.fontSizes[5]}px;
  }

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
  padding: 0 4vw 4vw;
  font-size: ${props => props.theme.fontSizes[3]}px;

  .hue {
    position: relative;
  }

  .hue:hover:after {
    display: block;
    content: '';
    position: absolute;
    top: -40px;
    right: -40px;
    bottom: -40px;
    left: -40px;
    z-index: -2;
    opacity: .5;
  }

  .hue a {
    display: flex;
    color: rgba(0,0,0,.85);
    justify-content: flex-end;
    flex-direction: column;
    text-decoration: none;
    height: 100%;
    overflow: hidden;
  }

  .hue .gatsby-image-wrapper {
    height: 100%;
    opacity: .4;
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

  .hue.resources:hover:after {
    background: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2080%2080%22%3E%3Cpath%20d%3D%22M32%2013l-9%2010v9a2%202%200%2001-2%202h-8a2%202%200%2001-2-2v-9L2%2013h3l7%208h4v-8h2v8h4l8-8z%22%20style%3D%22isolation%3Aisolate%22%20fill%3D%22%2342c0ff%22%20opacity%3D%22.4%22%2F%3E%3Cpath%20d%3D%22M0%2012a1%201%200%20001%201h5a17%2017%200%20015-12C5%203%201%207%200%2012zM17%200c-4%200-8%205-8%2013h17c0-8-5-13-9-13zm17%2012c-1-5-5-9-10-11a17%2017%200%20014%2012h5a1%201%200%20001-1z%22%20fill%3D%22%2342c0ff%22%2F%3E%3Cpath%20d%3D%22M74%2054l-9%2010a4%204%200%20000%201v8a2%202%200%2001-2%202h-9a2%202%200%2001-2-2v-8a4%204%200%20000-1l-9-10h3l8%209h3v-9h3v9h3l8-9z%22%20style%3D%22isolation%3Aisolate%22%20fill%3D%22%2342c0ff%22%20opacity%3D%22.4%22%2F%3E%3Cpath%20d%3D%22M42%2053a1%201%200%20001%201h5a17%2017%200%20014-11c-5%201-10%205-10%2010zm17-11c-4%200-9%205-9%2012h17c0-7-5-12-8-12zm17%2011c-1-5-6-9-11-10a17%2017%200%20014%2011h5a1%201%200%20002-1z%22%20fill%3D%22%2342c0ff%22%2F%3E%3C%2Fsvg%3E") round;
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
            padding: ".125em .05em .125em",
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
            padding: ".125em .05em .125em",
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
          hex="#42c0ff"
          to={`/${project.slug}`}
          duration={.7}
        >
          <Img fluid={project.featuredPhoto.fluid} />
          <Box style={{
            background: "#F7F7F7",
            padding: ".125em .05em .125em",
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
            padding: ".125em .05em .125em",
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

const Resources = ({ data }) => {
  const Projects = data.projects.edges;
  return (
    <Layout>
      <SEO title="Resources created by Sam Killermann + Friends" description="Websites, blogs, online courses, social movements, and more resources for global justice offered in the spirit of gift economy." />
      <Box style={{ padding: "6vw 4vw 0"}}>
        <Intro as="h1" className="resources-text">
          Resources
        </Intro>
        <Description as="h2">hues by sK + Friends</Description>
      </Box>
      <Grid mt={[4, 5]}> 
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

export default Resources;