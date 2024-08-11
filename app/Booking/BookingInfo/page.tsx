"use client";
import React, { useEffect, useState } from "react";
import { Label } from "../../../components/ui/label";
import { Input } from "../../../components/ui/input";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
    IconBrandGithub,
    IconBrandGoogle,
    IconBrandOnlyfans,
} from "@tabler/icons-react";
import { Accordion, AccordionItem, Select, SelectItem, Spinner } from "@nextui-org/react";
import { string } from "three/webgpu";
import { Phone } from "lucide-react";
import { damp } from "three/src/math/MathUtils.js";
import { setDate } from "date-fns";
import { useRouter, useSearchParams } from "next/navigation";


export function BookingInfo() {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    console.log(id);
    const [delayedValue, setDelayedValue] = useState<string>("");
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    };
    const animals = [
        { key: "KHR", label: "KHR", img: "http://127.0.0.1:8000/payments/1723358538.jpg" },
        { key: "USD", label: "USD", img: "http://127.0.0.1:8000/payments/1723358197.jpg" },
    ];
    const [fname,setFname]= React.useState<string>("");
    const [lname,setLname]= React.useState<string>("");
    const [Email,setEmail]= React.useState<string>("");
    const [Phone,setPhone]= React.useState<string>("");
    const [Facebook,setFacebook]= React.useState<string>("");
    const [send, setSend] = React.useState<any>([]);
    const [value, setValue] = React.useState<string>("KHR");
    const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setValue(e.target.value);
    };
    const [Lodoing, setLoading] = React.useState<boolean>(false);
    useEffect(() => {
        if (value === "KHR") {
            const timer = setTimeout(() => {
                setLoading(true);
                setDelayedValue("KHR");
            }, 1000);
            setLoading(false);
        } else if( value === "USD") {
            const timer = setTimeout(() => {
                setLoading(true);
                setDelayedValue("USD");
            }, 1000);
            setLoading(false);
        }else{
            return;
        }
    }, [value]);
    const handleApiCall = async () => {
        alert("fakkk")
        const router = useRouter();
        const data = {
            firstname: fname,
            lastname: lname,
            Email : Email,
            Phone: Phone,
            Facebook : Facebook,
        };
        setSend([...send, data]);
    };
    

    return (

        <div className="h-screen flex justify-center items-center">
            <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
                <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                    CampingPark Payments
                </h2>
                <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                   Apply for get invoice 
                </p>

                <form className="my-8" onSubmit={handleSubmit}>
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                        <LabelInputContainer>
                            <Label htmlFor="firstname">First name</Label>
                            <Input id="firstname" placeholder="Tyler" type="text" onChange={e=>setFname(e.target.value)}  value={fname}/>
                        </LabelInputContainer>
                        <LabelInputContainer>
                            <Label htmlFor="lastname">Last name</Label>
                            <Input id="lastname" placeholder="Durden" type="text" onChange={e=>setLname(e.target.value)}  value={lname}/>
                        </LabelInputContainer>
                    </div>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" placeholder="projectmayhem@fc.com" type="email" onChange={e=>setEmail(e.target.value)}  value={Email}/>
                    </LabelInputContainer>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="password">Phone Number</Label>
                        <Input id="password" placeholder="Phone Number" type="password"onChange={e=>setPhone(e.target.value)}  value={Phone} />
                    </LabelInputContainer>
                    <LabelInputContainer className="mb-8">
                        <Label htmlFor="twitterpassword">Facebook or Telegram etc</Label>
                        <Input
                            id="twitterpassword"
                            placeholder="https://t.me/ , https://web.facebook.com/"
                            type="twitterpassword"
                            onChange={e=>setFacebook(e.target.value)}  value={Facebook} 
                        />
                    </LabelInputContainer>
                    <div className="">
                        <Accordion>
                            <AccordionItem key="1" aria-label="Accordion 1" title="QR Code">
                                <div className="flex w-full max-w-xs flex-col gap-2">
                                    <Select
                                        label="Select Online Bank QR Code Type"
                                        variant="bordered"
                                        placeholder="Select an QR Code Type"
                                        selectedKeys={value}
                                        className="max-w-xs"
                                        onChange={handleSelectionChange}
                                    >
                                        {animals.map((animal) => (
                                            <SelectItem key={animal.key}>
                                                {animal.label}
                                            </SelectItem>
                                        ))}
                                    </Select>
                                </div>
                                {delayedValue === "KHR" ? (
                                    <div className="flex gap-2 items-center justify-center mt-3">
                                        {
                                            Lodoing ? <img
                                            src={animals[0].img}
                                            alt="QR Code"
                                            className="w-full h-full rounded-md mt-3" 
                                        /> :  <Spinner className="text-center" /> 
                                        }
                                       
                                    </div>
                                ) : (
                                    <div className="flex gap-2 justify-center mt-3">
                                        {
                                            Lodoing ? <img
                                            src={animals[1].img}
                                            alt="QR Code"
                                            className="w-full h-full rounded-md mt-3"
                                        /> :  <Spinner className="text-center" /> 
                                        }
                                    </div>
                                )}
                            </AccordionItem>
                        </Accordion>

                    </div>
                    <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
                    <button
                        className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    >
                         <Link href={{ pathname: "/Booking/Invoices", query: { id , fname} }} >Booking</Link>
                        <BottomGradient /> 
                    </button>
                </form>
            </div>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};

export default BookingInfo;