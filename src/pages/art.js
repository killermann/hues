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
  margin: 0;
  font-size: ${props => props.theme.fontSizes[4]}px;

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    font-size: ${props => props.theme.fontSizes[5]}px;
  }

  @media (min-width: ${props => props.theme.breakpoints[2]}) {
    font-size: ${props => props.theme.fontSizes[6]}px;
  }
`;

export const Description = styled(Text)`
  font-weight: 400;
  color: ${props => props.theme.colors.grey};
  font-size: ${props => props.theme.fontSizes[2]}px;
  line-height: 1.2;
  text-align: center;
  margin: .5em auto 0;
  max-width: 30em;

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

  .hue.art:hover:after {
    background: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2080%2080%22%3E%3Cpath%20d%3D%22M2%209l6%207%206-7-4-7C6-3-3%204%202%209zm28%2017a1%201%200%2001-1-1%207%207%200%2000-5-4l-7%206c1%204%204%207%208%207%206%200%209-5%209-10l-4%202z%22%20style%3D%22isolation%3Aisolate%22%20fill%3D%22%23ffc033%22%20opacity%3D%22.4%22%2F%3E%3Cpath%20d%3D%22M2%2025l-2%207a1%201%200%20001%202h1l7-1%2019-20-7-7zM33%204l-3-3a3%203%200%2000-5%200h1l-3%203%207%207%203-3a3%203%200%20000-4z%22%20fill%3D%22%23ffc033%22%2F%3E%3Cpath%20d%3D%22M43%2050l6%207%207-7-5-6c-4-6-13%201-8%206zm28%2017a1%201%200%2001-1-1c-1-3-3-4-5-4l-7%206c1%205%204%207%209%207s8-5%208-10l-4%202z%22%20style%3D%22isolation%3Aisolate%22%20fill%3D%22%23ffc033%22%20opacity%3D%22.4%22%2F%3E%3Cpath%20d%3D%22M43%2066l-2%207a2%202%200%20002%202l7-1%2020-20-8-7zm31-21l-3-3a3%203%200%2000-4%200l-3%203%207%208%203-3a3%203%200%20000-5z%22%20fill%3D%22%23ffc033%22%2F%3E%3C%2Fsvg%3E") round;
  }

  .hue.art:nth-of-type(8n+1) a{ background-color: hsl(41, 100%, 60%); }
  .hue.art:nth-of-type(8n+2) a{ background-color: hsl(51, 100%, 60%); }
  .hue.art:nth-of-type(8n+3) a{ background-color: hsl(61, 100%, 60%); }
  .hue.art:nth-of-type(8n+4) a{ background-color: hsl(51, 100%, 60%); }
  .hue.art:nth-of-type(8n+5) a{ background-color: hsl(41, 100%, 60%); }
  .hue.art:nth-of-type(8n+6) a{ background-color: hsl(31, 100%, 60%); }
  .hue.art:nth-of-type(8n+7) a{ background-color: hsl(21, 100%, 60%); }
  .hue.art:nth-of-type(8n+8) a{ background-color: hsl(31, 100%, 60%); }

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


const Art = ({ data }) => {
  const Projects = data.projects.edges;
  return (
    <Layout>
      <SEO title="Art created by Sam Killermann + Friends" description="Comedy shows, shirts, greeting cards, comics, poems, and more art for global justice offered in the spirit of gift economy." />
      <Box style={{ padding: "6vw 4vw 0"}}>
        <Intro as="h1">
         <span className="art-text">Art</span>
        </Intro>
          <Description>hues by sK + Friends</Description>
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
    projects: allDatoCmsProject (filter: { section: { slug: { eq: "art"} } } ) {
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

export default Art;