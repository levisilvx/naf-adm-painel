"use client"
import { useQuery } from "@tanstack/react-query";
import { VolunteersListItem } from "./volunteers list-item";
import { getVolunteers } from "@/app/actions/get-volunteers";

export function VolunteersListCard() {
  const { data: volunteers} = useQuery({
    queryKey: ["getVolunteers"],
    queryFn: getVolunteers
  })

  const dados = JSON.stringify(volunteers, null, 2)
  return (
    <div>
      <div className="md:p-10">
          <VolunteersListItem />
          <VolunteersListItem />
          <VolunteersListItem />
          <VolunteersListItem />
          <VolunteersListItem />
          <VolunteersListItem />
          <VolunteersListItem />
          <pre>
            <code>{dados}</code>
          </pre>
      </div>
    </div>
  );
}