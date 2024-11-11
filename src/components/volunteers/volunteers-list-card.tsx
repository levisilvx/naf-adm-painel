import { VolunteersListItem } from "./volunteers list-item";

import { 
  Card,
  CardContent,
  CardHeader, 
  CardTitle 
} from "../ui/card";
import { Separator } from "../ui/separator";

export function VolunteersListCard() {
  return (
    <div className="lg:py-10">
      <Card >
        <CardHeader>
          <CardTitle className="font-bold text-md pl-3">
            Voluntários Cadastrados
          </CardTitle>
        </CardHeader>
        <CardContent className="text-3xl text-wrap -mt-2">
          <VolunteersListItem />
          <Separator/>
          <VolunteersListItem />
          <Separator/>
          <VolunteersListItem />
          <Separator/>
          <VolunteersListItem />
          <Separator/>
          <VolunteersListItem />
          <Separator/>
          <VolunteersListItem />
          <Separator/>
          <VolunteersListItem />
        </CardContent>
      </Card>
    </div>
  );
}