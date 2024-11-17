import { useAuth } from '@/context/auth-context';
import { useRouter } from 'next/navigation';

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { useState } from 'react';


const signInFormSchema = z.object({
  email: z.string(),
  password: z.string()
})

type signInFormData = z.infer<typeof signInFormSchema>

export function SingInForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const { logIn } = useAuth();

  const { 
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<signInFormData>({
    resolver: zodResolver(signInFormSchema)
  })

  const handleSignIn = async (data: signInFormData) => {
    setError("");
    try {
      await logIn(data.email, data.password);

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
        <div>
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