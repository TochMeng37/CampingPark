"use client";
import React, { useEffect, useState } from 'react';
import Comment from "../components/Comment";
import { Card, CardHeader , Image } from '@nextui-org/react';
import axios from 'axios';
import { cos } from 'three/webgpu';

// Define an interface for room data
interface RoomData {
  id: number;
  image: string;
  title: string;
}

// Define an interface for API response
interface ApiResponse {
  data: RoomData[];
}

const Page: React.FC = () => {
  // State to hold room data
  const [data, setData] = useState<RoomData[]>([]);
  // State to hold error messages
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ApiResponse>('http://127.0.0.1:8000/api/get-all-room');
        setData(response.data.data); 
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
  console.log(data);

  return (
    <div className="flex flex-col items-center justify-center p-4 space-y-4">
      {error && <div className="text-red-500">{error}</div>} 
      {data.map((item) => (
        <div key={item.id} className="space-y-1">
          <Card className="rounded-lg shadow-lg max-w-full w-full sm:w-[400px] md:w-[600px] lg:w-[800px]">
            <CardHeader>
              <Image
                className="rounded-lg"
                src={`http://127.0.0.1:8000/RoomBooking/${item.image}`} 
                alt={item.title}
                width={800}
                height={600}
                onError={() => setError('Failed to load image: ' + item.image)} 
              />
            </CardHeader>
          </Card>
          <Comment />
        </div>
      ))}
    </div>
  );
};

export default Page;
