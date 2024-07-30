"use client"
import React from 'react'
import Comment from "../components/Comment";
import { Card, CardHeader, Image } from '@nextui-org/react';
const page = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center">
        <div className="max-w-[900px] gap-2 space-y-3 grid-cols-12 px-8">
          <div className="space-y-1">
            <Image
              isBlurred
              width={800}
              src="https://z-p3-scontent.fpnh5-3.fna.fbcdn.net/v/t39.30808-6/452631163_466468236331968_6169447427506620773_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFIJPEdW2eyizCDUYbxrIFhvylQfmzl05a_KVB-bOXTlppnLEjMXe99GMwuLKYpOg8AoHgEG6cWfNAYHPRLH8QL&_nc_ohc=B47-lBC4neYQ7kNvgFG0sh8&_nc_zt=23&_nc_ht=z-p3-scontent.fpnh5-3.fna&oh=00_AYCFTVbw1qy2FEPypS7Mi3IrH5shQGwEgTQjhtjl24ga2w&oe=66A41392"
              alt="NextUI Album Cover"
            />
            <Comment />
          </div>
          <div className="space-y-1">
            <Image
              isBlurred
              width={800}
              src="https://z-p3-scontent.fpnh5-3.fna.fbcdn.net/v/t39.30808-6/452631163_466468236331968_6169447427506620773_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFIJPEdW2eyizCDUYbxrIFhvylQfmzl05a_KVB-bOXTlppnLEjMXe99GMwuLKYpOg8AoHgEG6cWfNAYHPRLH8QL&_nc_ohc=B47-lBC4neYQ7kNvgFG0sh8&_nc_zt=23&_nc_ht=z-p3-scontent.fpnh5-3.fna&oh=00_AYCFTVbw1qy2FEPypS7Mi3IrH5shQGwEgTQjhtjl24ga2w&oe=66A41392"
              alt="NextUI Album Cover"
            />
            <Comment />
          </div>
          <div className="space-y-1">
            <Image
              isBlurred
              width={800}
              src="https://z-p3-scontent.fpnh5-2.fna.fbcdn.net/v/t39.30808-6/449486521_455708230741302_5614840269922377362_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGLlPCZFsXY1TvlpByTXn-_Rakl6IXusg1FqSXohe6yDVx_3sRrR4mfEMObPAm6x5QkAkSP1me-rXaNZejgchRj&_nc_ohc=0I7J9TzeZggQ7kNvgGhcyoR&_nc_zt=23&_nc_ht=z-p3-scontent.fpnh5-2.fna&oh=00_AYBukK2ir5wLYEfBrp67HePQrMjfp-flqaB0Aa7iEUTYUg&oe=66A429F3"
              alt="NextUI Album Cover"
            />
            <Comment />
          </div>



        </div>
      </div>
    </>
  )

}

export default page;