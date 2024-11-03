import Image from "next/image";

const datas = [
  {
    id: 1,
    area: "SURABAYA UTARA",
    list: [
      "Bulak Banteng",
      "Dupak",
      "Kenjeran",
      "Krembangan Selatan",
      "Moro Krembangan",
      "Pegirian",
      "Perak Timur",
      "Sawah Pulo",
      "Sidotopo",
      "Sidotopo Wetan",
      "Tambak Wedi",
      "Tanah Kali Kedinding",
      "Wonokusumo",
    ],
  },
  {
    id: 2,
    area: "SURABAYA PUSAT",
    list: [
      "Dr. Soetomo",
      "Gundih",
      "Kedungdoro",
      "Ketabang",
      "Peneleh",
      "Simolawang",
      "Tambakrejo",
      "Tembok Dukuh",
    ],
  },
  {
    id: 3,
    area: "SURABAYA BARAT",
    list: ["Asemrowo", "Balongsari", "Bangkingan", "Benowo", "Jeruk", "Lidah Kulon", "Lontar", "Made", "Manukan Kulon", "Sememi", "Simomulyo", "Tanjungsari"],
  },
  {
    id: 4,
    area: "SURABAYA TIMUR",
    list: ["Gading", "Gunung Anyar", "Kalijudan", "Kali Rungkut", "Keputih", "Klampis Ngasem", "Medokan Ayu, Menur", "Mojo", "Mulyorejo", "Pacarkeling", "Pucangsewu", "Rangkah", "Tenggilis"],
  },
  {
    id: 5,
    area: "SURABAYA SELATAN",
    list: ["Balas Klumprik", "Banyu Urip", "Dukup Kupang", "Gayungan", "Jagir", "Jemursari", "Kebonsari", "Kedurus", "Ngangel Rejo", "Pakis", "Putat Jaya", "Sawahan", "Sidosermo", "Siwalankerto", "Wiyung", "Wonokromo"],
  },
];

function Card({title}) {
  return (
    <article className="text-center hover:bg-primary rounded-lg bg-white px-4 pt-4 pb-6 cursor-pointer border-2">
      <Image className="inline-block" width={50} height={50} src={"/assets/icons/health-center.svg"} alt="ikon puskesmas" />
      <h1 className="font-medium mt-1 ">Puskesmas {title}</h1>
    </article>
  );
}

export default async function Page({params}) {
    const id = ( await params).id
    const listHealthCenter = datas.filter((dt) => dt.id == id)
    const { area, list } = listHealthCenter[0];
    
    return (
      <section id="select-health-center-area" >
        <p className="font-semibold text-lg">Pilih Puskesmas - {area}</p>
        <input placeholder="Cari Puskesmas" className="rounded-md bg-white border-2 focus:outline-none py-1 w-full mb-6 mt-2 px-2"/>
        <div className="grid grid-cols-2 gap-2">
          {list.map((data, i) => (
            <Card key={"health-center" + i} title={data} />
          ))}
        </div>
      </section>
    );
}