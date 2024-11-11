"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Service = {
    id: string,
    client: string,
    attendant: string,
    category: string,
    servedAt: string
  }

  export const columns: ColumnDef<Service>[] = [
    {
        accessorKey: "client",
        header: "Contribuinte"
    },
    {
        accessorKey: "attendant",
        header: "Atendente"
    },
    {
        accessorKey: "category",
        header: "Categoria"
    },
    {
        accessorKey: "servedAt",
        header: "Realizado há"
    },
  ]