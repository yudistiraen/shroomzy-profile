export const business = {
  name: "Shroomzy",
  fullName: "Jamur Crispy Aneka Rasa Shroomzy",
  tagline: "Kriuknya nagih, rasanya juara",
  rating: 5.0,
  category: "Jajanan kaki lima · Jamur crispy rumahan",
  address:
    "Jl. Raya Jatimulya, Jl. Kp. Sawah, Jatimulya, Kec. Cilodong, Kota Depok, Jawa Barat 16413",
  plusCode: "HR4J+95 Jatimulya, Depok City, West Java",
  phoneDisplay: "+62 823-2380-3632",
  phoneWa: "6282323803632",
  hoursLabel: "Buka setiap hari",
  hoursValue: "13.30 sampai 23.30 WIB",
  lat: -6.4440226,
  lng: 106.8304318,
  mapsUrl:
    "https://www.google.com/maps/place/Jamur+crispy+aneka+rasa+shroomzy/@-6.4438818,106.8303535,47m/data=!3m1!1e3!4m6!3m5!1s0x2e69eb35fc24142b:0x98a667248ef0c7e9!8m2!3d-6.4440226!4d106.8304318!16s%2Fg%2F11md1q3ppw",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Jamur+crispy+aneka+rasa+shroomzy,-6.4440226,106.8304318&z=17&output=embed",
};

export type Flavor = {
  name: string;
  description: string;
};

export const flavors: Flavor[] = [
  {
    name: "Extra Pedas",
    description:
      "Sambal bubuk pekat untuk pecinta tantangan, levelnya bisa diatur dari ringan sampai ekstrem.",
  },
  {
    name: "Balado",
    description: "Bumbu balado khas Indonesia, perpaduan manis dan pedas yang bikin nagih.",
  },
  {
    name: "Barbeque",
    description: "Aroma smoky ala panggangan, rasa klasik favorit segala usia.",
  },
  {
    name: "Jagung Manis",
    description: "Manis alami jagung segar, ringan dan pas buat ngemil santai.",
  },
  {
    name: "Jagung Bakar",
    description: "Sentuhan karamel jagung bakar, renyah sampai suapan terakhir.",
  },
  {
    name: "Sapi Panggang",
    description: "Aroma daging panggang yang gurih berkarakter, creamy di setiap gigitan.",
  },
  {
    name: "Keju Manis",
    description: "Taburan keju lembut berpadu rasa manis, creamy tanpa berlebihan.",
  },
  {
    name: "Saos",
    description: "Balutan saus tomat pedas dan manis khas jajanan kaki lima.",
  },
  {
    name: "Mayonaise",
    description: "Drizzle mayones creamy yang ringan, cocok dipadukan rasa apa saja.",
  },
];

export const spiceCustomization = {
  min: 1,
  max: 5,
  note: "Level pedas bisa diatur sendiri dari 1 (ringan) sampai 5 (extra menggigit), tinggal sebutkan saat pesan lewat WhatsApp.",
};
