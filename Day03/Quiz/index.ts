type CardWidth = "XS" | "S" | "M" | "L" | "XL";
type CardHeight = "XS" | "S" | "M" | "L" | "XL";
type CardBG = "primary" | "secondary" | "dark";
type CardChild = "top" | "middle" | "bottom";
type CardClick = () => void;
type CardStyle = {
  width: CardWidth;
  height: CardHeight;
  backgroundColor: CardBG;
  child: CardChild;
  click: CardClick;
};

const cardWIdthMap = {
  XS: "50px",
  S: "100px",
  M: "200px",
  L: "300px",
  XL: "400px",
};
const cardHeighthMap = {
  XS: "50px",
  S: "100px",
  M: "200px",
  L: "300px",
  XL: "400px",
};
const cardBackgroundCardMap = {
  primary: "skyblue",
  secondary: "blue",
  dark: "darkblue",
};
const cardChildMap = {
  top: "start",
  middle: "center",
  bottom: "end",
};

const applyCardStyle = (tag: HTMLElement, sty: CardStyle) => {
  tag.style.width = cardWIdthMap[sty.width];
  tag.style.height = cardWIdthMap[sty.height];
  tag.style.backgroundColor = cardBackgroundCardMap[sty.backgroundColor];
  tag.style.display = "flex";
  tag.style.alignItems = cardChildMap[sty.child];
  tag.addEventListener("click", sty.click);
};

const card = document.createElement("div");
card.innerText = "sdfdsf";
applyCardStyle(card, {
  width: "M",
  height: "L",
  backgroundColor: "secondary",
  child: "bottom",
  click: () => alert("clicked"),
});
document.body.appendChild(card);
