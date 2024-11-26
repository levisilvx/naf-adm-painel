"use client"
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Button } from "../ui/button";
import { Ban, Search } from "lucide-react";
import { useState } from "react";

export function OrderTableFilters() {
  const [category, setCategory] = useState("")
  return (
    <form className="flex flex-col md:flex-row md:items-center gap-2 py-4">
      <span className="font-semibold">Filtros:</span>
      <Input placeholder="Nome do Contribuinte" className="h-8 md:w-[280px]" />
      <Input placeholder="Nome do Atendente" className="h-8 md:w-[220px]" />
      <Select onValueChange={setCategory}>
        <SelectTrigger className="h-8 w-full">
          <SelectValue placeholder={"Categoria"}/>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todas</SelectItem>
          <SelectItem value="parcelamento-simples">Parcelamento - Simples</SelectItem>
          <SelectItem value="parcelamento-regularize">Parcelamento - Regularize</SelectItem>
          <SelectItem value="formalizacao">Formalização</SelectItem>
          <SelectItem value="baixa">Baixa</SelectItem>
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
      <div className="flex flex-row justify-between sm:justify-start items-start md:items-center gap-2">
        <Button type="submit" variant={"secondary"} className="h-8 px-6 sm:px-4">
          <Search />
          Filtrar resultados
        </Button>

        <Button type="button" variant={"destructive"} size={"xs"} className="h-8 px-6 sm:px-4">
          <Ban/>
          Remover filtros
        </Button>
      </div>
      
    </form>
  );
}