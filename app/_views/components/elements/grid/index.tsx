import { type PropsWithChildren } from 'react';
import { type GridProps } from './grid';

export function Row({ children, className }: GridProps) {
  return <div className={`flex flex-row ${className}`}>{children}</div>;
}

export function Column({ children, className }: GridProps) {
  return <div className={`flex flex-col ${className}`}>{children}</div>;
}

export function Container({ children }: PropsWithChildren) {
  return <div className="grid grid-cols-12 gap-2 w-full max-w-5xl">{children}</div>;
}
