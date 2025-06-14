import { Unit } from "@/types/realestate";
import { mockDevelopers, mockCompounds } from "./mockDevelopers";

// إحداثيات تقريبية لأشهر الكمباوندات
const compoundCoords: Record<string, [number, number]> = {
  "مدينتي": [31.6275, 30.0665],
  "الرحاب": [31.4913, 30.0074],
  "بالم هيلز أكتوبر": [30.9781, 30.0238],
  "ماونتن فيو هايد بارك": [31.495, 30.008],
  "ميفيدا": [31.495, 30.01],
  "هايد بارك": [31.497, 30.012],
  "سوديك ويست": [30.9502, 29.9773],
  "نيو جيزة": [30.9505, 29.9655],
  "أب تاون كايرو": [31.285, 30.045],
  "تاج سيتي": [31.480, 30.020],
  "لافيستا سيتي": [31.600, 30.030],
  "كابيتال واي": [31.670, 30.050],
  "سيتي إيدج نيو كابيتال": [31.680, 30.060],
  "المراسم فيفث سكوير": [31.510, 30.015],
  "بروة نيو كايرو": [31.520, 30.018],
  "تبارك 90 أفينيو": [31.530, 30.022],
};

// صور متنوعة للوحدات (مسارات نصية فقط)
const images = [
  "/real1.jpg",
  "/real2.jpg",
  "/real3.jpg",
  "/real4.jpg",
  "/real5.jpg",
];
const panoramaImages = ["/panorama1.jpg", "/panorama2.jpg"];
const model3dUrl = "/3dmodel.glb";
const vrUrl = "/vrmodel.html";

export const mockUnits: Unit[] = mockCompounds.flatMap((compound, i) => {
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
  // لكل كمباوند أضف 2 وحدة متنوعة
  return [0, 1].map((j) => {
    const type = typeList[(i + j) % typeList.length] as Unit["type"];
    return {
      id: `unit-${compound.id}-${j}`,
      title: `${type} في ${compound.name}`,
      type,
      for: j % 2 === 0 ? "بيع" : "ايجار",
      country: "مصر",
      city: compound.location,
      developerId: developer?.id || "",
      compoundId: compound.id,
      price: 1000000 + i * 50000 + j * 100000,
      bedrooms: ((i + j) % 6) + 1,
      bathrooms: ((i + j) % 4) + 1,
      area: 80 + ((i + j) % 10) * 20,
      images: [images[(i + j) % images.length]],
      panoramaImages: (i + j) % 3 === 0 ? panoramaImages : undefined,
      model3dUrl: (i + j) % 4 === 0 ? model3dUrl : undefined,
      vrUrl: (i + j) % 5 === 0 ? vrUrl : undefined,
      rating: 4 + ((i + j) % 2) * 0.5,
      description: `وحدة ${type} مميزة في ${compound.name} بموقع استراتيجي وخدمات متكاملة.`,
      features: [
        (i + j) % 2 === 0 ? "حديقة" : "بدون حديقة",
        (i + j) % 3 === 0 ? "حمام سباحة" : "بدون حمام سباحة",
      ],
      ownerName: developer?.name,
      garden: (i + j) % 2 === 0,
      pool: (i + j) % 3 === 0,
      floors: ((i + j) % 3) + 1,
      // إضافة إحداثيات الكمباوند
      coords: compoundCoords[compound.name] || [31.2357, 30.0444],
    };
  });
});

// وحدات غير مرتبطة بكمباوندات (مثلاً وحدات مستقلة)
export const mockStandaloneUnits: Unit[] = [
  {
    id: "standalone-1",
    title: "شقة فاخرة في الزمالك",
    type: "شقة",
    for: "بيع",
    country: "مصر",
    city: "القاهرة",
    developerId: "emaar",
    compoundId: "",
    price: 3500000,
    bedrooms: 3,
    bathrooms: 2,
    area: 180,
    images: ["/file.svg"],
    panoramaImages: ["/panorama1.jpg"],
    model3dUrl: "/3dmodel.glb",
    vrUrl: "/vrmodel.html",
    rating: 4.5,
    description: "شقة مستقلة بإطلالة رائعة على النيل في قلب الزمالك.",
    features: ["إطلالة نيلية", "تشطيب سوبر لوكس"],
    ownerName: "إعمار مصر",
    garden: false,
    pool: false,
    floors: 1,
    coords: [31.2243, 30.0456], // إحداثيات الزمالك
  },
  {
    id: "standalone-2",
    title: "فيلا مستقلة في الساحل الشمالي",
    type: "فيلا",
    for: "ايجار",
    country: "مصر",
    city: "الساحل الشمالي",
    developerId: "palmhills",
    compoundId: "",
    price: 8000000,
    bedrooms: 5,
    bathrooms: 4,
    area: 400,
    images: ["/window.svg"],
    panoramaImages: ["/panorama2.jpg"],
    model3dUrl: "/3dmodel.glb",
    vrUrl: "/vrmodel.html",
    rating: 5,
    description: "فيلا مستقلة بإطلالة بحرية مباشرة وحديقة خاصة.",
    features: ["حديقة", "حمام سباحة", "إطلالة بحرية"],
    ownerName: "بالم هيلز",
    garden: true,
    pool: true,
    floors: 2,
    coords: [28.9435, 30.8575], // إحداثيات الساحل الشمالي
  },
];
