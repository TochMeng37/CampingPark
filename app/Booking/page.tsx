"use client";
import Link from "next/link";
import { Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { ExpandableCardDemo } from "@/components/ui/ExpandableCard";
import { DateRangePicker } from "@nextui-org/react";
import axios from "axios";

type CampData = {
  id: number;
  owner: string;
  image: string;
  image1: string;
  title: string;
  description: string;
  price: number;
};

interface ApiResponse {
  data: CampData[];
}



const Booking = () => {
  const [data, setData] = useState<CampData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make an API request to the Laravel backend
        const response = await axios.get<ApiResponse>('http://127.0.0.1:8000/api/get-room-booking');
        setData(response.data.data);
        console.log(response.data);
        // Set the room data in state
      } catch (err: any) {
        // Handle errors, including 404 not found
        if (err.response && err.response.status === 404) {
          setError('Resource not found: The requested data does not exist.');
        } else {
          setError('Error fetching data: ' + err.message);
        }
        console.error('Error fetching data:', err);
      }
    };
    fetchData(); 
  }, []);

  return (
    <>
      <div className="w-full flex justify-center items-center mt-5 px-4 sm:px-8">
        <div className="max-w-[1200px] w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((items) => (
            <div key={items.id} className="flex flex-col">
              <Card
                isFooterBlurred
                className="w-full h-[300px] flex flex-col relative"
              >
                <CardHeader className="absolute z-10 top-1 flex-col items-start">
                  <p className="text-tiny text-white/60 uppercase font-bold">{items.owner}</p>
                  <h4 className="text-white/80 font-medium text-xl">{items.title}</h4>
                </CardHeader>
                <Image
                  removeWrapper
                  alt="Card example background"
                  className="z-0 w-full h-full object-cover"
                  src={`http://127.0.0.1:8000/RoomPost/${items.image}`}
                />
                <CardFooter className="absolute bg-white/30 bottom-0 border-t border-zinc-100/50 z-10 flex justify-between p-2">
                  <div>
                    <p className="text-gray-400 text-tiny dark:text-white/90">{items.description}</p>
                  </div>
                  <Link
                    href={{
                      pathname: `/Booking/${items.id}`,
                      query:{
                        id : items.id
                      }
                    }}
                  >
                    <Button className="text-tiny" color="primary" radius="full" size="sm">
                      Booking
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Booking;
