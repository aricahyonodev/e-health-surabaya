import Image from "next/image";
import Link from "next/link";
import { listHospital } from "../datas/hospital";

function Card({ name, address, image, hospitalId }) {
  return (
    <Link href={"/hospital/" + hospitalId}>
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
    </Link>
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
          <Card key={hospital.id} {...hospital} />
        ))}
      </div>
    </section>
  );
}
