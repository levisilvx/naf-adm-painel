"use client"
import { useQuery } from "@tanstack/react-query";
import { VolunteersListItem } from "./volunteers list-item";
import { GetVolunteers } from "@/app/actions/get-volunteers";
import { X } from "lucide-react";
import { api } from "@/services/api";

export function VolunteersListCard() {
  const { data: volunteers, isLoading} = useQuery({
    queryKey: ["GetVolunteers"],
    queryFn: async () => {
      const response = await api.post('/get-volunteers')
      console.log("teste pourran", response.data)
    }
  })

  if (isLoading){
    return "loading..."
  }

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
          teste
          <pre>
            <code>{dados}</code>
          </pre>
      </div>
    </div>
  );
}