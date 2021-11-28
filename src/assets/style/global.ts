import {createGlobalStyle} from "styled-components"

export default createGlobalStyle
`
// Font Families: Montserrat as Main - Nunito as Secondary
@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Nunito&display=swap');

* {
    margin: 0;
    padding: 0;
    outline:0;
    font-family: 'Montserrat', sans-serif;
    // font-family: 'Nunito', sans-serif;
}

*, :after, :before {
  box-sizing: border-box;
}

body, html, #root {
  width: 100%;
  height: 100%;
}


#root {
  padding: 1rem;
  color: ${props => props.theme.colors.font.normal};
  background-color: ${props => props.theme.colors.primary.normal};
}
`
