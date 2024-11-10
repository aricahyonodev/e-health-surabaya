'use client'

import { listPoliclinicGroup } from "@/app/datas/hospital";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function PopUp({ id: policlinicId, title, img, onRemove }) {
  const path = usePathname();
  
  return (
    <article className="flex flex-col items-center border-2 z-20 bg-white py-6 px-12 rounded-t-xl fixed bottom-0 right-0 left-0">
      <header>
        <h1 className="font-medium">Anda Memilih Poli</h1>
      </header>

      <main className="text-center flex flex-col items-center">
        <div className="w-28 h-28 flex justify-center items-center mt-2 mb-1 rounded-full bg-white px-4 pt-4 pb-6  border-2">
          <Image
            width={50}
            height={50}
            src={"/assets/policlinic-icons/" + img}
            alt="ikon puskesmas"
          />
        </div>

        <p className="font-medium  mb-4 capitalize">{title}</p>
      </main>
      <footer className="flex flex-col items-center justify-center w-full">
        <Link href={path +'/policlinic/' + policlinicId} className="w-full">
          <button className="py-1 w-full bg-primary rounded-md mb-3 text-white font-medium">
            Lanjut
          </button>
        </Link>
        <button
          className="py-1 w-full rounded-md font-medium "
          onClick={onRemove}
        >
          Batal
        </button>
      </footer>
    </article>
  );
}


function Card({ id, img, title, onClick, selectedPoliclinic }) {
  
  const handleClick = () => onClick({id, img, title})
   const isSelected = selectedPoliclinic?.id == id;
   const addStyle = isSelected
     ? "border-2 shadow-lg border-primary"
     : "bg-white";


  return (
    <button onClick={handleClick}>
      <article
        className={
          addStyle + " bg-white hover:border-2 hover:shadow-lg hover:border-primary  text-center  rounded-lg  px-4 pt-4 pb-6 cursor-pointer border-2 "
        }
      >
        <Image
          className="inline-block"
          width={50}
          height={50}
          src={"/assets/policlinic-icons/" + img}
          alt="ikon puskesmas"
        />
        <h1 className="font-medium mt-1 ">{title}</h1>
      </article>
    </button>
  );
}

export default function ListPoliclinic() {

  const [policlinic, setPoliclinic] = useState(null);

  function handleClick(policlinic) {
    setPoliclinic(policlinic);
  }

  function handleRemove() {
    setPoliclinic(null);
  }

    return (
      <>
        {listPoliclinicGroup.map(
          ({ policlinicGroupId, name, listPoliclinic }, i) => (
            <div key={policlinicGroupId}>
              <p className="mt-5 ">
                {i + 1}. {name}
              </p>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {listPoliclinic.map((data) => (
                  <Card key={data.id} {...data} selectedPoliclinic={policlinic} onClick={handleClick} />
                ))}
              </div>
            </div>
          )
        )}

        {policlinic && <PopUp onRemove={handleRemove} {...policlinic}/>}
      </>
    );
}

