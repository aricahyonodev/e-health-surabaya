import { QrCode } from "@/app/health-center/[id]/policlinic/[policlinicId]/queue-ticket/qrcode";

const data = {
  healthCenter: "RSUD Bhakti Dharma Husada",
  address: "Jl. Raya Kendung 115 - 117, Sememi Benowo Surabaya",
  telp: "Telp: (031)7409135",
  policlinic: "poli penyakit dalam",
  queueTicket: 3,
  nik: "3578272707980002",
  patientName: "Ari Cahyono",
  date: "29 Oktober 2024",
  time: "Jam 10:11:46 - 10:26:46",
  penjamin: "BPJS Kesehatan",
};

export default function Page() {
  const qrCodeData = `policlinic:${data.policlinic}/queueTicket:${data.queueTicket}/NIK:${data.nik}/patientName:${data.patientName}`;

  return (
    <section id="queue-ticket">
      <div className="bg-white rounded-lg px-4 py-4">
        <header className="text-center ">
          <h1 className="text-lg uppercase font-semibold">
            {data.healthCenter}
          </h1>
          <p>{data.address}</p>
          <p>{data.telp}</p>
          <hr className="mt-3" />
        </header>
        <main className="py-5 text-center">
          <p className="uppercase font-semibold text-lg">{data.policlinic}</p>
          <p className="font-bold text-6xl my-2">{data.queueTicket}</p>
          <p className="font-semibold">A0D67</p>
          <p className="font-semibold">{data.nik}</p>
          <p className="font-semibold">{data.patientName}</p>
          <p>Hadir Pada :</p>
          <p className="font-semibold">
            {data.date} {data.time}
          </p>
          <p>Kode Pasien : 11253</p>
          <p>Penjaminan : {data.penjamin}</p>
          <QrCode value={qrCodeData} />
        </main>
        <footer className="text-xs font-medium text-gray-500">
          <p>
            **Dimohon datang sesuai jam yg tertera dalam antrean **pastikan
            jenis penjaminan sudah sesuai, Perubahan jenis penjaminan no antrian
            tidak sesuai
          </p>
          <p>
            ** Untuk Pasien Baru silakan melakukan registrasi di loket inforamsi
          </p>
          <p>
            **pastikan jenis penjaminan sudah sesuai, Perubahan jenis penjaminan
            no antrian tidak sesuai
          </p>
        </footer>
      </div>

      <div className="mt-5">
        <button className="cursor-pointer bg-primary px-2 py-1 text-lg w-full rounded-md text-white font-medium">
          Unduh / Download
        </button>
      </div>
    </section>
  );
}
