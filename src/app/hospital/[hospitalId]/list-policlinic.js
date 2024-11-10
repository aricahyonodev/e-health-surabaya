'use client'

import { listPoliclinicGroup } from "@/app/datas/hospital";
import Image from "next/image";

function Card({ id, img, title }) {
  return (
    <article
      className={
        " bg-white hover:border-2 hover:shadow-lg hover:border-primary  text-center  rounded-lg  px-4 pt-4 pb-6 cursor-pointer border-2 "
      }
    >
      <Image
        className="inline-block"
        width={50}
        height={50}
        src={"/assets/policlinic-icons/" + img}
        alt="ikon puskesmas"
      />
      <h1 className="font-medium mt-1 ">{title}</h1>
    </article>
  );
}

export default function ListPoliclinic() {

  const [policlinic, setPoliclinic] = useState(null);

  function handleClick(policlinic) {
    setPoliclinic(policlinic);
  }

  // remove

    return (
      <>
        {listPoliclinicGroup.map(
          ({ policlinicGroupId, name, listPoliclinic }, i) => (
            <div key={policlinicGroupId}>
              <p className="mt-5 ">
                {i + 1}. {name}
              </p>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {listPoliclinic.map((policlinic) => (
                  <Card key={policlinic.id} {...policlinic} />
                ))}
              </div>
            </div>
          )
        )}
      </>
    );
}

