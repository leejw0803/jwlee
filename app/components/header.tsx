'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/ui/theme-toggle-button';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const navItems = [{ name: 'Home', href: '/home' }];

export function Header() {
  const { theme, systemTheme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // 서버/클라이언트 mismatch 방지

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const logoSrc = currentTheme === 'dark' ? '/img--logo.png' : '/img--logo-light.png';

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full h-14 border-border bg-background/80 backdrop-blur-md px-6 gap-10">
      <Link href="/home" className="text-lg font-semibold">
        <Image src={logoSrc} alt="jwlee.in logo" width={120} height={32} priority />
      </Link>

      <nav className="flex items-start w-full space-x-6">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'text-sm font-medium transition-colors hover:text-foreground/80',
              pathname === item.href ? 'text-primary' : 'text-muted-foreground'
            )}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-2">
        <ThemeToggle />
      </div>
    </header>
  );
}
