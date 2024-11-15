import { getTokens } from 'next-firebase-auth-edge';
import { cookies } from 'next/headers';
import { clientConfig, serverConfig } from '@/config';
import { redirect } from 'next/navigation';
import { Header } from '@/components/header';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { NewServiceForm } from '@/components/new-service/new-service-form';

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
      <Card className='mt-10'>
        <CardHeader>
            <CardTitle className='text-foreground font-bold text-4xl py-5 md:pt-10 pb-5 sm:px-14 md:px-[136px]'>Novo atendimento</CardTitle>
        </CardHeader>
        <NewServiceForm/>
      </Card>
    </div>
  );
}
