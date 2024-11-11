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
                    <AvatarImage src="https://i.pinimg.com/564x/63/40/6b/63406b717cb39ae5b571be878173d198.jpg" />
                    <AvatarFallback>SM</AvatarFallback>
                </Avatar>
                <span className="font-bold tracking-tight text-md">Levi Morais</span>
            </div>
            <p className="text-sm font-light tracking-normal pt-2">Totalizando <span className="font-bold">40</span> atendimentos no mês passado</p>
            
          </CardContent>
        </Card>
    );
}