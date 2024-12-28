let nama = "Pian";

// menampilkan alert
// alert("Hello World!");
// alert("Halo Nama saya: " + nama);

// menampilkan prompt
// nama = prompt("Masukkan username anda:");
// alert("Halo " + nama);

// menampilkan confirm
// let konfirmasi = confirm("Apakah anda yakin?");
// alert(konfirmasi);

// menampilkan popup box dengan pengkondisian
// let tes = confirm("Apakah Kamu yakin ingin keluar dari website ini?");

// if (tes === true) {
//   alert("Anda Keluar Dari Website Ini!");
// } else {
//   alert("Anda Tidak Jadi Keluar Dari Website Ini!");
// }

// menampilkan popup box dengan perulangan
alert("Selamat Datang...");

let tes = true;

while (tes === true) {
  let nama = prompt("Masukkan username anda:");
  alert("Halo " + nama);

  tes = confirm("lanjut?");
}

alert("Terima Kasih!");
