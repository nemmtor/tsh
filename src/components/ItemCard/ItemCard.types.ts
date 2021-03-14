export interface ItemProps {
  id: number;
  name: string;
  description: string;
  rating: number;
  image: string;
  promo: boolean;
  active: boolean;
  handleClick: () => void;
}
