import { Headset } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function MonthTotalServiceCard() {
    return(
        <Card >
          <CardHeader>
            <CardTitle className="flex flex-row justify-between items-center text-md font-medium">
              Atendimentos neste mês
              <Headset/>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-3xl text-wrap font-bold tracking-tight">
            323
            <p className="text-sm font-light tracking-normal pt-2"><span className="text-emerald-500 dark:text-emerald-400">+2%</span> em relação ao mês passado</p>
          </CardContent>
        </Card>
    );
}