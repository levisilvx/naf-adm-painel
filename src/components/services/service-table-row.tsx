import { formatDistanceToNow, intlFormat} from "date-fns";
import { ptBR } from "date-fns/locale";

import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { TableCell, TableRow } from "../ui/table";
import { Badge } from "../ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Separator } from "../ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";


type ServicesTableRowProps = {
  service: {
    id: string,
    date: string,
    cpf: string,
    cnpj: string,
    observation: string,
    phoneNumber: string,
    fullName: string,
    category: string,
    serviceType: string,
    city: string,
    attendantId: string,
    attendantFirstName: string,
    attendantLastName: string,
    attendantEmail: string,
    attendantInitials: string,
  }
}

export function ServicesTableRow({ service }: ServicesTableRowProps) {
  console.log("service.date = ", service)
  console.log(new Date(service.date))
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
          <DialogContent className=" text-sm">
            <DialogTitle className="">Detalhes do atendimento<span></span></DialogTitle>
            <DialogDescription className="-mt-3 ">Id: <span className="font-mono tracking-wide">{service.id}</span></DialogDescription>
            <div className="flex justify-between items-center">
              <span className="font-semibold">Contribuinte</span>
              <span>{service.fullName}</span>
            </div>
            <Separator/>
            <div className="flex justify-between items-center">
              <span className="font-semibold">CPF</span>
              <span>{service.cpf}</span>
            </div>
            <Separator/>
            <div className="flex justify-between items-center">
              <span className="font-semibold">CNPJ</span>
              <span>{service.cnpj}</span>
            </div>
            <Separator/>
            <div className="flex justify-between items-center">
              <span className="font-semibold">Categoria</span>
              <span>{service.category}</span>
            </div>
            <Separator/>
            <div className="flex justify-between items-center">
              <span className="font-semibold">Telefone</span>
              <span>{service.phoneNumber}</span>
            </div>
            <Separator/>
            <div className="flex justify-between items-center">
              <span className="font-semibold">Tipo de atendimento</span>
              <span>{service.serviceType}</span>
            </div>
            <Separator/>
            <div className="flex justify-between items-center">
              <span className="font-semibold">Cidade</span>
              <span>{service.city}</span>
            </div>
            <Separator/>
            {service.observation && (
                <div className="flex flex-col justify-start items-start">
                  <span className="font-semibold">Observações</span>
                  <div className="border border-muted rounded-md w-full h-fit p-2 mt-1">
                    <span>{service.observation}</span>
                  </div>
                </div>
            )}
            {service.observation && (<Separator/>)}
            <div className="flex justify-between items-center">
              <span className="font-semibold">Realizado em</span>
              <span>{intlFormat(service.date)}</span>
            </div>
            <Separator/>
            <div className="flex justify-between items-center">
              <span className="font-semibold">Realizado por</span>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="" />
                  <AvatarFallback className="text-xs">{service.attendantInitials}</AvatarFallback>
                </Avatar>
                <span className="font-semibold">{service.attendantFirstName} {service.attendantLastName}</span>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </TableCell>
      <TableCell>{service.fullName}</TableCell>
      <TableCell className="font-semibold">{service.attendantFirstName} {service.attendantLastName}</TableCell>
      <TableCell>
        <Badge variant={"outline"} className="bg-transparent sm:bg-background hover:bg-transparent sm:hover:bg-muted/80">{service.category}</Badge>
      </TableCell>
      <TableCell className="text-muted-foreground">
        {formatDistanceToNow(service.date, {
          locale: ptBR,
        })} atrás
      </TableCell>
    </TableRow>
  );
}