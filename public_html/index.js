var attrString = new Array();
var count = 0;

function onload() {
    
}

function modal(id) {
    el = document.getElementById(id);
    el.style.visibility = (el.style.visibility === "visible")?"hidden" : "visible";
}

function addAttribute(str) {
    el = document.getElementById("attributeContent");
    elN = document.createElement("div");
    elN.setAttribute("id","attribute");
    elN.innerHTML = str;
    el.appendChild(elN);
}

function buildAttrString() {
    var e = document.getElementById("attributeSelection");
    var attr = e.options[e.selectedIndex].value;
    var mod = document.getElementById("attributeModifier").value;
    var operation = document.getElementById("attributeOperation").value;
    attrString[count] = "{AttributeName:" + attr + ", Name:" + attr + ", Amount:"
        + mod + ", Operation:" + operation + ", UUIDLeast:123, UUIDMost:123}";
    addAttribute(attrString[count]);
    modal("attrModal");
}