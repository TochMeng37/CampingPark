"use client";
import Link from "next/link";
import { Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import { useState } from "react";
import { ExpandableCardDemo } from "@/components/ui/ExpandableCard";
import {DateRangePicker} from "@nextui-org/react";
// Define a TypeScript type for the data
type CampData = {
  id: number;
  owner: string;
  image: string;
  image1: string;
  title: string;
  description: string;
  price: number;
  Logo: string;
};

const Booking = () => {
  const [loading, setLoading] = useState(true);

  // Define the camping data
  const data: CampData[] = [
    {
      id: 1,
      owner: "Camping Park",
      image:
        "https://z-p3-scontent.fpnh5-2.fna.fbcdn.net/v/t39.30808-6/449134791_449218654723593_9057184084313972114_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHrbiFgdftQgRfkRl2jRXDycuXqHz8ywdBy5eofPzLB0EbM63BQWXQ18z-N0e04ZiLbteAQrSSJR9kG9mHcVQiH&_nc_ohc=EVjUPCFE2r4Q7kNvgEJmUyc&_nc_zt=23&_nc_ht=z-p3-scontent.fpnh5-2.fna&oh=00_AYBUbJVzGyKW9Pb8Q-wTZW5Fx3qHPu6HijYGidZNjcWFdw&oe=66A88EA8",
      image1:
        "https://z-p3-scontent.fpnh5-2.fna.fbcdn.net/v/t39.30808-6/410351989_325277637117696_5252901105370254433_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE5CeFuFsxabPa_VA82tajfoI0bttdrtj6gjRu212u2Pk2Jb-fvNGyZ1-rM-R821tjY6OSCgoSQQF563thwBUYh&_nc_ohc=QoH50AceNnkQ7kNvgHhhwh4&_nc_zt=23&_nc_ht=z-p3-scontent.fpnh5-2.fna&oh=00_AYDAxk6kTtOdVAaxSV2WI3z-VBq8kwJAfuAkogfHPpt_Ow&oe=66A863B7",
      title: "Camping Park",
      description: "Our camping park, perfect for couples.",
      price: 150,
      Logo:
        "https://z-p3-scontent.fpnh5-5.fna.fbcdn.net/v/t39.30808-1/321799543_565982488343066_4505793326904711921_n.jpg?stp=dst-jpg_p200x200&_nc_cat=111&ccb=1-7&_nc_sid=f4b9fd&_nc_eui2=AeH6E5VSriI3j42guLjy2UvcW-2-1P5bpRNb7b7U_lulE9gh3Nxl7-euNsMktRGB2pN5wp1Ih2QxqbXrtjm_nS81&_nc_ohc=cOBG9BREEyYQ7kNvgGdzjgI&_nc_ht=z-p3-scontent.fpnh5-5.fna&oh=00_AYCZc5HAJWy1xy8QkO6KP60qDzZEgkDEjbG-Wf5wy3Wq0w&oe=66A86906",
    },
    {
      id: 2,
      owner: "Camping Park",
      image:
        "https://z-p3-scontent.fpnh5-2.fna.fbcdn.net/v/t39.30808-6/427983803_423201397325319_4596597230429569534_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHJ0FApM0CYI78zEncQAGvfUgeXonMHVadSB5eicwdVp7u_ZVLL6NDpMm8Uo9PDo4yaG6lwoCcdlIGyr4AyH5c_&_nc_ohc=NjPBijmLdQAQ7kNvgGlGmIo&_nc_zt=23&_nc_ht=z-p3-scontent.fpnh5-2.fna&oh=00_AYAzyR5Z-pEO-zzRfJommzAae4HHlZNJ9B5cZyAwCuzHIg&oe=66A878D1",
      image1:
        "https://z-p3-scontent.fpnh5-3.fna.fbcdn.net/v/t39.30808-6/428102454_365150293130430_8313518589963682450_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFpnGjUGfrkjAPUhCxDYjrN3-UuUV8BCwnf5S5RXwELCXEWrpzgSka871pHU_qpCpU6GSrfHjzieE3T9ZuKlKG4&_nc_ohc=uo78MqZjH9kQ7kNvgHBQL7b&_nc_zt=23&_nc_ht=z-p3-scontent.fpnh5-3.fna&oh=00_AYD4wQfq9x0zDnwrCYH7Ug0cYI2DrmXmh7UMgdZ_kcVQ6g&oe=66A88FC9",
      title: "Camping Park",
      description: "Our camping park, perfect for couples.",
      price: 150,
      Logo:
        "https://z-p3-scontent.fpnh5-5.fna.fbcdn.net/v/t39.30808-1/321799543_565982488343066_4505793326904711921_n.jpg?stp=dst-jpg_p200x200&_nc_cat=111&ccb=1-7&_nc_sid=f4b9fd&_nc_eui2=AeH6E5VSriI3j42guLjy2UvcW-2-1P5bpRNb7b7U_lulE9gh3Nxl7-euNsMktRGB2pN5wp1Ih2QxqbXrtjm_nS81&_nc_ohc=cOBG9BREEyYQ7kNvgGdzjgI&_nc_ht=z-p3-scontent.fpnh5-5.fna&oh=00_AYCZc5HAJWy1xy8QkO6KP60qDzZEgkDEjbG-Wf5wy3Wq0w&oe=66A86906",
    },
    {
      id: 3,
      owner: "Camping Park",
      image:
        "https://z-p3-scontent.fpnh5-3.fna.fbcdn.net/v/t39.30808-6/411310495_326602943651832_5866733175551431055_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF4ZfO2j-nZAvvbA6o-w2LW8cDPU1B_0bbxwM9TUH_RtsSn4v4FEG2L8BVYFlhbHnAXvcuM7i1KhWvA-VpnEKE3&_nc_ohc=lN0RDbIxswIQ7kNvgG2ZOTY&_nc_zt=23&_nc_ht=z-p3-scontent.fpnh5-3.fna&oh=00_AYCY9KKF-yNFemaweVhj3UlR2p9Nz9qgcRrM7qbpeIvpSg&oe=66A89000",
      image1:
        "https://z-p3-scontent.fpnh5-3.fna.fbcdn.net/v/t39.30808-6/427942202_364039996574793_7340489741177565331_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHug8sIIc9JCXTN6Q08ACN97e8hDukqogft7yEO6SqiB16F15ZZeyRUJFToVuZ2OJzBTbLfHP1yizKBhF4XTMgX&_nc_ohc=_G25F4sGJTQQ7kNvgE6pR9p&_nc_zt=23&_nc_ht=z-p3-scontent.fpnh5-3.fna&oh=00_AYAMY44KB_HlLtt16W8nccsamXDdnUbf9FAty_gszdnZtQ&oe=66A891C8",
      title: "Camping Park",
      description: "Our camping park, perfect for couples.",
      price: 150,
      Logo:
        "https://z-p3-scontent.fpnh5-5.fna.fbcdn.net/v/t39.30808-1/321799543_565982488343066_4505793326904711921_n.jpg?stp=dst-jpg_p200x200&_nc_cat=111&ccb=1-7&_nc_sid=f4b9fd&_nc_eui2=AeH6E5VSriI3j42guLjy2UvcW-2-1P5bpRNb7b7U_lulE9gh3Nxl7-euNsMktRGB2pN5wp1Ih2QxqbXrtjm_nS81&_nc_ohc=cOBG9BREEyYQ7kNvgGdzjgI&_nc_ht=z-p3-scontent.fpnh5-5.fna&oh=00_AYCZc5HAJWy1xy8QkO6KP60qDzZEgkDEjbG-Wf5wy3Wq0w&oe=66A86906",
    },
  ];
  return (
    <>
      <div className="w-full flex justify-center items-center mt-5">
        <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
          {data.map((data) => (
            <>
              <Card
                key={`card-1-${data.id}`} // Unique key for each card
                isFooterBlurred
                className="w-full h-[300px] col-span-12 sm:col-span-5"
              >
                <CardHeader className="absolute z-10 top-1 flex-col items-start">
                  <p className="text-tiny text-white/60 uppercase font-bold">{data.owner}</p>
                  <h4 className="text-white/90 font-medium text-xl">{data.title}</h4>
                </CardHeader>
                <Image
                  removeWrapper
                  alt="Card example background"
                  className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                  src={data.image}
                />
                <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                  <div>
                    <p className="text-black text-tiny">{data.description}</p>
                  </div>
                  <Link
                    href={{
                      pathname: `/Booking/${data.id}`,
                      query: {
                        owner: data.owner,
                        title: data.title,
                        description: data.description,
                        image1: data.image1,
                        image: data.image,
                      },
                    }}
                  >
                    <Button className="text-tiny" color="primary" radius="full" size="sm">
                      Booking
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card
                key={`card-2-${data.id}`} // Unique key for each card
                isFooterBlurred
                className="w-full h-[300px] col-span-12 sm:col-span-7"
              >
                <CardHeader className="absolute z-10 top-1 flex-col items-start">
                  <p className="text-tiny text-white/60 uppercase font-bold">{data.owner}</p>
                  <h4 className="text-white/90 font-medium text-xl">{data.title}</h4>
                </CardHeader>
                <Image
                  removeWrapper
                  alt="Relaxing app background"
                  className="z-0 w-full h-full object-cover"
                  src={data.image1}
                />
                <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                  <div className="flex flex-grow gap-2 items-center">
                    <Image
                      alt="Breathing app icon"
                      className="rounded-full w-10 h-11 bg-black"
                      src="https://nextui.org/images/breathing-app-icon.jpeg"
                    />
                    <div className="flex flex-col">
                      <p className="text-tiny text-white/60">{data.description}</p>
                      <p className="text-tiny text-white/60">Get a good night's sleep.</p>
                    </div>
                  </div>
                  <Button radius="full" size="sm">
                    Booking
                  </Button>
                </CardFooter>
              </Card>
            </>
          ))}
        </div>
      </div>
      <DateRangePicker 
      label="Stay duration" 
      className="max-w-xs" 
    />
    </>
  );
};

export default Booking;
