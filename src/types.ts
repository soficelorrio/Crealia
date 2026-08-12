export interface Product {
  id: string;
  name: string;
  category: 'necklace' | 'bracelet';
  forMen?: boolean;
  description: string;
  pricePlaceholder: string;
  image: string;
  details?: string[];
  dimensions?: string;
  imagePosition?: string;
}

export interface CareItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
}

export interface PurchaseStep {
  number: number;
  title: string;
  description: string;
}

export interface Review {
  id: string;
  name: string;
  product?: string;
  rating: number;
  comment: string;
  date: string;
  status: 'approved' | 'pending';
}
