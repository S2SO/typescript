// Union (| (or))
const price: string | number = "2500";
const name2: string | undefined = undefined;
const hasMilk: boolean | string = "있음";

// Intersection (& (and))
const price1: { name: string } & { price: number } = {
  name: "abc",
  price: 200,
};

type Size = "Tall" | "Grande" | "Venti";
type TypeShot = {
  coffeType: string;
  shot: number;
};
type Price = { price: number };

type Coffee2 = Size & TypeShot & Price;
type Ade = Size & Price;
