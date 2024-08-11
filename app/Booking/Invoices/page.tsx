"use client"
import React, { useEffect } from 'react';
import { Image } from '@nextui-org/react';
import { Quicksand } from "next/font/google";
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
export const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

type Dtm = {
  id: number;
  date: string;
  clientName: string;
  totalAmount: number;
  Email: string,
  Facebook: string,
}


const Invoice: React.FC = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("fname");
  const getInvoice = async () => {
    if (!id) return;
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/show/${id}`);
      if (!response.ok) throw new Error(`Error fetching invoice: ${response.status}`);
      const data = await response.json();
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  const [data, setData] = React.useState<any>([]);
  useEffect(() => {
    getInvoice();

  }, [])
  const formatDate = (date: Date): string => {
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    const suffix = (day % 10 === 1 && day !== 11) ? 'st' :
      (day % 10 === 2 && day !== 12) ? 'nd' :
        (day % 10 === 3 && day !== 13) ? 'rd' : 'th';
    return `${month} ${day}${suffix}, ${year}`;
  };
  const today = new Date();
  const formattedDate = formatDate(today);
  const handlePrint = () => {
    window.print();
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      handlePrint();
    }, 3000);
    return () => clearTimeout(timer);
  }, [])
  return (
    <>
      <Link href='/'>
        <div className="h-screen dark:bg-white dark:text-black">
          <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto', fontFamily: 'Arial, sans-serif' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px' }}>
              <div>

                <Image
                  src="https://z-p3-scontent.fpnh5-5.fna.fbcdn.net/v/t39.30808-6/321799543_565982488343066_4505793326904711921_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH6E5VSriI3j42guLjy2UvcW-2-1P5bpRNb7b7U_lulE9gh3Nxl7-euNsMktRGB2pN5wp1Ih2QxqbXrtjm_nS81&_nc_ohc=q7UOY5yWVwkQ7kNvgFuW6G7&_nc_zt=23&_nc_ht=z-p3-scontent.fpnh5-5.fna&oh=00_AYBTRxf0WQipemfN2-SF1G778FSD9Ha6oAd-D-qSj8V6rg&oe=66BE10C4"
                  width={100}
                  height={100}
                  className="h-full w-full object-cover"
                  alt="linear board demo"
                />
              </div>
              <div style={{ textAlign: 'right' }}>
                <p className={quicksand.className}>Camping Park</p>
                <p className={quicksand.className}>ស្រុក ភ្នំស្រួច</p>
                <p className={quicksand.className}>Speu, Cambodia 12402</p>
                <p className={quicksand.className}>campingpark@gmail.com</p>
              </div>
            </div>

            <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>{name}</h1>

            <p>Invoice Date: <strong>{formattedDate}</strong></p>
            <p>Invoice No: <strong>1</strong></p>

            <table style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #ccc', textAlign: 'left' }}>
                  <th>QTY</th>
                  <th>DESCRIPTION</th>
                  <th style={{ textAlign: 'right' }}>PRICE</th>
                  <th style={{ textAlign: 'right' }}>SUBTOTAL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>{data.title}</td>
                  <td style={{ textAlign: 'right' }}>{data.price} $</td>
                  <td style={{ textAlign: 'right' }}>{data.price} $</td>
                </tr>
              </tbody>
            </table>

            <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <p><strong>PAYMENT INFO</strong></p>
                <p>Account No: 123567744</p>
                <p>Routing No: 1</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <p><strong>DUE BY</strong></p>
                <p>{formattedDate}</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p><strong>TOTAL DUE</strong></p>
                <p style={{ fontSize: '24px', color: 'red' }}>{data.price} $</p>
              </div>
            </div>
            <footer style={{ marginTop: '50px', borderTop: '1px solid #ccc', paddingTop: '20px', textAlign: 'center' }}>
              <p>Thank you Toch Meng</p>
              <p>campingpark@gmail.com | +855 975649045 | campingpakr.com</p>
            </footer>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Invoice;
