"use client"
import { useQuery } from '@tanstack/react-query';

import { api } from '@/services/api';
import RouteProtector from '@/components/route-protector';
import Link from 'next/link';

import { Loader } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header";

import { 
  Table, 
  TableBody, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";

import { ServicesTableRow } from "@/components/services/service-table-row";
import { OrderTableFilters } from "@/components/services/service-table-filters";
import { Pagination } from "@/components/services/pagination";

type GetServicesResponse = {
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

function Atendimentos() {
  const { data: services, isLoading} = useQuery({
    queryKey: ["GetServices"],
    queryFn: async () => {
      const response = await api.get('/get-services')
      console.log(response.data.responseArray)
      return response.data.responseArray
    }
  })

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
    <div className="px-8 py-6 md:px-20 md:pt-10">
      <Header/>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <h1 className="text-foreground font-bold text-4xl tracking-tight py-5 md:py-2">Atendimentos</h1>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
        <Link href={"/novo-atendimento"}>
          <Button className="font-semibold">
            Novo Atendimento
          </Button>
        </Link>
        </div>
      </div>

      <div className="py-4">
        <OrderTableFilters/>
        <div className="border border-muted rounded-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]"></TableHead>
                <TableHead>Contribuinte</TableHead>
                <TableHead className="w-[200px]">Atendente</TableHead>
                <TableHead className="w-[230px]">Categoria</TableHead>
                <TableHead className="w-[180px]">Realizado há</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {services.map((service: GetServicesResponse) => {
                return <ServicesTableRow key={service.id} service={service}/>
              })}
            </TableBody>
          </Table>
        </div>
        <Pagination pageIndex={0} totalCount={105} perPage={10} />
      </div>
    </div>
  );
}

export default RouteProtector(Atendimentos) 
