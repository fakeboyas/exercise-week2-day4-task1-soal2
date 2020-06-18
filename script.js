let button = document.getElementById("submitNum");

function tampil() {
    let inputNum = document.getElementById("addNumber").value;
    const validateNumber = /^\d{10,12}$/;
    if (inputNum.match(validateNumber)) {
        alert("Selesai");
    } else {
        alert("Harus Angka, minimal character 10 dan max 12");
    }
}

button.addEventListener("click", tampil);
