import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/services/firebase';
import { useAuth } from '@/context/auth-context';

import { useForm } from "react-hook-form";
import { z } from "zod";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { useState } from 'react';

const signInForm = z.object({
  email: z.string(),
  password: z.string()
})

type signInForm = z.infer<typeof signInForm>

export function SingInForm() {
  const user = useAuth()
  const router = useRouter();
  const [error, setError] = useState("");

  const { register, handleSubmit, formState: { isSubmitting } } = useForm<signInForm>()

  const handleSignIn = async (data: signInForm) => {
    setError("");
    try {

    const credential = await signInWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    const idToken = await credential.user.getIdToken();
 
    // Sets authenticated browser cookies
    await fetch('/api/login', {
      headers: {
        Authorization: `Bearer ${idToken}`
      }
    });
 
    console.log("console do signin form ",credential.user)
    console.log("console do useAuth ",user)

    router.push("/");
  } catch (err) {
    setError((err as Error).message)
  }
  };

  return (
    <form
      onSubmit={handleSubmit(handleSignIn)}
      className="flex flex-col gap-4 w-full px-8 sm:px-14 py-8"
    >
      <Label className="font-semibold" htmlFor="email">Seu usuário</Label>
      <Input 
        id="email"
        type="email"
        required
        className={`${error != "" ? "border border-destructive" : ''}`}
        {...register('email')} 
      />
      <Label className="font-semibold" htmlFor="password">Sua senha</Label>
      <Input 
        id="password"
        type="password"
        required
        className={`${error != "" ? "border border-destructive" : ''}`}
        {...register('password')} 
      />
      {error && (
        <div className=''>
          <span className='text-destructive font-bold'>Credenciais inválidas*</span>
        </div>
      )}
      <Button
        disabled={isSubmitting}
        className="w-full font-bold" type="submit"
      >
        Entrar
      </Button>
    </form>
  );
}