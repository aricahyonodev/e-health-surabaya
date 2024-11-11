import { generateDate } from "@/app/helpers/days";
import SelectDate from "./select-date";

export default async function Page() {
  const listDate = generateDate(40);

  return (
    <section id="select-health-center-date">
      <p className="font-semibold text-lg">
        Pilih Tanggal - <span className="">Puskesmas Tanjungsari</span>
      </p>
      <SelectDate datas={listDate} />
    </section>
  );
}
