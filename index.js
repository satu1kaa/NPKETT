document.getElementById("burger").addEventListener("click", handleOpen);
document.getElementById("close").addEventListener("click", handleClose);

function handleOpen()  {
    document.getElementById("menu").style.display = "flex";
}

function handleClose() {
    document.getElementById("menu").style.display = "none";
}

