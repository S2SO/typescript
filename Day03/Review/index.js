var buttonSize = {
    small: { width: "10px", height: "5px" },
    medium: { width: "30px", height: "7px" },
    large: { width: "50px", height: "10px" },
};
var applyButtonStyle = function (tag, css) {
    tag.style.width = buttonSize[css.size].width;
    tag.style.height = buttonSize[css.size].height;
    tag.style.backgroundColor = css.backgroundColor;
    tag.style.padding = css.padding;
    tag.style.border = css.border;
};
var box1 = document.createElement("button");
applyButtonStyle(box1, {
    size: "large",
    backgroundColor: "purple",
    border: "2px solid black",
    padding: "5px",
});
document.body.appendChild(box1);
