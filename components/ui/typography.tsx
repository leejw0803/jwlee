import { cn } from '@/lib/utils';

export function TypographyH1({ className, ...props }: React.ComponentProps<'h1'>) {
  return (
    <h1
      className={cn('pt-8 pb-2 text-4xl font-extrabold tracking-tight text-balance', className)}
      {...props}
    />
  );
}

export function TypographyH2({ className, ...props }: React.ComponentProps<'h2'>) {
  return (
    <h2 className={cn('pt-6 pb-2 text-3xl font-semibold tracking-tight', className)} {...props} />
  );
}

export function TypographyH3({ className, ...props }: React.ComponentProps<'h3'>) {
  return (
    <h3 className={cn('pt-4 pb-2 text-2xl font-semibold tracking-tight', className)} {...props} />
  );
}

export function TypographyH4({ className, ...props }: React.ComponentProps<'h4'>) {
  return <h4 className={cn('py-0.5 text-xl font-semibold tracking-tight', className)} {...props} />;
}

export function TypographyP({ className, ...props }: React.ComponentProps<'p'>) {
  return <p className={cn('leading-7', className)} {...props} />;
}

export const TypographySmall = ({ className, ...props }: React.ComponentProps<'small'>) => (
  <small className={cn('text-sm font-medium leading-none', className)} {...props} />
);
