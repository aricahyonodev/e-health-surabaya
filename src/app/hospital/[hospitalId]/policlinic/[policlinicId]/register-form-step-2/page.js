import Link from "next/link";
import { DetailRow } from "../register-form-step-1/page";

export default function Page() {
  return (
    <>
      <article className="bg-white rounded-md pt-6 pb-14 px-4 shadow-md">
        <h1 className="text-center text-lg font-semibold underline mb-4">
          Pendaftaran Penyakit Dalam
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
        <DetailRow title={"Penjamin "} detail={"BPJS Kesehatan"} />
        <DetailRow title={"NIK "} detail={"356181212707980002"} />
        <DetailRow title={"Nama "} detail={"Ari Cahyono"} />
        <p className="mt-8 text-xs text-gray-600 font-light">
          Perhatian : pastikan kembali setiap data, sebelum menekan tombol
          lanjut
        </p>
        <Link href={"/hospital/12/policlinic/4/queue-ticket"}>
          <button className="cursor-pointer bg-primary px-2 py-1 text-lg w-full rounded-md text-white font-semibold">
            Daftar
          </button>
        </Link>
      </article>
    </>
  );
}
