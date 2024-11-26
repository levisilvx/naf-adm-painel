"use client"
import RouteProtector from "@/components/route-protector"

import Link from "next/link";

import { Button } from "@/components/ui/button"
import { Header } from "@/components/header";
import { MostServedCard } from "@/components/dashboard/most-served-card";
import { BestAttendantMonth } from "@/components/dashboard/best-attendant-month";
import { MonthTotalServiceCard } from "@/components/dashboard/month-total-service-card";
import { TotalServicesChart } from "@/components/dashboard/total-service-chart";
import { RecentServicesCard } from "@/components/dashboard/recent-services-card";

function Home() {
  const data = new Date("2024-11-14T03:00:00.000Z")
  const hoje = new Date
  const hour = hoje.getHours()
  const minutes = hoje.getMinutes()
  const seconds = hoje.getSeconds()
  const minde = data.setHours(hour, minutes, seconds)
  const dois = new Date(minde).toISOString()
  console.log(dois)
  return (
    <div className="px-8 py-6 md:px-20 md:pt-10">
      <Header/>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <h1 className="text-foreground font-bold text-4xl py-5 md:py-0">NAF - UFCA</h1>
          <Link href={"/novo-atendimento"}>
            <Button className="font-semibold">
              Novo Atendimento
            </Button>
          </Link>
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

export default RouteProtector(Home)
