var boxSize = {
    small: { width: "50px", height: "50px" },
    medium: { width: "100px", height: "100px" },
    large: { width: "150px", height: "150px" },
};
var applyStyle = function (element, css) {
    element.style.width = boxSize[css.size].width;
    element.style.height = boxSize[css.size].height;
    element.style.backgroundColor = css.backgroundColor;
    element.style.borderRadius = css.borderRadius;
    element.style.border = css.border;
};
var box = document.createElement("div");
applyStyle(box, {
    size: "large",
    backgroundColor: "pink",
    borderRadius: "9999px",
    border: "2px solid black",
});
document.body.appendChild(box);
