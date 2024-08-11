"use client"
import next from "next";
import Cards from "./components/Card";
import Comment from "./components/Comment";
import { Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import { useContext, useEffect, useState } from "react";
import { Spinner } from "@nextui-org/react";
import { GridBackgroundDemo } from "./components/Background";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { title } from "process";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Quote } from "lucide-react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { FeaturesSection } from "@/components/ui/FeaturesSection";
import axios from 'axios';
export default function Home() {
  const data = [
    {
      id: 1,
      owner: "Camping Park",
      image:
        "Camping Park",
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
  const products = [
    {
      title: "this is new idea",
      link: "dfsfsf",
      thumbnail: "https://z-p3-scontent.fpnh5-3.fna.fbcdn.net/v/t39.30808-6/452289128_466467452998713_8604153214434772405_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEfyFpmjI6UXBNfBrq0hTX4QNLpYz_e1vFA0uljP97W8WPsph1og6IWjSFlPIiQqf4ZpHg6Rgi-lIrBLoJ4q14J&_nc_ohc=e3gLdLRfATwQ7kNvgH7tG6O&_nc_zt=23&_nc_ht=z-p3-scontent.fpnh5-3.fna&oh=00_AYDO4KPhj4JoqRehRy-C41AWlxVBOdgyRnq-EDfCDTyn-Q&oe=66A8ABD0"

    },
    {
      title: "this is new idea",
      link: "dfsfsf",
      thumbnail: "https://z-p3-scontent.fpnh5-2.fna.fbcdn.net/v/t39.30808-6/452283845_466467476332044_1396243883778571037_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGX3b5VqoixmmZ-7HOOV-GbF715aoOPWhAXvXlqg49aEA1-WwDxN7Y2vhG7WYImFtPsTNffx7aAlN6dizRQYR5K&_nc_ohc=dGFPn2lS0FcQ7kNvgELFmPz&_nc_zt=23&_nc_ht=z-p3-scontent.fpnh5-2.fna&oh=00_AYDYngK12Sn750dJo1sLWcepEKYxXHkwM6xlZQCMxD0s1Q&oe=66A88264",

    },
    {
      title: "this is new idea",
      link: "dfsfsf",
      thumbnail: "https://z-p3-scontent.fpnh5-2.fna.fbcdn.net/v/t39.30808-6/448655457_445235828455209_3653690109342137374_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEEHH_bBA6QjdDcnLeXzA_1-hhhZ1CpOT_6GGFnUKk5PzgEUDKXH4zn7CgsdTLj1wXr4AKmW4pF8jtyQeafWP2r&_nc_ohc=Mrt7lbou1k0Q7kNvgHpQ-Wq&_nc_zt=23&_nc_ht=z-p3-scontent.fpnh5-2.fna&oh=00_AYD4sFtJ9jSRG3pBqGeV5nQOApsc3Cr_E9XIrKgOS7zPHg&oe=66A8812F",

    },
    {
      title: "this is new idea",
      link: "dfsfsf",
      thumbnail: "https://z-p3-scontent.fpnh5-3.fna.fbcdn.net/v/t39.30808-6/448045553_440166055628853_6070162804814300605_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEIQFaodXSOQvq0qz7uZwLbku7Xy7Q4nYqS7tfLtDidivn9h_UxmPxUSt_PbVRwXDwkljSnJGKuxA0jLSBRDLgx&_nc_ohc=ggifZXPBLCwQ7kNvgFA_plp&_nc_zt=23&_nc_ht=z-p3-scontent.fpnh5-3.fna&oh=00_AYDbi5Ujw1NJ0syyi6CyTfS09INZwlU2qgMnll0tcaL-tg&oe=66A8910E",

    },
    {
      title: "this is new idea",
      link: "dfsfsf",
      thumbnail: "https://z-p3-scontent.fpnh5-3.fna.fbcdn.net/v/t39.30808-6/435894982_404676722511120_3052426577055779182_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFkxy8xMW_boj-jHFaB_5TCB8MoK-7dh_kHwygr7t2H-QASA8ogbrN5J_koBMrqm6w9R-R3f-BKtbkZdVCdHB-m&_nc_ohc=7isLxX66qwQQ7kNvgGUHMsM&_nc_zt=23&_nc_ht=z-p3-scontent.fpnh5-3.fna&oh=00_AYCpcOYbUXQzVbX1ESkpTnCja"

    },
    {
      title: "this is new idea",
      link: "dfsfsf",
      thumbnail: "  https://z-p3-scontent.fpnh5-2.fna.fbcdn.net/v/t39.30808-6/436308506_401481049497354_7699406339919682635_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF0gD3-MvllGyh7tx8zCUalLNYu7AFi_nMs1i7sAWL-cyOYJzEKj0trflDGcBhIMvfojcOsa2SUlfW3yAhr66mH&_nc_ohc=D5ArQxMe8i8Q7kNvgHg-8FF&_nc_zt=23&_nc_ht=z-p3-scontent.fpnh5-2.fna&oh=00_AYDuv8BycchtU6VNl3Pl1z8tY4Y6ThKLuNge9kXyPMG1Rw&oe=66A89D6E"

    },
    {
      title: "this is new idea",
      link: "dfsfsf",
      thumbnail: "https://z-p3-scontent.fpnh5-2.fna.fbcdn.net/v/t39.30808-6/445375722_431215069857285_8636597094149540187_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFoMivjVEQwp6k3HLjLCi-wpQQtLumOx6ulBC0u6Y7Hq0C-DR6diWN95X07e1B8fDHQtshOXdFSaAucgY1Rtyut&_nc_ohc=tCQMzVcSmCQQ7kNvgGNvjla&_nc_zt=23&_nc_ht=z-p3-scontent.fpnh5-2.fna&oh=00_AYB_IOKFw51VDrFHgfZE5JisAfwc3SIWedVksB4aDG7epg&oe=66A8861F"

    },
    {
      title: "this is new idea",
      link: "dfsfsf",
      thumbnail: "https://z-p3-scontent.fpnh5-3.fna.fbcdn.net/v/t39.30808-6/439054539_404676785844447_104102642868032811_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFKNHxYCKXkKFjTeFNAfhEAhSc7pipK9QOFJzumKkr1A9aG0CjDYMRxfX8pCYpGvy2JdWYKHRLDR4xafcetwqJ5&_nc_ohc=1ueOFpade6MQ7kNvgER93JR&_nc_zt=23&_nc_ht=z-p3-scontent.fpnh5-3.fna&oh=00_AYCKA9GJeL97_XHgVaPGJuQrdeQT88KVY-hr3iIocbLzmw&oe=66A8867A"
    },
    {
      title: "this",
      link: "dfsfsf",
      thumbnail: "https://z-p3-scontent.fpnh5-3.fna.fbcdn.net/v/t39.30808-6/445014352_431215106523948_4412704097606331859_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE2ur8kANclkLCM7_IeYm1FX3QXamFb0axfdBdqYVvRrBUF5iHSAErJXMumraNoxz3eDcoPkfeh4zgfcixz5mjY&_nc_ohc=IyOE8pai-pcQ7kNvgFV9s46&_nc_zt=23&_nc_ht=z-p3-scontent.fpnh5-3.fna&oh=00_AYA8HfLszhhWzzqBzRd-2QI3cpJFwl5pIS0vKsmYMfK9vA&oe=66A8874F"
    },
    {
      title: "this is new idea",
      link: "dfsfsf",
      thumbnail: "https://z-p3-scontent.fpnh5-4.fna.fbcdn.net/v/t39.30808-6/445179866_431215143190611_2729773692319946159_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEjOChNq81Q41FWCxit83dp9PlTNKs3AeX0-VM0qzcB5Z6-kots5dRz0ZXGg88Tv2zaJp6A5re2cHJDr1uqBIZI&_nc_ohc=NmVA_NGGZ0IQ7kNvgHb9oFI&_nc_zt=23&_nc_ht=z-p3-scontent.fpnh5-4.fna&oh=00_AYBW7e2z22hf0s9b_Vc4lpvSBtc0BLNgAyMredggfEFfow&oe=66A88A94"
    },
    {
      title: "this is new idea",
      link: "dfsfsf",
      thumbnail: "https://z-p3-scontent.fpnh5-6.fna.fbcdn.net/v/t39.30808-6/447839741_440166118962180_1619791815537177636_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGbZ1OO0o2bPdRt8a-nkeYXb2J0ElOufPBvYnQSU6588Fmv-40-veLFMRhTms4VsblYJZKaGZTsXZi5ctdBN6vP&_nc_ohc=nGaHJrBD-bUQ7kNvgED2_H6&_nc_zt=23&_nc_ht=z-p3-scontent.fpnh5-6.fna&oh=00_AYDePHt0I7Zc_iNjwljhhyuKsjbkueQBXJVhhzmrIskeNA&oe=66A8A666"
    },
    {
      title: "this is new idea",
      link: "dfsfsf",
      thumbnail: "https://z-p3-scontent.fpnh5-2.fna.fbcdn.net/v/t39.30808-6/448620561_443820461930079_2901990552544582635_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEOsM-ViPqNZOSJL1ATX6ZW-qcrpGRQp1_6pyukZFCnX8ffwjjrpluELvJpondz_kHbJ-g_BHpfCPZwHPhtlYah&_nc_ohc=YQ2H2ocq0j0Q7kNvgGzsePh&_nc_zt=23&_nc_ht=z-p3-scontent.fpnh5-2.fna&oh=00_AYA7oxwqdEegwETWkxGiO_-wudtzmVgp3oDl7NwPqY93yA&oe=66A8915F"
    },
    {
      title: "this is new idea",
      link: "dfsfsf",
      thumbnail: "https://z-p3-scontent.fpnh5-4.fna.fbcdn.net/v/t39.30808-6/449486955_453616820950443_4459634880877403890_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGSDMXPYrtou0_myNBMLqMudISNKiV7cJR0hI0qJXtwlFJ_FQ84Gm2n4WE_Y7KNonGahAcYJvzieKT4IwHSjym6&_nc_ohc=HUWtRp8EjfQQ7kNvgEGJ1lr&_nc_zt=23&_nc_ht=z-p3-scontent.fpnh5-4.fna&oh=00_AYBUFy5Xo_2DIYV8pvStdRdxz32miQHTr1MuAUe29-pTkg&oe=66A87C0A"
    }, {
      title: "this is new idea",
      link: "dfsfsf",
      thumbnail: "https://z-p3-scontent.fpnh5-6.fna.fbcdn.net/v/t39.30808-6/451953566_464641596514632_2167165471467829043_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGvm_hxjNwnUFWHHOCNwRRwLhDecXcSbIouEN5xdxJsii7h79bXHmZKSF1FSft25NjHWNVVpZSFOMtOuARw3cxe&_nc_ohc=7aSFLj4jincQ7kNvgG3hzfT&_nc_zt=23&_nc_ht=z-p3-scontent.fpnh5-6.fna&oh=00_AYCyVUf37xD2-Lq3q_WCFH5ZK5ffSp8RQ2uC9rlyDh_Klw&oe=66A889DD",
    }
  ]
  const items = [
    {
      title: "The clearest way into the Universe is through a forest wilderness. In the presence of nature, a person finds themselves surrounded by a world that is far older and more enduring than anything mankind has built or dreamed. Here, one can pause and reflect upon the grandeur and complexity of life itself, and in those moments of quiet contemplation, find a deeper understanding of the self and the interconnectedness of all living things",
      name: "Mrr. Toch MengHeng"
    },
    {
      title: "Nature always wears the colors of the spirit. If we allow ourselves to be guided by the natural world, we will find that it reflects our inner state and can provide solace and clarity. The mountains, forests, and seas are not just backdrops to our lives but active participants in our journey, whispering wisdom and offering tranquility to those who listen closely and with an open heart.",
      name: "Mrr. Chhornseyha"
    },
    {
      title: "In the natural world, there is a rhythm and harmony that speaks to something fundamental within us. The ebb and flow of the tides, the changing seasons, and the cycles of life all carry lessons in balance and renewal. To immerse oneself in nature is to connect with a timeless source of inspiration, where every moment offers an opportunity to witness the beauty of the world in its purest form",
      name: "Mrr. Khouch SobenPonleu"
    },
    {
      title: "Nature is the ultimate teacher of patience, resilience, and harmony. From the smallest seed to the tallest tree, from the quiet whisper of the wind to the roar of a storm, the natural world exemplifies the power of perseverance and the grace of transformation. By observing and learning from nature, we can gain insights into how to navigate our own challenges and embrace the ever-changing landscape of life",
      name: "Mrr. Chinhav168"
    }
  ]
  const content = [
    {
      title: "ទំនេរអត់ ? ចង់ហៅទៅកាហ្វេលើភ្នំជុំវិញពពក 2នាក់",
      description:
        "មេឃត្រជាក់ៗដាក់កាហ្វេ ១កែវមើលទេសភាពព្រៃភ្នំអូយ…! ស្រស់ស្រាយញាក់ 🍝 ម្ហូបអាហារមិនបាច់ទិញពីក្រោមក៏បាន🌈 មានប្លង់ថតរូប​1000+📸 និងបន្ទប់​ទឹកស្អាត🚿🛣 ផ្លូវងាយស្រួលធ្វើដំណើរបានទាំងឡាន🚌 និងម៉ូតូ🛵💨🚻 មានបន្ទប់ទឹកក្ដៅ/ត្រជាក់ក្នុង​បន្ទប់🌏 wifiមានល្បឿនលឿនភ្ជាប់ដោយសេរី 🍽 ភោជនីយដ្ឋានមានលក់អាហារបីពេល ហាងកាហ្វេក៏ដូចជាមីនីម៉ាត",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="https://z-p3-scontent.fpnh5-2.fna.fbcdn.net/v/t39.30808-6/449292838_453614660950659_8607656167924627046_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGMNknE4nYM7K2cQwKz0YMN-Cr3GnvEkrD4Kvcae8SSsAIEDV7W94LARIhHJg4aVi-ZHgju_5pCIIXtNf38aNz9&_nc_ohc=nNv9QOi359EQ7kNvgEBETLB&_nc_zt=23&_nc_ht=z-p3-scontent.fpnh5-2.fna&oh=00_AYDhCICcOYZY-A4ZmmORQGeYnGVxQSOI5jTVmXhwsMb5_A&oe=66B6A90F"
            width={290}
            height={250}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "បោះតង់ អាំងសាច់ មើលថ្ងៃលិចនៅលើភ្នំចឹងអ៊េមហាសណា",
      description:
        "មានបន្ទប់ទឹកក្ដៅ/ត្រជាក់ក្នុង​បន្ទប់🌏 wifiមានល្បឿនលឿនភ្ជាប់ដោយសេរី 🍽 ភោជនីយដ្ឋានមានលក់អាហារបីពេល ហាងកាហ្វេក៏ដូចជាមីនីម៉ាត🚫ឧបករណ៍បំពងសម្លេងខ្នាតធំ មិនអនុញ្ញាតឱ្យយកចូលនោះទេ!! ",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="https://z-p3-scontent.fpnh5-1.fna.fbcdn.net/v/t39.30808-6/448561041_445235855121873_6095861498981604355_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHpHDYEsznVdNZcb9VYw6Cx0Nqn-gVV5iLQ2qf6BVXmIsRi4u-HyUaByXzZh35p2cg282E5pekAhQAY_Ji3VpXL&_nc_ohc=C_SwbrdtXLoQ7kNvgE9dspS&_nc_zt=23&_nc_ht=z-p3-scontent.fpnh5-1.fna&oh=00_AYDkqwWNJz7rXBHvJEIN5h3rXH_4W-1d_Psr-cOvMM0CMQ&oe=66B69A64"
            width={290}
            height={250}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "បងៗដែលមានគម្រោងមកលេងឧទ្យានបោះតង់ !! មើលអោយហើយទៅទំនងសប្បាយរីករាយដល់ហើយ 🥹🫶🏻🏕️🍃",
      description:
        "បោះតង់បង្កាត់ភ្លើងអាំងសាច់ញាំ ដាក់ឡាបយ៉េជាក់ៗនិយាយគ្នាលេងជុំបងប្អូន គ្រួសារ មិត្តភក្តិ សង្សារអីចឹងហាសសប្បាយកប់ៗ 🍻 🍖 😍",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="https://z-p3-scontent.fpnh5-2.fna.fbcdn.net/v/t39.30808-6/448656874_445235935121865_3166320948652449355_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEE3KjPQYcZrcUpnjLpz0j3IPo1d88fYHYg-jV3zx9gdglaBAFjl87NcRxrEALfjaEaiQpghZ5RPlA84PPQNy74&_nc_ohc=2HUnw6PUh2EQ7kNvgF2ShTU&_nc_zt=23&_nc_ht=z-p3-scontent.fpnh5-2.fna&oh=00_AYBB2JjwZzyCSyffh_yWpNGYc0AmKvs8ePbO9gL01RMvXg&oe=66B6A9B4"
            width={290}
            height={250}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
  ];

  return (
    <>
      <HeroParallax products={products}/>
      <div className="sm:-mt-[65rem] xl:-mt-[60rem]"></div>
      <FeaturesSection/>
      <StickyScroll content={content} />
        <InfiniteMovingCards className="flex items-center min-w-full"
          items={items.map((item) => ({
            quote: item.title,
            name: item.name,
            title: item.title,
          }))}
        />
    </>
  );
}

