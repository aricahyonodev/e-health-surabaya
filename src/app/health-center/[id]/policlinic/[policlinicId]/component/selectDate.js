"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function PopUp({ dayName, date, year, month, onRemove }) {
  const pathname = usePathname();

  return (
    <article className="flex flex-col items-center border-2 z-20 bg-white py-6 px-12 rounded-t-xl fixed bottom-0 right-0 left-0">
      <header className="text-center ">
        <h1 className="font-medium mb-2 text-lg">
          Anda Memilih Tanggal Layanan <br />
          Poli Penyakit Dalam
        </h1>
      </header>

      <main className="text-center flex flex-col items-center mb-5">
        <article
          className={
            " text-center rounded-lg bg-white px-4 pt-4 pb-6 cursor-pointer border-2"
          }
        >
          <p className="font-medium">{dayName}</p>
          <p className="text-4xl font-semibold my-1">{date}</p>
          <p className="font-medium">
            {month} {year}
          </p>
          <p className="font-light text-sm">Total Pendaftar : 30 orang</p>
        </article>
      </main>
      <footer className="flex flex-col items-center justify-center w-full">
        <Link href={pathname + "/register-form-step-1"} className="w-full">
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

export function Card({ date, dayName, month, year, arrivalDate, onClick }) {
  const handleClick = () => onClick({ date, dayName, month, year });
  const isSelected = arrivalDate?.date === date;
  const isSunday = dayName === "Minggu";
  let addStyle;
  addStyle = isSelected ? "border-2 shadow-lg border-primary" : "";
  addStyle += isSunday
    ? " cursor-not-allowed bg-red-300 "
    : " bg-white hover:border-2 hover:shadow-lg hover:border-primary";
  return (
    <button disabled={isSunday} onClick={handleClick}>
      <article
        className={
          addStyle +
          "  text-center  rounded-lg px-4 pt-4 pb-6 cursor-pointer border-2"
        }
      >
        <p className="font-medium">{dayName}</p>
        <p className="text-4xl font-semibold my-1">{date}</p>
        <p className="font-medium">
          {month} {year}
        </p>
        <p className="font-light text-sm">
          {isSunday ? "Libur" : "Total Pendaftar : 30 orang"}
        </p>
      </article>
    </button>
  );
}

export default function SelectDate({ datas }) {
  const [arrivalDate, setArrivalDate] = useState(null);

  function handleClick(arrivalDate) {
    setArrivalDate(arrivalDate);
  }

  function handleRemoveArrivalDate() {
    setArrivalDate(null);
  }
  return (
    <>
      <div className="grid grid-cols-2 gap-2 mt-2">
        {datas.map((date, i) => (
          <Card
            arrivalDate={arrivalDate}
            key={i}
            {...date}
            onClick={handleClick}
            onRemove={handleRemoveArrivalDate}
          />
        ))}
      </div>

      {arrivalDate && (
        <PopUp {...arrivalDate} onRemove={handleRemoveArrivalDate} />
      )}
    </>
  );
}
