"use client"
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { DialogContent, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { createNewVolunteerAction } from "@/app/actions/create-new-volunteer";
import { useMutation } from "@tanstack/react-query";

const defaultValues = {
  attendantFirstName: "",
  attendantLastName: "",
  email:""
}

const createNewVolunteerFormSchema = z.object({
  attendantFirstName: z.string(
    {
      required_error: "Campo nome é obrigatório"
    }
  ).min(3, "O campo precisa de no mínimo 3 caracteres")
    .refine(s => !s.includes(' '), 'Informe apenas o seu nome')
    .transform(attendantFirstName => {
      return attendantFirstName[0].toLocaleUpperCase().concat(attendantFirstName.substring(1).toLowerCase())
    }),

  attendantLastName: z.string(
    {
      required_error: "Campo sobrenome é obrigatório"
    }
  ).min(3, "O campo precisa de no mínimo 3 caracteres")
    .refine(s => !s.includes(' '), 'Informe apenas o seu sobrenome')
    .transform(attendantLastName => {
      return attendantLastName[0].toLocaleUpperCase().concat(attendantLastName.substring(1).toLowerCase())
    }),

  email: z.string({ required_error : "Campo email é obrigatório"})
    .email({message: "Formato de email inválido"})
    .toLowerCase()
    .refine( email => {
      return email.endsWith("ufca.edu.br")
    }, { message: "Informe seu email institucional UFCA"} )
})

type CreateNewVolunteerFormData = z.infer<typeof createNewVolunteerFormSchema>

export function CreateVolunteerForm() {

  const { 
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<CreateNewVolunteerFormData>({
    resolver: zodResolver(createNewVolunteerFormSchema),
    defaultValues
  })

  function handleCreateNewVolunteer(data: CreateNewVolunteerFormData){
    console.log(JSON.stringify(data, null, 2))
    const createNewVolunteerPromise = createNewVolunteerAction(data)
    toast.promise(createNewVolunteerPromise, {
      loading: 'Carregando...',
      success: () => {
        return "Voluntário cadastrado com sucesso :)";
      },
      error: 'Erro ao cadastrar atendimento :(',
    });

    console.log(createNewVolunteerPromise)
    reset(defaultValues)
  }
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Cadastrar novo voluntário</DialogTitle>
      </DialogHeader>
      <div className="">
        <form onSubmit={handleSubmit(handleCreateNewVolunteer)}>
          <div className="flex flex-col items-start gap-2">
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <div className="w-full">
                <Label className="font-semibold" htmlFor="attendantFirstName">Nome</Label>
                <Input
                  id="attendantFirstName"
                  type="text"
                  className={`${errors.attendantFirstName && "border-destructive" }`}
                  {...register("attendantFirstName")}
                />
                {errors.attendantFirstName && <span className="text-destructive text-sm">{errors.attendantFirstName.message}</span>}
              </div>
              <div className="w-full">
                <Label className="font-semibold" htmlFor="attendantLastName">Sobrenome</Label>
                <Input
                  id="attendantLastName"
                  type="text"
                  className={`${errors.attendantLastName && "border-destructive" }`}
                  {...register("attendantLastName")}
                />
                {errors.attendantLastName && <span className="text-destructive text-sm">{errors.attendantLastName.message}</span>}
              </div>
            </div>
            <div className="w-full">
              <Label className="font-semibold" htmlFor="email">Email</Label>
              <Input
                id="email"
                type="text"
                className={`${errors.email && "border-destructive" }`}
                {...register("email")}
              />
              {errors.email && <span className="text-destructive text-sm">{errors.email.message}</span>}
            </div>

            <Button type="submit"className="font-semibold mt-5">  
              Adicionar voluntário
            </Button>
          </div>
        </form>
      </div>
    </DialogContent>
  );
}