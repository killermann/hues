import React from "react";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import { Box, Heading } from "rebass";
import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import ProjectGrid from "../components/project-grid";
import GridItem from "../components/grid-item";
import Layout from "../components/layout";

export const Intro = styled(Heading)`
  color: ${props => props.theme.colors.black};
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1;
  text-align: center;
  margin: 0 auto;
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
    font-size: ${props => props.theme.fontSizes[5]}px;
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

const Home = ({ data }) => {
  const Projects = data.projects.edges;
  return (
    <Layout>
      <SEO title="hues: Art, Tools, & Resources for Global Justice" titleTemplate="hues: Art, Tools, & Resources for Global Justice" description="Created by Sam Killermann + Friends and offered in the spirit of gift economy." />
      <Box style={{ padding: "6vw 4vw 0"}}>
        <Intro as="h1">
          hues is <AniLink paintDrip hex="#FFC033" to={`/art/`} duration={.7} style={{background: "#FFC033", color: "#946500", padding: "0 .125em"}}>Art</AniLink>, <AniLink paintDrip hex="#FF40DA" to={`/tools/`} duration={.7} style={{background: "#FF40DA", color: "#8A006E", padding: "0 .125em"}}>Tools</AniLink>, &amp; <AniLink paintDrip hex="#42c0ff" to={`/resources/`} duration={.7} style={{background: "#42c0ff", color: "#006699", padding: "0 .125em"}}>Resources</AniLink> for Global Justice created by Sam Killermann + Friends
        </Intro>
        <Description as="h2">Offered in the spirit of the gift economy</Description>
      </Box>
      <ProjectGrid mt={[4, 5]}> 
      {Projects.map(project => (
        <GridItem key={project.node.title} project={project.node} />
      ))}
      </ProjectGrid>
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
            fluid{
              ...GatsbyDatoCmsFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export default Home;