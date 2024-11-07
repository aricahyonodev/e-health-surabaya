import Image from "next/image";
import Link from "next/link";

const datas = [
  {
    id: 1,
    area: "Surabaya Utara",
    list: [
      { id: 1, title: "Puskesmas Bulak Banteng" },
      { id: 2, title: "Puskesmas Dupak" },
      { id: 3, title: "Puskesmas Kenjeran" },
      { id: 4, title: "Puskesmas Krembangan Selatan" },
      { id: 5, title: "Puskesmas Moro Krembangan" },
      { id: 6, title: "Puskesmas Pegirian" },
      { id: 7, title: "Puskesmas Perak Timur" },
      { id: 8, title: "Puskesmas Sawah Pulo" },
      { id: 9, title: "Puskesmas Sidotopo" },
      { id: 10, title: "Puskesmas Sidotopo Wetan" },
      { id: 11, title: "Puskesmas Tambak Wedi" },
      { id: 12, title: "Puskesmas Tanah Kali Kedinding" },
      { id: 13, title: "Puskesmas Wonokusumo" },
    ],
  },
  {
    id: 2,
    area: "Surabaya Pusat",
    list: [
      { id: 1, title: "Puskesmas Dr. Soetomo" },
      { id: 2, title: "Puskesmas Gundih" },
      { id: 3, title: "Puskesmas Kedungdoro" },
      { id: 4, title: "Puskesmas Ketabang" },
      { id: 5, title: "Puskesmas Peneleh" },
      { id: 6, title: "Puskesmas Simolawang" },
      { id: 7, title: "Puskesmas Tambakrejo" },
      { id: 8, title: "Puskesmas Tembok Dukuh" },
    ],
  },
  {
    id: 3,
    area: "Surabaya Barat",
    list: [
      { id: 1, title: "Puskesmas Asemrowo" },
      { id: 2, title: "Puskesmas Balongsari" },
      { id: 3, title: "Puskesmas Bangkingan" },
      { id: 4, title: "Puskesmas Benowo" },
      { id: 5, title: "Puskesmas Jeruk" },
      { id: 6, title: "Puskesmas Lidah Kulon" },
      { id: 7, title: "Puskesmas Lontar" },
      { id: 8, title: "Puskesmas Made" },
      { id: 9, title: "Puskesmas Manukan Kulon" },
      { id: 10, title: "Puskesmas Sememi" },
      { id: 11, title: "Puskesmas Simomulyo" },
      { id: 12, title: "Puskesmas Tanjungsari" },
    ],
  },
  {
    id: 4,
    area: "Surabaya Timur",
    list: [
      { id: 1, title: "Puskesmas Gading" },
      { id: 2, title: "Puskesmas Gunung Anyar" },
      { id: 3, title: "Puskesmas Kalijudan" },
      { id: 4, title: "Puskesmas Kali Rungkut" },
      { id: 5, title: "Puskesmas Keputih" },
      { id: 6, title: "Puskesmas Klampis Ngasem" },
      { id: 7, title: "Puskesmas Medokan Ayu, Menur" },
      { id: 8, title: "Puskesmas Mojo" },
      { id: 9, title: "Puskesmas Mulyorejo" },
      { id: 10, title: "Puskesmas Pacarkeling" },
      { id: 11, title: "Puskesmas Pucangsewu" },
      { id: 12, title: "Puskesmas Rangkah" },
      { id: 13, title: "Puskesmas Tenggilis" },
    ],
  },
  {
    id: 5,
    area: "Surabaya Selatan",
    list: [
      { id: 1, title: "Puskesmas Balas Klumprik" },
      { id: 2, title: "Puskesmas Banyu Urip" },
      { id: 3, title: "Puskesmas Dukup Kupang" },
      { id: 4, title: "Puskesmas Gayungan" },
      { id: 5, title: "Puskesmas Jagir" },
      { id: 6, title: "Puskesmas Jemursari" },
      { id: 7, title: "Puskesmas Kebonsari" },
      { id: 8, title: "Puskesmas Kedurus" },
      { id: 9, title: "Puskesmas Ngangel Rejo" },
      { id: 10, title: "Puskesmas Pakis" },
      { id: 11, title: "Puskesmas Putat Jaya" },
      { id: 12, title: "Puskesmas Sawahan" },
      { id: 13, title: "Puskesmas Sidosermo" },
      { id: 14, title: "Puskesmas Siwalankerto" },
      { id: 15, title: "Puskesmas Wiyung" },
      { id: 16, title: "Puskesmas Wonokromo" },
    ],
  },
];


function Card({title}) {
  return (
    <article className="text-center hover:border-2 hover:shadow-lg hover:border-primary rounded-lg bg-white px-4 pt-4 pb-6 cursor-pointer border-2">
      <Image
        className="inline-block"
        width={50}
        height={50}
        src={"/assets/icons/health-center.svg"}
        alt="ikon puskesmas"
      />
      <h1 className="font-medium mt-1 ">{title}</h1>
    </article>
  );
}

export default async function Page({params}) {
    const id = ( await params).id
    const listHealthCenter = datas.filter((dt) => dt.id == id)
    const { area, list } = listHealthCenter[0];
    
    return (
      <section id="select-health-center-area">
        <p className="font-semibold text-lg">
          Pilih Puskesmas - <span className="">{area}</span>
        </p>
        <input
          placeholder="Cari Puskesmas"
          className="rounded-md bg-white border-2 focus:outline-none py-1 w-full mb-6 mt-2 px-2"
        />
        <div className="grid grid-cols-2 gap-2">
          {list.map(({title, id}, i) => (
            <Link key={"health-center" + i} href={"/health-center/" + id}>
              <Card title={title} />
            </Link>
          ))}
        </div>
      </section>
    );
}