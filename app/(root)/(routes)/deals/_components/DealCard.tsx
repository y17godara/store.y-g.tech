import Image from "next/image";
import Link from "next/link";
import { type Product } from "@/types";

export interface DealsProps {
  id: string;
  href: string;
  bannerURL: string;
  discount: number;
  productId?: string;
  Product?: Product[];
  createdAt: string;
  updatedAt: string;
}

interface Prop {
  deal: DealsProps;
  index: number;
}

function DealCard({ deal }: Prop) {
  return (
    <>
      <div className='relative w-full max-w-sm rounded'>
        <div className='relative h-[37vh] w-full'>
          <Image
            src={deal.bannerURL}
            alt={deal.href}
            layout='fill'
            objectFit='cover'
            className='rounded-t'
          />
        </div>
      </div>
    </>
  );
}

export default DealCard;
