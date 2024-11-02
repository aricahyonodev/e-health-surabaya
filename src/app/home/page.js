import Card from "../components/card";

const services = [
    {
        title : "Rumah Sakit",
        body : "Untuk mendaftar antrian ke Rumah Sakit"
    },
    {
        title : "Puskesmas",
        body : "Untuk mendaftar antrian ke Puskesmas"
    },
];

const anotherServices = [
  {
    title: "Pembatalan Antrian",
    body: "Untuk Pembatalan Tiket Antrian Anda!",
  },
  {
    title: "Cetak Ulang",
    body: "Untuk Cetak Ulang Tiket Antrian Anda!",
  },
];

export default function page() {
  return (
    <>
      <section id="services" className="flex-row space-y-2">
        <p className="font-bold text-lg">Layanan</p>
        {services.map((service, i) => (
          <Card key={'service' + i} {...service} />
        ))}
      </section>

      <section id="anotherServices" className="flex-row space-y-2">
        <p className="font-bold text-lg mt-6">Pembatalan Atau Cetak Ulang</p>
        {anotherServices.map((anotherService, i) => (
          <Card key={"another-service-"+ i} {...anotherService} />
        ))}
      </section>
    </>
  );
}
