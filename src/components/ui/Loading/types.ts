/** Props for the Loading component */
interface LoadingProps {
  /** Whether to show or not the Loading component */
  show?: boolean;

  /** 
   * Whether or not the component is used as a global loading, this affects the style 
   * applied to center and overlap the loading component.
   */
  global?: boolean;

  /**
   * Size of the component when the component isn't used as global. Size in pixels.
   */
  size?: number;

  /**
   * Text or react node to show alongside the loading icon.
   */
  hint?: React.ReactNode;
}

export type { LoadingProps };
