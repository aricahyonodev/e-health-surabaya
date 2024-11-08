import Link from "next/link";
import Card from "../components/card";

const services = [
  {
    title: "Rumah Sakit",
    body: "Untuk mendaftar antrian ke Rumah Sakit",
    link: "/hospital",
  },
  {
    title: "Puskesmas",
    body: "Untuk mendaftar antrian ke Puskesmas",
    link: "/health-center/select-area",
  },
];

const anotherServices = [
  {
    title: "Pembatalan Antrian",
    body: "Untuk Pembatalan Tiket Antrian Anda!",
    link : ''
  },
  {
    title: "Cetak Ulang",
    body: "Untuk Cetak Ulang Tiket Antrian Anda!",
    link : ''
  },
];

export default function page() {
  return (
    <>
      <section id="services" className="flex-row space-y-2">
        <p className="font-bold text-lg">Layanan</p>
        {services.map((service, i) => (
          <Link className="block" key={"service" + i}  href={service.link}>
            <Card {...service} />
          </Link>
        ))}
      </section>

      <section id="anotherServices" className="flex-row space-y-2">
        <p className="font-bold text-lg mt-6">Pembatalan Atau Cetak Ulang</p>
        {anotherServices.map((anotherService, i) => (
          <Card key={"another-service-" + i} {...anotherService} />
        ))}
      </section>
    </>
  );
}
