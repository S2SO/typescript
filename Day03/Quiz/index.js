var cardWIdthMap = {
    XS: "50px",
    S: "100px",
    M: "200px",
    L: "300px",
    XL: "400px",
};
var cardHeighthMap = {
    XS: "50px",
    S: "100px",
    M: "200px",
    L: "300px",
    XL: "400px",
};
var cardBackgroundCardMap = {
    primary: "skyblue",
    secondary: "blue",
    dark: "darkblue",
};
var cardChildMap = {
    top: "start",
    middle: "center",
    bottom: "end",
};
var applyCardStyle = function (tag, sty) {
    tag.style.width = cardWIdthMap[sty.width];
    tag.style.height = cardWIdthMap[sty.height];
    tag.style.backgroundColor = cardBackgroundCardMap[sty.backgroundColor];
    tag.style.display = "flex";
    tag.style.alignItems = cardChildMap[sty.child];
    tag.addEventListener("click", sty.click);
};
var card = document.createElement("div");
card.innerText = "sdfdsf";
applyCardStyle(card, {
    width: "M",
    height: "L",
    backgroundColor: "secondary",
    child: "bottom",
    click: function () { return alert("clicked"); },
});
document.body.appendChild(card);
