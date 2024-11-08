import { healthCenterList } from "@/app/helpers/datas";
import Image from "next/image";
import Link from "next/link";


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
    const listHealthCenter = healthCenterList.filter((dt) => dt.id == id)
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