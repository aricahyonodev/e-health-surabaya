import Link from "next/link";

const area = [
  {
    id: 1,
    title: "SURABAYA UTARA",
    body: "Puskesmas : Bulak Banteng, Dupak, Kenjeran, Krembangan Selatan, Moro Krembangan, Pegirian, Perak Timur, Sawah Pulo, Sidotopo, Sidotopo Wetan, Tambak Wedi, Tanah Kali Kedinding, Wonokusumo",
  },
  {
    id: 2,
    title: "SURABAYA PUSAT",
    body: "Puskesmas : Dr. Soetomo, Gundih, Kedungdoro, Ketabang, Peneleh, Simolawang, Tambakrejo, Tembok Dukuh",
  },
  {
    id: 3,
    title: "SURABAYA BARAT",
    body: "Puskesmas : Asemrowo, Balongsari, Bangkingan, Benowo, Jeruk, Lidah Kulon, Lontar, Made, Manukan Kulon, Sememi, Simomulyo, Tanjungsari",
  },
  {
    id: 4,
    title: "SURABAYA TIMUR",
    body: "Puskesmas : Gading, Gunung Anyar, Kalijudan, Kali Rungkut, Keputih, Klampis Ngasem, Medokan Ayu, Menur, Mojo, Mulyorejo, Pacarkeling, Pucangsewu, Rangkah, Tenggilis",
  },
  {
    id: 5,
    title: "SURABAYA SELATAN",
    body: "Puskesmas : Balas Klumprik, Banyu Urip, Dukup Kupang, Gayungan, Jagir, Jemursari, Kebonsari, Kedurus, Ngangel Rejo, Pakis, Putat Jaya, Sawahan, Sidosermo, Siwalankerto, Wiyung, Wonokromo",
  },
];


function Card({ title, body }) {
  return (
    <article className="hover:bg-primary rounded-lg bg-white px-4 pt-4 pb-6 cursor-pointer border-2">
      <h1 className="font-semibold text-lg">{title}</h1>
      <hr className="my-2"/>
      <p className="font-light text-sm ">{body}</p>
    </article>
  );
}


export default function Page() {
    return (
      <section id="select-health-center-area" className="flex-row space-y-2">
        <p className="font-bold text-lg">Pilih Wilayah Puskesmas</p>
        {area.map((data) => (
          <Link
            key={"area" + data.id}
            href={"/health-center/select-area/" + data.id}
          >
            <Card {...data} />
          </Link>
        ))}
      </section>
    );
}