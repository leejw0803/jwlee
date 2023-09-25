import type { ThemeColors, ThemeFonts } from '@/_views/style/constant';
import type { PropsWithChildren } from 'react';

type TypographyProps = {
  variant: ThemeFonts;
  color: ThemeColors;
} & PropsWithChildren &
  PropsWithClassName;
