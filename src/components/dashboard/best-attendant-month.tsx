import { Medal } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function BestAttendantMonth() {
    return(
        <Card >
          <CardHeader>
            <CardTitle className="flex flex-row justify-between items-center text-md font-medium">
              Atendente do mês
              <Medal/>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-3xl text-wrap">
            <div className="flex items-center gap-2">
                <Avatar className="">
                    <AvatarImage src="" />
                    <AvatarFallback className="font-semibold ">LM</AvatarFallback>
                </Avatar>
                <span className="font-bold tracking-tight text-md">Levi Morais</span>
            </div>
            <p className="text-sm font-light tracking-normal pt-2">Totalizando <span className="font-bold">40</span> atendimentos no mês passado</p>
            
          </CardContent>
        </Card>
    );
}