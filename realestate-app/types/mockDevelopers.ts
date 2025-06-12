import { Developer, Compound } from "./realestate";

// 300 مطور مصري + 100 مطور إماراتي
export const mockDevelopers: Developer[] = [
  ...Array.from({ length: 300 }, (_, i) => ({
    id: `eg-dev${i + 1}`,
    name: `مطور مصري ${i + 1}`,
    logoUrl: "/file.svg",
    description: `مطور عقاري مصري رقم ${i + 1}`,
  })),
  ...Array.from({ length: 100 }, (_, i) => ({
    id: `ae-dev${i + 1}`,
    name: `مطور إماراتي ${i + 1}`,
    logoUrl: "/globe.svg",
    description: `مطور عقاري إماراتي رقم ${i + 1}`,
  })),
];

// قائمة كمباوندات مصرية شهيرة + بيانات وهمية
const famousCompounds = [
  "مدينتي",
  "الرحاب",
  "بالم هيلز",
  "ماونتن فيو",
  "كايرو فيستيفال سيتي",
  "هايد بارك",
  "ليان",
  "ميفيدا",
  "سوديك ويست",
  "ذا ادريس ايست",
  "جاليريا مون فالي",
  "قطامية ديونز",
  "لافيستا",
  "سيزونز",
  "أب تاون كايرو",
  "ذا مارك",
  "ذا بروكس",
  "ذا كابيتال واي",
  "ذا كاونتي",
  "ذا فيلدج",
];

export const mockCompounds: Compound[] = [
  ...famousCompounds.map((name, i) => ({
    id: `comp-eg-${i + 1}`,
    name,
    location: `القاهرة الجديدة`,
    developerId: `eg-dev${(i % 300) + 1}`,
    imageUrl: "/window.svg",
  })),
  ...Array.from({ length: 180 }, (_, i) => ({
    id: `comp-eg-${i + 21}`,
    name: `كمباوند مصري ${i + 21}`,
    location: `مدينة ${((i + 21) % 10) + 1}`,
    developerId: `eg-dev${((i + 21) % 300) + 1}`,
    imageUrl: "/vercel.svg",
  })),
  ...Array.from({ length: 100 }, (_, i) => ({
    id: `comp-ae-${i + 1}`,
    name: `كمباوند إماراتي ${i + 1}`,
    location: `دبي`,
    developerId: `ae-dev${(i % 100) + 1}`,
    imageUrl: "/next.svg",
  })),
];
