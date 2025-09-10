import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { DataTable } from "@/components/trips/data-table";
import { columns, type Payment } from "@/components/trips/column";

const getData = (): Promise<Payment[]> => {
    // Fetch data from your API here.
    return Promise.resolve([
      {
        id: "728ed52f",
        date: "1960-10-01",
        status: "pending",
        pickUp: "lagos",
        dropOff: "abuja",
        serviceType: "Guess",
      },
      {
        id: "728ed52f",
        date: "1960-10-01",
        status: "pending",
        pickUp: "lagos",
        dropOff: "abuja",
        serviceType: "Guess",
      },
      {
        id: "728ed52f",
        date: "1960-10-01",
        status: "pending",
        pickUp: "lagos",
        dropOff: "abuja",
        serviceType: "Guess",
      },
      {
        id: "728ed52f",
        date: "1960-10-01",
        status: "pending",
        pickUp: "lagos",
        dropOff: "abuja",
        serviceType: "Guess",
      },
      {
        id: "728ed52f",
        date: "1960-10-01",
        status: "pending",
        pickUp: "lagos",
        dropOff: "abuja",
        serviceType: "Guess",
      },
      {
        id: "728ed52f",
        date: "1960-10-01",
        status: "pending",
        pickUp: "lagos",
        dropOff: "abuja",
        serviceType: "Guess",
      },
      {
        id: "728ed52f",
        date: "1960-10-01",
        status: "pending",
        pickUp: "lagos",
        dropOff: "abuja",
        serviceType: "Guess",
      },
      {
        id: "728ed52f",
        date: "1960-10-01",
        status: "pending",
        pickUp: "lagos",
        dropOff: "abuja",
        serviceType: "Guess",
      },
      {
        id: "728ed52f",
        date: "1960-10-01",
        status: "pending",
        pickUp: "lagos",
        dropOff: "abuja",
        serviceType: "Guess",
      },
      {
        id: "728ed52f",
        date: "1960-10-01",
        status: "pending",
        pickUp: "lagos",
        dropOff: "abuja",
        serviceType: "Guess",
      },
      {
        id: "728ed52f",
        date: "1960-10-01",
        status: "pending",
        pickUp: "lagos",
        dropOff: "abuja",
        serviceType: "Guess",
      },
      {
        id: "728ed52f",
        date: "1960-10-01",
        status: "pending",
        pickUp: "lagos",
        dropOff: "abuja",
        serviceType: "Guess",
      },
      {
        id: "728ed52f",
        date: "1960-10-01",
        status: "pending",
        pickUp: "lagos",
        dropOff: "abuja",
        serviceType: "Guess",
      },
      {
        id: "728ed52f",
        date: "1960-10-01",
        status: "pending",
        pickUp: "lagos",
        dropOff: "abuja",
        serviceType: "Guess",
      },
      {
        id: "728ed52f",
        date: "1960-10-01",
        status: "pending",
        pickUp: "lagos",
        dropOff: "abuja",
        serviceType: "Guess",
      },
      {
        id: "728ed52f",
        date: "1960-10-01",
        status: "pending",
        pickUp: "lagos",
        dropOff: "abuja",
        serviceType: "Guess",
      },
      {
        id: "728ed52f",
        date: "1960-10-01",
        status: "pending",
        pickUp: "lagos",
        dropOff: "abuja",
        serviceType: "Guess",
      },
      {
        id: "728ed52f",
        date: "1960-10-01",
        status: "pending",
        pickUp: "lagos",
        dropOff: "abuja",
        serviceType: "Guess",
      },
      {
        id: "728ed52f",
        date: "1960-10-01",
        status: "pending",
        pickUp: "lagos",
        dropOff: "abuja",
        serviceType: "Guess",
      },
      {
        id: "728ed52f",
        date: "1960-10-01",
        status: "pending",
        pickUp: "lagos",
        dropOff: "abuja",
        serviceType: "Guess",
      },
      {
        id: "728ed52f",
        date: "1960-10-01",
        status: "failed",
        pickUp: "lagos",
        dropOff: "abuja",
        serviceType: "Guess",
      },
      // ...
    ]);
}

import { useEffect, useState } from "react";

export default function IndividualDashboard() {
    const [data, setData] = useState<Payment[]>([]);

    useEffect(() => {
        getData().then(setData);
    }, []);

  return (
    <div>
      <div className="grid auto-rows-min gap-4 md:grid-cols-3 mb-4 bg-grey-light p-2">
        <Card>
          <CardHeader>
            <div className="flex gap-2 items-center">
              <img src="/Frame 585.svg" alt="trip icon" />
              <h3 className="text-grey-normal font-semibold">
                Trips Completed
              </h3>
            </div>
          </CardHeader>
          <CardContent className="text-3xl">0</CardContent>
          <CardFooter className="justify-between">
            <p className="text-[#737373]">Last Updated At: 19:00</p>
            <p className="text-[#e1e1ec]">view all</p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex gap-2 items-center">
              <img src="/Frame 586.svg" alt="trip icon" />
              <h3 className="text-grey-normal font-semibold">Family Members</h3>
            </div>
          </CardHeader>
          <CardContent className="text-3xl">0</CardContent>
          <CardFooter className="justify-between">
            <p className="text-[#737373]">Last Updated At: 19:00</p>
            <p className="text-[#e1e1ec]">view all</p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex gap-2 items-center">
              <img src="/Frame 587.svg" alt="trip icon" />
              <h3 className="text-grey-normal font-semibold">Request</h3>
            </div>
          </CardHeader>
          <CardContent className="text-3xl">
            <Button size="lg" className="bg-red-normal">
              Request Ambulance
            </Button>
          </CardContent>
        </Card>
      </div>
      <div className="min-h-[100vh] grid grid-cols-3 gap-4 rounded-xl md:min-h-min bg-grey-light p-2">
        <Card className="col-span-2 px-4">
          {/* <div className="container mx-auto px-10"> */}
            <DataTable columns={columns} data={data} />
          {/* </div> */}
        </Card>
        <div>
          <Card className="mb-4"></Card>
          <Card></Card>
        </div>
      </div>
    </div>
  );
}
