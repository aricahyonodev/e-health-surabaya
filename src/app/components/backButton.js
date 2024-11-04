'use client'

import { usePathname, useRouter } from "next/navigation";
import { TiArrowBack } from "react-icons/ti";

export default function BackButton() {
    const router = useRouter()
    const pathname = usePathname();
    const isHomepage = pathname === "/home"
    
    return (
      <>
        {!isHomepage && (
          <button
            onClick={() => router.back()}
            className="text-center rounded-full w-20 h-20 text-white bg-[#FB6B66] text-sm font-medium  fixed z-10 bottom-8 right-6"
          >
            <TiArrowBack className="text-3xl inline-block" />
            <p className="-mt-1 text-sm">Kembali</p>
          </button>
        )}
      </>
    );
}