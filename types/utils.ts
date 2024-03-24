import { Icon } from '@/components/Themed';
import { ImageSourcePropType } from 'react-native';

export type PagedResult<T> = {
  results: T[];
  // pageCount: number
  totalCount: number;
};

export interface Building {
  longitude: number;
  latitude: number;
  title: string;
  id: number;
  category: string;
  imageSrc: ImageSourcePropType;
}

export interface SchoolService {
  id: number;
  title: string;
  description: string;
  icon: string;
  iconVersion?: number;
  href: string;
}
