import { type ButtonSize, type ButtonProps, type ButtonVariant } from './button';

function Button({ variant, buttonSize, children, ...props }: ButtonProps) {
  const variantClasses: Record<ButtonVariant, string> = {
    primary: 'bg-mint100 text-mint600 border-0',
    secondary: 'bg-violet500 text-grey50 border-0',
    tertiary: 'bg-white text-violet400 border border-solid border-violet400',
  };

  const sizeClasses: Record<ButtonSize, string> = {
    xsmall: 'p-1 text-[0.625rem] rounded',
    small: 'p-2 text-[0.8rem] rounded',
    medium: 'p-3 text-[1rem] rounded-md',
    large: 'p-3 text-[1.25rem] rounded-lg',
    xlarge: 'p-4 text-[1.5rem] rounded-xl',
  };

  return (
    <button
      className={`${sizeClasses[buttonSize || 'medium']} ${variantClasses[variant || 'primary']} ${
        props.className
      }`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
