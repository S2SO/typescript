type Pizza<
  D extends Dough,
  C extends Cheese1,
  T extends Topping,
  S extends Sauce1
> = {
  dough: D;
  cheese: C;
  topping: T[];
  sauce: S;
};
type Dough = "오리지널" | "씬" | "치즈크러스트";
type Cheese1 = "모짜렐라" | "고르곤졸라" | "체다";
type Topping = "페퍼로니" | "베이컨" | "양파" | "올리브" | "피망";
type Sauce1 = "토마토" | "크림" | "핫소스";

const pOder: Pizza<Dough, Cheese1, Topping, Sauce1> = {
  dough: "씬",
  cheese: "고르곤졸라",
  sauce: "크림",
  topping: ["베이컨", "양파"],
};

//

type IceCream<B extends Base, T extends Topping1, S extends Syrup> = {
  base: B;
  topping: T;
  syrup: S;
};
type Base = "바닐라" | "초콜릿" | "딸기";
type Topping1 = "아몬드" | "초콜릿 칩" | "카라멜";
type Syrup = "초콜릿" | "카라멜" | "딸기";

const iOder: IceCream<Base, Topping1, Syrup> = {
  base: "바닐라",
  topping: "아몬드",
  syrup: "초콜릿",
};

//

type Ramen<
  N extends noodle,
  B extends Broth,
  T extends Topping2,
  A extends AddOn
> = {
  noodle: N;
  broth: B;
  topping: T[];
  addOn?: A;
};
type noodle = "소면" | "중면" | "우동면";
type Broth = "간장" | "된장" | "매운맛";
type Topping2 = "계란" | "차슈" | "파" | "김치";
type AddOn = "떡" | "치즈" | "만두";

const rOder: Ramen<noodle, Broth, Topping2, AddOn> = {
  noodle: "소면",
  broth: "매운맛",
  topping: ["계란", "차슈"],
};
