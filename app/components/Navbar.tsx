"use client"
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, Avatar } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx";
import { useContext } from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";
import { useTheme } from "next-themes";
export default function App() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [login, setLogin] = React.useState(false);
    const { theme, setTheme } = useTheme();

    const menuItems = [
        {
            id: 1,
            href: "/",
            label: "Home",
            as: Link,
        },
        {
            id: 2,
            href: "/About",
            label: "About",
            as: Link,
        },
        {
            id: 3,
            href: "/Booking",
            label: "Booking",
            as: Link,
        },
        {
            id: 4,
            href: "/Feedback",
            label: "Feedback",
            as: Link,
        },
        {
            id: 4,
            href: "/LogOut",
            label: "Log Out",
            as: Link,
        },
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} className="z-50 " >
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden dark:text-white z-50 text-black"
                />
                <NavbarBrand>
                    <p className="dark:text-white"> <AcmeLogo /></p>
                    <div className="absolute pointer-events-none inset-0 flex items-center justify-center  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                    <p className="text-xl sm:text-xl font-bold relative z-20 dark:text-white/75 text-black py-8 ">
                        ឧទ្យានបោះតង់ CampingPark
                    </p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="/">
                        <h1 className="font-medium">Home</h1>
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="/About" aria-current="page">
                        <h1 className="font-medium">About</h1>
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="Booking">
                        <h1 className="font-medium">Booking</h1>
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/Feedback">
                        <h1 className="font-medium">Feedback</h1>
                    </Link>
                </NavbarItem>
            </NavbarContent>
            {
                login ? <NavbarContent justify="end">
                    <NavbarItem className="hidden lg:flex">
                        <Link href="#">Login</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Button as={Link} color="primary" href="#" variant="flat">
                            Sign Up
                        </Button>
                    </NavbarItem>
                </NavbarContent> : <NavbarContent justify="end">  <NavbarItem>
                    <Switch
                        className="hidden sm:block "
                        defaultSelected
                        onClick={() => {
                            setTheme(theme === "light" ? "dark" : "light");
                        }}
                        size="lg"
                        color="success"
                        startContent={<MoonIcon />}
                        endContent={<SunIcon />}

                    >
                    </Switch>
                </NavbarItem> <NavbarItem> <Link className="mt-2" href="/Profile"> <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    color="secondary"
                    name="Jason Hughes"
                    size="sm"
                    src="https://z-p3-scontent.fpnh5-5.fna.fbcdn.net/v/t39.30808-6/290529390_559007492550198_878506091995942064_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFBAW9__uGnecW3xmWrj3jQJBpOhLK0E44kGk6EsrQTjjj2-2CkyEA37GqylPtDepOWdR87ExE1RvdlYLqaIBpX&_nc_ohc=gz2RWZQpnr8Q7kNvgGijfXT&_nc_zt=23&_nc_ht=z-p3-scontent.fpnh5-5.fna&oh=00_AYA2GuL10lSGYt2Xdj0CmVlmLvy3TALHa_4LBdfo98yf2g&oe=66A417BF"
                /></Link> </NavbarItem> </NavbarContent>
            }
            <NavbarMenu className="min-w-full">

                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color={
                                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            className="w-full"
                            href={item.href}
                            size="lg"
                        >
                            {item.label}
                        </Link>
                    </NavbarMenuItem>
                ))}
                <Switch
                    className=""
                    defaultSelected
                    onClick={() => {
                        setTheme(theme === "light" ? "dark" : "light");
                    }}
                    size="lg"
                    color="success"
                    startContent={<MoonIcon />}
                    endContent={<SunIcon />}

                >
                </Switch>
            </NavbarMenu>
        </Navbar>
    );
}
