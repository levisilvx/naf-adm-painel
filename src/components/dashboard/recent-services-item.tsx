import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";

export function RecentServicesItem() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2 py-3">
      <Avatar className="">
        <AvatarImage src="https://i.pinimg.com/564x/63/40/6b/.jpg" />
        <AvatarFallback>LM</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <span className="font-bold text-base">Levi Morais</span>
        <Badge variant={'secondary'} className="font-semibold text-xs">Emissão de Boleto</Badge>
      </div>
      </div>
      <span className="text-sm text-muted-foreground"> há duas horas</span>
    </div>
  );
}