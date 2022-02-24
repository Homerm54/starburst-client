import { Button } from "..";
import { Children, cloneElement, isValidElement, useLayoutEffect, useState } from 'react';
import { TabGroupStyle, TabHeaderStyle, TabItemLabel, TabItemStyle, TabPanelStyle } from "./style";
import { IconLabelType, TabContentType, TabGroupProps, TabHeaderType, TabItemProps, TabPanelProps } from "./types";
 
const Item = ({
  icon,
  label,
  tabKey,
  onChange,
  activeTab,
  ...rest
}: TabItemProps): JSX.Element => {
  let startElement = null;
  let endElement = null;

  if (icon) {
    if (isValidElement(icon)) {
      startElement = icon;
    } else {
      const parsedIcon = icon as IconLabelType;
      if (parsedIcon.start) startElement = parsedIcon.start;
      if (parsedIcon.end) endElement = parsedIcon.end;
    }
  }

  return(
    <TabItemStyle
      $isActive={activeTab === tabKey}
      {...rest}
    >
      <Button
        type="unstyled"
        variant="text"
        onClick={() => onChange && onChange(tabKey)}
      >
        {startElement}
        <TabItemLabel>{label}</TabItemLabel>
        {endElement}
      </Button>
    </TabItemStyle>
  );
};

const Panel = ({ children, activeTab, tabKey, ...rest }: TabPanelProps): JSX.Element => {
  const isActive = activeTab === tabKey;
  return (
    <TabPanelStyle
      $isActive={isActive}
      hidden={!isActive}
      {...rest}
    >
      {children}
    </TabPanelStyle>
  );
};

const Group = ({
  onChange,
  children,
  alignment = 'left',
  initialActiveTab,
  forcedTab,
  ...rest
}: TabGroupProps): JSX.Element => {
  const [activeTab, setActiveTab] = useState(forcedTab || initialActiveTab);
  const onChangeItem = (key: string) => setActiveTab(key);

  useLayoutEffect(() => { if(onChange) onChange(activeTab); }, [activeTab]);
  useLayoutEffect(() => { 
    if (onChange) onChange(forcedTab);
    if(forcedTab) setActiveTab(forcedTab);
  }, [forcedTab]);

  const headers: TabHeaderType = [];
  const contents: TabContentType = [];

  // Separate the tab selections and the content inside each tab into separate arrays
  Children.forEach(children, (child) => {
    if (child) {
      const content = child.props.children;
      const key = child.props.tabKey;
      headers.push(cloneElement(child, { activeTab, onChange: onChangeItem, children: null, key }));
      contents.push({ item: content, key });
    }
  });

  return (
    <TabGroupStyle
      {...rest}
    >
      <TabHeaderStyle $alignment={alignment}>
        {headers}
      </TabHeaderStyle>

      {contents.map(({ item, key }) => (
        <Panel
          tabKey={key}
          key={key}
          activeTab={activeTab}
        >
          {item}
        </Panel>
      ))}
    </TabGroupStyle>
  );
};

const Tab = { Group, Item };

export { Tab };