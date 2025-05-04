// Mendapatkan elemen DOM
const startBtn = document.getElementById('start-btn');
const questionElement = document.getElementById('question');  // Elemen untuk menampilkan pertanyaan
const answerElement = document.getElementById('answer');    // Elemen untuk menampilkan jawaban
const typedQuestionInput = document.getElementById('typed-question');  // Kolom teks untuk mengetik pertanyaan

// Database pertanyaan dan jawaban
const qaDatabase = [
  {
    Pertanyaan: ["pemanasan global", "apa itu pemanasan global", "apa pemanasan global", "pengertian pemanasan global"],
    Jawaban: "Pemanasan global adalah peristiwa kenaikan suhu rata-rata atmosfer, laut, dan daratan Bumi secara bertahap."
  },
  {
    Pertanyaan: ["gas rumah kaca", "apa itu gas rumah kaca", "penjelasan gas rumah kaca"],
    Jawaban: "Gas rumah kaca adalah gas-gas di atmosfer bumi yang memerangkap panas sehingga terjadi efek rumah kaca."
  },
  {
    Pertanyaan: ["karbon dioksida", "apa itu karbon dioksida", "penjelasan karbon dioksida"],
    Jawaban: "Karbon dioksida (CO2) adalah gas rumah kaca utama yang berperan dalam efek rumah kaca."
  },
  {
    Pertanyaan: ["pemanasan global itu karena apa", "kenapa pemanasan global bisa terjadi", "apa penyebab pemanasan global", "pemanasan global terjadi karena apa", "kenapa suhu bumi bisa naik"],
    Jawaban: "Pemanasan global terjadi karena meningkatnya gas rumah kaca di udara, akibat pembakaran bahan bakar fosil, penebangan hutan, dan aktivitas manusia lainnya."
  },
  {
    Pertanyaan: ["gas rumah kaca", "apa itu gas rumah kaca", "penjelasan gas rumah kaca", "gas rumah kaca itu apa saja", "contoh gas rumah kaca"],
    Jawaban: "Gas rumah kaca adalah gas yang memerangkap panas di atmosfer Bumi, seperti karbon dioksida (CO2), metana (CH4), dan nitrous oxide (N2O). Gas-gas ini meningkatkan suhu Bumi."
  },
  {
    Pertanyaan: ["zat rumah kaca", "apa itu zat rumah kaca", "apa saja zat rumah kaca", "contoh zat rumah kaca", "zat rumah kaca penyebab pemanasan global"],
    Jawaban: "Zat rumah kaca adalah gas yang memerangkap panas di atmosfer, seperti karbon dioksida (CO2), metana (CH4), dinitrogen oksida (N2O), dan uap air (H2O)."
  },
  {
    Pertanyaan: ["cara mengatasi pemanasan global", "apa yang harus kita lakukan untuk mengatasi pemanasan global", "bagaimana cara mengurangi pemanasan global", "apa yang bisa kita lakukan untuk menghentikan pemanasan global", "cara menghentikan pemanasan global"],
    Jawaban: "Untuk mengatasi pemanasan global, kita harus mengurangi emisi gas rumah kaca dengan cara beralih ke energi terbarukan, mengurangi penggunaan bahan bakar fosil, dan meningkatkan penghijauan atau reboisasi."
  },
  {
    Pertanyaan: ["cara mengatasi efek rumah kaca", "apa yang harus dilakukan untuk mengurangi efek rumah kaca", "bagaimana cara menghentikan efek rumah kaca", "cara mengurangi efek rumah kaca", "bagaimana cara mengurangi efek rumah kaca"],
    Jawaban: "Menghentikan efek rumah kaca dapat dilakukan dengan mengurangi emisi gas rumah kaca, beralih ke energi terbarukan, serta meningkatkan kesadaran akan pentingnya pengelolaan lingkungan secara berkelanjutan."
  },
  {
    Pertanyaan: ["energi fosil", "apa itu energi fosil", "kenapa energi fosil bisa menyebabkan pemanasan global", "energi fosil dan pemanasan global", "contoh energi fosil"],
    Jawaban: "Energi fosil, seperti minyak, batu bara, dan gas alam, berasal dari sisa-sisa organisme yang telah terpendam selama jutaan tahun. Pembakaran energi fosil melepaskan karbon dioksida yang meningkatkan efek rumah kaca."
  },
  {
    Pertanyaan: ["pembakaran bahan bakar", "kenapa pembakaran bahan bakar bisa menyebabkan pemanasan global", "apa dampak pembakaran bahan bakar terhadap pemanasan global", "pembakaran bahan bakar meningkatkan suhu bumi bagaimana", "dampak pembakaran bahan bakar fosil"],
    Jawaban: "Pembakaran bahan bakar fosil melepaskan karbon dioksida ke atmosfer, yang memerangkap panas di Bumi dan menyebabkan pemanasan global. Ini juga meningkatkan konsentrasi gas rumah kaca."
  },
  {
    Pertanyaan: ["deforestasi dan pemanasan global", "kenapa deforestasi bisa menyebabkan pemanasan global", "bagaimana deforestasi berhubungan dengan pemanasan global", "dampak deforestasi bagi pemanasan global", "apa hubungan deforestasi dan gas rumah kaca"],
    Jawaban: "Deforestasi mengurangi jumlah pohon yang dapat menyerap karbon dioksida, salah satu gas rumah kaca. Hal ini meningkatkan jumlah karbon dioksida di atmosfer, yang memperburuk pemanasan global."
  },
  {
    Pertanyaan: ["transportasi", "bagaimana transportasi mempengaruhi pemanasan global", "kenapa kendaraan bermotor bisa menyebabkan pemanasan global", "dampak transportasi terhadap pemanasan global", "kendaraan bermotor dan pemanasan global"],
    Jawaban: "Kendaraan bermotor, terutama yang menggunakan bahan bakar fosil, melepaskan karbon dioksida dan gas rumah kaca lainnya ke atmosfer, yang memperburuk pemanasan global."
  },
  {
    Pertanyaan: ["pencemaran udara", "bagaimana pencemaran udara mempengaruhi pemanasan global", "kenapa polusi udara bisa menyebabkan pemanasan global", "pencemaran udara dan pemanasan global hubungan", "apa hubungan polusi udara dan pemanasan global"],
    Jawaban: "Polusi udara yang mengandung gas rumah kaca seperti karbon dioksida dan metana meningkatkan efek rumah kaca, yang menyebabkan pemanasan global dan perubahan iklim."
  },
  {
    Pertanyaan: ["akibat pencemaran air", "bagaimana pencemaran air bisa menyebabkan pemanasan global", "kenapa polusi air berhubungan dengan pemanasan global", "apa dampak pencemaran air bagi pemanasan global", "pencemaran air memperburuk pemanasan global bagaimana"],
    Jawaban: "Pencemaran air dapat mempengaruhi kemampuan ekosistem untuk menyerap karbon dioksida, serta merusak kehidupan akuatik yang memainkan peran dalam menjaga keseimbangan iklim."
  },
  {
    Pertanyaan: ["sampah plastik", "kenapa sampah plastik bisa menyebabkan pemanasan global", "bagaimana sampah plastik berhubungan dengan pemanasan global", "sampah plastik menyebabkan pemanasan global bagaimana", "apa hubungan sampah plastik dengan pemanasan global"],
    Jawaban: "Sampah plastik yang terbakar menghasilkan gas berbahaya seperti karbon dioksida, yang memperburuk pemanasan global. Selain itu, produksi plastik juga membutuhkan energi besar yang menghasilkan emisi gas rumah kaca."
  },
  {
    Pertanyaan: ["penggunaan pupuk", "bagaimana pupuk bisa mempengaruhi pemanasan global", "kenapa penggunaan pupuk kimia dapat menyebabkan pemanasan global", "dampak pupuk terhadap pemanasan global", "pupuk dan pemanasan global"],
    Jawaban: "Penggunaan pupuk kimia, terutama yang mengandung nitrogen, dapat menghasilkan gas rumah kaca seperti nitrous oxide yang memperburuk pemanasan global."
  },
  {
    Pertanyaan: ["energi terbarukan", "kenapa energi terbarukan penting untuk mengatasi pemanasan global", "apa itu energi terbarukan", "energi terbarukan mengurangi pemanasan global bagaimana", "energi terbarukan membantu pemanasan global"],
    Jawaban: "Energi terbarukan, seperti energi surya, angin, dan hidro, tidak menghasilkan gas rumah kaca, sehingga dapat mengurangi emisi yang menyebabkan pemanasan global."
  },
  {
    Pertanyaan: ["penurunan kualitas udara", "kenapa penurunan kualitas udara bisa menyebabkan pemanasan global", "apa hubungan kualitas udara dan pemanasan global", "penurunan kualitas udara menyebabkan pemanasan global bagaimana", "kualitas udara buruk dan pemanasan global"],
    Jawaban: "Penurunan kualitas udara, akibat polusi gas rumah kaca, memperburuk efek rumah kaca, yang mempercepat pemanasan global."
  },
  {
    Pertanyaan: ["solusi untuk mengatasi pemanasan global", "apa solusi terbaik untuk mengatasi pemanasan global", "bagaimana cara menghentikan pemanasan global", "solusi mengurangi pemanasan global", "cara mengatasi pemanasan global secara efektif"],
    Jawaban: "Solusi untuk mengatasi pemanasan global termasuk penggunaan energi terbarukan, mengurangi deforestasi, menghentikan pembakaran bahan bakar fosil, dan meningkatkan efisiensi energi."
  },
  {
    Pertanyaan: ["mengurangi emisi karbon", "bagaimana cara mengurangi emisi karbon dioksida", "kenapa kita harus mengurangi emisi karbon", "cara mengurangi emisi gas rumah kaca", "mengurangi emisi karbon itu bagaimana"],
    Jawaban: "Mengurangi emisi karbon dapat dilakukan dengan beralih ke transportasi ramah lingkungan, menggunakan energi terbarukan, menghemat energi, serta mendaur ulang bahan-bahan yang mengandung karbon."
  },
  {
    Pertanyaan: ["pola hidup ramah lingkungan", "bagaimana pola hidup ramah lingkungan bisa membantu mengatasi pemanasan global", "apa yang harus dilakukan agar hidup ramah lingkungan", "pola hidup ramah lingkungan itu apa", "cara hidup ramah lingkungan"],
    Jawaban: "Pola hidup ramah lingkungan meliputi mengurangi penggunaan plastik, menggunakan transportasi umum, menanam pohon, menghemat energi, dan mendaur ulang sampah."
  },
  {
    Pertanyaan: ["perubahan iklim", "apa itu perubahan iklim", "apa yang dimaksud dengan perubahan iklim", "penjelasan perubahan iklim"],
    Jawaban: "Perubahan iklim adalah perubahan besar dalam pola cuaca dan suhu Bumi dalam jangka panjang, yang dipengaruhi oleh aktivitas manusia dan alam."
  },
  {
    Pertanyaan: ["perubahan iklim dan pemanasan global", "apakah perubahan iklim dan pemanasan global itu sama", "apa hubungan pemanasan global dengan perubahan iklim", "pemanasan global itu bagian dari perubahan iklim bagaimana", "pemanasan global dan perubahan iklim itu apa bedanya"],
    Jawaban: "Pemanasan global adalah bagian dari perubahan iklim, yang merujuk pada peningkatan suhu Bumi, sementara perubahan iklim mencakup dampak lebih luas seperti perubahan cuaca ekstrem."
  },
  {
    Pertanyaan: ["dampak sampah plastik terhadap lingkungan", "apa dampak sampah plastik bagi alam", "kenapa sampah plastik buruk untuk lingkungan", "bagaimana sampah plastik merusak alam", "kenapa kita harus mengurangi sampah plastik"],
    Jawaban: "Sampah plastik merusak lingkungan karena sulit terurai dan dapat mencemari tanah, air, serta menghancurkan habitat hewan."
  },
  {
    Pertanyaan: ["cara mendaur ulang sampah", "bagaimana cara mendaur ulang sampah plastik", "apa yang bisa didaur ulang", "mengapa penting untuk mendaur ulang sampah", "cara mengurangi sampah dengan mendaur ulang"],
    Jawaban: "Mendaur ulang sampah bisa dilakukan dengan memisahkan sampah berdasarkan jenisnya seperti plastik, kertas, dan kaca, dan mengirimnya ke tempat pengolahan sampah daur ulang."
  },
  {
    Pertanyaan: ["efek sampah terhadap hewan", "bagaimana sampah plastik mempengaruhi hewan", "kenapa sampah bisa membahayakan hewan", "sampah dan hewan laut", "hewan yang terancam akibat sampah plastik"],
    Jawaban: "Sampah plastik dapat membahayakan hewan karena bisa tertelan atau terperangkap di dalamnya, yang bisa menyebabkan cedera atau bahkan kematian pada hewan."
  },
  {
    Pertanyaan: ["mengapa sampah harus dipilah", "apa pentingnya memilah sampah", "kenapa kita harus memisahkan sampah", "apa manfaat memilah sampah", "sampah harus dipisahkan untuk apa"],
    Jawaban: "Memilah sampah membantu memudahkan proses daur ulang, mengurangi sampah yang masuk ke tempat pembuangan akhir, dan mengurangi polusi lingkungan."
  },
  {
    Pertanyaan: ["deforestasi", "apa itu deforestasi", "kenapa deforestasi bisa berbahaya", "apa akibat deforestasi bagi hutan", "dampak deforestasi bagi lingkungan"],
    Jawaban: "Deforestasi adalah penggundulan hutan untuk lahan pertanian atau pembangunan. Deforestasi dapat mengurangi jumlah pohon yang menyerap karbon dioksida dan merusak habitat hewan."
  },
  {
    Pertanyaan: ["apa yang terjadi jika hutan rusak", "apa yang akan terjadi jika hutan ditebang", "dampak kehilangan hutan bagi bumi", "kenapa hutan itu penting bagi bumi", "kehilangan hutan menyebabkan apa"],
    Jawaban: "Kehilangan hutan menyebabkan hilangnya habitat bagi berbagai spesies, meningkatnya karbon dioksida di atmosfer, dan berkurangnya oksigen yang dihasilkan oleh pohon."
  },
  {
    Pertanyaan: ["bagaimana cara menghentikan deforestasi", "apa yang bisa dilakukan untuk mencegah deforestasi", "cara melindungi hutan", "mengapa kita harus melindungi hutan", "apa yang bisa dilakukan untuk menyelamatkan hutan"],
    Jawaban: "Untuk menghentikan deforestasi, kita perlu mengurangi penebangan pohon, mendukung kebijakan pelestarian hutan, serta beralih ke pertanian ramah lingkungan."
  },
  {
    Pertanyaan: ["fungsi hutan bagi kehidupan", "kenapa hutan sangat penting", "apa peran hutan bagi kehidupan manusia", "fungsi hutan untuk bumi", "apa manfaat hutan untuk kita"],
    Jawaban: "Hutan memiliki banyak fungsi penting, seperti menyerap karbon dioksida, menghasilkan oksigen, menjaga keseimbangan iklim, dan menyediakan habitat bagi berbagai spesies."
  },
  {
    Pertanyaan: ["pencemaran air", "apa itu pencemaran air", "kenapa air bisa tercemar", "pencemaran air terjadi karena apa", "dampak pencemaran air bagi lingkungan"],
    Jawaban: "Pencemaran air terjadi ketika air tercemar oleh zat-zat berbahaya, seperti limbah industri, sampah plastik, dan pestisida, yang merusak ekosistem akuatik."
  },
  {
    Pertanyaan: ["kenapa pencemaran air bisa berbahaya", "dampak pencemaran air bagi manusia", "apa yang bisa terjadi jika air tercemar", "pencemaran air bisa menyebabkan apa", "mengapa kita tidak boleh mencemari air"],
    Jawaban: "Pencemaran air dapat menyebabkan kerusakan ekosistem air, mengurangi kualitas air untuk kebutuhan manusia, dan mengancam kesehatan hewan serta manusia yang bergantung pada sumber air tersebut."
  },
  {
    Pertanyaan: ["cara mengatasi pencemaran air", "bagaimana cara mengurangi pencemaran air", "apa yang harus dilakukan untuk mencegah pencemaran air", "bagaimana kita bisa menjaga kebersihan air", "cara menjaga kualitas air"],
    Jawaban: "Untuk mengatasi pencemaran air, kita perlu mengurangi pembuangan limbah sembarangan, mendaur ulang air, dan menjaga kebersihan sungai dan laut dari sampah."
  },
  {
    Pertanyaan: ["dampak limbah industri terhadap air", "bagaimana limbah industri mencemari air", "limbah industri dan pencemaran air", "kenapa limbah industri berbahaya bagi air", "dampak buruk limbah industri terhadap air"],
    Jawaban: "Limbah industri mengandung bahan kimia berbahaya yang mencemari air dan dapat merusak kualitas air, mengancam kehidupan akuatik, dan membahayakan manusia yang menggunakannya."
  },
  {
    Pertanyaan: ["perubahan iklim akibat pemanasan global", "bagaimana pemanasan global menyebabkan perubahan iklim", "apa hubungan pemanasan global dengan perubahan iklim", "pemanasan global menyebabkan perubahan iklim bagaimana", "pengaruh pemanasan global terhadap perubahan iklim"],
    Jawaban: "Pemanasan global menyebabkan perubahan iklim karena peningkatan suhu Bumi yang mempengaruhi pola cuaca, menyebabkan cuaca ekstrem, banjir, dan kekeringan."
  },
  {
    Pertanyaan: ["apa itu efek rumah kaca", "kenapa efek rumah kaca bisa terjadi", "bagaimana efek rumah kaca mempengaruhi bumi", "apa dampak efek rumah kaca bagi lingkungan", "bagaimana efek rumah kaca meningkatkan suhu bumi"],
    Jawaban: "Efek rumah kaca adalah fenomena di mana gas-gas seperti karbon dioksida, metana, dan nitrous oxide memerangkap panas di atmosfer, yang meningkatkan suhu Bumi."
  },
  {
    Pertanyaan: ["gas yang menyebabkan efek rumah kaca", "gas apa saja yang menyebabkan efek rumah kaca", "contoh gas rumah kaca", "apa saja gas yang berperan dalam efek rumah kaca", "gas rumah kaca penyebab pemanasan global"],
    Jawaban: "Gas-gas yang menyebabkan efek rumah kaca antara lain karbon dioksida (CO2), metana (CH4), dan dinitrogen oksida (N2O)."
  },
  {
    Pertanyaan: ["bagaimana manusia bisa mengurangi efek rumah kaca", "apa yang harus dilakukan untuk mengurangi efek rumah kaca", "cara mengurangi efek rumah kaca", "bagaimana cara menghentikan efek rumah kaca", "langkah-langkah mengurangi efek rumah kaca"],
    Jawaban: "Manusia dapat mengurangi efek rumah kaca dengan mengurangi penggunaan bahan bakar fosil, beralih ke energi terbarukan, serta melestarikan hutan yang dapat menyerap karbon dioksida."
  },
  {
    Pertanyaan: ["apa itu pengelolaan lingkungan", "pengelolaan lingkungan yang baik itu apa", "bagaimana cara pengelolaan lingkungan yang baik", "kenapa pengelolaan lingkungan itu penting", "apa manfaat pengelolaan lingkungan"],
    Jawaban: "Pengelolaan lingkungan adalah usaha untuk menjaga kelestarian alam dengan cara mengelola sumber daya alam secara bijaksana, seperti menjaga kebersihan, mengurangi polusi, dan melestarikan ekosistem."
  },
  {
    Pertanyaan: ["apa yang dimaksud dengan keberlanjutan lingkungan", "keberlanjutan lingkungan itu apa", "kenapa keberlanjutan lingkungan penting", "apa tujuan dari keberlanjutan lingkungan", "bagaimana cara mencapai keberlanjutan lingkungan"],
    Jawaban: "Keberlanjutan lingkungan berarti menjaga dan memelihara sumber daya alam agar tetap ada untuk generasi mendatang dengan cara menggunakan sumber daya secara bijaksana."
  },
  {
    Pertanyaan: ["apa itu ekosistem", "bagaimana ekosistem mempengaruhi kehidupan", "kenapa ekosistem itu penting", "apa yang terjadi jika ekosistem rusak", "pengaruh kerusakan ekosistem bagi bumi"],
    Jawaban: "Ekosistem adalah sistem kehidupan yang terdiri dari organisme hidup dan lingkungan fisiknya. Ekosistem yang rusak dapat menyebabkan hilangnya spesies dan kerusakan sumber daya alam."
  },
  {
    Pertanyaan: ["apa yang bisa dilakukan siswa untuk menjaga lingkungan", "bagaimana siswa bisa menjaga kebersihan lingkungan", "aksi nyata siswa untuk lingkungan", "apa yang bisa dilakukan anak-anak untuk bumi", "peran siswa dalam menjaga alam"],
    Jawaban: "Siswa bisa melakukan aksi nyata seperti membuang sampah pada tempatnya, menanam pohon, mengurangi penggunaan plastik, dan mengajak teman-temannya untuk peduli lingkungan."
  },
  {
    Pertanyaan: ["apa yang bisa dilakukan siswa untuk mengurangi sampah plastik", "bagaimana siswa bisa mengurangi sampah plastik", "cara siswa mengurangi sampah plastik", "aksi nyata siswa mengurangi sampah plastik", "mengapa siswa harus mengurangi sampah plastik"],
    Jawaban: "Siswa bisa membawa tas belanja sendiri, menggunakan botol air minum yang bisa dipakai ulang, dan mengurangi penggunaan barang-barang plastik sekali pakai."
  },
  {
    Pertanyaan: ["bagaimana siswa bisa membantu melindungi hutan", "aksi nyata siswa untuk hutan", "apa yang bisa siswa lakukan untuk melindungi hutan", "siswa dan perlindungan hutan", "peran siswa dalam menyelamatkan hutan"],
    Jawaban: "Siswa bisa ikut dalam program penanaman pohon, mengurangi penggunaan kertas, dan mengajak orang lain untuk peduli terhadap keberadaan hutan."
  },
  {
    Pertanyaan: ["bagaimana siswa bisa membantu mengurangi polusi udara", "apa yang bisa dilakukan siswa untuk mengurangi polusi udara", "aksi nyata siswa untuk udara bersih", "cara siswa mengurangi polusi udara", "mengapa siswa harus peduli polusi udara"],
    Jawaban: "Siswa bisa menggunakan transportasi umum, bersepeda, atau berjalan kaki untuk mengurangi emisi gas kendaraan dan juga menanam pohon untuk menyerap polusi udara."
  },
  {
    Pertanyaan: ["bagaimana siswa bisa menghemat air", "apa yang bisa dilakukan siswa untuk menghemat air", "cara siswa menghemat penggunaan air", "mengapa siswa harus hemat air", "siswa dan penghematan air"],
    Jawaban: "Siswa bisa menghemat air dengan menutup kran saat tidak digunakan, menggunakan air secukupnya, dan mengajak orang lain untuk berhemat air."
  },
  {
    Pertanyaan: ["apa itu menurangi polusi", "bagaimana cara menurangi polusi udara", "penanggulangan polusi apa yang perlu dilakukan", "apa yang dilakukan untuk mengurangi polusi", "cara menanggulangi polusi lingkungan"],
    Jawaban: "Penanggulangan polusi melibatkan pengurangan emisi gas buang kendaraan, pabrik, serta meningkatkan kesadaran masyarakat untuk menjaga kebersihan dan mengurangi penggunaan bahan berbahaya."
  },
  {
    Pertanyaan: ["cara mengatasi perubahan iklim", "apa yang bisa dilakukan untuk mengatasi perubahan iklim", "penanggulangan perubahan iklim", "bagaimana cara melawan pemanasan global", "apa yang dilakukan untuk mencegah perubahan iklim"],
    Jawaban: "Untuk mengatasi perubahan iklim, kita bisa mengurangi emisi gas rumah kaca, beralih ke energi terbarukan, menanam pohon, dan mengurangi konsumsi bahan bakar fosil."
  },
  {
    Pertanyaan: ["bagaimana cara mengurangi kerusakan hutan", "penanggulangan kerusakan hutan", "apa yang bisa dilakukan untuk melindungi hutan", "bagaimana cara menghentikan penebangan pohon", "penanggulangan deforestasi"],
    Jawaban: "Penanggulangan kerusakan hutan bisa dilakukan dengan mengurangi penebangan pohon, melakukan reboisasi, dan mendukung kebijakan pemerintah yang melindungi hutan."
  },
  {
    Pertanyaan: ["apa yang bisa dilakukan untuk mengurangi sampah plastik", "cara mengurangi sampah plastik", "penanggulangan sampah plastik", "bagaimana cara mengurangi sampah plastik di laut", "mengurangi sampah plastik di rumah"],
    Jawaban: "Mengurangi sampah plastik dapat dilakukan dengan menggunakan barang-barang yang dapat digunakan ulang, mendaur ulang plastik, serta mengurangi penggunaan plastik sekali pakai."
  },
  {
    Pertanyaan: ["apa itu energi terbarukan", "contoh energi terbarukan", "kenapa energi terbarukan itu penting", "mengapa kita perlu beralih ke energi terbarukan", "cara mengurangi penggunaan energi fosil"],
    Jawaban: "Energi terbarukan adalah energi yang berasal dari sumber daya alam yang dapat diperbarui, seperti energi matahari, angin, dan air. Beralih ke energi terbarukan membantu mengurangi polusi dan pemanasan global."
  },
  {
    Pertanyaan: ["apa yang dilakukan pemerintah untuk melindungi lingkungan", "pemerintah dan perlindungan lingkungan", "apa peran pemerintah dalam menjaga lingkungan", "apa kebijakan pemerintah untuk menjaga alam", "bagaimana pemerintah membantu mengatasi polusi"],
    Jawaban: "Pemerintah melakukan berbagai upaya seperti menerapkan regulasi lingkungan, mengawasi pabrik dan limbah, serta mengedukasi masyarakat tentang pentingnya menjaga kebersihan dan kelestarian alam."
  },
  {
    Pertanyaan: ["apa itu program daur ulang", "bagaimana cara mendaur ulang sampah", "apa manfaat daur ulang", "program daur ulang sampah yang penting", "mengapa kita harus mendaur ulang sampah"],
    Jawaban: "Daur ulang adalah proses mengolah sampah menjadi barang baru yang berguna. Program daur ulang membantu mengurangi jumlah sampah yang dibuang ke tempat pembuangan akhir dan menghemat sumber daya alam."
  },
  {
    Pertanyaan: ["apa itu program penanaman pohon", "mengapa penanaman pohon itu penting", "apa manfaat penanaman pohon", "bagaimana penanaman pohon membantu bumi", "penanaman pohon dan perubahan iklim"],
    Jawaban: "Program penanaman pohon membantu menyerap karbon dioksida, meningkatkan kualitas udara, mencegah erosi, dan menjaga keanekaragaman hayati."
  },
  {
    Pertanyaan: ["bagaimana cara membersihkan laut dari sampah", "apa yang bisa dilakukan untuk mengurangi sampah di laut", "bagaimana cara mengatasi sampah laut", "apa yang bisa dilakukan untuk melindungi laut", "membersihkan laut dari sampah plastik"],
    Jawaban: "Membersihkan laut dari sampah bisa dilakukan dengan mengurangi penggunaan plastik, melakukan program bersih-bersih pantai, dan mendaur ulang sampah plastik."
  },
  {
    Pertanyaan: ["apa itu kampanye lingkungan", "bagaimana kampanye lingkungan membantu bumi", "kenapa kampanye lingkungan penting", "apa tujuan kampanye lingkungan", "bagaimana cara ikut kampanye lingkungan"],
    Jawaban: "Kampanye lingkungan bertujuan untuk meningkatkan kesadaran masyarakat tentang pentingnya menjaga alam dan mengurangi kerusakan lingkungan. Kita bisa ikut kampanye dengan berbagi informasi, mengikuti aksi, dan menerapkan kebiasaan ramah lingkungan."
  },
  {
    Pertanyaan: ["cara menjaga lingkungan tetap bersih", "bagaimana cara melestarikan kebersihan lingkungan", "apa yang bisa dilakukan agar lingkungan tetap bersih", "mengapa kita perlu menjaga kebersihan lingkungan", "cara agar lingkungan tidak kotor"],
    Jawaban: "Untuk menjaga kebersihan lingkungan, kita bisa membuang sampah pada tempatnya, tidak merusak alam, dan rutin membersihkan lingkungan sekitar."
  },
  {
    Pertanyaan: ["bagaimana cara mengurangi polusi di sekitar kita", "cara mengurangi polusi lingkungan", "apa yang bisa dilakukan untuk mengurangi polusi udara", "cara agar udara tetap bersih", "bagaimana cara mengatasi polusi di sekitar"],
    Jawaban: "Kita bisa mengurangi polusi dengan tidak membakar sampah sembarangan, menggunakan kendaraan umum, bersepeda, dan mengurangi penggunaan bahan kimia berbahaya."
  },
  {
    Pertanyaan: ["mengapa kita harus melestarikan alam", "kenapa kita harus menjaga alam", "apa pentingnya melestarikan alam", "mengapa alam harus dijaga", "apa manfaat melestarikan alam"],
    Jawaban: "Melestarikan alam penting agar bumi tetap sehat, menyediakan udara bersih, menjaga keanekaragaman hayati, dan memastikan sumber daya alam tersedia untuk generasi mendatang."
  },
  {
    Pertanyaan: ["cara menjaga ekosistem tetap seimbang", "bagaimana cara menjaga keseimbangan alam", "apa yang bisa dilakukan agar ekosistem tetap seimbang", "mengapa keseimbangan ekosistem itu penting", "apa akibat ekosistem yang tidak seimbang"],
    Jawaban: "Untuk menjaga keseimbangan ekosistem, kita harus melindungi flora dan fauna, mengurangi perusakan habitat alami, dan mengurangi polusi serta sampah."
  },
  {
    Pertanyaan: ["apa yang dimaksud dengan pelestarian lingkungan", "pelestarian lingkungan itu apa", "apa tujuan dari pelestarian lingkungan", "kenapa pelestarian lingkungan itu penting", "bagaimana cara melakukan pelestarian lingkungan"],
    Jawaban: "Pelestarian lingkungan adalah usaha untuk menjaga dan melindungi alam agar tetap lestari, dengan cara mengurangi kerusakan dan menjaga kelestarian sumber daya alam."
  },
  {
    Pertanyaan: ["bagaimana cara melindungi satwa", "apa yang bisa dilakukan untuk melindungi satwa", "cara menjaga satwa dari kepunahan", "melindungi satwa liar untuk apa", "kenapa penting melindungi satwa liar"],
    Jawaban: "Kita bisa melindungi satwa liar dengan tidak merusak habitat mereka, tidak memburu mereka, dan mendukung konservasi serta perlindungan satwa dari kepunahan."
  },
  {
    Pertanyaan: ["apa itu prinsip 3R", "apa itu reduce, reuse, recycle", "apa manfaat 3R untuk lingkungan", "bagaimana cara menerapkan prinsip 3R", "reduce reuse recycle itu apa"],
    Jawaban: "Prinsip 3R terdiri dari mengurangi sampah (reduce), menggunakan kembali barang (reuse), dan mendaur ulang (recycle). Prinsip ini membantu mengurangi jumlah sampah dan menjaga kebersihan lingkungan."
  },
  {
    Pertanyaan: ["bagaimana cara mengurangi pencemaran air", "cara mengurangi pencemaran air", "apa yang bisa dilakukan untuk mengurangi polusi air", "bagaimana cara menjaga kebersihan air", "apa akibat pencemaran air"],
    Jawaban: "Untuk mengurangi polusi air, kita bisa tidak membuang sampah ke sungai, mengurangi penggunaan bahan kimia berbahaya, dan mendukung program pembersihan sungai dan laut."
  },
  {
    Pertanyaan: ["apa yang harus dilakukan agar tidak ada sampah di laut", "cara mengurangi sampah plastik di laut", "bagaimana agar laut bebas dari sampah", "kenapa sampah di laut itu berbahaya", "apa dampak sampah plastik di laut"],
    Jawaban: "Kita bisa mengurangi sampah di laut dengan tidak membuang sampah sembarangan, menggunakan barang yang bisa dipakai ulang, dan ikut dalam kegiatan bersih-bersih pantai."
  },
  {
    Pertanyaan: ["apa itu konservasi alam", "konservasi alam itu apa", "mengapa konservasi alam penting", "bagaimana cara melakukan konservasi alam", "apa yang dimaksud dengan konservasi alam"],
    Jawaban: "Konservasi alam adalah upaya untuk melindungi dan menjaga kelestarian alam, baik itu flora, fauna, maupun ekosistem yang ada, dengan cara mengurangi kerusakan lingkungan dan memelihara sumber daya alam."
  },
  {
    Pertanyaan: ["apa yang bisa dilakukan untuk mengurangi kerusakan tanah", "bagaimana cara menjaga tanah tetap subur", "mengapa kita harus menjaga tanah", "apa yang dimaksud dengan erosi tanah", "kerusakan tanah akibat apa"],
    Jawaban: "Kita bisa mengurangi kerusakan tanah dengan menanam pohon, tidak merusak hutan, serta menggunakan pupuk organik yang ramah lingkungan untuk menjaga kesuburan tanah."
  },
  {
    Pertanyaan: ["bagaimana cara mengatasi banjir", "kenapa banjir terjadi", "apa yang bisa dilakukan untuk mencegah banjir", "cara mencegah banjir", "bagaimana cara mengurangi banjir"],
    Jawaban: "Untuk mencegah banjir, kita perlu menjaga kelestarian hutan, membuat saluran air yang baik, dan mengurangi pembangunan yang menutup resapan air."
  },
  {
    Pertanyaan: ["cara melindungi sumber daya alam", "apa yang bisa dilakukan untuk melindungi sumber daya alam", "mengapa sumber daya alam perlu dilindungi", "melindungi sumber daya alam itu apa", "bagaimana cara menjaga sumber daya alam"],
    Jawaban: "Melindungi sumber daya alam bisa dilakukan dengan cara menggunakan sumber daya secara bijaksana, tidak melakukan eksploitasi berlebihan, dan menjaga kelestarian alam untuk generasi mendatang."
  },
  {
    Pertanyaan: ["bagaimana cara mengurangi sampah plastik di rumah", "cara mengurangi sampah plastik di rumah", "apa yang bisa dilakukan untuk mengurangi sampah plastik", "kenapa sampah plastik harus dikurangi", "cara hidup tanpa plastik"],
    Jawaban: "Kita bisa mengurangi sampah plastik dengan membawa tas belanja sendiri, menggunakan barang yang bisa dipakai ulang, dan menghindari penggunaan plastik sekali pakai."
  },
  {
    Pertanyaan: ["bagaimana cara menjaga kebersihan di sekolah", "apa yang bisa dilakukan di sekolah untuk menjaga kebersihan", "cara menjaga kebersihan lingkungan sekolah", "kenapa kebersihan sekolah itu penting", "apa manfaat menjaga kebersihan di sekolah"],
    Jawaban: "Menjaga kebersihan sekolah bisa dilakukan dengan membuang sampah pada tempatnya, membersihkan ruang kelas secara rutin, dan mengajak teman-teman untuk menjaga kebersihan di lingkungan sekolah."
  },
  {
    Pertanyaan: ["apa itu ekowisata", "ekowisata itu apa", "bagaimana ekowisata bisa melestarikan alam", "kenapa ekowisata penting", "apa manfaat ekowisata bagi lingkungan"],
    Jawaban: "Ekowisata adalah wisata yang bertujuan untuk melestarikan alam dan meningkatkan kesadaran lingkungan. Ekowisata membantu menjaga keberagaman hayati dan mengurangi kerusakan lingkungan."
  },
  {
    Pertanyaan: ["bagaimana cara mengurangi penggunaan kertas", "apa yang bisa dilakukan untuk mengurangi pemakaian kertas", "kenapa kita harus mengurangi penggunaan kertas", "cara hemat kertas", "apa manfaat mengurangi penggunaan kertas"],
    Jawaban: "Kita bisa mengurangi penggunaan kertas dengan mendigitalisasi dokumen, menggunakan kertas bekas, dan menghindari penggunaan kertas yang tidak perlu."
  },
  {
    Pertanyaan: ["bagaimana cara mengurangi sampah di sekolah", "apa yang bisa dilakukan untuk mengurangi sampah di sekolah", "apa yang harus dilakukan di sekolah agar tidak ada sampah", "cara menjaga kebersihan sekolah", "mengapa sampah harus dihindari di sekolah"],
    Jawaban: "Untuk mengurangi sampah di sekolah, kita bisa membawa tempat makan sendiri, menggunakan botol air yang bisa diisi ulang, dan tidak membuang sampah sembarangan."
  },
  {
    Pertanyaan: ["apa yang bisa dilakukan agar rumah tetap bersih", "cara menjaga kebersihan rumah", "bagaimana cara membuat rumah tetap bersih", "kenapa kebersihan rumah itu penting", "apa manfaat rumah yang bersih"],
    Jawaban: "Kita bisa menjaga kebersihan rumah dengan menyapu dan mengepel setiap hari, membuang sampah pada tempatnya, dan menjaga kebersihan kamar tidur."
  },
  {
    Pertanyaan: ["apa yang dimaksud dengan kebersihan lingkungan", "kebersihan lingkungan itu apa", "mengapa kebersihan lingkungan itu penting", "kenapa kita harus menjaga kebersihan lingkungan", "apa manfaat menjaga kebersihan lingkungan"],
    Jawaban: "Kebersihan lingkungan berarti menjaga agar tempat tinggal kita tetap bersih dan nyaman. Ini penting agar tidak ada penyakit dan alam tetap sehat."
  },
  {
    Pertanyaan: ["bagaimana cara menghemat energi listrik", "apa yang bisa dilakukan agar tidak boros listrik", "cara menghemat listrik di rumah", "kenapa kita perlu menghemat energi listrik", "apa akibat pemborosan listrik"],
    Jawaban: "Kita bisa menghemat listrik dengan mematikan lampu ketika tidak digunakan, menggunakan lampu hemat energi, dan mematikan peralatan listrik setelah digunakan."
  },
  {
    Pertanyaan: ["bagaimana cara menghemat air di rumah", "apa yang bisa dilakukan untuk menghemat air", "kenapa kita harus menghemat air", "apa manfaat menghemat air", "cara mengurangi pemakaian air"],
    Jawaban: "Untuk menghemat air, kita bisa menutup kran saat tidak digunakan, mandi dengan cepat, dan menggunakan ember saat mencuci piring atau mobil."
  },
  {
    Pertanyaan: ["apa yang harus dilakukan agar udara tetap segar", "cara menjaga udara tetap bersih", "bagaimana cara menjaga kualitas udara", "apa yang bisa dilakukan untuk mengurangi polusi udara", "kenapa udara harus dijaga kebersihannya"],
    Jawaban: "Kita bisa menjaga udara tetap segar dengan menanam pohon, mengurangi polusi kendaraan, dan tidak membakar sampah sembarangan."
  },
  {
    Pertanyaan: ["bagaimana cara membuat taman di rumah", "apa yang dibutuhkan untuk membuat taman", "apa manfaat membuat taman di rumah", "kenapa penting membuat taman di rumah", "cara membuat taman yang indah"],
    Jawaban: "Untuk membuat taman, kita perlu menyiapkan tanah yang subur, memilih tanaman yang mudah dirawat, dan menyirami tanaman secara rutin."
  },
  {
    Pertanyaan: ["apa yang bisa dilakukan agar jalan-jalan tetap bersih", "bagaimana cara menjaga kebersihan jalan", "apa yang harus dilakukan agar tidak ada sampah di jalan", "kenapa jalan harus dijaga kebersihannya", "apa manfaat jalan yang bersih"],
    Jawaban: "Menjaga kebersihan jalan bisa dilakukan dengan membuang sampah pada tempatnya, ikut kegiatan bersih-bersih jalan, dan tidak membuang sampah sembarangan."
  },
  {
    Pertanyaan: ["apa yang dimaksud dengan sampah organik", "sampah organik itu apa", "apa contoh sampah organik", "kenapa sampah organik bisa diolah", "bagaimana cara mengolah sampah organik"],
    Jawaban: "Sampah organik adalah sampah yang bisa terurai secara alami, seperti sisa makanan dan daun. Sampah ini bisa diolah menjadi kompos untuk tanaman."
  },
  {
    Pertanyaan: ["apa itu kompos", "kompos itu apa", "bagaimana cara membuat kompos", "apa manfaat kompos untuk tanaman", "kenapa kompos baik untuk tanah"],
    Jawaban: "Kompos adalah bahan organik yang terurai dan digunakan untuk menyuburkan tanah. Kita bisa membuat kompos dengan mencampur sampah organik dan membiarkannya terurai."
  },
  {
    Pertanyaan: ["apa yang bisa dilakukan agar pohon tetap tumbuh baik", "bagaimana cara merawat pohon", "kenapa pohon harus dirawat dengan baik", "apa manfaat merawat pohon", "bagaimana cara menjaga pohon agar tetap sehat"],
    Jawaban: "Pohon bisa dirawat dengan menyiraminya secara teratur, memberi pupuk, dan melindunginya dari hama serta kerusakan."
  },
  {
    Pertanyaan: ["apa itu daur ulang", "daur ulang itu apa", "apa manfaat daur ulang untuk lingkungan", "bagaimana cara mendaur ulang barang", "kenapa daur ulang itu penting"],
    Jawaban: "Daur ulang adalah proses mengolah barang bekas menjadi barang baru. Ini penting untuk mengurangi sampah dan memanfaatkan kembali bahan yang masih berguna."
  },
  {
    Pertanyaan: ["bagaimana cara menjaga kebersihan taman bermain", "apa yang bisa dilakukan untuk menjaga kebersihan taman bermain", "kenapa kebersihan taman bermain itu penting", "apa manfaat menjaga kebersihan taman bermain", "bagaimana cara agar taman bermain tetap bersih"],
    Jawaban: "Menjaga kebersihan taman bermain bisa dilakukan dengan tidak membuang sampah sembarangan, mengajak teman-teman untuk membuang sampah pada tempatnya, dan ikut membersihkan taman."
  },
  {
    Pertanyaan: ["apa yang bisa dilakukan agar hewan tetap terlindungi", "bagaimana cara melindungi hewan", "kenapa kita harus melindungi hewan", "apa manfaat melindungi hewan", "apa yang bisa dilakukan agar hewan tidak punah"],
    Jawaban: "Kita bisa melindungi hewan dengan tidak memburu mereka, menjaga habitat alami mereka, dan tidak merusak lingkungan tempat mereka tinggal."
  },
  {
    Pertanyaan: ["apa yang dimaksud dengan energi terbarukan", "energi terbarukan itu apa", "apa contoh energi terbarukan", "kenapa energi terbarukan itu penting", "apa manfaat energi terbarukan"],
    Jawaban: "Energi terbarukan adalah energi yang dapat diperbaharui, seperti energi matahari dan angin. Energi ini ramah lingkungan karena tidak menghasilkan polusi."
  },
  {
    Pertanyaan: ["bagaimana cara mengurangi penggunaan plastik", "apa yang bisa dilakukan untuk mengurangi plastik", "kenapa kita harus mengurangi plastik", "apa manfaat mengurangi plastik", "apa akibat penggunaan plastik yang berlebihan"],
    Jawaban: "Kita bisa mengurangi penggunaan plastik dengan membawa tas belanja sendiri, menggunakan botol air yang bisa dipakai ulang, dan menghindari barang-barang plastik sekali pakai."
  },
  {
    Pertanyaan: ["bagaimana cara melindungi pohon dari kerusakan", "apa yang bisa dilakukan untuk melindungi pohon", "kenapa pohon harus dilindungi", "apa manfaat melindungi pohon", "apa yang bisa menyebabkan pohon rusak"],
    Jawaban: "Pohon bisa dilindungi dengan tidak menebangnya sembarangan, menyiramnya secara teratur, dan tidak merusak akarnya."
  },
  {
    Pertanyaan: ["apa itu penanaman pohon", "penanaman pohon itu apa", "apa manfaat penanaman pohon", "kenapa kita perlu menanam pohon", "bagaimana cara menanam pohon yang baik"],
    Jawaban: "Penanaman pohon adalah kegiatan menanam pohon untuk melestarikan alam. Pohon berguna untuk menyaring udara, menyediakan oksigen, dan menjaga kestabilan tanah."
  },
  {
    Pertanyaan: ["bagaimana cara melindungi hutan dari kerusakan", "apa yang bisa dilakukan untuk melindungi hutan", "kenapa hutan harus dijaga", "apa akibat kerusakan hutan", "apa manfaat melindungi hutan"],
    Jawaban: "Melindungi hutan bisa dilakukan dengan tidak menebang pohon sembarangan, menanam pohon kembali setelah ditebang, dan melarang pembukaan hutan untuk pembangunan yang merusak."
  },
  {
    Pertanyaan: ["apa yang bisa dilakukan untuk mencegah kebakaran hutan", "kenapa kebakaran hutan bisa terjadi", "apa akibat kebakaran hutan", "bagaimana cara mencegah kebakaran hutan", "apa yang harus dilakukan saat terjadi kebakaran hutan"],
    Jawaban: "Kebakaran hutan bisa dicegah dengan tidak membuang puntung rokok sembarangan, mengelola kebun dengan baik, dan melaporkan kebakaran hutan jika terjadi."
  },
  {
    Pertanyaan: ["bagaimana cara menjaga hutan agar tetap hijau", "apa yang bisa dilakukan agar hutan tetap hijau", "kenapa hutan harus dijaga kelestariannya", "apa yang dimaksud dengan reboisasi", "apa manfaat hutan yang hijau"],
    Jawaban: "Untuk menjaga hutan tetap hijau, kita bisa melakukan reboisasi, melestarikan tanaman asli hutan, dan menjaga agar hutan tidak dijadikan tempat untuk kegiatan yang merusak."
  },
  {
    Pertanyaan: ["bagaimana cara menjaga sumber air tetap bersih", "apa yang bisa dilakukan agar sumber air tetap bersih", "kenapa sumber air harus dijaga kebersihannya", "apa yang bisa menyebabkan pencemaran air", "apa akibat air tercemar"],
    Jawaban: "Sumber air bisa dijaga bersih dengan tidak membuang sampah di sungai atau laut, mengelola limbah dengan benar, dan menjaga kebersihan area sekitar sumber air."
  },
  {
    Pertanyaan: ["bagaimana cara menghemat penggunaan air", "apa yang bisa dilakukan untuk menghemat air", "kenapa kita harus menghemat air", "apa yang dimaksud dengan konservasi air", "apa manfaat menghemat air"],
    Jawaban: "Menghemat air bisa dilakukan dengan mematikan keran saat tidak digunakan, mandi dengan cepat, dan menggunakan ember untuk mencuci piring atau mobil."
  },
  {
    Pertanyaan: ["apa yang harus dilakukan untuk mengatasi kekeringan", "kenapa kekeringan bisa terjadi", "apa akibat kekeringan", "bagaimana cara mengatasi masalah kekeringan", "apa yang bisa kita lakukan untuk menghemat air di musim kemarau"],
    Jawaban: "Untuk mengatasi kekeringan, kita bisa menghemat air, menampung air hujan, dan melakukan konservasi air dengan mengurangi pemborosan air."
  },
  {
    Pertanyaan: ["bagaimana cara mengurangi polusi air", "apa yang bisa dilakukan untuk mengurangi polusi air", "kenapa polusi air itu berbahaya", "apa akibat polusi air", "apa yang bisa kita lakukan agar air tidak tercemar"],
    Jawaban: "Polusi air bisa dikurangi dengan tidak membuang sampah di sungai atau laut, mengelola limbah dengan benar, dan mengurangi penggunaan bahan kimia yang berbahaya."
  },
  {
    Pertanyaan: ["bagaimana cara mengurangi sampah plastik", "apa yang bisa dilakukan untuk mengurangi sampah plastik", "kenapa sampah plastik berbahaya", "apa yang harus dilakukan agar plastik tidak mencemari lingkungan", "apa manfaat mengurangi sampah plastik"],
    Jawaban: "Sampah plastik bisa dikurangi dengan menggunakan tas belanja kain, membawa botol air sendiri, dan menghindari produk yang menggunakan plastik sekali pakai."
  },
  {
    Pertanyaan: ["bagaimana cara mendaur ulang sampah", "apa yang dimaksud dengan daur ulang sampah", "kenapa daur ulang sampah itu penting", "apa manfaat mendaur ulang sampah", "apa yang bisa didaur ulang"],
    Jawaban: "Daur ulang sampah berarti mengolah sampah menjadi barang baru yang berguna. Kita bisa mendaur ulang kertas, plastik, dan kaca untuk mengurangi sampah di tempat pembuangan."
  },
  {
    Pertanyaan: ["apa yang dimaksud dengan sampah organik", "sampah organik itu apa", "bagaimana cara mengolah sampah organik", "kenapa sampah organik bisa menjadi kompos", "apa manfaat sampah organik"],
    Jawaban: "Sampah organik adalah sampah yang bisa terurai secara alami, seperti sisa makanan dan daun. Sampah ini bisa diolah menjadi kompos untuk menyuburkan tanah."
  },
  {
    Pertanyaan: ["apa yang dimaksud dengan sampah anorganik", "sampah anorganik itu apa", "apa contoh sampah anorganik", "bagaimana cara mengelola sampah anorganik", "kenapa sampah anorganik sulit terurai"],
    Jawaban: "Sampah anorganik adalah sampah yang tidak bisa terurai dengan mudah, seperti plastik dan logam. Sampah ini bisa didaur ulang menjadi barang baru atau diproses untuk mengurangi dampak negatifnya."
  },
  {
    Pertanyaan: ["bagaimana cara membuang sampah dengan benar", "apa yang harus dilakukan agar sampah tidak mencemari lingkungan", "apa manfaat membuang sampah pada tempatnya", "kenapa kita harus membuang sampah pada tempatnya", "apa yang dimaksud dengan bank sampah"],
    Jawaban: "Kita harus membuang sampah pada tempatnya dengan memisahkan sampah organik dan anorganik, serta ikut berpartisipasi dalam kegiatan bank sampah untuk mengelola sampah secara baik."
  },
  {
    Pertanyaan: ["bagaimana cara mengurangi sampah di rumah", "apa yang bisa dilakukan di rumah untuk mengurangi sampah", "kenapa kita harus mengurangi sampah di rumah", "apa manfaat mengurangi sampah di rumah", "apa akibat jika kita membuang sampah sembarangan"],
    Jawaban: "Untuk mengurangi sampah di rumah, kita bisa menggunakan barang yang dapat digunakan kembali, mengurangi barang sekali pakai, dan mendaur ulang sampah."
  },
  {
    Pertanyaan: ["apa yang dimaksud dengan 3R", "apa itu 3R dalam pengelolaan sampah", "kenapa kita harus melakukan 3R", "apa manfaat 3R", "apa itu reduce, reuse, recycle"],
    Jawaban: "3R adalah konsep mengurangi sampah dengan cara mengurangi penggunaan barang sekali pakai (reduce), menggunakan kembali barang (reuse), dan mendaur ulang barang (recycle)."
  },
  {
    Pertanyaan: ["bagaimana cara melestarikan lingkungan dengan mengurangi sampah", "apa yang bisa kita lakukan untuk mengurangi sampah di lingkungan sekitar", "kenapa kita harus mengurangi sampah di lingkungan", "apa dampak dari sampah yang menumpuk di lingkungan", "apa manfaat lingkungan bebas sampah"],
    Jawaban: "Mengurangi sampah di lingkungan sekitar bisa dilakukan dengan membawa tas belanja sendiri, mengurangi penggunaan plastik, serta membuang sampah pada tempatnya dan ikut program bersih-bersih lingkungan."
  },
  {
    Pertanyaan: ["akibat pemanasan global adalah","apa akibat pemanasan global", "dampak pemanasan global", "pengaruh pemanasan global terhadap bumi"],
    Jawaban: "Pemanasan global menyebabkan es di kutub mencair, naiknya permukaan air laut, dan perubahan iklim ekstrem."
  },
  {
    Pertanyaan: ["dampak penebangan hutan liar terhadap lingkungan","apa dampak penebangan hutan liar", "akibat hutan ditebang secara liar", "pengaruh penebangan hutan liar terhadap lingkungan"],
    Jawaban: "Penebangan hutan liar menyebabkan banjir, tanah longsor, dan hilangnya habitat satwa liar."
  },
  {
    Pertanyaan: ["apa yang terjadi jika hutan terus menerus ditebang","apa yang terjadi jika hutan terus ditebang", "akibat menebang hutan terus menerus", "dampak deforestasi terhadap lingkungan"],
    Jawaban: "Jika hutan terus ditebang, maka keseimbangan ekosistem terganggu dan kualitas udara menurun."
  },
  {
    Pertanyaan: ["dampak polusi udara terhadap kesehatan manusia","apa dampak polusi udara bagi kesehatan", "bagaimana pengaruh polusi udara terhadap manusia", "penyakit akibat polusi udara"],
    Jawaban: "Polusi udara dapat menyebabkan gangguan pernapasan, asma, dan penyakit paru-paru."
  },
  {
    Pertanyaan: ["tindakan yang dapat mengurangi polusi udara di kota","bagaimana cara mengurangi polusi udara di kota", "solusi polusi udara di kota", "apa yang bisa dilakukan untuk mengurangi polusi udara"],
    Jawaban: "Mengurangi polusi udara dapat dilakukan dengan menggunakan transportasi umum, menanam pohon, dan mengurangi emisi kendaraan."
  },
  {
    Pertanyaan: ["kenapa sampah plastik berbahaya", "mengapa sampah plastik bisa merusak lingkungan", "dampak sampah plastik terhadap lingkungan"],
    Jawaban: "Sampah plastik merusak lingkungan karena tidak bisa terurai, mencemari tanah dan air, serta membahayakan hewan."
  },
  {
    Pertanyaan: ["apa yang terjadi jika sampah plastik menumpuk di sekitar kita", "dampak penumpukan sampah plastik", "bahaya sampah plastik yang menumpuk"],
    Jawaban: "Jika sampah plastik menumpuk, lingkungan menjadi kotor, bau, dan dapat menimbulkan penyakit."
  }
];

