import { listHospital, listPoliclinicGroup } from "@/app/datas/hospital";
import ListPoliclinic from "./list-policlinic";

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
        <ListPoliclinic />
      </div>
    </section>
  );
}


