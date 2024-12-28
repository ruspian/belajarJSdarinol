// pengulangan dengan for
document.getElementById("mulai").innerHTML = "Mulai";

for (let i = 0; i < 10; i++) {
  document.getElementById("ulang").innerHTML +=
    "Perulangan ke-" + (i + 1) + "<br>";
}
document.getElementById("selesai").innerHTML = "Selesai";

// pengulangan dengan while
document.getElementById("mulai").innerHTML = "Mulai";

let i = 0;
while (i < 10) {
  document.getElementById("ulang").innerHTML +=
    "Perulangan ke-" + (i + 1) + "<br>";
  i++;
}
document.getElementById("selesai").innerHTML = "Selesai";
