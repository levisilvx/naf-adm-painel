import { getTokens } from 'next-firebase-auth-edge';
import { cookies } from 'next/headers';
import { clientConfig, serverConfig } from '@/config';
import { redirect } from 'next/navigation';

import { Button } from "@/components/ui/button"
import { Header } from "@/components/Header";

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

export default async function Atendimentos() {
  const tokens = await getTokens(cookies(), {
    apiKey: clientConfig.apiKey,
    cookieName: serverConfig.cookieName,
    cookieSignatureKeys: serverConfig.cookieSignatureKeys,
    serviceAccount: serverConfig.serviceAccount,
  });

  if (!tokens) {
    redirect("/signin");
  }
  return (
    <div className="px-8 py-6 md:px-20 md:pt-10">
      <Header/>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <h1 className="text-foreground font-bold text-4xl tracking-tight py-5 md:py-2">Atendimentos</h1>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <Button className="font-semibold">
            Novo Atendimento
          </Button>
        </div>
      </div>

      <div className="py-4">
        <OrderTableFilters/>
        <div className="border border-muted rounded-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[64px]"></TableHead>
                <TableHead className="w-[120px]">Identificador</TableHead>
                <TableHead>Contribuinte</TableHead>
                <TableHead className="w-[160px]">Atendente</TableHead>
                <TableHead className="w-[200px]">Categoria</TableHead>
                <TableHead className="w-[160px]">Realizado há</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length:10 }).map((_, i) => {
                return(
                  <ServicesTableRow key={i}/>
                )
              })}
            </TableBody>
          </Table>
        </div>
        <Pagination pageIndex={0} totalCount={105} perPage={10} />
      </div>
    </div>
  );
}
