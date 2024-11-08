import Image from "next/image";

const listHospital = [
  {
    name: "RSUD  Dr. Mohammad Soewandhie",
    address: "Jl. Tambak Rejo No.45-47, Tambakrejo Simokerto Surabaya",
    image: "rsud-dr-soewandhie.png",
  },
  {
    name: "RSUD Bhakti Darma Husada",
    address: "Jl. Raya Kendung 115 - 117, Sememi Benowo Surabaya",
    image: "rsud-bdh.png",
  },
];

function Card({ name, address, image }) {
  return (
    <article className="hover:border-2 hover:shadow-lg hover:border-primary rounded-lg bg-white pb-6 cursor-pointer border-2">
      <Image
        src={"/assets/images/" + image}
        width={400}
        height={400}
        alt={name}
        className="w-full"
      />
      <div className="p-2">
        <h1 className="font-semibold text-lg">{name}</h1>
        <p className="font-light text-sm ">{address}</p>
      </div>
    </article>
  );
}

export default function Page() {
  return (
    <section id="select-health-center-area">
      <p className="font-semibold text-lg mb-2">
        Pilih Rumah Sakit Umum Daerah
      </p>
      <div className="flex flex-col space-y-3">
        {listHospital.map((hospital) => (
          <Card key={hospital.name} {...hospital} />
        ))}
      </div>
    </section>
  );
}
