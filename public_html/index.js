var attrString = new Array();
var enchString = new Array();
var attrCount = 0;
var enchCount = 0;

function onload() {

}

function copyToClipboard() {
    var text = document.getElementById("giveString").value;
    window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
}

function modal(id) {
    el = document.getElementById(id);
    el.style.visibility = (el.style.visibility === "visible") ? "hidden" : "visible";
}

function addAttribute(str) {
    el = document.getElementById("attributeContent");
    elN = document.createElement("div");
    elN.setAttribute("class", "attribute");
    elN.innerHTML = str;
    el.appendChild(elN);
}
function addEnchantment(str) {
    el = document.getElementById("enchContent");
    elN = document.createElement("div");
    elN.setAttribute("class", "attribute");
    elN.innerHTML = str;
    el.appendChild(elN);
}

function buildAttrString() {
    var e = document.getElementById("attributeSelection");
    var attr = e.options[e.selectedIndex].value;
    var mod = document.getElementById("attributeModifier").value;
    var operation = document.getElementById("attributeOperation").value;
    attrString[attrCount] = "{AttributeName:" + attr + ", Name:" + attr + ", Amount:"
            + mod + ", Operation:" + operation + ", UUIDLeast:123, UUIDMost:123}";
    addAttribute(attrString[attrCount]);
    attrCount++;
    modal("attrModal");
}

function buildEnchString() {
    var e = document.getElementById("enchantment");
    var ench = e.options[e.selectedIndex].value;
    var lvl = document.getElementById("enchLvl").value;
    enchString[enchCount] = "{id:" + ench + ",lvl:" + lvl + "}";
    addEnchantment(enchString[enchCount]);
    enchCount++;
    modal("enchModal");
}

function buildGiveString() {
    var pName = document.getElementById("playerNameBox").value;
    var iNum = document.getElementById("itemAmountBox").value;
    var iId = document.getElementById("itemIdBox").value;
    var iDamage = document.getElementById("itemDamageBox").value;
    var iName = document.getElementById("itemNameBox").value;
    var iLore = document.getElementById("itemLoreBox").value.replace("\\n", "\",\"");
    
    var iDisplay = "display:{Name:\"" + iName + "\",Lore:[\"" + iLore + "\"]}";
    if (iName === "")
    {
        iDisplay = iDisplay.replace("Name:\"\",", "");
    }
    if (iLore === "")
    {
        iDisplay = iDisplay.replace(",Lore:\"\"", "");
    }
    if (iLore === "" && iName === "")
    {
        iDisplay = "display:{}";
    }
    
    
    var iAttr = "AttributeModifiers:[" + attrString + "]";
    var iEnch = "ench:[" + enchString + "]";

    var giveString = "/give " + pName + " " + iId + " " + iNum + " " + iDamage +
            " {" + iDisplay + ", " + iAttr + "," + iEnch + "}";

    document.getElementById("giveString").value = giveString;
}