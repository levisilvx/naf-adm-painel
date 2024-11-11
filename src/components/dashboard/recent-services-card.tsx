import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { RecentServicesItem } from "./recent-services-item";


export function RecentServicesCard() {
    return(
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle className="font-bold text-md pl-3">
              Atendimentos Recentes
            </CardTitle>
          </CardHeader>
          <CardContent className="text-3xl text-wrap -mt-2">
            <RecentServicesItem/>
            <Separator/>
            <RecentServicesItem/>
            <Separator/>
            <RecentServicesItem/>
            <Separator/>
            <RecentServicesItem/>
            <Separator/>
            <RecentServicesItem/>

          </CardContent>
        </Card>
    );
}