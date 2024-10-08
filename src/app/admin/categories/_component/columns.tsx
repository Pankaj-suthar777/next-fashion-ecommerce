"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Category = {
  _id: string;
  title: string;
  image: string;
  created_at: string;
};

export const columns: ColumnDef<Category>[] = [
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const category = row.original;

      return (
        <div>
          <img
            src={category.image}
            alt=""
            className="h-16 w-16 object-scale-down"
          />
        </div>
      );
    },
  },
  {
    accessorKey: "_id",
    header: "Id",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "created_at",
    header: "Created at",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const category = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(category._id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
