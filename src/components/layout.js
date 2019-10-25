import React from "react";
import { ThemeProvider } from "styled-components";
import { Box, Image } from "rebass";
import posed from "react-pose";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import "../style/reset.css";
import Logo from "./logo.svg";


const theme = {
  breakpoints: ["40em", "52em", "64em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    sans: "system-ui, sans-serif"
  },
  fontSizes: [12, 16, 18, 24, 36, 48, 64],
  colors: {
    grey: "#6B6F71",
    lightgrey: "rgba(0,0,0,.5)",
    faintgrey: "#F7F7F7",
    black: "#000",
  }
};

const FadingHeader = posed.header({
  exiting: { transform: "translateY(-100%)" },
  exited: { transform: "translateY(-100%)" },
  entering: { transform: "translateY(0%)" },
  entered: { transform: "translateY(0%)" }
});

const Layout = ({ children, transitionStatus }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <FadingHeader pose={transitionStatus} style={{
        background: "white",
      }}>
        <Box style={{padding: "2vw 4vw", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center"}}>
        <AniLink
            style={{ textDecoration: "none" }}
            paintDrip
            hex="#fff"
            to={`/`}
            duration={1}
          >
            <Image src={Logo} alt="hues Logo" style={{height: "calc(20px + 4vw)", }} />
          </AniLink>
          <nav>
            <AniLink title="Art" style={{fontSize: "calc(1rem + 1vw)", padding: ".5em", lineHeight: "1", textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.025em", color: "#FFC033"}} paintDrip hex="#FFC033" to={`/art/`} duration={.7}>
              <svg style={{height: "1em"}} aria-hidden="true" focusable="false" data-prefix="fad" data-icon="pencil-paintbrush" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path fill="currentColor" d="M21.08 133l99.11 100.33L216 137.52 146 33.11C84.06-55.29-52.15 52.53 21.08 133zm435.68 258.63a15.26 15.26 0 0 1-14.59-10c-18.13-47.78-48.4-65.38-82.65-70.71l-101.69 101.7C266.65 476 315.43 512 384 512c90.07 0 128-72.38 128-154.73-9.78 6.73-44.14 34.36-55.24 34.36z" opacity="0.4"></path><path fill="currentColor" d="M19.08 379.68L.33 487.12a21.23 21.23 0 0 0 24.59 24.56l107.44-18.84 296.93-296.93L316.08 82.72zM497.94 59.32l-45.26-45.25a48 48 0 0 0-67.94 0l-46 46 113.2 113.2 46-46a48 48 0 0 0 0-67.95z"></path></g></svg>
            </AniLink>
            <AniLink title="Tools" style={{fontSize: "calc(1rem + 1vw)", padding: ".5em", lineHeight: "1", textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.025em", color: "#FF40DA"}} paintDrip hex="#FF40DA" to={`/tools/`} duration={.7}>
              <svg style={{height: "1em"}} aria-hidden="true" focusable="false" data-prefix="fad" data-icon="tools" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path fill="currentColor" d="M193.8 227.7L18.74 402.76a64 64 0 0 0 90.5 90.5l148.88-148.88a75.36 75.36 0 0 1 6.58-45.78zM64 472a24 24 0 1 1 24-24 24 24 0 0 1-24 24zm443.73-362.9a12 12 0 0 0-20.12-5.51L413.25 178l-67.88-11.31-11.31-67.93 74.36-74.36a12 12 0 0 0-5.66-20.16 143.92 143.92 0 0 0-136.58 37.93c-39.64 39.64-50.55 97.1-34.05 147.2l-4.43 4.43 70.9 70.9a74.25 74.25 0 0 1 85.4 13.9l7.21 7.21a141.74 141.74 0 0 0 78.61-40 143.94 143.94 0 0 0 37.91-136.71z" opacity="0.4"></path><path fill="currentColor" d="M501.1 395.7a37.36 37.36 0 0 1 0 52.7l-52.7 52.7a37.18 37.18 0 0 1-52.58.12l-.12-.12L278.6 384c-23.1-23.1-27.5-57.6-13.9-85.4L158.1 192H96L0 64 64 0l128 96v62.1l106.6 106.6a74.25 74.25 0 0 1 85.4 13.9z"></path></g></svg>
            </AniLink>
            <AniLink title="Resources" style={{fontSize: "calc(1rem + 1vw)", padding: ".5em", lineHeight: "1", textDecoration: "none", textTransform: "uppercase", letterSpacing: "0.025em", color: "#42c0ff"}} paintDrip hex="#42c0ff" to={`/resources/`} duration={.7}>
             <svg style={{height: "1em"}} aria-hidden="true" focusable="false" data-prefix="fad" data-icon="parachute-box" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path fill="currentColor" d="M487.1 192L350.3 343.9c.7 2.7 1.6 5.2 1.6 8.1v128a32 32 0 0 1-32 32h-128a32 32 0 0 1-32-32V352c0-2.9.9-5.5 1.6-8.1L24.8 192h43.1l116.6 129.5c2.5-.6 4.8-1.5 7.5-1.5h48V192h32v128h48c2.7 0 5 .9 7.5 1.5L444.1 192z" opacity="0.4"></path><path fill="currentColor" d="M.1 175c-1.1 9.1 6.8 17 16 17H96c0-75.1 26-136.3 62.4-175.7C78.5 42.7 9.2 99.5.1 175zM256 0c-59.1 0-128 76.8-128 192h256C384 76.8 315.1 0 256 0zm255.9 175c-9.1-75.6-78.4-132.4-158.3-158.7C390 55.7 416 116.9 416 192h79.8c9.3 0 17.2-7.8 16.1-17z"></path></g></svg>
            </AniLink>
          </nav>
        </Box>
      </FadingHeader>
      <Box as="main">
        {children}
      </Box>
    </React.Fragment>
  </ThemeProvider>
);

export default Layout;
