import api from 'api';
import { Logos, SubmitCodeSection, TextAndLink } from 'components/account/file-storage/bind';
import { message } from 'components/ui';
import Console from 'lib/Console';
import { useState } from 'react';

type Props = {
  onFinish: () => unknown;
}

const BindScreen = ({ onFinish }: Props): JSX.Element => {
  const [showSubmitSection, setShowSubmitSection] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const onSubmit = async (code: string) => {
    setLoading(true);
    Console.log(`Binding with Dropbox code: ${code}`);

    try {
      await api.fileStorage.bindAccount({ code });
      Console.log('Operation successfully done, redirect here!');
      onFinish();
    } catch (error) {
      Console.error(error);
      message.error({
        content: `
          An error ocurred while binding your account, either the link expired
          or is invalid, please check and try again.
        `,
        timeout: 5000,
        destroyOnClick: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return(
    <div className='m-3'>
      <Logos />

      {
        showSubmitSection
          ? <SubmitCodeSection loading={loading} onSubmit={onSubmit} />
          : <TextAndLink linkClicked={() => setShowSubmitSection(true)} />
      }
    </div>
  );
};


export { BindScreen };
