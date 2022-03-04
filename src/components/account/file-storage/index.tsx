import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Link, Container, Typography, Button, Input } from 'components/ui';
import { variables } from 'lib/config';
import { useState } from 'react';

const Logos = (): JSX.Element => (
  <Container maxWidth='md' style={{ margin: '2rem auto', textAlign: 'center' }}>
    <Typography variant='h3' className='mb-4'>
      File Storage Configuration
    </Typography>

    <Row style={{ maxWidth: 330, margin: 'auto' }}>
      <Col xs={5}>
        <FontAwesomeIcon icon="terminal" size="6x" style={{ margin: 'auto' }} />
      </Col>

      <Col xs={2} style={{ display: 'flex' }}>
        <FontAwesomeIcon icon="plus" size="3x" style={{ margin: 'auto' }} className="text-warning" />
      </Col>

      <Col xs={5}>
        <FontAwesomeIcon icon={['fab', 'dropbox']} size="6x" style={{ margin: 'auto' }} />
      </Col>
    </Row>
  </Container>
);

const TextAndLink = ({ linkClicked }: { linkClicked: () => unknown }): JSX.Element => (
  <Container maxWidth='sm' style={{ margin: '5rem auto' }}>
    <p className=''>
      In order to use the Starburst services, you must grant us permissions to your
      Dropbox account, this way, Starburst can save files, images, and other important files
      rigth where you can find them.
      <br />
      <br />
      <br />
      Follow the link bellow to redirect into the Dropbox authorization page, once accepted,
      enter the given code in this page.
    </p>

    <div className='mt-4' style={{ textAlign: 'center' }}>
      <Typography variant='h5' component='span'>
        <Link
          target="_blank"
          rel='noopener'
          type='primary'
          onClick={linkClicked}
          href={variables.DROPBOX_URL}
        >
            Go to Dropbox <FontAwesomeIcon icon="arrow-right" />
        </Link>
      </Typography>
    </div>
  </Container>
);

const SubmitCodeSection = ({ onSubmit, loading }: { onSubmit: (code: string) => unknown, loading: boolean }): JSX.Element => {
  const [inputState, setInputState] = useState('');
  
  return (
    <Container maxWidth={380} style={{ margin: '5rem auto' }}>
      <p className='mb-3'>
        Enter the link provided in the Dropbox Page:
      </p>

      <Input
        fullWidth
        size='large'
        value={inputState}
        onChange={(e) => setInputState(e.currentTarget.value)}
      />

      <div className='mt-4' style={{ textAlign: 'center' }}>
        <Button
          block
          className="mb-4"
          loading={loading}
          disabled={!inputState}
          onClick={() => onSubmit(inputState)}
        >
          Submit Code
        </Button>

        <Typography variant='body1' component='span'>
          <Link
            target="_blank"
            rel='noopener'
            type='primary'
            href={variables.DROPBOX_URL}
          >
            Ask for a new code <FontAwesomeIcon icon="arrow-rotate-left" />
          </Link>
        </Typography>
      </div>
    </Container>
  );
};


export { Logos, TextAndLink, SubmitCodeSection };
