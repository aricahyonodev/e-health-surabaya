import { listHospital } from "@/app/datas/hospital";
import Image from "next/image";

const policlinic = [
  {
    id: 1,
    img: "public.svg",
    title: "Umum",
  },
  {
    id: 2,
    img: "internal-medicine.svg",
    title: "Penyakit Dalam",
  },
  {
    id: 3,
    img: "internal-medicine.svg",
    title: "Penyakit Dalam (Sore)",
  },
  { id: 4, img: "nutrition.svg", title: "Gizi" },
  {
    id: 5,
    img: "children.svg",
    title: "Anak",
  },
  // Spesialis Gigi
  { id: 6, img: "tooth.svg", title: "Gigi" },
  { id: 7, img: "general-dental-surgery.svg", title: "Gigi Bedah Umum" },
  { id: 8, img: "endodontis.svg", title: "Konservasi Gigi (Endodontis)" },
  { id: 9, img: "pendodontis.svg", title: "Gigi Anak (Pendodontis)" },
  // Spesialis Bedah
  { id: 10, img: "general-surgery.svg", title: "Bedah Umum" },
  { id: 11, img: "plastic-surgery.svg", title: "Bedah Plastik" },
  { id: 12, img: "tkv-surgery.svg", title: "Bedah TKV" },

  { id: 7, img: "psikologi.svg", title: "Psikologi" },
  { id: 8, img: "traditional-medicine.svg", title: "Batra" },
];

const listPoliclinicGroup = [
  {
    policlinicGroupId: 1,
    name: "General and Family Medicine",
    listPoliclinic: [
      policlinic[0],
      policlinic[1],
      policlinic[2],
      policlinic[3],
      policlinic[4],
    ],
  },
  {
    policlinicGroupId: 2,
    name: "Spesialis Gigi",
    listPoliclinic: [
      policlinic[5],
      policlinic[6],
      policlinic[7],
      policlinic[8],
    ],
  },
  {
    policlinicGroupId: 3,
    name: "Spesialis Bedah",
    listPoliclinic: [
      policlinic[10],
      policlinic[11],
      policlinic[12],
    ],
  },
  // {
  //     policlinicGroupId: 4,
  //     name: "Spesialis Kesehatan Sistem",
  //     list: [policlinic[0]],
  //   },
  //   {
  //     policlinicGroupId: 5,
  //     name: "Kesehatan Mental & Rehabilitas",
  //     list: [policlinic[0]],
  //   },
];

function Card({ id, img, title}) {
    return (
      <article
        className={
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
    );
}

export default async function Page({params}) {
    const hospitalId = ( await params).hospitalId;
    const hospital = listHospital.filter((hospital)=> hospital.hospitalId == hospitalId)[0];
    
  return (
    <section id="select-health-center-area">
      <p className="font-semibold text-lg ">Pilih Poli - {hospital.name} </p>
      <input
        placeholder="Cari Puskesmas"
        className="rounded-md bg-white border-2 focus:outline-none py-1 w-full mb-1 mt-2 px-2"
      />
      <div className="flex flex-col">
        {listPoliclinicGroup.map(
          ({ policlinicGroupId, name, listPoliclinic }, i) => (
            <>
              <p className="mt-5 " key={policlinicGroupId}>
                {i + 1}. {name}
              </p>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {listPoliclinic.map((policlinic) => (
                  <Card key={policlinic.id} {...policlinic} />
                ))}
              </div>
            </>
          )
        )}
      </div>
    </section>
  );
}


