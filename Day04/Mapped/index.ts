// Mapped
// ex) sm:100px, lg:150px
// 1. 코드 중복 제거
// 2. 유연성과 확장성 용이

// 1. Record
type Animal = "dog" | "cat" | "rat";
const zoo: Record<Animal, string> = {
  dog: "멍",
  cat: "meow",
  rat: "찍",
};

// 2. Nullish[?]
type Dog1 = {
  name: string;
  breed: string;
  age?: number; //값이 없으면 null
};
const kingyul: Dog1 = {
  name: "kingyul",
  breed: "이탈리안하우스",
  //   age: 3,
};

// 3. Partial :다 ?로 바꿔줌
type Cat = {
  name: string;
  breed: string;
  age: number;
};
const sam: Partial<Cat> = {
  age: 5,
};
