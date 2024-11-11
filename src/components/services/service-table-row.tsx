import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { TableCell, TableRow } from "../ui/table";
import { Badge } from "../ui/badge";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "../ui/dialog";

export function ServicesTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant={"outline"} size={"xs"}>
              <Search className="h-2 w-2" />
              <span className="sr-only">Detalhes do Atendimento</span>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Detalhes do Atendimento</DialogTitle>
            Detalhes do Atendimento
          </DialogContent>
        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-muted-foreground tracking-wide">h2d54x2f</TableCell>
      <TableCell>Maria do Rosário Pereira Pimentel</TableCell>
      <TableCell className="font-semibold">Levi Morais</TableCell>
      <TableCell>
        <Badge variant={"outline"} className="bg-transparent sm:bg-background hover:bg-transparent sm:hover:bg-muted/80">Emissão de Boleto</Badge>
      </TableCell>
      <TableCell className="text-muted-foreground">2 horas</TableCell>
    </TableRow>
  );
}