// Fungsi untuk menangani pengenalan suara
function startListening() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'id-ID'; // Bahasa Indonesia
  recognition.interimResults = true;  // Mengaktifkan interimResults untuk menampilkan hasil sementara
  recognition.start();  // Mulai mendengarkan suara

  recognition.onstart = () => {
    questionElement.textContent = "PERTANYAAN: Mendengarkan...";  // Tampilkan saat mendengarkan
    answerElement.textContent = "JAWABAN: ";  // Kosongkan jawaban
  };

  recognition.onspeechend = () => {
    recognition.stop();  // Hentikan ketika berbicara selesai
  };

  // Saat ada hasil yang dikenali
  recognition.onresult = (event) => {
    let speechToText = '';  // Tempat menyimpan hasil sementara

    // Jika interimResults diaktifkan, kita akan mendapatkan hasil sementara
    for (let i = event.resultIndex; i < event.results.length; i++) {
      if (event.results[i].isFinal) {
        speechToText = event.results[i][0].transcript.toLowerCase();  // Ambil hasil final
      } else {
        speechToText = event.results[i][0].transcript.toLowerCase();  // Ambil hasil sementara
      }
    }

    // Update live text (sementara) setiap kali ada perubahan
    questionElement.textContent = `PERTANYAAN: ${speechToText}`;

    // Mencari jawaban berdasarkan database jika sudah final
    if (event.results[event.resultIndex].isFinal) {
      let answer = "Maaf, kamu bertanya diluar materi"; // Default jawaban jika tidak ada kecocokan

      // Mencari kecocokan di qaDatabase
      qaDatabase.forEach(item => {
        // Loop pertanyaan yang ada dalam database
        item.Pertanyaan.forEach(variant => {
          // Bandingkan setiap pertanyaan dengan input menggunakan Levenshtein Distance
          const distance = Levenshtein.get(speechToText, variant.toLowerCase()); // Hitung jarak Levenshtein
          if (distance <= 3) { // Misalnya, jika jarak Levenshtein kurang dari atau sama dengan 3, anggap cocok
            answer = item.Jawaban; // Dapatkan jawaban yang sesuai
          }
        });
      });
      
      // Panggil fungsi untuk mengetikkan jawaban
      typeAnswer(answer);
    }
  };

  // Jika ada error dalam pengenalan suara
  recognition.onerror = (event) => {
    answerElement.textContent = `Error: ${event.error}`;
  };
}

