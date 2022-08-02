document.getElementById("burger").addEventListener("click", handleOpen);
document.getElementById("close").addEventListener("click", handleClose);
document.getElementById("openArrow").addEventListener("click", handleAccordeonOpen);
document.getElementById("openArrow_2").addEventListener("click", handleAccordeonOpen_2);
document.getElementById("closeArrow").addEventListener("click", handleAccordeonClose);

function handleOpen() {
    document.getElementById("menu").style.display = "flex";
}

function handleClose() {
    document.getElementById("menu").style.display = "none";
}

function handleAccordeonOpen() {
    document.getElementById("accordeon").style.display = "block";
}

function handleAccordeonOpen_2() {
    document.getElementById("accordeon_2").style.display = "block";
}

function handleAccordeonClose() {
    document.getElementById("accordeon").style.display = "none";
}
