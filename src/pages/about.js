import React from "react";
import SEO from "../components/seo";
import styled from "styled-components";
import { graphql } from "gatsby";
import { Box, Heading } from "rebass";
import Img from "gatsby-image";
// import AniLink from "gatsby-plugin-transition-link/AniLink";
import AspectRatioBox from "../components/aspect-ratio-box";
import Layout from "../components/layout";

const Grid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 4vw;
`;

const Title = styled(Heading)`
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1;
  margin: 0 auto;
  font-size: ${props => props.theme.fontSizes[5]}px;

  @media (min-width: ${props => props.theme.breakpoints[2]}) {
    font-size: ${props => props.theme.fontSizes[6]}px;
  }
`;

const Description = styled(Heading)`
  color: ${props => props.theme.colors.grey};
  font-size: ${props => props.theme.fontSizes[2]}px;
  font-family: ${props => props.theme.fonts.sans};
  line-height: 1.2;
  margin: 2vw auto 4vw;
  max-width: 30em;
  font-weight: 500;

  @media (min-width: ${props => props.theme.breakpoints[2]}) {
    font-size: ${props => props.theme.fontSizes[3]}px;
  }
`;


const CMS = styled(Box)`
  color: ${props => props.theme.colors.grey};
  font-size: 18px;
  line-height: 1.4;
  
  p {
    margin-bottom: 1.5em;
    text-align: justify;
  }

  a {
    color: black;
  }

  a:visited {
    color: black;
  }

  @media screen and (min-width: 1024px) {
    font-size: 21px;
  } 
`

const About = ({ data }) => {
  const Page = data.datoCmsAboutPage;
  const photos = Page.photos;
  return (
    <Layout>
      <SEO title="Art created by Sam Killermann + Friends" description="Comedy shows, shirts, greeting cards, comics, poems, and more art for global justice offered in the spirit of gift economy." />
      <Grid style={{ padding: "6vw 4vw 0"}}>
        <Box style={{ padding: "0 0 4vw",}}>
          <Title style={{paddinBottom: "4vw"}} as="h1">{Page.title}</Title>
          <Description as="h2">{Page.subtitle}</Description>
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
