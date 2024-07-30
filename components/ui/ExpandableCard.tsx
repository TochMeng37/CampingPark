"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../../hook/use-outside-click";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col  w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-full  rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
const data = [
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
  const cards = [
    {
      description:  "Camping Park",
      title: "Summertime Sadness",
      src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
      ctaText: "Visit",
      ctaLink: "https://ui.aceternity.com/templates",
      content: () => {
        return (
          <p>
            Lana Del Rey, an iconic American singer-songwriter, is celebrated for
            her melancholic and cinematic music style. Born Elizabeth Woolridge
            Grant in New York City, she has captivated audiences worldwide with
            her haunting voice and introspective lyrics. <br /> <br /> Her songs
            often explore themes of tragic romance, glamour, and melancholia,
            drawing inspiration from both contemporary and vintage pop culture.
            With a career that has seen numerous critically acclaimed albums, Lana
            Del Rey has established herself as a unique and influential figure in
            the music industry, earning a dedicated fan base and numerous
            accolades.
          </p>
        );
      },
    },
    {
      description: "Babbu Maan",
      title: "Mitran Di Chhatri",
      src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
      ctaText: "Visit",
      ctaLink: "https://ui.aceternity.com/templates",
      content: () => {
        return (
          <p>
            Babu Maan, a legendary Punjabi singer, is renowned for his soulful
            voice and profound lyrics that resonate deeply with his audience. Born
            in the village of Khant Maanpur in Punjab, India, he has become a
            cultural icon in the Punjabi music industry. <br /> <br /> His songs
            often reflect the struggles and triumphs of everyday life, capturing
            the essence of Punjabi culture and traditions. With a career spanning
            over two decades, Babu Maan has released numerous hit albums and
            singles that have garnered him a massive fan following both in India
            and abroad.
          </p>
        );
      },
    },
  
    {
      description: "Metallica",
      title: "For Whom The Bell Tolls",
      src: "https://assets.aceternity.com/demos/metallica.jpeg",
      ctaText: "Visit",
      ctaLink: "https://ui.aceternity.com/templates",
      content: () => {
        return (
          <p>
            Metallica, an iconic American heavy metal band, is renowned for their
            powerful sound and intense performances that resonate deeply with
            their audience. Formed in Los Angeles, California, they have become a
            cultural icon in the heavy metal music industry. <br /> <br /> Their
            songs often reflect themes of aggression, social issues, and personal
            struggles, capturing the essence of the heavy metal genre. With a
            career spanning over four decades, Metallica has released numerous hit
            albums and singles that have garnered them a massive fan following
            both in the United States and abroad.
          </p>
        );
      },
    },
    {
      description: "Lord Himesh",
      title: "Aap Ka Suroor",
      src: "https://assets.aceternity.com/demos/aap-ka-suroor.jpeg",
      ctaText: "Visit",
      ctaLink: "https://ui.aceternity.com/templates",
      content: () => {
        return (
          <p>
            Himesh Reshammiya, a renowned Indian music composer, singer, and
            actor, is celebrated for his distinctive voice and innovative
            compositions. Born in Mumbai, India, he has become a prominent figure
            in the Bollywood music industry. <br /> <br /> His songs often feature
            a blend of contemporary and traditional Indian music, capturing the
            essence of modern Bollywood soundtracks. With a career spanning over
            two decades, Himesh Reshammiya has released numerous hit albums and
            singles that have garnered him a massive fan following both in India
            and abroad.
          </p>
        );
      },
    },
  ];


