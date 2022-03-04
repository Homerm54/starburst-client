import api from "api";
import { Button, Col, Input, Modal, Row, Typography } from "components/ui";
import { useState } from "react";
import validator from 'validator';

interface Props {
  onClose: () => unknown;
  display: boolean;
}

const EmailRecoverModal = ({ onClose, display }: Props): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  const sentEmail = async () => {
    setLoading(true);
    try {
      await api.auth.askForRecoverEmail({ email });
      onClose();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setEmail('');
    }
  };

  return(
    <Modal
      onClose={onClose}
      display={display}
      title="Recover your password"
      footer={null}
    >
      <Row
        spacing={{ x: 3, y: 3 }}
        style={{ minWidth: 600 }}
        className="px-4 pb-3"
      >
        <Col xs={12}>
          <Typography variant="body1">
            Enter your email below to sent you an email with the instructions to 
            recover the password for your account.
          </Typography>
        </Col>

        <Col flex={3}>
          <Input
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            error={email ? !validator.isEmail(email) : false}
            errorText="Enter a valid email address"
            helperText=""
          />
        </Col>

        <Col flex={1}>
          <Button
            block
            onClick={sentEmail}
            loading={loading}
            disabled={!validator.isEmail(email)}
          >
          Ask for email
          </Button>
        </Col>
      </Row>
    </Modal>
  );
};


export { EmailRecoverModal };
