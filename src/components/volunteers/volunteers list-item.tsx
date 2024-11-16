import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

import { VolunteerProfileEditButton } from "./volunteer-profile-edit-button";
import { VolunteerProfileDeleteButton } from "./volunteer-profile-delete-button";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Card } from "../ui/card";

export function VolunteersListItem() {
  return (
    <div className="py-2">

    <Card className="px-4">
      <div className="flex justify-between items-center lg:px-8 py-3 w-full">
        <div className="flex items-center gap-2 ">
          <Avatar className="">
            <AvatarImage src="https://i.pinimg.com/564x/63/40/6b/.jpg" />
            <AvatarFallback>LM</AvatarFallback>
          </Avatar>
          <span className="font-bold text-xl">Levi Morais</span>
        </div>
        <div className="flex items-center gap-2">
          <VolunteerProfileEditButton/>
          <VolunteerProfileDeleteButton/>
        </div>
      </div>
    </Card>
          
    </div>

  );
}