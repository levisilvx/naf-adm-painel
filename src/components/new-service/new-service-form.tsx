"use client"
import { useState } from "react";
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

import { cn } from "@/lib/utils";

import { CardContent } from "../ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { CalendarIcon } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";


export function NewServiceForm() {
  const [date, setDate] = useState<Date>()

  return (
    <form>
      <CardContent className="flex flex-col items-start gap-4 sm:px-20">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "sm:px-5 w-full sm:w-fit justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR } ) : <span>Selecione a data do atendimento</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              locale={ptBR}
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        <div className="flex flex-col sm:grid grid-cols-2 gap-4 w-full">
          <div>
            <Label className="font-semibold" htmlFor="cpf">CPF</Label>
            <Input 
              id="cpf"
              type="text"
              placeholder="123.456.678-99"
              pattern="(\d{3}\.?\d{3}\.?\d{3}-?\d{2})"
            />
          </div>
          <div>
            <Label className="font-semibold" htmlFor="cnpj">CNPJ</Label>
            <Input 
              id="cnpj"
              type="text"
              placeholder="12.345.678/0001-99"
              pattern="(\d{3}\.?\d{3}\.?\d{3}-?\d{2})"
            />
          </div>
        </div>
        <div className="w-full sm:w-fit">
          <Label className="font-semibold" htmlFor="full-name">Nome completo</Label>
          <Input 
            id="full-name"
            type="text"
          />
        </div>
        <div className="w-full sm:w-fit">
          <Label className="font-semibold" htmlFor="phone-number">Telefone</Label>
          <Input 
            id="phone-number"
            type="tel"
            placeholder="(88) 99912-3456"
          />
        </div>
        <div>
          <Label className="font-semibold">Categoria</Label>
          <Select >
            <SelectTrigger className="h-10 w-[300px]">
              <SelectValue placeholder="Selecione a categoria"/>
            </SelectTrigger>
            <SelectContent className="">
              <SelectItem value="parcelamento-simples">Parcelamento - Simples</SelectItem>
              <SelectItem value="parcelamento-regularize">Parcelamento - Regularize</SelectItem>
              <SelectItem value="formalizacao">Formalização</SelectItem>
              <SelectItem value="baixa">baixa</SelectItem>
              <SelectItem value="boelto-mensal">Boleto Mensal</SelectItem>
              <SelectItem value="boleto-parcelamento">Boleto Parcelamento</SelectItem>
              <SelectItem value="declaracao-anual">Declaração Anual</SelectItem>
              <SelectItem value="alteracao-cpf">Alteração - CPF</SelectItem>
              <SelectItem value="alteracao-cnpj">Alteração - CNPJ</SelectItem>
              <SelectItem value="informacoes">Informações</SelectItem>
              <SelectItem value="emissao-nf">Emissão de Nota Fiscal</SelectItem>
              <SelectItem value="segunda-via-cpf">Segunda via do CPF</SelectItem>
              <SelectItem value="outros">Outros</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="w-full sm:w-fit">
          <Label className="font-semibold" htmlFor="city">Cidade</Label>
          <Input 
            id="city"
            type="text"
          />
        </div>
        
        <div>
        <Label className="font-semibold">Tipo de atendimento</Label>
          <Select>
            <SelectTrigger className="h-10 w-[300px]">
              <SelectValue placeholder="Selecione o tipo de atendimento"/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="presencial">Presencial</SelectItem>
              <SelectItem value="remoto">Remoto</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="w-full sm:w-fit">
          <Label className="font-semibold" htmlFor="observations">Observação</Label>
          <Textarea className="resize-none" id="observations"/>
        </div>

        <div>
          <Label className="font-semibold">Atendente</Label>
          <Select>
            <SelectTrigger className="h-10 w-[300px]">
              <SelectValue placeholder="Selecione o atendente"/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="levi">
                <div className="flex items-center gap-2">
                  <Avatar className="h-5 w-5">
                      <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Jf7L1uLyKL81OhzN2fk-x0OSKXABNLEZYg&s" />
                      <AvatarFallback>LM</AvatarFallback>
                  </Avatar>
                  <span className="font-bold tracking-tight text-md">Levi Morais</span>
                </div>
              </SelectItem>
              <SelectItem value="sara">
                <div className="flex items-center gap-2">
                  <Avatar className="h-5 w-5">
                      <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtbTQRrYgXgiE6Icbs3Gzdq5T8CEQ1lhQXug&s" />
                      <AvatarFallback>SM</AvatarFallback>
                  </Avatar>
                  <span className="font-bold tracking-tight text-md">Sara Morais</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>

        </div>
      </CardContent>
    </form>
  );
}