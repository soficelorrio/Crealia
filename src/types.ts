export interface Product {
  id: string;
  name: string;
  category: 'necklace' | 'bracelet';
  description: string;
  pricePlaceholder: string;
  image: string;
  details?: string[];
  material?: string;
  dimensions?: string;
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
