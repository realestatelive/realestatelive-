import { Unit } from "@/types/realestate";
import { mockDevelopers, mockCompounds } from "./mockDevelopers";

// صور متنوعة للوحدات
const images = [
  "/file.svg",
  "/window.svg",
  "/globe.svg",
  "/vercel.svg",
  "/next.svg",
];
const panoramaImages = ["/panorama1.jpg", "/panorama2.jpg"];
const model3dUrl = "/3dmodel.glb";
const vrUrl = "/vrmodel.html";

export const mockUnits: Unit[] = Array.from({ length: 60 }, (_, i) => {
  const compound = mockCompounds[i % mockCompounds.length];
  const developer = mockDevelopers.find((d) => d.id === compound.developerId);
  const typeList = [
    "قصر",
    "فيلا",
    "تاون هاوس",
    "توين هاوس",
    "شقة",
    "استوديو",
    "عيادة",
    "محل",
    "مكتب اداري",
    "غرف فندقية",
  ];
  const type = typeList[i % typeList.length] as Unit["type"];
  return {
    id: `unit${i + 1}`,
    title: `${type} في ${compound.name}`,
    type,
    for: i % 2 === 0 ? "بيع" : "ايجار",
    country: compound.location.includes("دبي") ? "الإمارات" : "مصر",
    city: compound.location,
    developerId: developer?.id || "",
    compoundId: compound.id,
    price: 1000000 + i * 50000,
    bedrooms: (i % 6) + 1,
    bathrooms: (i % 4) + 1,
    area: 80 + (i % 10) * 20,
    images: [images[i % images.length]],
    panoramaImages: i % 3 === 0 ? panoramaImages : undefined,
    model3dUrl: i % 4 === 0 ? model3dUrl : undefined,
    vrUrl: i % 5 === 0 ? vrUrl : undefined,
    rating: 4 + (i % 2) * 0.5,
    description: `وحدة ${type} مميزة في ${compound.name} بموقع استراتيجي وخدمات متكاملة.`,
    features: [
      i % 2 === 0 ? "حديقة" : "بدون حديقة",
      i % 3 === 0 ? "حمام سباحة" : "بدون حمام سباحة",
    ],
    ownerName: developer?.name,
    garden: i % 2 === 0,
    pool: i % 3 === 0,
    floors: (i % 3) + 1,
  };
});
