"use client"
import { usePathname } from 'next/navigation'
import { useAuth } from '@/context/auth-context';

import Link from 'next/link';
import { AlignJustify, LogOut } from 'lucide-react';

import { Button } from './ui/button';
import { ModeToggle } from "./ui/mode-toggle";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from './ui/sheet';

export function Header() {
  const currentPath = usePathname();
  const { logOut } = useAuth();

  return (
    <div>
      <div className='sm:hidden flex flex-row justify-between items-center sticky top-0'>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant={'ghost'} className='m-0 p-0'>
              <AlignJustify />
            </Button>
          </SheetTrigger>
          <SheetContent side={'left'} className='w-[300px]'>
            <div className='hidden'>
              <SheetTitle>
                <span>Abrir / Fechar menu</span>
              </SheetTitle>
            </div>
            <nav className="flex flex-col gap-5 text-base font-medium pt-10">
              <Link href="/" className={currentPath === "/" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}>
                Início
              </Link>
              <Link href="/voluntarios" className={currentPath === "/voluntarios" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}>
                Voluntários
              </Link>
              <Link href="/atendimentos" className={currentPath === "/atendimentos" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}>
                Atendimentos
              </Link>
              <Link href="/novo-atendimento" className={currentPath === "/novo-atendimento" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}>
                Novo Atendimento
              </Link>
              <div>
                <Button
                  type="button"
                  variant={"ghost"}
                  className='text-destructive p-0 m-0'
                  onClick={logOut}
                > 
                  Sair
                  <LogOut/>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
        <ModeToggle />

      </div>
      <header className="hidden sm:flex flex-row justify-between items-center pb-10">
        <nav className="flex flex-row gap-10 text-lg font-medium">
          <Link href="/" className={currentPath === "/" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}>
            Início
          </Link>
          <Link href="/voluntarios" className={currentPath === "/voluntarios" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}>
            Voluntários
          </Link>
          <Link href="/atendimentos" className={currentPath === "/atendimentos" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}>
            Atendimentos
          </Link>
        </nav>
        <div className='flex items-center gap-2'>
          <ModeToggle />
          <div>
            <Button
              type="button"
              variant={"destructive"}
              onClick={logOut}
            >
              <LogOut/>
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
}