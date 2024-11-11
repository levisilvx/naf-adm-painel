import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

import { VolunteerProfileEditButton } from "./volunteer-profile-edit-button";
import { VolunteerProfileDeleteButton } from "./volunteer-profile-delet-button";
import { Separator } from "@radix-ui/react-dropdown-menu";

export function VolunteersListItem() {
  return (
    <div className="flex justify-between items-center lg:px-8 py-3">
      <div className="flex items-center gap-2 ">
        <Avatar className="">
          <AvatarImage src="https://i.pinimg.com/564x/63/40/6b/63406b717cb39ae5b571be878173d198.jpg" />
          <AvatarFallback>LM</AvatarFallback>
        </Avatar>
        <span className="font-bold text-xl">Levi Morais</span>
      </div>
      <div className="flex items-center gap-2">
        <VolunteerProfileEditButton/>
        <VolunteerProfileDeleteButton/>

      </div>
    </div>

  );
}