"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  ScrollShadow,
  SelectItem,
  RangeCalendar,
  Image,
  Button,
  Select,
  Spinner,
} from "@nextui-org/react";
import { MultiStepLoader } from "@/components/ui/multi-step-loader";
import axios from "axios";
import { today, getLocalTimeZone } from "@internationalized/date";
import { Quicksand } from "next/font/google";
import { IconWifi, IconBottle, IconBathFilled,IconAirConditioning,IconBrandCashapp,IconBed } from '@tabler/icons-react';
import { Cover } from "@/components/ui/cover";
export const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
type CampData = {
  id: number;
  owner: string;
  image: string;
  title: string;
  description: string;
  price: number;
  created_at: string;
  updated_at: string;
};
const BookingDetailPage: React.FC = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<CampData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [Books, setBooks] = React.useState(false);
  const Memer = [
    {
      id: 1,
      label: "1",
    },
    {
      id: 2,
      label: "2",
    },
    {
      id: 3,
      label: "3",
    },
    {
      id: 4,
      label: "4",
    },
    {
      id: 5,
      label: "5",
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;

      try {
        setLoading(true);
        const response = await axios.get(
          `http://127.0.0.1:8000/api/show/${id}`
        );

        // Debug logs to verify the response
        console.log("Full Response:", response);
        console.log("Data Part:", response.data.data);


        if (response.data && response.data.data) {
          setData(response.data.data);
        } else if (response.data) {
          setData(response?.data ?? []);
        } else {
          setData(null);
          setError("Unexpected response format.");
        }
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      } catch (err: any) {

        if (err.response && err.response.status === 404) {
          setError("Resource not found: The requested data does not exist.");
        } else {
          setError("Error fetching data: " + err.message);
        }
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, [id]);


  if (loading) {
    return (
      <div className="w-full  h-screen flex justify-center items-center">
            <Spinner size="lg" color="success"/>
      </div>
    );
  }


  if (error) {
    return (
      <div className="flex items-center justify-center h-screen text-red-600">
        {error}
      </div>
    );
  }


  if (!data) {
    return null;
  }
  return (
    <>
      <div className="w-full h-screen p-5">
        <div className="mt-1 flex flex-col md:flex-row">
          <div className="md:w-[50%] flex justify-center items-center">
            <div className="space-y-5">
              <h1 className={`font-bold text-3xl ${quicksand.className}`}>
                {data.owner}
              </h1>
              <Image
                src={`http://127.0.0.1:8000/RoomPost/${data.image}`}
                alt={data.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col mt-3 md:w-[50%] lg:mt-[3rem] space-y-6 md:ml-3">
            <Select
              placeholder="Select members"
              className="max-w-md"
            >
              {Memer.map((items) => (
                <SelectItem key={items.id}>{items.label}</SelectItem>
              ))}
            </Select>
            <div className="flex justify-center items-center max-w-md">
              <RangeCalendar
                aria-label="Date (Uncontrolled)"
                className="max-w-md"
                defaultValue={{
                  start: today(getLocalTimeZone()),
                  end: today(getLocalTimeZone()).add({ weeks: 1 }),
                }}
              />
            </div>
            <div className="grid grid-cols-4 gap-4 max-w-md">
              <div className="">
                <button className="rounded-full pl-4 pr-1 py-1 px-8 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                  <IconBrandCashapp/>
                  <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                    {
                      data.price + "$"
                    }
                  </span>
                </button>
              </div>
              <div className="">
                <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                  <IconWifi />
                  <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                    <span> Free </span>
                  </span>
                </button>
              </div>
              <div className="">
                <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                  <IconBottle />
                  <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                    <span>Free 2</span>
                  </span>
                </button>
              </div>
              <div className="">
                <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                  <IconBathFilled />
                  <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                    1
                  </span>
                </button>
              </div>
              <div className="">
                <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                  < IconAirConditioning />
                  <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                    1
                  </span>
                </button>
              </div>
              <div className="">
                <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                  < IconBed />
                  <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                    2
                  </span>
                </button>
              </div>
            </div>
            <div className="flex justify-center items-center lg:items-start lg:justify-start lg:ml-2">
              <ScrollShadow className="max-w-lg h-auto">
                <p className={quicksand.className}>{data.description}</p>
              </ScrollShadow>
            </div>
            <Button color="success" className="max-w-lg text-zinc-800 font-bold"> <Link href={"/Booking/Invoices"}>Booking</Link></Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingDetailPage;
