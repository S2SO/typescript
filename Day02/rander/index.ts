type BoxSize = "small" | "medium" | "large";
type BoxBgColor = "black" | "pink" | "skyblue" | "yellow" | "grey";
type BoxBorderRadius = "10px" | "15px" | "9999px";
type BoxBorder = "1px solid black" | "2px solid black";
type BoxStyle = {
  size: BoxSize;
  backgroundColor: BoxBgColor;
  borderRadius: BoxBorderRadius;
  border: BoxBorder;
};

type BoxSizeMap = {
  small: { width: "50px"; height: "50px" };
  medium: { width: "100px"; height: "100px" };
  large: { width: "150px"; height: "150px" };
};
const boxSize: BoxSizeMap = {
  small: { width: "50px", height: "50px" },
  medium: { width: "100px", height: "100px" },
  large: { width: "150px", height: "150px" },
};

const applyStyle = (element: HTMLElement, css: BoxStyle) => {
  element.style.width = boxSize[css.size].width;
  element.style.height = boxSize[css.size].height;

  element.style.backgroundColor = css.backgroundColor;
  element.style.borderRadius = css.borderRadius;
  element.style.border = css.border;
};

const box = document.createElement("div");
applyStyle(box, {
  size: "large",
  backgroundColor: "pink",
  borderRadius: "9999px",
  border: "2px solid black",
});
document.body.appendChild(box);
