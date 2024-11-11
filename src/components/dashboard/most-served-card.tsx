import {  MessageCircleQuestion } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function MostServedCard() {
    return(
        <Card >
          <CardHeader>
            <CardTitle className="flex flex-row justify-between items-center text-md font-medium">
              Atendimento mais realizado
              <MessageCircleQuestion/>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-3xl text-wrap font-bold tracking-tight">
            Emissão de Boleto
            <p className="text-sm font-light tracking-normal pt-2"><span className="text-emerald-500 dark:text-emerald-400">+2%</span> em relação ao mês passado</p>
          </CardContent>
        </Card>
    );
}