import { type HTMLAttributes, type PropsWithChildren } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
type ButtonSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  buttonSize?: ButtonSize;
} & PropsWithClassName &
  PropsWithChildren;
