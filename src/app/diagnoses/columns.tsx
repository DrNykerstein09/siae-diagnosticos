"use client";

import { Button } from "@/components/ui/button";
import { Diagnoses } from "@/diagnoses";
import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";

export const columns: ColumnDef<Diagnoses>[] = [
  {
    header: "catalog_key",
    accessorKey: "catalog_key",
  },
  {
    header: "nombre",
    accessorKey: "nombre",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const diagnoses = row.original;
      const diagnosesId = diagnoses.catalog_key;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-8 h-8 p-0" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Acciones</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                navigator.clipboard.writeText(diagnosesId);
              }}
            >
              Copiar catalogo
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
