'use client'
import { redirect } from "next/navigation";
import { isRedirectError, permanentRedirect } from 'next/dist/client/components/redirect'

import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ModeToggle } from "@/components/ui/mode-toggle";

const signInForm = z.object({
  user: z.string(),
  password: z.string()
})

type signInForm = z.infer<typeof signInForm>

export default function SignIn() {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<signInForm>()

  const handleSignIn = async (data : signInForm) => {
    console.log(data)

    try {
      redirect("/") // this will throw error
      
    } catch(error) {
      if (isRedirectError(error)) { // Redirect error handle here
        throw error // You have to throw the redirect error
      } else {
        console.log('other error')
      }
    }
    
  }
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
          <ModeToggle/>
        </div>
        <h1 className="font-bold text-2xl sm:text-3xl">
          Acessar o Painel
        </h1>
        <form 
          onSubmit={handleSubmit(handleSignIn)}
          className="flex flex-col gap-4 w-full px-8 sm:px-14 py-8"
        >
            <Label className="font-semibold" htmlFor="user">Seu usuário</Label>
            <Input id="user" type="text" {...register('user')}/>
            <Label className="font-semibold" htmlFor="password">Sua senha</Label>
            <Input id="password" type="password" {...register('password')}/>
            <Button 
              disabled={isSubmitting} 
              className="w-full font-bold" type="submit"
            >
              Entrar
            </Button>
        </form>
        <p className="font-light text-muted-foreground text-sm sm:px-10 py-3 text-center">
          Esta página é destinada apenas para
          <span className="font-bold"> voluntários devidamente inscritos </span>
          no programa
        </p>
      </main>
    </div>
  )
}