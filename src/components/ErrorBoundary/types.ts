interface ErrorScreenProps {
  error: any;
  resetErrorBoundary: () => unknown
}

interface ErrorBoundaryProps {
  children?: React.ReactNode;
}

export type { ErrorScreenProps, ErrorBoundaryProps };