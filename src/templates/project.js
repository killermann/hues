import React from "react";
import TransitionLink, { TransitionState } from "gatsby-plugin-transition-link";
import posed from "react-pose";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/project-seo";
import ProjectHeader from "../components/project-header";
import ProjectContent from "../components/project-content";
import NextProjectHeading from "../components/next-project-heading";

const TRANSITION_LENGTH = 1.2;

const FadingContent = posed.div({
  exiting: { opacity: 0 }
});

const SlidingHeader = posed.div({
  exiting: {
    y: ({ element }) => {
      const navbar = document.querySelector("header");
      const navbarDimensions = navbar.getBoundingClientRect();
      const distanceToTop =
        element.getBoundingClientRect().top - navbarDimensions.height;
      return distanceToTop * -1;
    },
    transition: {
      ease: [0.59, 0.01, 0.28, 1],
      delay: 250,
      duration: TRANSITION_LENGTH * 1000 - 250
    }
  }
});

const FadingNextProjectHeading = posed.div({
  exiting: { opacity: 0 }
});

const ProjectInner = ({ transitionStatus, project }) => {
  const nextProjectUrl = `/${project.next.slug}`;
  const shouldTruncate = ["entering", "entered"].includes(transitionStatus);

  const exitTransition = {
    length: TRANSITION_LENGTH,
    trigger: () => {
      if (document) {
        document.body.style.overflow = "hidden";
      }
    }
  };

  const entryTransition = {
    delay: TRANSITION_LENGTH,
    trigger: () => {
      if (document && window) {
        window.scrollTo(0, 0);
        document.body.style.overflow = "visible";
      }
    }
  };

  return (
    <Layout transitionStatus={transitionStatus}>
      <SEO meta={project.seoMetaTags}/>
      <FadingContent 
        pose={transitionStatus}
      >
        <ProjectHeader project={project} />
        <ProjectContent project={project} photos={project.photos} />
      </FadingContent>
      <TransitionLink
        className={`next-hue-link ${project.next.section.slug}`}
        style={{
          textDecoration: "none",
          color: "inherit",
          display: "block",
          position: "relative"
        }}
        title={project.next.title}
        to={nextProjectUrl}
        exit={exitTransition}
        entry={entryTransition}
      >
        <FadingNextProjectHeading pose={transitionStatus}>
          <NextProjectHeading project={project.next} />
        </FadingNextProjectHeading>
        <SlidingHeader pose={transitionStatus}>
          <ProjectHeader project={project.next} truncated={shouldTruncate} />
        </SlidingHeader>
      </TransitionLink>
    </Layout>
  );
};

const Project = ({ pageContext: projectShell, data }) => {
  const { project, next} = data;
  const aggregateProject = {
    ...projectShell,
    ...project,
    next
  };

  return (
    <TransitionState>
      {({ transitionStatus }) => (
        <ProjectInner
          transitionStatus={transitionStatus}
          project={aggregateProject}
        />
      )}
    </TransitionState>
  );
};

export const query = graphql`
  query($slug: String!, $nextSlug: String!) {
    project: datoCmsProject(slug: { eq: $slug }) {
      title
      description
      content
      section {
        name
        slug
      }
      featuredPhoto {
        fluid {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
      photos {
        fluid {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    next: datoCmsProject(slug: { eq: $nextSlug }) {
      title
      slug
      description
      section {
        name
        slug
      }
      featuredPhoto {
        fluid {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
  }
`;

export default Project;
