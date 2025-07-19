const img = document.querySelector('img[src="img/2.jpg"]')
const img2 = document.querySelector('img[class = Jumbo]')


// Tugas Membuat Program Galeri 





















function generateJumbo (image) {
    // tujuan utama : mengubah si jumbo dulu saat fungsi dijalankan
    
    // 1. ambil dahulu img jumbo
    const jumbo = document.getElementsByClassName('Jumbo')[0]
    const jumboLamaSrc = jumbo.getAttribute('src')
    
    // 2. ubah si jumbo dengan image yang dimasukan
    // pakai metode replace child 
    const parent = document.querySelector('.Gallery')
    parent.replaceChild(image, jumbo)
    
    // sekarang sudah di replace 
    // tambahkan classlist jumbo , agar gambar baru tetap ada class jumbo
    // tujuanny aada class jumo agar gambar besar, dan tetap bisa di akses 
    image.classList.add('Jumbo')
    
    // kita simpan / kembalikan (return) si old jumbo
    
    return jumboLamaSrc
}

const thumbs = document.querySelectorAll('ul li img')
thumbs.forEach(function(thumb, indeks) {
    // thumb.addEventListener() seharusnya kan begini , tapi kita masukan saja ke function
    generateGambarKecil(thumb, indeks) 
    
})

function generateGambarKecil (thumb,indeks) {
    thumb.addEventListener('click',function(event) {
        console.log(`card ${indeks+1} di klik !`)
        
        // kita mau saat di klik dia jalankan fungsi generateJumbo 
        // agar gambar terganti
        
        const jumboLama = generateJumbo(thumb) 
        console.log(jumboLama)
        // sekarang pasti thumb di bawh akan pindah , dan otomatis hilang 
        // kita isi thumb yang hilang dengan gambar jumbo sebelumnya
        
        const thumbKosong = document.querySelector(`ul li:nth-child(${indeks+1})`)
        // isi dengan img jumbo lama 
        // ambil dengan cara 'simpan fungsi generateJumbo ke variabel'
        // ada di atas jumbolama = generateJumbo(thumb)
        
        // kita buat elemen img , lalu letakan atribut return tadi
        const imgBaru = document.createElement('img')
        imgBaru.setAttribute('src', jumboLama)
        thumbKosong.appendChild(imgBaru)
        
        // selesai, tapi (-) gambar tidak bisa diklik berkali kali 
        // solusinya, kita tambahkan listener ke thumb img barunya
        
        // imgBaru.addEventListener() seharusnya kan gini
        // tapi kita bisa pakai fungsi listener tadi saja  
        generateGambarKecil(imgBaru, indeks)
        
        
    })
    
    
}

// SEKARANG KITA COBA PAKAI OBJECT ATAU ARRAY
// ambil dahulu object si thumb 

// const thumbs = document.querySelectorAll('ul li img')

// thumbs.forEach(function(thumb, indeks) {

//     // thumb.addEventListener() seharusnya kan gini
//      generateImageKecil (thumb, indeks)

// })

// function generateImageKecil (thumb, indeks) {

//     this.indeks = indeks
//     this.generateJumbo = function(image) {
            
//             // 1. ambil jumbo dulu 
//              const Jumbo = document.getElementsByClassName('Jumbo')[0]
            
//              // 2. kita ubah jumbo jadi gambar thumb
//             //dengan replace child
//             const parent = document.getElementsByClassName('Gallery')[0]
//             parent.replaceChild(image, Jumbo)
//             // sekarang sudah di replace 
//             // tambahkan classlist jumbo , agar gambar baru tetap ada class jumbo
//             // tujuanny aada class jumbo agar gambar besar, dan tetap bisa di akses 
//             image.classList.add('Jumbo')
      
//             return Jumbo

//     }
//     this.thumb = thumb.addEventListener('click', (event) => {

//         // sekarang kita mau setiap di klik akan jalankan fungsi generate jumbo
//         // tapi kita perlu simpan fungsi generateJumbo ke variabel
//         // agar me return yg kita return tadi
//         const jumboLama = this.generateJumbo(thumb)
//         console.log(jumboLama) // output nya img jumbo lama
        
//         // sekarang pasti ada img thumb kosong, kita perlu isi
//         // dengan img jumbo lama tadi

//         const liKosong = document.querySelector(`ul li:nth-child(${indeks+1})`)
//         if (jumboLama.classList.contains('Jumbo')) {
//             jumboLama.classList.toggle('Jumbo')
//             liKosong.appendChild(jumboLama)
//         }
//         else {
//             liKosong.appendChild(jumboLama)
            
//         }
        

//         // sekarang selesai
//         //  kita masukan saja listener lagi agar gambar bisa di klik lagi 
//         // dan fungsi berjalan kembali

//         generateImageKecil(jumboLama, indeks)
    
//     })
    


// }