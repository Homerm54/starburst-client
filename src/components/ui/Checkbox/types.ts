type NativeProps = Omit<React.ComponentPropsWithoutRef<'input'>, 'size' | 'onChange'>;

interface CheckBoxProps extends NativeProps {
  label?: React.ReactNode;
  onChange?: (checked: boolean) => unknown;
}

export type { CheckBoxProps };
