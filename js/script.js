function hitungLuas() {
    var base = parseFloat(document.getElementById("base").value);
    var height = parseFloat(document.getElementById("height").value);
    
    if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
        alert("Masukkan nilai yang valid untuk alas dan tinggi!");
        return;
    }
    
    var area = 0.5 * base * height;
    document.getElementById("luasResult").textContent = "Luas: " + area.toFixed(2);
}

function hitungKeliling() {
    var sideA = parseFloat(document.getElementById("sideA").value);
    var sideB = parseFloat(document.getElementById("sideB").value);
    var sideC = parseFloat(document.getElementById("sideC").value);
    
    if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC) || sideA <= 0 || sideB <= 0 || sideC <= 0) {
        alert("Masukkan nilai yang valid untuk panjang sisi-sisi!");
        return;
    }
    
    var perimeter = sideA + sideB + sideC;
    document.getElementById("kelilingResult").textContent = "Keliling: " + perimeter.toFixed(2);
}

function resetLuas() {
    document.getElementById("base").value = "";
    document.getElementById("height").value = "";
    document.getElementById("luasResult").textContent = "";
}

function resetKeliling() {
    document.getElementById("sideA").value = "";
    document.getElementById("sideB").value = "";
    document.getElementById("sideC").value = "";
    document.getElementById("kelilingResult").textContent = "";
}