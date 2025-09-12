import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { DataTable } from "@/components/trips/data-table";
import { columns, type Payment } from "@/components/trips/column";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { DialogClose } from "@radix-ui/react-dialog";
import { useNavigate } from "react-router";

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
};

export default function IndividualDashboard() {
  const [data, setData] = useState<Payment[]>([]);
  const [newUser, setNewUser] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getData().then(setData);
  }, []);

  return (
    <div>
      {/* Trigger Dialog for Unverified users */}
      <Dialog open={!newUser} onOpenChange={(open) => setNewUser(!open)}>
        <DialogContent>
          <DialogHeader className="flex items-center">
            <DialogTitle>
              <img src="/Frame 489.svg" />
            </DialogTitle>
            <DialogDescription>
              Heyy user.firstname! Kindly Complete your profile setup
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex items-center justify-center gap-4">
            <DialogClose asChild>
              <Button className="bg-blue-light text-blue-normal hover:bg-blue-light-hover">
                Cancel
              </Button>
            </DialogClose>
            <Button
              className="bg-blue-normal text-blue-light hover:bg-blue-dark-hover"
              onClick={() => navigate("profile")}
            >
              Setup Profile
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Dashboard */}
      <div className="grid auto-rows-min gap-2 md:grid-cols-3 mb-2 bg-grey-light p-2 ">
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

      <div className="min-h-[100vh] grid grid-cols-3 gap-2 rounded-xl md:min-h-min bg-grey-light p-2">
        <Card className="col-span-2 px-4">
          <DataTable columns={columns} data={data} title="Recent Posts" />
        </Card>
        <div>
          <Card className="mb-4">
            <CardHeader>
              <h3 className="font-semibold text-base">Rate your trip</h3>
            </CardHeader>
            <CardContent>
              <p className=" flex justify-center items-center">
                No trip has been ordered
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <h3 className="">Rating List</h3>
              <h3 className="border-b-2 text-grey-light"></h3>
            </CardHeader>
            <CardContent>
              <p className=" flex justify-center items-center">
                No ratings yet
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
