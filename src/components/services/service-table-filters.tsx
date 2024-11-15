"use client"
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Button } from "../ui/button";
import { Search, X } from "lucide-react";
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
          <SelectItem className="px-4" value="all">Todas</SelectItem>
          <SelectItem className="px-4" value="parcelamento-simples">Parcelamento - Simples</SelectItem>
          <SelectItem className="px-4" value="parcelamento-regularize">Parcelamento - Regularize</SelectItem>
          <SelectItem className="px-4" value="formalizacao">Formalização</SelectItem>
          <SelectItem className="px-4" value="baixa">Baixa</SelectItem>
          <SelectItem className="px-4" value="boelto-mensal">Boleto Mensal</SelectItem>
          <SelectItem className="px-4" value="boleto-parcelamento">Boleto Parcelamento</SelectItem>
          <SelectItem className="px-4" value="declaracao-anual">Declaração Anual</SelectItem>
          <SelectItem className="px-4" value="alteracao-cpf">Alteração - CPF</SelectItem>
          <SelectItem className="px-4" value="alteracao-cnpj">Alteração - CNPJ</SelectItem>
          <SelectItem className="px-4" value="informacoes">Informações</SelectItem>
          <SelectItem className="px-4" value="emissao-nf">Emissão de Nota Fiscal</SelectItem>
          <SelectItem className="px-4" value="segunda-via-cpf">Segunda via do CPF</SelectItem>
          <SelectItem className="px-4" value="outros">Outros</SelectItem>
        </SelectContent>
      </Select>
      <div className="flex flex-row justify-between sm:justify-start items-start md:items-center gap-2">
        <Button type="submit" variant={"secondary"} className="h-8 px-6 sm:px-4">
          <Search />
          Filtrar resultados
        </Button>

        <Button type="button" variant={"destructive"} size={"xs"} className="h-8 px-6 sm:px-4">
          <X/>
          Remover filtros
        </Button>
      </div>
      
    </form>
  );
}