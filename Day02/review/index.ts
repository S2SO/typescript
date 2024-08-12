const quiz1 = (arr: string[]): string[] => arr.map((v) => v.toUpperCase());

const quiz2 = (
  name: string,
  price: number
): { name: string; price: number; shot: number } => {
  return {
    name: name.charAt(0).toUpperCase() + name.slice(1).toLowerCase(),
    price: price * 0.9,
    shot: 2,
  };
};

const quiz3 = (char: string): boolean => !!char;
