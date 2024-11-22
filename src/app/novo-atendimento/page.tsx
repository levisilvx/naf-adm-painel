"use client"
import { Header } from '@/components/header';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { NewServiceForm } from '@/components/new-service/new-service-form';
import RouteProtector from '@/components/route-protector';

 function NovoAtendimento() {
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

export default RouteProtector(NovoAtendimento)
