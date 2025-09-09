"use client";

import {type ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  date: string;
  pickUp: string;
  dropOff: string;
  serviceType: string;
  status: "pending" | "processing" | "success" | "failed";
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: "Trip Ref",
  },
  {
    accessorKey: "date",
    header: "Date&Time",
  },
  {
    accessorKey: "pickUp",
    header: "Pick Up",
  },
  {
    accessorKey: "dropOff",
    header: "Drop Off",
  },
  {
    accessorKey: "serviceType",
    header: "Service Type",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
];
