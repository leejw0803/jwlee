import { TEXT_COLORS, TEXT_VARIANT } from '@/_views/style/constant';
import { type TypographyProps } from './typography';

function Typography({ variant, color, className, children }: TypographyProps) {
  const fontClass = TEXT_VARIANT[variant];
  const colorClass = TEXT_COLORS[color];

  return <p className={`${fontClass} ${colorClass} ${className}`}>{children}</p>;
}

export default Typography;
