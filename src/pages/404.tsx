import styled from "styled-components";

const Container = styled.div`
  background-color: rgb(0, 115, 185) !important;
  text-align: center!important;
  padding-top: 3rem !important;
  padding-bottom: 1.5rem!important;
  height: 100vh;

  display: flex;
`;


const ServerError = () : JSX.Element => {

  return(
    <Container>
      <div>
        <h1>404</h1>
        SORRY!
        he page you’re looking for was not found.

        <div>Back to Home</div>
      </div>
    </Container>
  )
}


export default ServerError;
