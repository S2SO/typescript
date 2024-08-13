type ButtonSize = "small" | "medium" | "large";
type ButtonColor = "blue" | "green" | "red" | "purple";
type ButtonPadding = "5px" | "10px" | "15px";
type ButtonBorder = "2px solid black" | "2px solid white";
type ButtonStyle = {
  size: ButtonSize;
  backgroundColor: ButtonColor;
  padding: ButtonPadding;
  border: ButtonBorder;
};

const buttonSize = {
  small: { width: "10px", height: "5px" },
  medium: { width: "30px", height: "7px" },
  large: { width: "50px", height: "10px" },
};

const applyButtonStyle = (tag: HTMLButtonElement, css: ButtonStyle) => {
  tag.style.width = buttonSize[css.size].width;
  tag.style.height = buttonSize[css.size].height;
  tag.style.backgroundColor = css.backgroundColor;
  tag.style.padding = css.padding;
  tag.style.border = css.border;
};

const box1 = document.createElement("button");
applyButtonStyle(box1, {
  size: "large",
  backgroundColor: "purple",
  border: "2px solid black",
  padding: "5px",
});
document.body.appendChild(box1);
