import { getTokens } from 'next-firebase-auth-edge';
import { cookies } from 'next/headers';
import { clientConfig, serverConfig } from '@/config';
import { redirect } from 'next/navigation';
 
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header";

import { VolunteersListCard } from "@/components/volunteers/volunteers-list-card";
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { CreateVolunteerForm } from '@/components/new-volunteer/create-volunteer-dialog';

export default async function Voluntarios() {
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
    <div className="px-8 py-6 md:px-20 md:pt-10 lg:px-40">
      <Header/>
      <Dialog>
        <div className="">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <h1 className="text-foreground font-bold text-4xl tracking-tight py-5 md:py-2">Voluntários</h1>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <DialogTrigger asChild>
              <Button className="font-semibold">
                Cadastrar Voluntário
              </Button>
              </DialogTrigger>
              <CreateVolunteerForm/>
            </div>
          </div>
          <div className="py-5 md:py-0">
            <VolunteersListCard/>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
