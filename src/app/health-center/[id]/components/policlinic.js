"use client";

import Image from "next/image";
import { useState } from "react";

function PopUp({ id, title, img, onRemove }) {
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
        <button className="py-1 w-full bg-primary rounded-md mb-3 text-white font-medium">
          Lanjut
        </button>
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

function Card({ id, title, img, onClick, selectedPoliclinic }) {
  const handleClick = () => onClick({ id, title, img });
  const isSelected = selectedPoliclinic?.id == id;
  const bgPrimary = isSelected
    ? "border-2 shadow-lg border-primary"
    : "bg-white";

  return (
    <button onClick={handleClick}>
      <article
        className={
          bgPrimary +
          " bg-white hover:border-2 hover:shadow-lg hover:border-primary  text-center  rounded-lg  px-4 pt-4 pb-6 cursor-pointer border-2 "
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

// Main
export default function Policlinic({ data }) {
  const [selectedPoliclinic, setselectedPoliclinic] = useState(null);

  function handleClick(params) {
    setselectedPoliclinic(params);
  }

  function handleRemovePoliclinic() {
    setselectedPoliclinic(null);
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        {data.map(({ id, title, img }) => (
          <Card
            key={"policlinic" + id}
            id={id}
            title={title}
            img={img}
            onClick={handleClick}
            selectedPoliclinic={selectedPoliclinic}
          />
        ))}
      </div>

      {/* Pop Up show when after select Policlinic*/}
      {selectedPoliclinic && (
        <PopUp {...selectedPoliclinic} onRemove={handleRemovePoliclinic} />
      )}
    </>
  );
}
