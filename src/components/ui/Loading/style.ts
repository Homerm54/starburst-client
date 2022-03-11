import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const GlobalContainer = styled.div`
  height: 100%;
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: ${({ theme }) => theme.zIndex.modal};
`;

const Hint = styled.div`
  width: 100%;
  text-align: center;
`;

export { Container, GlobalContainer, Hint };
