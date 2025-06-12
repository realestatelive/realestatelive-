import { Developer, Compound } from "./realestate";

export const mockDevelopers: Developer[] = Array.from({ length: 30 }, (_, i) => ({
  id: `dev${i + 1}`,
  name: `مطور ${i + 1}`,
  logoUrl: `/public/file.svg`,
  description: `وصف مختصر لمطور ${i + 1}`,
}));

export const mockCompounds: Compound[] = Array.from({ length: 20 }, (_, i) => ({
  id: `comp${i + 1}`,
  name: `كمباوند ${i + 1}`,
  location: `مدينة ${i % 5 + 1}`,
  developerId: `dev${(i % 30) + 1}`,
  imageUrl: `/public/globe.svg`,
}));
