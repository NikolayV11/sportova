export type typeCard = {
  heightImg?: number;
  heightCard?: number;
  id: number;
  title: string;
  urlImg: string;
  link: string;
  price: {
    price: number;
    discount?: number;
  };
};
