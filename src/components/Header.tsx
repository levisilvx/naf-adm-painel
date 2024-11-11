"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation'

import { ModeToggle } from "./ui/mode-toggle";
import { AlignJustify } from 'lucide-react';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';


export function Header() {
  const currentPath = usePathname();

  return (
    <div>
      <div className='sm:hidden flex flex-row justify-between items-center sticky top-0'>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant={'ghost'} className='m-0 p-0'>
              <AlignJustify/>
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
            </nav>
          </SheetContent>
        </Sheet>
        <ModeToggle/>
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
        <ModeToggle />
      </header>
    </div>
  );
}