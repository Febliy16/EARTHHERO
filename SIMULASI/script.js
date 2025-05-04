const data = [
    {
        kategori: 'SAMPAH',
        gambar: 'sampah.jpg',
        tindakan: {
            DIBAKAR: [
                { teks: 'Udara Tercemar.', gambarAkibat: 'udara_tercemar.jpg', },
                { teks: 'Meningkatkan Risiko Penyakit.', gambarAkibat: 'penyakit.jpg' },
                { teks: 'Gas Rumah Kaca Meningkat.', gambarAkibat: 'gas_rumah_kaca.jpg' },
                { teks: 'Kualitas Hidup Menurun.', gambarAkibat: 'kualitas_hidup.jpg' }
            ],
            DIBUANG: [
                { teks: 'Lingkungan Tercemar.', gambarAkibat: 'lingkungan_tercemar.jpg' },
                { teks: 'Sumber Air Kotor.', gambarAkibat: 'sumber_air_kotor.jpg' },
                { teks: 'Hewan Liar Terancam.', gambarAkibat: 'hewan_terancam.jpg' },
                { teks: 'Tanah Kehilangan Kesuburan.', gambarAkibat: 'tanah_tandus.jpg' }
            ],
            'DAUR ULANG': [
                { teks: 'Mengurangi Limbah.', gambarAkibat: 'limbah_daur_ulang.jpg' },
                { teks: 'Hemat Energi.', gambarAkibat: 'hemat_energi.jpg' },
                { teks: 'Lingkungan Lebih Bersih.', gambarAkibat: 'lingkungan_bersih.jpg' },
                { teks: 'Menjaga Sumber Daya.', gambarAkibat: 'sumber_daya.jpg' }
            ]
        }
    },  
    {
        kategori: 'HUTAN',
        gambar: 'hutan.jpg',
        tindakan: {
            DITEBANG: [
                { teks: 'Hutan Gundul.', gambarAkibat: 'hutan_gundul.jpg' },
                { teks: 'Erosi Tanah Meningkat.', gambarAkibat: 'erosi_tanah.jpg' },
                { teks: 'Kehilangan Habitat Hewan.', gambarAkibat: 'hilang_habitat.jpg' },
                { teks: 'Keseimbangan Ekosistem Terganggu.', gambarAkibat: 'ekosistem_terganggu.jpg' }
            ],
            DITANAM: [
                { teks: 'Mengembalikan Ekosistem.', gambarAkibat: 'hutan_sehat.jpg' },
                { teks: 'Udara Menjadi Lebih Bersih.', gambarAkibat: 'udara_bersih.jpg' },
                { teks: 'Mengurangi Efek Rumah Kaca.', gambarAkibat: 'rumah_kaca_berkurang.jpg' },
                { teks: 'Meningkatkan Kesuburan Tanah.', gambarAkibat: 'tanah_subur.jpg' }
            ]
        }
    },
    {
        kategori: 'LAUT',
        gambar: 'laut.jpg',
        tindakan: {
            DICEMARI: [
                { teks: 'Ekosistem Laut Rusak.', gambarAkibat: 'laut_rusak.jpg' },
                { teks: 'Ikan dan Biota Laut Mati.', gambarAkibat: 'ikan_mati.jpg' },
                { teks: 'Kualitas Air Laut Menurun.', gambarAkibat: 'air_laut_buruk.jpg' },
                { teks: 'Pariwisata Berkurang.', gambarAkibat: 'pariwisata_turun.jpg' }
            ],
            DIBERSIHKAN: [
                { teks: 'Ekosistem Laut Pulih.', gambarAkibat: 'laut_bersih.jpg' },
                { teks: 'Ikan dapat Berkembang Biak.', gambarAkibat: 'ikan_berkembang.jpg' },
                { teks: 'Pantai Terlihat Lebih Indah.', gambarAkibat: 'pantai_bersih.jpg' },
                { teks: 'Pariwisata Meningkat.', gambarAkibat: 'pariwisata_meningkat.jpg' }
            ]
        }
    }
];


let indeksKategori = 0;

function tampilkanKategori() {
    const kategori = data[indeksKategori];
    document.getElementById('judul-kategori').textContent = kategori.kategori;
    const gambarKategori = document.getElementById('gambar-kategori');
    gambarKategori.src = kategori.gambar;
    gambarKategori.alt = kategori.kategori;

    const tombolTindakan = document.getElementById('tombol-tindakan');
    tombolTindakan.innerHTML = '';
    for (const tindakan in kategori.tindakan) {
        const button = document.createElement('button');
        button.textContent = tindakan;
        button.onclick = () => tindakanDipilih(tindakan);
        tombolTindakan.appendChild(button);
    }
    resetAkibat();
}

function pindahKategori(arah) {
    indeksKategori = (indeksKategori + (arah === 'kanan' ? 1 : -1) + data.length) % data.length;
    tampilkanKategori();
}

function tindakanDipilih(tindakan) {
    const kategori = data[indeksKategori];
    const akibat = kategori.tindakan[tindakan];

    const akibatContainer = document.getElementById('akibat-container');
    akibatContainer.innerHTML = '';
    akibat.forEach(item => {
        const akibatCard = document.createElement('div');
        akibatCard.classList.add('akibat-card');
        akibatCard.innerHTML = `<img src="${item.gambarAkibat}" alt="${item.teks}"><p>${item.teks}</p>`;
        akibatContainer.appendChild(akibatCard);

        akibatCard.addEventListener('click', function() {

            akibatCard.classList.toggle('clicked');

            const akibatCardElements = document.querySelectorAll('.akibat-card');
            akibatCardElements.forEach(b => {
                if (b !== akibatCard) {
                    b.classList.remove('clicked')
                }
            })
            
        });

    });
}

function resetAkibat() {
    const akibatContainer = document.getElementById('akibat-container');
    akibatContainer.innerHTML = '<p>Pilih tindakan untuk melihat akibat.</p>';
}

tampilkanKategori();


// NAVIGASI

const dynamicIsland = document.querySelector('.dynamic-island');
const buttona1 = document.getElementById('button1')
const buttona2 = document.getElementById('button2')
const buttona3 = document.getElementById('button3')

dynamicIsland.addEventListener('click', () => {
  dynamicIsland.classList.toggle('expanded');
});

button1.addEventListener('click', () => {
  window.location.href = '../VOICE/index.html';
});

button2.addEventListener('click', () => {
  window.location.href = '../index.html';
});

button3.addEventListener('click', () => {
  window.location.href = '../GAME/index.html';
});