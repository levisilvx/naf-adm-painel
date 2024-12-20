"use client"
import {  useState } from "react";
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

import { useForm } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { CalendarIcon, Loader } from "lucide-react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Separator } from "../ui/separator";

import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from "../ui/avatar";

import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "../ui/popover";

import {
  Select,
  SelectContent,
  SelectItem, SelectTrigger,
  SelectValue
} from "../ui/select";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { createNewServiceAction } from "@/app/actions/create-new-service";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/services/api";

export const createNewServiceSchema = z.object({
  date: z.date(
    {
      required_error: "Data do atendimento é um campo obrigatório",
    }
  ),
  cpf: z.string().optional(),
  cnpj: z.string().optional(),
  observation: z.string().optional(),
  phoneNumber: z.string().optional(),
  fullName: z.string(
    {
      required_error: "Nome completo é um campo obrigatório",
    }
  ).min(10),
  category: z.string(
    {
      required_error:"Categoria é um campo obrigatório"
    }
  ).min(3,{ message: "Categoria é um campo obrigatório"}),
  serviceType: z.string(
    {
      required_error: "Tipo de atendimento é um campo obrigatório",
    }
  ).min(3, {message: "Tipo de atendimento é um campo obrigatório"}),
  city: z.string(
    {
      required_error: "Cidade é um campo obrigatório",
    }
  ).min(3, { message: "Cidade é um campo obrigatório"}),
  attendantId: z.string(
    {
      required_error: "Atendente é um campo obrigatório",
    }
  ).min(3, { message: "Atendente é um campo obrigatório"})
})

type GetVolunteersResponse = {
  id: string,
  email: string,
  attendantFirstName: string,
  attendantLastName: string,
  initials: string
}

export const defaultValues = {
  cpf: "",
  cnpj: "",
  fullName: "",
  phoneNumber: "",
  category: "",
  serviceType: "",
  observation: "",
  city: "",
  attendantId: ""
}

type CreateNewServiceFormData = z.infer<typeof createNewServiceSchema>

