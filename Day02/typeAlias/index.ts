type Coffee = {
  name: string;
  price: number;
  hasShot: boolean;
};
const latte: Coffee = {
  name: "latte",
  price: 2500,
  hasShot: true,
};

type CoupangItem = {
  brandLink: string;
  name: string;
  starRate: number;
  review: number;
  price: number;
  discountRate: number;
};
const sikhyeZero: CoupangItem = {
  brandLink: "http://shop.coupang.com",
  name: "팔도 비락식혜 제로",
  starRate: 5,
  review: 2235,
  price: 26400,
  discountRate: 52,
};
