export const listHospital = [
  {
    hospitalId: 1,
    name: "RSUD  Dr. Mohammad Soewandhie",
    address: "Jl. Tambak Rejo No.45-47, Tambakrejo Simokerto Surabaya",
    image: "rsud-dr-soewandhie.png",
  },
  {
    hospitalId: 2,
    name: "RSUD Bhakti Darma Husada",
    address: "Jl. Raya Kendung 115 - 117, Sememi Benowo Surabaya",
    image: "rsud-bdh.png",
  },
];

const listPoliclinic = [
  {
    id: 1,
    img: "public.svg",
    title: "Umum",
  },
  {
    id: 2,
    img: "internal-medicine.svg",
    title: "Penyakit Dalam",
  },
  {
    id: 3,
    img: "internal-medicine.svg",
    title: "Penyakit Dalam (Sore)",
  },
  { id: 4, img: "nutrition.svg", title: "Gizi" },
  {
    id: 5,
    img: "children.svg",
    title: "Anak",
  },
  // Spesialis Gigi
  { id: 6, img: "tooth.svg", title: "Gigi" },
  { id: 7, img: "general-dental-surgery.svg", title: "Gigi Bedah Umum" },
  { id: 8, img: "endodontis.svg", title: "Konservasi Gigi (Endodontis)" },
  { id: 9, img: "pendodontis.svg", title: "Gigi Anak (Pendodontis)" },

  // Spesialis Bedah
  { id: 10, img: "general-surgery.svg", title: "Bedah Umum" },
  { id: 11, img: "plastic-surgery.svg", title: "Bedah Plastik" },
  { id: 12, img: "tkv-surgery.svg", title: "Bedah TKV" },

  //Spesialis Kesehatan Sistem
  { id: 13, img: "psikologi.svg", title: "Jantung" },
  { id: 14, img: "psikologi.svg", title: "THT (Telinga, Hidung, Tenggorokan)" },
  { id: 15, img: "psikologi.svg", title: "Mata" },
  { id: 16, img: "psikologi.svg", title: "Paru" },
  { id: 17, img: "psikologi.svg", title: "Kulit dan Kelamin" },
  { id: 18, img: "psikologi.svg", title: "Urologi" },
  { id: 19, img: "psikologi.svg", title: "Obgyn (Obstetri dan Ginekologi)" },
  { id: 20, img: "psikologi.svg", title: "Syaraf" },

  //Kesehatan Mental & Rehabilitas
  { id: 21, img: "mental-health.svg", title: "Kesehatan Jiwa" },
  { id: 22, img: "psikologi.svg", title: "Psikologi" },
  { id: 23, img: "medical-rehabilitation.svg", title: "Rehabilitas Medik" },
  {
    id: 24,
    img: "vct.svg",
    title: "VCT (Viral Load, HIV, Testing And Counseling)",
  },
  {
    id: 25,
    img: "ispa.svg",
    title: "ISPA (Inspeksi Saluran Pernafasan Akut)",
  },
];

export const listPoliclinicGroup = [
  {
    policlinicGroupId: 1,
    name: "General and Family Medicine",
    listPoliclinic: [
      listPoliclinic[0],
      listPoliclinic[1],
      listPoliclinic[2],
      listPoliclinic[3],
      listPoliclinic[4],
    ],
  },
  {
    policlinicGroupId: 2,
    name: "Spesialis Gigi",
    listPoliclinic: [
      listPoliclinic[5],
      listPoliclinic[6],
      listPoliclinic[7],
      listPoliclinic[8],
    ],
  },
  {
    policlinicGroupId: 3,
    name: "Spesialis Bedah",
    listPoliclinic: [listPoliclinic[10], listPoliclinic[11], listPoliclinic[12]],
  },
  {
    policlinicGroupId: 4,
    name: "Spesialis Kesehatan Sistem",
    listPoliclinic: [
      listPoliclinic[13],
      listPoliclinic[14],
      listPoliclinic[15],
      listPoliclinic[16],
      listPoliclinic[17],
      listPoliclinic[18],
      listPoliclinic[19],
    ],
  },
  {
    policlinicGroupId: 5,
    name: "Kesehatan Mental & Rehabilitas",
    listPoliclinic: [
      listPoliclinic[20],
      listPoliclinic[21],
      listPoliclinic[22],
      listPoliclinic[23],
      listPoliclinic[24],
    ],
  },
];
