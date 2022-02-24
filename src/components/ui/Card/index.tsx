import { Body, Container, Footer, Header } from "./style";
import { CardProps } from "./types";

const Card = ({
  children,
  actionsTop,
  title,
  actionsBottom,
  ...rest
}: CardProps): JSX.Element => {
  return (
    <Container {...rest}>
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

      {actionsBottom
        && (
          <Footer.Container>
            {Array.isArray(actionsBottom) ? actionsBottom.map((item, ix) => (
              <Footer.Tool showDivider={actionsBottom.length !== ix + 1} key={ix}>
                {item}
              </Footer.Tool>
            )) : actionsBottom}
          </Footer.Container>
        )}
    </Container>
  );
};

export { Card };