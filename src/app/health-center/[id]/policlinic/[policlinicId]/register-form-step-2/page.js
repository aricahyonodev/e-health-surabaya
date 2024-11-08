import { DetailRow } from "../register-form-step-1/page";

export default function Page() {
  return (
    <>
      <article className="bg-white rounded-md pt-6 pb-14 px-4 shadow-md">
        <h1 className="text-center text-lg font-semibold underline mb-4">
          Pendaftaran Poli Umum
        </h1>
        <DetailRow
          title={"Tanggal Layanan"}
          detail={"Selasa, 29 Oktober 2024"}
        />
        <DetailRow
          title={"Sarana Kesehatan"}
          detail={"Puskesmas Tanjungsari"}
        />
        <DetailRow title={"Poli "} detail={"Umum"} />
        <DetailRow title={"Penjamin "} detail={"BPJS Kesehatan"} />
        <DetailRow title={"NIK "} detail={"356181212707980002"} />
        <DetailRow title={"Nama "} detail={"Ari Cahyono"} />
        <p className="mt-8 text-xs text-gray-600 font-light">
          Perhatian : pastikan kembali setiap data, sebelum menekan tombol
          lanjut
        </p>
        <button className="bg-primary px-2 py-1 text-lg w-full rounded-md text-white font-semibold">
          Daftar
        </button>
      </article>
    </>
  );
}
