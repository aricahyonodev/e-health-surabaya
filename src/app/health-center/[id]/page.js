import Image from "next/image";
import Policlinic from "./components/policlinic";
const policlinic = [
  { id: 1, img: "public.svg", title: "Umum" },
  { id: 2, img: "tooth.svg", title: "Gigi" },
  { id: 3, img: "kia.svg", title: "Kesehatan Ibu & Anak (KIA)" },
  { id: 4, img: "older-people.svg", title: "Lansia" },
  { id: 5, img: "nutrition.svg", title: "Gizi" },
  { id: 6, img: "sanitation.svg", title: "Sanitasi" },
  { id: 7, img: "psikologi.svg", title: "Psikologi" },
  { id: 8, img: "traditional-medicine.svg", title: "Batra" },
];

const data = {
  healthCenter: "Puskesmas Tanjungsari",
  policlinic: policlinic,
};


export default async function Page() {
  const { healthCenter, policlinic } = data;
  return (
    <section id="select-health-center-area">
      <p className="font-semibold text-lg">Pilih Poli - {healthCenter}</p>
      <input
        placeholder="Cari Puskesmas"
        className="rounded-md bg-white border-2 focus:outline-none py-1 w-full mb-6 mt-2 px-2"
      />
      <Policlinic data={policlinic}/>
    </section>
  );
}
