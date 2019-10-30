import { Box } from "rebass";
import styled from "styled-components";

const CMS = styled(Box)`
  color: ${props => props.theme.colors.grey};
  font-size: 18px;
  line-height: 1.4;
  
  p {
    margin-bottom: 1.5em;
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

export default CMS;
