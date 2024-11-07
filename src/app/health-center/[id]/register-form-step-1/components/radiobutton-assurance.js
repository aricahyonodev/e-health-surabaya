"use client";
import { useState } from "react";

function RadioButton({id, name, value, title, assurance, onClick}) {
   let active = "bg-gray-300";
  if (assurance === value) {
    active = "bg-primary font-medium text-white";
  }
  return <>
      <input
        type="radio"
        className="hidden"
        id={id}
        name={name}
        value={value}
      />
      <label
       onClick={() => onClick(value)}
        className={active + " block py-2 cursor-pointer px-3 rounded-md font-medium text-center"}
        htmlFor={id}
      >
        {title}
      </label>
    </>
}

export function RadioButtonAssurance({datas}) {
  const [assurance, setAssurance] = useState("BPJS Kesehatan");
 

  return (
    <>
      {datas.map((data) => <RadioButton key={data.id} {...data} assurance={assurance} onClick={setAssurance}/>)}

    </>
  );
}