export function NewServiceForm() {
  const { data: volunteers, isLoading} = useQuery({
    queryKey: ["GetVolunteers"],
    queryFn: async () => {
      const response = await api.get('/get-volunteers')
      console.log(response.data.responseArray)
      return response.data.responseArray
    }
  })
  
  const form = useForm<CreateNewServiceFormData>({
    resolver: zodResolver(createNewServiceSchema),
    defaultValues
  })
  
  const [output, setOutput] = useState("")

  function clearNewServiceFormFields(){
    form.reset(defaultValues)
  }

  function handleCreateNewService(data: z.infer<typeof createNewServiceSchema>) {
    setOutput(JSON.stringify(data, null, 2))
    const createNewServicePromise = createNewServiceAction(data)
    toast.promise(createNewServicePromise, {
      loading: 'Carregando...',
      success: () => {
        return "Atendimento cadastrado com sucesso :)";
      },
      error: 'Erro ao cadastrar atendimento :(',
    });
    
   clearNewServiceFormFields()
  }

  if (isLoading){
    return (
      <div className='h-auto bg-background flex justify-center items-center'>
        <div className='animate-pulse'>
          <Loader className='h-10 w-10 animate-spin'/>
        </div>
      </div>
    )
  }

  return (
    <Form {...form}>
      <form 
        onSubmit={form.handleSubmit(handleCreateNewService)}
      >
        <CardContent className="flex flex-col items-start gap-4 sm:px-20 md:px-40">
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="sm:flex flex-col">
                <FormLabel className="font-semibold">Data do atendimento*</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "sm:px-5 w-full sm:w-[280px] justify-center md:justify-start  text-left font-normal ",
                          !field.value && "text-muted-foreground",
                          field.value && "bg-primary text-background font-semibold hover:bg-primary/90 hover:text-background"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {field.value ? (
                          format(field.value, "PPP", { locale: ptBR })
                        ) : (
                          <span>Selecione a data do atendimento</span>
                        )}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      toDate={new Date}
                      locale={ptBR}
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-col md:grid grid-cols-2 gap-4 w-full">
            <FormField
              control={form.control}
              name="cpf"
              render={({ field }) => (
                <FormItem className="space-y-0">
                  <FormLabel className="font-semibold">CPF</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="123.456.678-99"
                      pattern="(\d{3}\.?\d{3}\.?\d{3}-?\d{2})"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cnpj"
              render={({ field }) => (
                <FormItem className="space-y-0">
                  <FormLabel className="font-semibold">CNPJ</FormLabel>
                  <FormControl>
                  <Input
                    type="text"
                    placeholder="12.345.678/0001-99"
                    pattern="(\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2})"
                    {...field}
                  />
                  </FormControl>
                  <FormMessage  />
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-col md:grid grid-cols-2 gap-4 w-full">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem className="space-y-0">
                  <FormLabel className="font-semibold">Nome Completo*</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      required
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem className="space-y-0">
                  <FormLabel className="font-semibold">Telefone</FormLabel>
                  <FormControl>
                  <Input
                    type="tel"
                    placeholder="(88)91234-5678"
                    {...field}
                  />
                  </FormControl>
                  <FormMessage  />
                </FormItem>
              )}
            />
          </div>


          <div className="flex flex-col md:grid grid-cols-2 gap-4 w-full">
            <div>
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem className="space-y-0">
                    <FormLabel className="font-semibold">Categoria*</FormLabel>
                    <Select 
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue  placeholder="Selecione uma categoria" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Parcelamento - Simples">Parcelamento - Simples</SelectItem>
                        <SelectItem value="Parcelamento - Regularize">Parcelamento - Regularize</SelectItem>
                        <SelectItem value="Formalização">Formalização</SelectItem>
                        <SelectItem value="Baixa">Baixa</SelectItem>
                        <SelectItem value="Boleto Mensal">Boleto Mensal</SelectItem>
                        <SelectItem value="Boleto Parcelamento">Boleto Parcelamento</SelectItem>
                        <SelectItem value="Declaração Anual">Declaração Anual</SelectItem>
                        <SelectItem value="Alteração - CPF">Alteração - CPF</SelectItem>
                        <SelectItem value="Alteração - CNPJ">Alteração - CNPJ</SelectItem>
                        <SelectItem value="Informações">Informações</SelectItem>
                        <SelectItem value="Emissão de Nota Fiscal">Emissão de Nota Fiscal</SelectItem>
                        <SelectItem value="Segunda via do CPF">Segunda via do CPF</SelectItem>
                        <SelectItem value="Outros">Outros</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name="serviceType"
                render={({ field }) => (
                  <FormItem className="space-y-0">
                    <FormLabel className="font-semibold">Tipo de atendimento*</FormLabel>
                    <Select 
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione um tipo de atendimento" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Presencial">Presencial</SelectItem>
                        <SelectItem value="Remoto">Remoto</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="flex flex-col md:grid grid-cols-2 gap-4 w-full">
            <div className="w-full ">
              <FormField
                control={form.control}
                name="observation"
                render={({ field }) => (
                  <FormItem className="space-y-0">
                    <FormLabel className="font-semibold" >Observação</FormLabel>
                    <FormControl>
                      <Textarea
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-full">
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem className="space-y-0">
                    <FormLabel className="font-semibold">Cidade*</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        required
                        {...field}
                      />
                    </FormControl>
                    <FormMessage  />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div>
            <FormField
                control={form.control}
                name="attendantId"
                render={({ field }) => (
                  <FormItem className="space-y-0">
                    <FormLabel className="font-semibold">Atendente*</FormLabel>
                    <Select 
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-[220px]">
                          <SelectValue placeholder="Selecione o(a) atendente" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {volunteers.map((volunteer: GetVolunteersResponse) => {
                          return(
                            <div key={volunteer.id}>
                              <SelectItem value={volunteer.id}>
                                <div className="flex items-center gap-2">
                                  <Avatar className="h-6 w-6">
                                    <AvatarImage src="https://encrypted-tbn0.gst" />
                                    <AvatarFallback className="text-[10px] flex items-center justify-center">{volunteer.initials}</AvatarFallback>
                                  </Avatar>
                                  <span className="font-bold tracking-tight text-md">{volunteer.attendantFirstName} {volunteer.attendantLastName}</span>
                                </div>
                              </SelectItem>
                            </div>
                          )
                        })}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
          </div>
          <Separator className="my-4" />
          <Button disabled={form.formState.isSubmitting} type="submit" className="font-semibold w-full md:w-fit">
            Cadastrar atendimento
          </Button>
        </CardContent>
      </form>
    </Form>
  );
}