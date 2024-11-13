import { Button } from "@/components/ui/button"
import { Header } from "@/components/Header";

import { getTokens } from 'next-firebase-auth-edge';
import { cookies } from 'next/headers';
import { clientConfig, serverConfig } from '@/config';
import { redirect } from 'next/navigation';

import { MostServedCard } from "@/components/dashboard/most-served-card";
import { BestAttendantMonth } from "@/components/dashboard/best-attendant-month";
import { MonthTotalServiceCard } from "@/components/dashboard/month-total-service-card";
import { TotalServicesChart } from "@/components/dashboard/total-service-chart";
import { RecentServicesCard } from "@/components/dashboard/recent-services-card";

export default async function Home() {
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
        <h1 className="text-foreground font-bold text-4xl py-5 md:py-0">Dashboard</h1>
          <Button className="font-semibold">
            Novo Atendimento
          </Button>
      </div>

      <div className="flex flex-col md:grid grid-cols-3 gap-4 pt-10">
        <MostServedCard/>
        <BestAttendantMonth/>
        <MonthTotalServiceCard/>
      </div>
      <div className="flex flex-col md:grid grid-cols-5 gap-5 mt-5 ">
        <TotalServicesChart/>
        <RecentServicesCard/>
      </div>
    </div>
  );
}
