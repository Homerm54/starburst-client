import { Container, Footer, Header } from "./style";
import { CardProps } from "./types";

const Card = ({ children, actionsTop, title, actionsBottom: actionsBotton }: CardProps): JSX.Element => {
  return (
    <Container>
      <Header>
        {title}{actionsTop}
      </Header>

      <div>
        {children}
      </div>

      <Footer>
        {actionsBotton}
      </Footer>
    </Container>
  );
};

export { Card };