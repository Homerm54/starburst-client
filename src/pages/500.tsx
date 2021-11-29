import styled from "styled-components";

const Container = styled.div`
  background-color: rgb(62, 20, 141) !important;
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
        <h1>500</h1>
        SORRY!
        Internal server error!
      </div>
    </Container>
  )
}


export default ServerError;
