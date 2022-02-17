import { Body, Container, Footer, Header } from "./style";
import { CardProps } from "./types";

const Card = ({ children, actionsTop, title, actionsBottom: actionsBotton }: CardProps): JSX.Element => {
  return (
    <Container>
      {
        (title || actionsTop)
        && (
          <Header.Container>
            <Header.Title>{title}</Header.Title>
            <Header.Options>{actionsTop}</Header.Options>
          </Header.Container>
        )
      }

      <Body>
        {children}
      </Body>

      {actionsBotton
        && (
          <Footer.Container>
            {Array.isArray(actionsBotton) ? actionsBotton.map((item, ix) => (
              <Footer.Tool showDivider={actionsBotton.length !== ix + 1} key={ix}>
                {item}
              </Footer.Tool>
            )) : actionsBotton}
          </Footer.Container>
        )}
    </Container>
  );
};

export { Card };