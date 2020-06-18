const validateNumber = new RegExp(/^[0-9]*$/gm);
const validateCount = new RegExp(/^\d{10,12}$/);

let button = document.getElementById("submitNum");
let inputNum = document.getElementById("addNumber").value;

function tampil() {
    if (
        validateNumber.test(inputNum) == true &&
        validateCount.test(inputNum) == true
    ) {
        alert("Selesai");
    } else {
        alert("Harus Angka, minimal character 10 dan max 12");
    }
}

button.addEventListener("click", tampil);
