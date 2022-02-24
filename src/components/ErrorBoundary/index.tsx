import { ErrorBoundary as ParentErrorBoundary } from 'react-error-boundary';
import { ErrorBoundaryProps } from './types';
import { ErrorScreen } from './screen';
import Console from 'lib/Console';

const myErrorHandler = (error: Error, info: { componentStack: string }) => {
  Console.log(error);
  Console.log(info);
};

function ErrorBoundary({ children }: ErrorBoundaryProps): JSX.Element {
  return (
    <ParentErrorBoundary
      onError={myErrorHandler}
      FallbackComponent={ErrorScreen}
      onReset={() => { window.location.reload(); }}
    >
      {children}
    </ParentErrorBoundary>
  );
}

export { ErrorBoundary };
