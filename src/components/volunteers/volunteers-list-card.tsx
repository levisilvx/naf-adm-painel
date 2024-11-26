"use client"
import { useQuery } from "@tanstack/react-query";
import { VolunteersListItem } from "./volunteers list-item";
import { Loader } from "lucide-react";
import { api } from "@/services/api";
import { Card } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { VolunteerProfileEditButton } from "./volunteer-profile-edit-button";
import { VolunteerProfileDeleteButton } from "./volunteer-profile-delete-button";

type GetVolunteersResponse = {
  id: string,
  email: string,
  attendantFirstName: string,
  attendantLastName: string,
  initials: string
}

export function VolunteersListCard() {
  const { data: volunteers, isLoading} = useQuery({
    queryKey: ["GetVolunteers"],
    queryFn: async () => {
      const response = await api.get('/get-volunteers')
      console.log(response.data.responseArray)
      return response.data.responseArray
    }
  })

  if (isLoading){
    return (
      <div className='h-auto bg-background flex justify-center items-center'>
        <div className='animate-pulse'>
          <Loader className='h-10 w-10 animate-spin'/>
        </div>
      </div>
    )
  }

  const dados = JSON.stringify(volunteers, null, 2)
  return (
    <div>
      <div className="md:p-10">
          {volunteers.map((volunteer: GetVolunteersResponse) => {
            return (
              <Card className="px-4 sm:px-0 my-2 hover:bg-muted/30 dark:hover:bg-muted/40" key={volunteer.id}>
                <div className="flex justify-between items-center lg:px-8 py-3 w-full">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage src="" />
                      <AvatarFallback>{volunteer.initials}</AvatarFallback>
                    </Avatar>
                    <span className="font-bold text-lg sm:text-xl">{volunteer.attendantFirstName} {volunteer.attendantLastName}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <VolunteerProfileEditButton/>
                    <VolunteerProfileDeleteButton/>
                  </div>
                </div>
              </Card>
            )
          })}
          <pre>
            <code></code>
          </pre>
      </div>
    </div>
  );
}