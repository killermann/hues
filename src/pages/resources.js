import React from "react";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import { Box, Heading } from "rebass";
import styled from "styled-components";
import Description from "../components/description";
import Layout from "../components/layout";
import ProjectGrid from "../components/project-grid";
import GridItem from "../components/grid-item";

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