'use client'
import { SingInForm } from "@/components/signin/signin-form";
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function SignIn() {
  return (
    <div className="min-h-screen flex md:grid grid-cols-2 font-sans">
      <aside className="hidden md:flex flex-col justify-between p-20 h-full border-r border-foreground/5 bg-muted text-muted-foreground">
        <div>
          logo
          <span className="text-foreground font-bold"> - NAF CCSA </span>
        </div>
        <footer className="text-sm">
          NAF CCSA - Um programa de apoio lorem ipsum e essas coisas de pipipipopopo
        </footer>
      </aside>
      <main className="p-8 flex flex-col justify-center items-center">
        <div className="absolute top-10 sm:top-20 sm:right-24 right-10">
          <ModeToggle />
        </div>
        <h1 className="font-bold text-2xl sm:text-3xl">
          Acessar o Painel
        </h1>
        <SingInForm />
        <p className="font-light text-muted-foreground text-sm sm:px-10 py-3 text-center">
          Esta página é destinada apenas para
          <span className="font-bold"> voluntários devidamente inscritos </span>
          no programa
        </p>
      </main>
    </div>
  )
}