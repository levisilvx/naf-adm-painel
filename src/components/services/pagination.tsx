import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { Button } from "../ui/button";

export interface PaginationProps {
  pageIndex: number,
  totalCount: number,
  perPage: number,
}

export function Pagination({ pageIndex, totalCount, perPage }: PaginationProps) {
  const pages = Math.ceil(totalCount / perPage) || 1

  return (
    <div className="flex items-center justify-between gap-2 py-3">
      <span>
        Total de {totalCount} item(s)
      </span>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6">
        <span className="text-sm text-muted-foreground font-medium">Página {pageIndex + 1} de {pages}</span>
        <div className="flex items-center gap-1">
          <Button variant={"outline"} className="h-8 w-8 p-0 m-0">
            <ChevronsLeft/>
            <span className="sr-only">Primeira Página</span>
          </Button>
          <Button variant={"outline"} className="h-8 w-8 p-0 m-0">
            <ChevronLeft/>
            <span className="sr-only">Página Anterior</span>
          </Button>
          <Button variant={"outline"} className="h-8 w-8 p-0 m-0">
            <ChevronRight/>
            <span className="sr-only">Próxima Página</span>
          </Button>
          <Button variant={"outline"} className="h-8 w-8 p-0 m-0">
            <ChevronsRight/>
            <span className="sr-only">Última Página</span>
          </Button>
        </div>
      </div>
    </div>
  );

}