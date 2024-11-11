import { RadioButtonAssurance } from "@/app/health-center/[id]/policlinic/[policlinicId]/component/radiobutton-assurance";
import Link from "next/link";

export function DetailRow({ title, detail }) {
  return (
    <div className="flex flex-col mb-3">
      <p className="font-semibold">{title} </p>
      <p className="font-light">{detail}</p>
    </div>
  );
}

export function DetailRowWithChildren({ title, children }) {
  return (
    <div className="flex flex-col  mb-3">
      <p className="font-semibold">{title}</p>
      <div className=""> {children}</div>
    </div>
  );
}

const radioButtonData = [
  {
    id: "generalAssurance",
    name: "assurance",
    value: "Umum/Asuransi Lain",
    title: "Umum/Asuransi Lain",
  },
  {
    id: "bpjsAssurance",
    name: "assurance",
    value: "BPJS Kesehatan",
    title: "BPJS Kesehatan",
  },
];

function PopUp() {
  return (
    <article className="flex flex-col items-center border-2 z-20 bg-white py-6 px-12 rounded-t-xl fixed bottom-0 right-0 left-0">
      <article className="text-center bg-white mt-3 py-4">
        <h1 className="font-semibold text-lg">
          Apakah Jenis Penjamin sudah sesuai ?
        </h1>
        <p className="mt-3 mb-5 text-lg ">BPJS Kesehatan</p>
        <div className="flex flex-col space-y-2">
          <Link
            href={"/hospital/2/policlinic/2/register-form-step-2"}
            className="w-full inline-block"
          >
            <button className="w-full  p-2 border-2 rounded-md bg-primary text-white font-medium">
              Ya
            </button>
          </Link>
          <button className="p-2 ">Tidak</button>
        </div>
      </article>
    </article>
  );
}

export default function Page() {
  return (
    <>
      <article className="bg-white rounded-md pt-6 pb-14 px-4 shadow-md">
        <h1 className="text-center text-lg font-semibold underline mb-4">
          Pendaftaran Poli Penyakit Dalam
        </h1>
        <DetailRow
          title={"Tanggal Layanan"}
          detail={"Selasa, 29 Oktober 2024"}
        />
        <DetailRow
          title={"Sarana Kesehatan"}
          detail={"RSUD Bhakti Dharma Husada"}
        />
        <DetailRow title={"Poli "} detail={"Penyakit Dalam"} />
        <DetailRowWithChildren title={"Penjamin "}>
          <div className="flex gap-3">
            <RadioButtonAssurance datas={radioButtonData} />
          </div>
        </DetailRowWithChildren>
        <DetailRowWithChildren title={"NIK"}>
          <input
            placeholder="Masukkan NIK Anda"
            className="rounded-md bg-white border-2 focus:outline-none py-1 w-full mt-2 px-2"
          />
        </DetailRowWithChildren>

        <p className="mt-8 text-xs text-gray-600 font-light">
          Perhatian : pastikan kembali setiap data, sebelum menekan tombol
          lanjut
        </p>
        <button className="bg-primary px-2 py-1 text-lg w-full rounded-md text-white font-semibold">
          Lanjut
        </button>
      </article>

      <PopUp />
    </>
  );
}
