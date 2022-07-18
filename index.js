document.getElementById("burger").addEventListener("click", handleOpen);
document.getElementById("close").addEventListener("click", handleClose);
document.getElementById("openArrow").addEventListener("click", handleAccordeonOpen);
document.getElementById("closeArrow").addEventListener("click", handleAccordeonClose);

function handleOpen()  {
    document.getElementById("menu").style.display = "flex";
}

function handleClose() {
    document.getElementById("menu").style.display = "none";
}

function handleAccordeonOpen() {
    document.getElementById("accordeon").style.display = "block";
}

function handleAccordeonClose() {
    document.getElementById("accordeon").style.display = "none";
}
