const poin = {
  A: 0,
  B: 0,
  C: 0,
  D: 0,
  E: 0,
  F: 0,
  G: 0,
  H: 0,
  I: 0,
  J: 0,
  K: 0,
  L: 0,
  M: 0,
  N: 0,
};

function tambahPoin(nama) {
  poin[nama]++;
  document.getElementById('poin-' + nama).textContent = poin[nama];
}

const questions = [
  {
    question: "Apa itu pemanasan global?",
    choices: ["Penurunan suhu bumi", "Kenaikan suhu bumi", "Pencemaran air", "Kebakaran hutan"],
    correct: 1
  },
  {
    question: "Apa itu efek rumah kaca?",
    choices: ["Pemanasan akibat gas tertentu di atmosfer", "Pembuatan rumah dari kaca", "Penurunan suhu udara", "Kebocoran gas rumah"],
    correct: 0
  },
  {
    question: "Apa gas utama penyebab pemanasan global?",
    choices: ["Oksigen", "Nitrogen", "Karbon dioksida", "Hidrogen"],
    correct: 2
  },
  {
    question: "Apa penyebab utama efek rumah kaca buatan manusia?",
    choices: ["Polusi kendaraan", "Tanaman hijau", "Air laut", "Hujan deras"],
    correct: 0
  },
  {
    question: "Apa dampak terbesar dari pemanasan global?",
    choices: ["Menurunnya curah hujan", "Turunnya suhu", "Meningkatnya es kutub", "Naiknya permukaan laut"],
    correct: 3
  },
  {
    question: "Bagaimana cara sederhana mengurangi pemanasan global?",
    choices: ["Menanam pohon", "Membuang sampah", "Membakar sampah", "Menebang pohon"],
    correct: 0
  },

  {
    question: "Sampah sering kali dibakar dengan tujuan menguranggi jumlahnya. Namun, cara tersebut justru berbahaya bagi lingkungan dan kesehatan kita. Apa dampah dari zat beracun yang dihasilkan oleh pembakaran plastik bagi kesehatan manusia?",
    choices: ["Mempercepat penyembuhan luka", "Menyebabkan tubuh menjadi lebih kebal", "Menyebabkan gangguan pernapasan dan resiko kanker", "Menyebabkan kolesterol"],
    correct: 2
  },
  {
    question: "Apa yang menjadi penyebab utama terjadinya pemanasan global di seluruh dunia?",
    choices: ["Peningkatan gas karbon dioksida dari aktivitas manusia", "Penebangan pohon untuk penghijauan", "Penggunaan pupuk organik di pertanian", "Penurunan jumlah kendaraan bermotor"],
    correct: 0
  },
  {
    question: "Mengapa efek rumah kaca sangat berbahaya bagi keberlangsungan hidup manusia dan makhluk lain?",
    choices: ["Karena menyebabkan suhu bumi turun drastis", "Karena memicu peningkatan suhu bumi secara berlebihan", "Karena mempercepat pertumbuhan tanaman", "Karena meningkatkan populasi hewan liar"],
    correct: 1
  },
  {
    question: "Kegiatan manusia apa yang paling banyak menyumbang emisi karbon dioksida ke atmosfer?",
    choices: ["Penggunaan energi listrik dari tenaga surya", "Penggunaan kendaraan berbahan bakar fosil", "Penanaman pohon di kota-kota besar", "Peningkatan penggunaan sepeda"],
    correct: 1
  },
  {
    question: "Apa dampak utama mencairnya es di kutub akibat pemanasan global?",
    choices: ["Meningkatnya permukaan air laut yang dapat menenggelamkan daratan", "Terbentuknya daratan baru di tengah laut", "Meningkatnya jumlah ikan di lautan", "Berkurangnya curah hujan di seluruh dunia"],
    correct: 0
  },
  {
    question: "Mengapa sampah plastik dianggap sebagai ancaman besar terhadap lingkungan?",
    choices: ["Karena plastik mempercepat pertumbuhan tanaman", "Karena plastik mudah terurai dalam tanah", "Karena plastik sulit terurai dan mencemari ekosistem", "Karena plastik meningkatkan kualitas udara"],
    correct: 2
  },
  {
    question: "Gas apa yang paling banyak berkontribusi terhadap efek rumah kaca buatan manusia?",
    choices: ["Nitrogen", "Oksigen", "Karbon dioksida", "Helium"],
    correct: 2
  },
  {
    question: "Istilah apa yang digunakan untuk menggambarkan perubahan iklim ekstrem akibat pemanasan global?",
    choices: ["Gempa Bumi", "Climate Change", "El Nino", "Atmospheric Pressure"],
    correct: 1
  },
  {
    question: "Sumber energi mana yang termasuk energi terbarukan dan ramah lingkungan?",
    choices: ["Minyak bumi", "Batubara", "Energi matahari", "Gas alam"],
    correct: 2
  },
  {
    question: "Apa akibat utama dari penebangan hutan secara liar tanpa reboisasi?",
    choices: ["Tingkat oksigen di udara bertambah", "Terjadi banjir dan tanah longsor", "Tingkat keanekaragaman hayati meningkat", "Peningkatan hasil pertanian"],
    correct: 1
  },
  {
    question: "Mengapa efek rumah kaca alami tetap penting bagi kehidupan di bumi?",
    choices: ["Karena membuat suhu bumi tetap hangat dan layak dihuni", "Karena mempercepat pertumbuhan tanaman", "Karena membuat lapisan ozon lebih tebal", "Karena meningkatkan kandungan nitrogen di udara"],
    correct: 0
  },
  {
    question: "Apa sumber utama polusi udara di kota-kota besar?",
    choices: ["Asap kendaraan bermotor dan industri", "Hujan deras", "Kegiatan bercocok tanam", "Pemakaian pupuk organik"],
    correct: 0
  },
  {
    question: "Bagaimana penggunaan kendaraan listrik membantu mengurangi pemanasan global?",
    choices: ["Dengan memperbanyak konsumsi bahan bakar", "Dengan mengurangi emisi karbon dioksida", "Dengan mempercepat produksi gas metana", "Dengan meningkatkan pemanasan global"],
    correct: 1
  },
  {
    question: "Apa hubungan antara kebakaran hutan dengan perubahan iklim global?",
    choices: ["Kebakaran hutan menghasilkan oksigen bersih", "Kebakaran hutan meningkatkan gas rumah kaca di atmosfer", "Kebakaran hutan menurunkan suhu bumi", "Kebakaran hutan mempercepat reboisasi"],
    correct: 1
  },
  {
    question: "Bahan kimia apa yang dikenal sangat merusak lapisan ozon di atmosfer?",
    choices: ["CO2", "CFC (Chlorofluorocarbon)", "Oksigen", "Nitrogen"],
    correct: 1
  },
  {
    question: "Apa akibat dari pembakaran bahan bakar fosil dalam jangka panjang terhadap atmosfer?",
    choices: ["Meningkatkan kadar karbon dioksida dan memicu pemanasan global", "Mengurangi efek rumah kaca alami", "Meningkatkan hujan asam yang memperbaiki ekosistem", "Menghasilkan udara bersih dan sehat"],
    correct: 0
  },
  {
    question: "Apa akibat utama dari polusi udara terhadap manusia?",
    choices: ["Peningkatan daya tahan tubuh", "Menurunnya kualitas udara dan masalah kesehatan", "Peningkatan jumlah tanaman", "Meningkatkan curah hujan"],
    correct: 1
  },
  {
    question: "Apa dampak negatif dari pembangunan yang tidak memperhatikan lingkungan?",
    choices: ["Meningkatnya penghijauan kota", "Terciptanya kota yang nyaman", "Kerusakan ekosistem dan meningkatnya bencana alam", "Berkurangnya emisi gas rumah kaca"],
    correct: 2
  },
  {
    question: "Apa peran penting hutan bagi kestabilan iklim dunia?",
    choices: ["Menghasilkan karbon dioksida", "Menangkap karbon dan menjaga keseimbangan suhu bumi", "Mempercepat pencairan es kutub", "Meningkatkan jumlah polusi udara"],
    correct: 1
  },
  {
    question: "Mengapa penggunaan plastik sekali pakai harus dikurangi?",
    choices: ["Plastik sekali pakai meningkatkan pertumbuhan tanaman", "Plastik sulit terurai dan mencemari lingkungan selama bertahun-tahun", "Plastik memperbaiki kualitas tanah", "Plastik dapat mengurangi polusi air"],
    correct: 1
  },
  {
    question: "Bagaimana cara sederhana untuk mengurangi jejak karbon dalam kehidupan sehari-hari?",
    choices: ["Menggunakan kendaraan pribadi lebih sering", "Membuang sampah sembarangan", "Menggunakan transportasi umum atau sepeda", "Meningkatkan konsumsi listrik dari batubara"],
    correct: 2
  },
  {
    question: "Gas apa yang paling banyak dihasilkan dari aktivitas peternakan dan berkontribusi terhadap efek rumah kaca?",
    choices: ["Karbon dioksida", "Ozon", "Metana", "Nitrogen"],
    correct: 2
  },
  {
    question: "Mengapa penting untuk menjaga hutan hujan tropis seperti di Indonesia?",
    choices: ["Karena hutan hujan mempercepat pencairan es", "Karena hutan hujan menjadi paru-paru dunia yang menyerap karbon dioksida", "Karena hutan hujan meningkatkan gas beracun", "Karena hutan hujan mengurangi keanekaragaman hayati"],
    correct: 1
  },
  {
    question: "Apa yang terjadi jika jumlah karbon dioksida di atmosfer terus meningkat?",
    choices: ["Bumi menjadi lebih dingin", "Suhu bumi naik dan iklim menjadi ekstrem", "Kualitas air tanah meningkat", "Ozon bertambah tebal"],
    correct: 1
  },
  {
    question: "Apa istilah untuk hujan yang memiliki kandungan asam tinggi akibat polusi udara?",
    choices: ["Hujan lebat", "Hujan asam", "Hujan gerimis", "Hujan ringan"],
    correct: 1
  },
  {
    question: "Langkah apa yang dapat dilakukan untuk mengurangi pencemaran air sungai?",
    choices: ["Membuang sampah ke sungai", "Membuang limbah industri langsung ke sungai", "Menyaring limbah sebelum dibuang ke sungai", "Menggunakan lebih banyak pupuk kimia"],
    correct: 2
  },
  {
    question: "Mengapa penggunaan energi terbarukan penting untuk masa depan bumi?",
    choices: ["Karena energi terbarukan meningkatkan polusi", "Karena energi terbarukan sulit didapatkan", "Karena energi terbarukan mengurangi ketergantungan pada bahan bakar fosil", "Karena energi terbarukan menyebabkan hujan lebih sering"],
    correct: 2
  },
  {
    question: "Apa jenis kendaraan yang ramah lingkungan dan dapat mengurangi emisi karbon?",
    choices: ["Mobil berbahan bakar bensin", "Motor sport", "Mobil listrik", "Pesawat jet pribadi"],
    correct: 2
  },
  {
    question: "Bagaimana efek penggunaan pupuk kimia secara berlebihan terhadap lingkungan?",
    choices: ["Memperbaiki kualitas air tanah", "Mencemari air tanah dan menyebabkan eutrofikasi", "Mengurangi erosi tanah", "Meningkatkan kesehatan tanaman secara alami"],
    correct: 1
  },
  {
    question: "Apa alasan utama mengapa manusia harus menjaga kelestarian lingkungan?",
    choices: ["Agar dapat terus mengeksploitasi alam", "Agar sumber daya alam tetap tersedia untuk generasi mendatang", "Agar dapat meningkatkan limbah", "Agar bumi menjadi lebih panas"],
    correct: 1
  },
  {
    question: "Apa yang harus dilakukan untuk membantu mengurangi polusi udara di perkotaan?",
    choices: ["Mengurangi penggunaan kendaraan bermotor berbahan bakar fosil", "Meningkatkan jumlah pembangkit listrik berbahan batubara", "Menebang pohon di kota", "Membakar sampah secara terbuka"],
    correct: 0
  },
  {
    question: "Apa dampak membuang sampah sembarangan ke sungai?",
    choices: ["Tanah subur", "Banjir", "Air bersih", "Ikan bertambah banyak"],
    correct: 1
  },
  {
    question: "Apa akibat dari penggunaan pestisida berlebihan di pertanian?",
    choices: ["Hasil panen meningkat", "Tanah lebih subur", "Air makin jernih", "Pencemaran tanah dan air"],
    correct: 3
  },
  {
    question: "Apa kerugian dari penebangan hutan secara liar?",
    choices: ["Udara makin segar", "Tanah longsor dan hilangnya habitat", "Meningkatnya hujan", "Tumbuhnya hutan baru"],
    correct: 1
  },
  {
    question: "Apa efek buruk dari pembakaran sampah terbuka?",
    choices: ["Membersihkan udara", "Menghasilkan hujan", "Polusi udara", "Meningkatkan kualitas tanah"],
    correct: 2
  },
  {
    question: "Apa yang terjadi jika limbah pabrik dibuang ke sungai tanpa diolah?",
    choices: ["Sungai jadi tempat wisata", "Pencemaran air dan kematian biota", "Ikan bertambah banyak", "Air menjadi lebih jernih"],
    correct: 1
  },
  {
    question: "Bagaimana dampak konsumsi bahan bakar fosil secara berlebihan?",
    choices: ["Menambah udara segar", "Mempercepat perubahan iklim", "Mengurangi polusi", "Menyejukkan bumi"],
    correct: 1
  },
  {
    question: "Apa akibat pembangunan kota tanpa memperhatikan lingkungan?",
    choices: ["Berkurangnya ruang hijau", "Udara makin bersih", "Sungai makin jernih", "Bertambahnya hutan"],
    correct: 0
  },
  {
    question: "Apa akibat penangkapan ikan dengan bahan peledak?",
    choices: ["Merusak terumbu karang", "Menyuburkan laut", "Membersihkan laut", "Meningkatkan populasi ikan"],
    correct: 0
  },
  {
    question: "Apa dampak dari penggunaan kendaraan pribadi berlebihan?",
    choices: ["Udara lebih bersih", "Bumi lebih sejuk", "Kemacetan dan polusi udara", "Mengurangi kebisingan"],
    correct: 2
  },
  {
    question: "Apa bahaya pembuangan sampah plastik di pantai?",
    choices: ["Membersihkan pantai", "Merusak ekosistem laut", "Meningkatkan pariwisata", "Mempercepat pertumbuhan karang"],
    correct: 1
  }
];

let currentQuestion = 0;
const questionText = document.getElementById("question-text");
const choiceButtons = document.getElementById("choice-buttons");
const nextBtn = document.getElementById("next-btn");

function loadQuestion() {
  nextBtn.style.display = "none";
  choiceButtons.innerHTML = "";
  const q = questions[currentQuestion];
  questionText.innerHTML = `<div class="judul-soal">SOAL ${currentQuestion + 1}</div><div>${q.question}</div>`;

  q.choices.forEach((choice, index) => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.onclick = () => handleAnswer(btn, index === q.correct);
    choiceButtons.appendChild(btn);
  });
}

function handleAnswer(button, isCorrect) {
  const allButtons = choiceButtons.querySelectorAll("button");
  allButtons.forEach(btn => {
    btn.classList.add("disabled");
    btn.disabled = true;
  });

  if (isCorrect) {
    button.classList.add("correct");
  } else {
    button.classList.add("wrong");
    allButtons[questions[currentQuestion].correct].classList.add("correct");
  }

  nextBtn.style.display = "inline-block";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    questionText.textContent = "Kuis selesai!";
    choiceButtons.innerHTML = "";
    nextBtn.style.display = "none";
  }
}

loadQuestion();