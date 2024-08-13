type MegaCoffee = {
  [key: string]: string;
};
type CoffeeMenu = "name" | "price";
type CoffeeIngredient = "kcal" | "shot" | "size";
type CoffeeType = CoffeeMenu | CoffeeIngredient;

type VentiCoffee = {
  [key in CoffeeType]: string;
};

const menu: VentiCoffee = {
  name: "ice americano",
  price: "1500",
  kcal: "2",
  shot: "1",
  size: "small",
};

type CarInfo = "Model" | "ProductYear" | "EngineType" | "Color" | "Price";
type Car = {
  [key in CarInfo]: string | number;
};

const morning: Car = {
  Model: "morning",
  ProductYear: 2024,
  Color: "gold",
  Price: 1200,
  EngineType: "hybrid",
};
