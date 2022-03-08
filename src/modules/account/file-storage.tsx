import api from 'api';
import { Logos, SubmitCodeSection, TextAndLink } from 'components/account/file-storage';
import Console from 'lib/Console';
import { useState } from 'react';

const FileStorageScreen = (): JSX.Element => {
  const [showSubmitSection, setShowSubmitSection] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const onSubmit = async (code: string) => {
    setLoading(true);
    Console.log(`Binding with Dropbox code: ${code}`);

    // await sleep(3000);
    try {
      await api.fileStorage.bindAccount({ code });
      Console.log('Operation successfully done, redirect here!');
    } catch (error) {
      Console.error(error);
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


export { FileStorageScreen };
