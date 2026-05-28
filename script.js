// Mengambil elemen HTML
const latVal = document.getElementById('lat-val');
const lngVal = document.getElementById('lng-val');
const fullVal = document.getElementById('full-val');
const btnGenerate = document.getElementById('btn-generate');
const btnCopy = document.getElementById('btn-copy');
const btnMaps = document.getElementById('btn-maps');

// Fungsi untuk menghasilkan angka acak di antara range tertentu dengan desimal presisi
function getRandomInRange(from, to, fixed) {
  return (Math.random() * (to - from) + from).toFixed(fixed);
}

// Event saat tombol "Acak Koordinat" diklik
btnGenerate.addEventListener('click', () => {
  // Latitude rentangnya -90 sampai 90 (menggunakan 6 angka di belakang desimal agar presisi)
  const randomLat = getRandomInRange(-90, 90, 6);
  // Longitude rentangnya -180 sampai 180
  const randomLng = getRandomInRange(-180, 180, 6);
  
  const combinedCoords = `${randomLat}, ${randomLng}`;

  // Tampilkan ke layar
  latVal.innerText = randomLat;
  lngVal.innerText = randomLng;
  fullVal.innerText = combinedCoords;

  // Aktifkan tombol salin dan tombol Google Maps
  btnCopy.disabled = false;
  btnCopy.innerText = "📋 Salin";
  
  btnMaps.classList.remove('disabled');
  btnMaps.href = `https://www.google.com/maps/search/?api=1&query=${randomLat},${randomLng}`;
});

// Event saat tombol "Salin" diklik
btnCopy.addEventListener('click', () => {
  const textToCopy = fullVal.innerText;
  
  navigator.clipboard.writeText(textToCopy).then(() => {
    btnCopy.innerText = "✅ Tersalin!";
  }).catch(err => {
    console.error('Gagal menyalin teks: ', err);
  });
});