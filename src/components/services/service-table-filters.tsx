import { VscCircleLargeFilled } from "react-icons/vsc";

import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Button } from "../ui/button";
import { Search, X } from "lucide-react";

export function OrderTableFilters() {
  return (
    <form className="flex flex-col md:flex-row md:items-center gap-2 py-4">
      <span className="font-semibold">Filtros:</span>
      <Input placeholder="Nome do Contribuinte" className="h-8 md:w-[280px]" />
      <Input placeholder="Id do atendimento" className="h-8 md:w-[220px]" />
      <Select defaultValue="all">
        <SelectTrigger className="h-8 w-full md:w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todas</SelectItem>
          <SelectItem value="category1" className="flex items-center gap-2">
            <span>Categoria 1</span>
          </SelectItem>
          <SelectItem value="category2">Categoria 2</SelectItem>
          <SelectItem value="category3">Categoria 3</SelectItem>
          <SelectItem value="category4">Categoria 4</SelectItem>
          <SelectItem value="category5">Categoria 5</SelectItem>
          <SelectItem value="category6">Categoria 6</SelectItem>
          <SelectItem value="category7">Categoria 7</SelectItem>
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