"use client";

import Link from 'next/link';
import { BusFront, CircleUser, LayoutDashboard, History, LogOut, LogIn, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';

// This is a mock. In a real app, you'd get this from a context or auth hook.
const isAuthenticated = true; 

export function Header() {
  const userAvatar = PlaceHolderImages.find((img) => img.id === 'user-avatar-1');

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <BusFront className="h-6 w-6 text-primary" />
          <span className="font-bold sm:inline-block font-headline text-lg">BusTicketGo</span>
        </Link>
        <nav className="flex-1 items-center space-x-6 text-sm font-medium">
          {isAuthenticated && (
            <Link href="/profile/orders" className="text-foreground/60 transition-colors hover:text-foreground/80">
              Riwayat Pesanan
            </Link>
          )}
        </nav>
        <div className="flex items-center gap-4">
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary" size="icon" className="rounded-full">
                  <Avatar>
                    {userAvatar && <AvatarImage src={userAvatar.imageUrl} alt="User avatar" data-ai-hint={userAvatar.imageHint} />}
                    <AvatarFallback>
                      <CircleUser />
                    </AvatarFallback>
                  </Avatar>
                  <span className="sr-only">Buka menu pengguna</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Akun Saya</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/profile/orders"><History className="mr-2 h-4 w-4" />Riwayat Pesanan</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/admin"><LayoutDashboard className="mr-2 h-4 w-4" />Admin</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  Keluar
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="ghost" asChild>
                <Link href="/login"><LogIn className="mr-2 h-4 w-4" />Masuk</Link>
              </Button>
              <Button asChild>
                <Link href="/register"><UserPlus className="mr-2 h-4 w-4" />Daftar</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
