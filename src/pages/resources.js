import React from "react";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import { Box } from "rebass";
import Description from "../components/description";
import Layout from "../components/layout";
import ProjectGrid from "../components/project-grid";
import GridItem from "../components/grid-item";
import Title from "../components/title";

const Resources = ({ data }) => {
  const Projects = data.projects.edges;
  return (
    <Layout>
      <SEO title="Resources created by Sam Killermann + Friends" description="Websites, blogs, online courses, social movements, and more resources for global justice offered in the spirit of gift economy." />
      <Box style={{ padding: "6vw 4vw 0"}}>
        <Title as="h1" className="resources-text">
          Resources
        </Title>
        <Description as="h2" className="resources-text">hues by sK + Friends</Description>
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