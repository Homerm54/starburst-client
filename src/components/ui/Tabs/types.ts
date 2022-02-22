type NativeProps = React.ComponentPropsWithoutRef<'div'>;
type IconLabelType = { start: React.ReactNode; end: React.ReactNode };

type TabContentType = Array<{ item: React.ReactNode, key: string; }>;
type TabHeaderType = Array<React.ReactElement<TabItemProps>>;
type alignment = 'center' | 'left' | 'right';

interface TabGroupProps extends Omit<NativeProps, 'onChange'> {
  readonly children: React.ReactElement<TabItemProps> | Array<React.ReactElement<TabItemProps>>;
  readonly initialActiveTab?: string;
  readonly onChange?: (key?: string) => unknown;
  readonly alignment?: alignment;
}

interface TabItemProps extends Omit<NativeProps, 'onChange'> {
  readonly tabKey: string;
  readonly activeTab?: string;
  readonly label: string;
  readonly icon?: React.ReactNode | IconLabelType;
  readonly onChange?: (arg: string) => unknown;
}

interface TabPanelProps extends NativeProps {
  readonly activeTab?: string;
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