// 1. 타입 어노테이션
const coffee1: string = "1";

// 2. 타입 추론
const coffee = "아메리카노";

const coffeeList: String[] = ["아메리카노", "라뗴", "초코"];

const test = (arr: string[]) => {
  arr.forEach((x) => {
    x.toUpperCase();
  });
};

// quiz
const numArr: number[] = [1, 2, 3, 4, 5];
const boolArr: boolean[] = [true, false];

// object type
const test1: object = { name: "s", position: "middle", number: "7" };
const test2: { name: string; position: string; number: number } = {
  name: "s",
  position: "middle",
  number: 7,
};
