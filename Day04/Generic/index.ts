// Generic -> generalize: 일반화하다.

type My<A, B> = {
  first: A;
  second: B;
};
const test123: My<number, string> = {
  first: 1,
  second: "a",
};

type Mcdonald<
  M extends McMorningMain | NormalMain,
  S extends McMorningSide | NormalSide,
  D extends McMorningDrink | NormalDrink
> = {
  main: M;
  side: S;
  drink: D;
};

type McMorningMain = "핫케익" | "맥머핀" | "브렉퍼스트";
type McMorningSide = "해쉬브라운" | "에그";
type McMorningDrink = "드립커피" | "탄산";

type NormalMain = "상하이 버거" | "빅맥" | "스낵랩";
type NormalSide = "감자튀김" | "맥너겟";
type NormalDrink = "탄산" | "드립커피" | "우유";

const sj: Mcdonald<McMorningMain, McMorningSide, McMorningDrink> = {
  main: "핫케익",
  side: "에그",
  drink: "드립커피",
};
const kang: Mcdonald<NormalMain, NormalSide, NormalDrink> = {
  main: "상하이 버거",
  side: "감자튀김",
  drink: "탄산",
};

// Q

type Subway<B extends Bread, C, V, S> = {
  bread: B;
  cheese: C;
  vegitable: V[];
  sauce: S;
};
type Bread = "화이트" | "플랫" | "허니오트";
type Cheese = "모짜렐라" | "아메리칸" | "슈레드";
type Vegitable = "오이" | "토마토" | "피클";
type Sauce = "마요네즈" | "머스타드" | "칠리";
type SauceType = {
  first: Sauce;
  second: Sauce;
};
const order: Subway<Bread, Cheese, Vegitable, Partial<SauceType>> = {
  bread: "플랫",
  cheese: "모짜렐라",
  vegitable: ["오이", "토마토", "피클"],
  sauce: { first: "머스타드" },
};
