// تعريف نوع الوحدة العقارية
export type UnitType =
  | 'قصر'
  | 'فيلا'
  | 'تاون هاوس'
  | 'توين هاوس'
  | 'شقة'
  | 'استوديو'
  | 'عيادة'
  | 'محل'
  | 'مكتب اداري'
  | 'غرف فندقية';

export type Country =
  | 'مصر'
  | 'الإمارات'
  | 'السعودية'
  | 'الكويت'
  | 'البحرين'
  | 'قطر'
  | 'المغرب'
  | 'تونس'
  | 'الجزائر'
  | 'عمان'
  | 'الأردن';

export interface Developer {
  id: string;
  name: string;
  logoUrl?: string;
  description?: string;
  compounds?: Compound[];
}

export interface Compound {
  id: string;
  name: string;
  location: string;
  developerId: string;
  imageUrl?: string;
}

export interface Unit {
  id: string;
  title: string;
  type: UnitType;
  for: 'بيع' | 'ايجار';
  country: Country;
  city: string;
  developerId: string;
  compoundId: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  images: string[];
  panoramaImages?: string[];
  model3dUrl?: string;
  vrUrl?: string;
  rating?: number;
  description?: string;
  features?: string[];
  ownerName?: string;
  garden?: boolean;
  pool?: boolean;
  floors?: number;
}
