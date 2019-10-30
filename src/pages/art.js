import React from "react";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import { Box } from "rebass";
import Description from "../components/description";
import Layout from "../components/layout";
import ProjectGrid from "../components/project-grid";
import GridItem from "../components/grid-item";
import Title from "../components/title";

const Art = ({ data }) => {
  const Projects = data.projects.edges;
  return (
    <Layout>
      <SEO title="Art created by Sam Killermann + Friends" description="Comedy shows, shirts, greeting cards, comics, poems, and more art for global justice offered in the spirit of gift economy." />
      <Box style={{ padding: "6vw 4vw 0"}}>
        <Title as="h1" className="art-text">
          Art
        </Title>
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
    projects: allDatoCmsProject (filter: { section: { slug: { eq: "art"} } } sort: {fields: position} ) {
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