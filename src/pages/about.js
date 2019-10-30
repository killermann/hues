import React from "react";
import SEO from "../components/seo";
import styled from "styled-components";
import { graphql } from "gatsby";
import { Box } from "rebass";
import Img from "gatsby-image";
import Description from "../components/description";
import Title from "../components/title";
import CMS from "../components/cms";
// import AniLink from "gatsby-plugin-transition-link/AniLink";
import AspectRatioBox from "../components/aspect-ratio-box";
import Layout from "../components/layout";

const Grid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 4vw;
`;

const About = ({ data }) => {
  const Page = data.datoCmsAboutPage;
  const photos = Page.photos;
  return (
    <Layout>
      <SEO title="About the Global Justice Collective" description="Hues is art, tools, & resources for global justice created by Sam Killermann + Friends" />
      <Grid style={{ padding: "6vw 4vw 0"}}>
        <Box style={{ padding: "0 0 4vw",}}>
          <Title style={{paddinBottom: "4vw", textAlign: "left", }} as="h1">{Page.title}</Title>
          <Description as="h2" style={{textAlign: "left", marginBottom: "4vw", }} >{Page.subtitle}</Description>
          <CMS dangerouslySetInnerHTML={{ __html: Page.content }} />
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
     
  </Layout>

  );
};
export const query = graphql`
  {
    datoCmsAboutPage {
      title
      subtitle
      content
      photos {
        fluid {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
  }
`;

export default About;
