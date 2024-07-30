import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";

export default function Comment() {
  const [isFollowed, setIsFollowed] = React.useState(false);
  return (
    <Card className="xl:w-[800px] ">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src="https://z-p3-scontent.fpnh5-5.fna.fbcdn.net/v/t39.30808-1/321799543_565982488343066_4505793326904711921_n.jpg?stp=dst-jpg_p200x200&_nc_cat=111&ccb=1-7&_nc_sid=f4b9fd&_nc_eui2=AeH6E5VSriI3j42guLjy2UvcW-2-1P5bpRNb7b7U_lulE9gh3Nxl7-euNsMktRGB2pN5wp1Ih2QxqbXrtjm_nS81&_nc_ohc=mdfYZyA1sAkQ7kNvgGSJ7x9&_nc_ht=z-p3-scontent.fpnh5-5.fna&oh=00_AYBVi4sO-wytvkiQMtJsUOZAiyYu3rWRFogHx014D6bABg&oe=66A43C46" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">ឧទ្យានបោះតង់ CampingPark</h4>
            <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5>
          </div>
        </div>
        <Button
          className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p className="dark:text-white ">
          អ្នកមកលេងឧទ្យានបោះតង់ ឃ្ចូតៗ អរអរហាស..! មើលទៅក៏ដឹងថាសប្បាយរីករាយប៉ុណ្ណាដែល 🌲🍃🫶🏻
          Mention គ្នាយើងក្នុងរូបអោយបានឃើញផងណា !! នៅមានរូបទៀតបងៗចាំបន្តិចសិនណា
        </p>
        <span className="pt-2">
          #TreehouseKirirom #CampingPrakKH #ឧទ្យានបោះតង់ #ឧទ្យានជាតិគីរីរម្យ
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">4</p>
          <p className=" text-default-400 text-small">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">97.1K</p>
          <p className="text-default-400 text-small">Followers</p>
        </div>
      </CardFooter>
    </Card>
  );
}
