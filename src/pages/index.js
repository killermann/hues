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

  a {
    text-decoration: none;
    display: inline-block;
    margin-bottom: 3px;
    color: rgba(0,0,0,.95);
  }

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
  margin: 1em auto 0;
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

  .hue.art:hover:after {
    background: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2080%2080%22%3E%3Cpath%20d%3D%22M2%209l6%207%206-7-4-7C6-3-3%204%202%209zm28%2017a1%201%200%2001-1-1%207%207%200%2000-5-4l-7%206c1%204%204%207%208%207%206%200%209-5%209-10l-4%202z%22%20style%3D%22isolation%3Aisolate%22%20fill%3D%22%23ffc033%22%20opacity%3D%22.4%22%2F%3E%3Cpath%20d%3D%22M2%2025l-2%207a1%201%200%20001%202h1l7-1%2019-20-7-7zM33%204l-3-3a3%203%200%2000-5%200h1l-3%203%207%207%203-3a3%203%200%20000-4z%22%20fill%3D%22%23ffc033%22%2F%3E%3Cpath%20d%3D%22M43%2050l6%207%207-7-5-6c-4-6-13%201-8%206zm28%2017a1%201%200%2001-1-1c-1-3-3-4-5-4l-7%206c1%205%204%207%209%207s8-5%208-10l-4%202z%22%20style%3D%22isolation%3Aisolate%22%20fill%3D%22%23ffc033%22%20opacity%3D%22.4%22%2F%3E%3Cpath%20d%3D%22M43%2066l-2%207a2%202%200%20002%202l7-1%2020-20-8-7zm31-21l-3-3a3%203%200%2000-4%200l-3%203%207%208%203-3a3%203%200%20000-5z%22%20fill%3D%22%23ffc033%22%2F%3E%3C%2Fsvg%3E") round;
  }

  .hue.tools:hover:after {
    background: url("data:image/svg+xml,  %3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2080%2080%22%3E%3Cpath%20d%3D%22M13%2015L1%2027a4%204%200%20000%206%204%204%200%20006%200l10-10a5%205%200%20011-3zM4%2032a2%202%200%20112-2%202%202%200%2001-2%202zM34%207a1%201%200%2000-1%200l-5%205-5-1V7l5-5a1%201%200%20000-1l-1-1a10%2010%200%2000-9%203%2010%2010%200%2000-2%2010h-1l5%205a5%205%200%20016%201%2010%2010%200%20006-2%2010%2010%200%20002-10z%22%20style%3D%22isolation%3Aisolate%22%20fill%3D%22%23ff40da%22%20opacity%3D%22.4%22%2F%3E%3Cpath%20d%3D%22M34%2027a3%203%200%20010%203l-4%204a3%203%200%2001-3%200l-8-8a5%205%200%2001-1-6l-7-7H7L0%204l4-4%209%207v4l7%207a5%205%200%20016%201z%22%20fill%3D%22%23ff40da%22%2F%3E%3Cpath%20d%3D%22M54%2056L42%2068a4%204%200%20006%206l10-10a5%205%200%20011-3zm-9%2017a2%202%200%20112-2%202%202%200%2001-2%202zm30-25a1%201%200%2000-1%200l-5%205-5-1v-4l5-5a1%201%200%20000-1l-1-1a10%2010%200%2000-11%2013h-1l5%205a5%205%200%20016%201%2010%2010%200%20006-2%2010%2010%200%20002-10z%22%20style%3D%22isolation%3Aisolate%22%20fill%3D%22%23ff40da%22%20opacity%3D%22.4%22%2F%3E%3Cpath%20d%3D%22M75%2068a3%203%200%20010%203l-4%204a3%203%200%2001-3%200l-8-8a5%205%200%2001-1-6l-7-7h-4l-7-9%204-4%209%207v4l7%207a5%205%200%20016%201z%22%20fill%3D%22%23ff40da%22%2F%3E%3C%2Fsvg%3E") round;
  }
  
  .hue.resources:hover:after {
    background: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2080%2080%22%3E%3Cpath%20d%3D%22M32%2013l-9%2010v9a2%202%200%2001-2%202h-8a2%202%200%2001-2-2v-9L2%2013h3l7%208h4v-8h2v8h4l8-8z%22%20style%3D%22isolation%3Aisolate%22%20fill%3D%22%2342c0ff%22%20opacity%3D%22.4%22%2F%3E%3Cpath%20d%3D%22M0%2012a1%201%200%20001%201h5a17%2017%200%20015-12C5%203%201%207%200%2012zM17%200c-4%200-8%205-8%2013h17c0-8-5-13-9-13zm17%2012c-1-5-5-9-10-11a17%2017%200%20014%2012h5a1%201%200%20001-1z%22%20fill%3D%22%2342c0ff%22%2F%3E%3Cpath%20d%3D%22M74%2054l-9%2010a4%204%200%20000%201v8a2%202%200%2001-2%202h-9a2%202%200%2001-2-2v-8a4%204%200%20000-1l-9-10h3l8%209h3v-9h3v9h3l8-9z%22%20style%3D%22isolation%3Aisolate%22%20fill%3D%22%2342c0ff%22%20opacity%3D%22.4%22%2F%3E%3Cpath%20d%3D%22M42%2053a1%201%200%20001%201h5a17%2017%200%20014-11c-5%201-10%205-10%2010zm17-11c-4%200-9%205-9%2012h17c0-7-5-12-8-12zm17%2011c-1-5-6-9-11-10a17%2017%200%20014%2011h5a1%201%200%20002-1z%22%20fill%3D%22%2342c0ff%22%2F%3E%3C%2Fsvg%3E") round;
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

const Home = ({ data }) => {
  const Projects = data.projects.edges;
  return (
    <Layout>
      <SEO title="hues: Art, Tools, & Resources for Global Justice" description="Created by Sam Killermann + Friends and offered in the spirit of gift economy." />
      <Box style={{ padding: "6vw 4vw 0"}}>
        <Intro as="h1">
          hues is <AniLink paintDrip hex="#FFC033" to={`/art/`} duration={.7} style={{background: "#FFC033", color: "#946500", padding: "0 .125em"}}>Art</AniLink>, <AniLink paintDrip hex="#FF40DA" to={`/tools/`} duration={.7} style={{background: "#FF40DA", color: "#8A006E", padding: "0 .125em"}}>Tools</AniLink>, &amp; <AniLink paintDrip hex="#42c0ff" to={`/resources/`} duration={.7} style={{background: "#42c0ff", color: "#006699", padding: "0 .125em"}}>Resources</AniLink> for Global Justice created by Sam Killermann + Friends
        </Intro>
        <Box mt={[3, 0]}> 
          <Description>Offered in the spirit of the gift economy</Description>
        </Box>
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
    projects: allDatoCmsProject(sort: {fields: position}) {
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