// Fungsi untuk mengetikkan jawaban secara bertahap (seperti diketik)
function typeAnswer(answer) {
  let index = 0;
  
  answerElement.textContent = "";  // Reset jawaban sebelumnya
  
  // Fungsi untuk menambahkan karakter satu per satu
  function typeCharacter() {
    if (index < answer.length) {
      answerElement.textContent += answer.charAt(index);  // Tambahkan karakter
      index++;
      setTimeout(typeCharacter, 10);  // Delay antara karakter, bisa disesuaikan
    }
  }
  
  // Mulai mengetikkan jawaban
  typeCharacter();
}

// Menambahkan event listener ke tombol suara
startBtn.addEventListener('click', startListening);

// Fungsi untuk menangani pertanyaan yang diketik
function handleTypedQuestion() {
  const typedQuestion = typedQuestionInput.value.toLowerCase().trim();  // Ambil pertanyaan yang diketik
  
  // Update pertanyaan yang ditampilkan
  questionElement.textContent = `PERTANYAAN: ${typedQuestion}`;

  let answer = "Maaf, kamu bertanya diluar materi"; // Default jawaban jika tidak ada kecocokan

  // Mencari kecocokan di qaDatabase
  qaDatabase.forEach(item => {
    // Loop pertanyaan yang ada dalam database
    item.Pertanyaan.forEach(variant => {
      // Bandingkan setiap pertanyaan dengan input menggunakan Levenshtein Distance
      const distance = Levenshtein.get(typedQuestion, variant.toLowerCase()); // Hitung jarak Levenshtein
      if (distance <= 3) { // Misalnya, jika jarak Levenshtein kurang dari atau sama dengan 3, anggap cocok
        answer = item.Jawaban; // Dapatkan jawaban yang sesuai
      }
    });
  });

  // Panggil fungsi untuk mengetikkan jawaban
  typeAnswer(answer);
  
  if (userInput !== "") {
    console.log('Pertanyaan:', userInput); // Anda bisa menambahkan logika untuk memproses input ini
    typedQuestionInput.value = ""; // Menghapus teks input setelah tombol submit diklik
  } else {
    alert('Silakan masukkan pertanyaan terlebih dahulu.'); // Memberi peringatan jika input kosong
  }


  // Kosongkan input setelah pertanyaan dikirim
  typedQuestionInput.value = '';
}

// Menambahkan event listener ke input ketik pertanyaan
typedQuestionInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    handleTypedQuestion();
  }
});
    

// NAVIGASI

const dynamicIsland = document.querySelector('.dynamic-island');
const buttona1 = document.getElementById('button1')
const buttona2 = document.getElementById('button2')
const buttona3 = document.getElementById('button3')

dynamicIsland.addEventListener('click', () => {
  dynamicIsland.classList.toggle('expanded');
});

button1.addEventListener('click', () => {
  window.location.href = '../PROBLEM/index.html';
});

button2.addEventListener('click', () => {
  window.location.href = '../index.html';
});

button3.addEventListener('click', () => {
  window.location.href = '../SIMULASI/index.html';
});