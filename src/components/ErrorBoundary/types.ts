interface ErrorScreenProps {
  error: Error;
  resetErrorBoundary: () => unknown
}

interface ErrorBoundaryProps {
  children?: React.ReactNode | undefined;
}

export type { ErrorScreenProps, ErrorBoundaryProps };