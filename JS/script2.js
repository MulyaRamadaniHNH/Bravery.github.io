var navbar = document.getElementById("navbar");
var menu = document.getElementById("menu");

window.onscroll = function() {
    if (window.pageYOffset > menu.offsetTop) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
};

function ubahMode(){
    const ubah = document.body;
    ubah.classList.toggle("dark")
}

let availableKeywords = [
    'Stereotipe Apa ya Membuat Orang Berpikir Bahwa Gen Z Tidak Memiliki Masa Depan yang Cerah',
    'Harga Bitcoin Anjlok ke Level Terendah Mingguan Akibat Ketidakpastian Kebijakan Feddan Sentimen Pasar',
    'RUU Penyiaran, Mengayomi Atau Malah Menggekang Kreatifitas, Jurnalisme, dan Kebebasan Bependapat...',
    'BP TAPERA, Apakah Singkatan Dari “Badan Pelaksanaan Tambahan Penderitaan Rakyat”.?',
    'Apakah Kuliah Itu Penting ?',
    'Apa Perbedaan yang Kerap Menjadi Perdebatan di Media Sosial',
    'SpaceX Melakukan Debutnya di Indonesia Dengan Memasarkan Perangkat Starlink',
    'Nepotisme di Dalam Sistem Pemerintahan Demokrasi di Indonesia',
    'Politik Identitas Masih Kerap Terlihat pada PEMILU Tahun 2024 Ini: Apakah Politik Identitas Memang Akan Terus Menjadi Polemik di Negeri Ini ?',
    'Provider Lokal Meminta Pemerintah Untuk Menindak Perangkat Starlink yang Dimiliki Oleh SpaceX ?',
    'Netizen Indonesia Sering Kali Diangap Sebagai Pengguna Media Sosial yang Sangat Agresif: Apa yang Membuat Mereka Berperilaku Demikian ?',
    'Pemerintah Tambah Anggaran Pendidikan untuk Perkuat Riset dan Tingkatkan Rasio Penduduk S2/S3',
    'Student Loan: Apakah Jawaban yang Tepat Untuk Mengatasi Biaya UKT yang Tiba-tiba Naik?',
    'Apa yang Menyebabkan Biaya UKT Tiba-tiba Melambung Sangat Tinggi Padahal Hal Tersebut Tidak Sesuai Dengan Inflasi yang Terjadi?',
    'Menjadi Blunder dan Kemudian Klarifikasi Apakah Suatu Tradisi Bagi Pejabat di Indonesia Atau ini Berkaitan Dengan Generasi Mereka?',
    'Apakah masalah Judi Online (JUDOL) Hanya Sebuah Masalah Yang Sangat Sepele Sampai Pemerintah Kita Seperti Sangat Acuh tak Acuh Dengan Masalah Ini',
    'Telkomsel Luncurkan Wi-Fi 7, Tantang Kecepatan Internet Starlink di Indonesia',
    'WhatsApp Perkenalkan Fitur Video Call untuk 32 Orang di Desktop',
    'Sebenarnya Masalah Apa Yang Sampai Membuat Daerah Papua Ingin Bebas Dari NKRI?',
    'Kenapa IQ Masyarakat Indonesia Sangat Rendah di antara Negara Asia Tenggara?',
    'Jokowi Teken Perpres Tunjangan Kinerja Pegawai TVRI Hingga Rp24,9 Juta per Bulan',
    'Sekretaris PDIP DKI Tolak Wacana Duet Anies-Kaesang di Pilkada Jakarta 2024',
    'Seburuk Apa Pendidikan Kita Sekarang? Apa Benar Sebobrok itu Pendidikan Kita?',
    'Apa Benar Dengan Adanya Sistem Zonasi Pada Penerimaan Siswa Baru Dapat Mewujudkan Kesetaraan dalam Pendidikan Di Indonesia?',
]
const resultBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function() {
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availableKeywords.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
       
    }
    display(result);

    if(!result.length){
        resultBox.innerHTML = '';
    }
}

function display(result) {
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });

    resultBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list){
    inputBox.value = list.innerHTML;
    resultBox.innerHTML = '';
}   