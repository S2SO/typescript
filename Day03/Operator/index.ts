// 타입 매니퓰레이션

// 1. in
// object에 특정 속성이 있나

// 2. keyof
// 객체 속성 가져오기
type Human = {
  name: string;
  age: number;
  rece: string;
};
type Test = keyof Human;
const b1: Test = "age";

// 3. as [타입 단언]
const a = document.querySelector(".box") as Element;

//
type Person = {
  name: string;
  age: number;
  makeKimbop: () => void;
};

const a5: Person = {
  name: "go bong min",
  age: 21,
  makeKimbop: () => {
    alert("김밥만드는중");
  },
};

// q
type Dog = {
  name: string;
  race: string;
  age: number;
  run: () => void;
  eatSnack: () => void;
};

const choco: Dog = {
  name: "choco",
  race: "pome",
  age: 4,
  run: () => alert("running hard"),
  eatSnack: () => alert("dog gum"),
};

type Fish = { swim: () => void };
type Mammal = { breathe: () => void };
type Bird = { fly: () => void };
type Reptile = { lay: () => void };

const dolphin: Fish & Mammal = {
  swim: () => alert("수영"),
  breathe: () => alert(),
};

const croco: Reptile & Fish = {
  lay: () => alert(),
  swim: () => alert(),
};
