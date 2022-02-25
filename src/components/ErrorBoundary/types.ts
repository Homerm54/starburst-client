interface ErrorScreenProps {
  error: Error;
  resetErrorBoundary: () => unknown
}

interface ErrorBoundaryProps {
  children?: React.ReactNode;
}

export type { ErrorScreenProps, ErrorBoundaryProps };