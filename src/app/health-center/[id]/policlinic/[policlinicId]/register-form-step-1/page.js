import { RadioButtonAssurance } from "./components/radiobutton-assurance";

function DetailRow({ title, detail }) {
  return (
    <div className="flex flex-col mb-3">
      <p className="font-semibold">{title} </p>
      <p className="font-light">{detail}</p>
    </div>
  );
}

function DetailRowWithChildren({ title, children }) {
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


export default function Page() {
  return (
    <article className="bg-white rounded-md pt-6 pb-14 px-4 shadow-md">
      <h1 className="text-center text-lg font-semibold underline mb-4">
        Pendaftaran Poli Umum
      </h1>
      <DetailRow title={"Tanggal Layanan"} detail={"Selasa, 29 Oktober 2024"} />
      <DetailRow title={"Sarana Kesehatan"} detail={"Puskesmas Tanjungsari"} />
      <DetailRow title={"Poli "} detail={"Umum"} />
      <DetailRowWithChildren title={"Penjamin "}>
        <div className="flex gap-3">
          <RadioButtonAssurance
            datas={radioButtonData}
          />
         
        </div>
      </DetailRowWithChildren>
      <DetailRowWithChildren title={"NIK"}>
        <input
          placeholder="Masukkan NIK Anda"
          className="rounded-md bg-white border-2 focus:outline-none py-1 w-full mt-2 px-2"
        />
      </DetailRowWithChildren>

      <p className="mt-8 text-xs text-gray-600 font-light">
        Perhatian : pastikan kembali setiap data, sebelum menekan tombol lanjut
      </p>
      <button className="bg-primary px-2 py-1 text-lg w-full rounded-md text-white font-semibold">
        Lanjut
      </button>
    </article>
  );
}
