type NativeProps = React.ComponentPropsWithoutRef<'div'>;
type IconLabelType = { start: React.ReactNode; end: React.ReactNode };

type TabContentType = Array<{ item: React.ReactNode, key: string; }>;
type TabHeaderType = Array<React.ReactElement<TabItemProps>>;
type alignment = 'center' | 'left' | 'right';

interface TabGroupProps extends Omit<NativeProps, 'onChange'> {
  readonly children: React.ReactElement<TabItemProps> | Array<React.ReactElement<TabItemProps>>;
  /** 
   * Initial active tab, i.e., the tab content that will be displayed first.
   * This prop will be overrided by the forcedTab prop if present.
   * */
  readonly initialActiveTab?: string;
  /** Function to call when a new tab has been selected */
  readonly onChange?: (key?: string) => unknown;
  /** Where to align the tab headers (titles) relative to the tab group header */
  readonly alignment?: alignment;
  /** 
   * Initial tab + selected tab will be change to this tab in case of change, this way,
   * you can "force" a tab state with a prop change.
   */
  readonly forcedTab?: string;
}

interface TabItemProps extends Omit<NativeProps, 'onChange'> {
  readonly tabKey: string;
  readonly activeTab?: string | undefined;
  readonly label: string;
  readonly icon?: React.ReactNode | IconLabelType;
  readonly onChange?: (arg: string) => unknown;
}

interface TabPanelProps extends NativeProps {
  readonly activeTab: string | undefined;
  readonly tabKey: string;
}

// Style Props
interface TabItemStyleProps {
  $isActive: boolean;
}

interface TabPanelStyleProps {
  $isActive: boolean;
}

interface TabHeaderStyleProps {
  $alignment: alignment;
}

export type {
  IconLabelType,
  TabGroupProps,
  TabItemProps,
  TabItemStyleProps,
  TabPanelProps,
  TabPanelStyleProps,
  TabContentType,
  TabHeaderType,
  TabHeaderStyleProps,
};