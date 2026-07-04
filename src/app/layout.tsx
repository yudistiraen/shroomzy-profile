import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { business } from "@/data/business";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
  style: ["normal", "italic"],
  weight: "variable",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = "https://shroomzy.laterra.click";
const ogImage = `${siteUrl}/assets/shroomzy-product.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Shroomzy · Jamur Crispy Aneka Rasa Depok",
  description:
    "Shroomzy: camilan jamur crispy rumahan dari Cilodong, Depok. Sembilan varian rasa gurih hingga pedas, renyah tahan lama. Pesan langsung via WhatsApp.",
  keywords: [
    "jamur crispy",
    "jamur crispy Depok",
    "camilan jamur crispy",
    "keripik jamur crispy",
    "jamur crispy Cilodong",
    "jamur crispy pedas",
    "jamur tiram crispy",
    "oleh-oleh Depok",
    "UMKM jamur crispy",
    "Shroomzy",
  ],
  authors: [{ name: business.name }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: business.name,
    title: "Shroomzy · Jamur Crispy Aneka Rasa Depok",
    description:
      "Camilan jamur crispy rumahan dari Cilodong, Depok. Sembilan varian rasa, renyah tahan lama. Pesan langsung via WhatsApp.",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 900,
        alt: "Jamur crispy aneka rasa Shroomzy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shroomzy · Jamur Crispy Aneka Rasa Depok",
    description:
      "Camilan jamur crispy rumahan dari Cilodong, Depok. Sembilan varian rasa, renyah tahan lama.",
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  name: business.fullName,
  alternateName: business.name,
  description:
    "Camilan jamur crispy rumahan aneka rasa, digoreng dan dibumbui setiap hari di Cilodong, Depok.",
  image: ogImage,
  url: siteUrl,
  telephone: `+${business.phoneWa}`,
  servesCuisine: "Indonesian",
  priceRange: "$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Raya Jatimulya, Jl. Kp. Sawah, Jatimulya, Kec. Cilodong",
    addressLocality: "Depok",
    addressRegion: "Jawa Barat",
    postalCode: "16413",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: business.lat,
    longitude: business.lng,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "13:30",
    closes: "23:30",
  },
  sameAs: [business.mapsUrl],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${fraunces.variable} ${jakarta.variable}`}>
      <body className="min-h-full antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
