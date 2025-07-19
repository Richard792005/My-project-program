// kita akan mencoba untuk membuat saat tombol diklik warna background akan berubah
function ubahWarnaBackground() {
    var arrayWarna = ["#5B2333", '#eee', '#D77A61', '#CEBEBE', '#FCDE9C', '#F24333']


    // select body 
    var bodyH = document.querySelector('body')
    // ubah body jadi warna kesukaan 
    var mathRandom = Math.floor(Math.random() * arrayWarna.length)
    var warnaAcak = arrayWarna[mathRandom]

    bodyH.style.backgroundColor = warnaAcak
}

function ubahWarnaText() {
    var r = Math.floor(Math.random() * 255 + 1)
    var g = Math.floor(Math.random() * 255 + 1)
    var b = Math.floor(Math.random() * 255 + 1)
    var arrayText = [
        'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)',
        `linear-gradient(to right, rgb(${r}, ${g}), ${b}`,
        `linear-gradient(to right, rgb(${r}, ${g}), ${b}`,
        `linear-gradient(to right, rgb(${r}, ${g}, ${b})`,

    ]
    var mathRandom2 = Math.floor(Math.random() * arrayText.length)
    var text = document.querySelector('h1')
    text.style.background = arrayText[mathRandom2]
    text.style.webkitTextFillColor = 'transparent'
    text.style.webkitBackgroundClip = 'text'
}

// tambahkan event handler atau listener
var button = document.querySelector('section#a button')
button.addEventListener('click', function () {

    // jalankan fungsi nya

    ubahWarnaBackground()

})

var buttonText = document.getElementsByTagName('button')[1]
console.log(buttonText)
buttonText.addEventListener('click', function () {

    ubahWarnaText()

})


// ambil slider nya dahulu 
var slider1 = document.querySelector('section#b input[name=slider1]') // slider merah 
var slider2 = document.querySelector('input[name=slider2]') // slider hijau
var slider3 = document.querySelector('input[name=slider3') // slider blue

// buat function ubahWarna slidernya 

function ubahSlider() {

    // buat beberapa r g b dengan kode value 

    var r = slider1.value
    var g = slider2.value
    var b = slider3.value

    // ambil body dan terabkan r g b

    document.body.style.backgroundColor = `rgb(${r},${g},${b})`
    console.log(`Ini nilai slider 1\nr : ${r}\ng : ${g}\nb : ${b}`)

}

function ubahSlider2() {

    console.log(slider1.value)
    // buat beberapa r g b dengan kode value 
    var r = slider1.value
    var g = slider2.value
    var b = slider3.value

    // ambil body dan terabkan r g b

    document.body.style.backgroundColor = `rgb(${r},${g},${b})`
    console.log(`Ini nilai slider 2\nr : ${r}\ng : ${g}\nb : ${b}`)


}

function ubahSlider3() {

    // buat beberapa r g b dengan kode value 

    var r = slider1.value
    var g = slider2.value
    var b = slider3.value


    // ambil body dan terabkan r g b

    document.body.style.backgroundColor = `rgb(${r},${g},${b})`
    console.log(`Ini nilai slider 3\nr : ${r}\ng : ${g}\nb : ${b}`)


}

// Buat event handler / listener 
slider1.addEventListener('input', function () {

    // ubahSlider()

})

slider2.addEventListener('input', function () {

    // ubahSlider2()

})

slider3.addEventListener('input', function () {

    // ubahSlider3()

})


// ATAU BISA MENGGUNAKAN FOR EACH UNTUK LOOPING APABILA KITA TIDAK REPOT APABILA SLIDER ADA BANYAK 

// ambil dulu semua input yang ada 

const slider = document.querySelectorAll('input[type = range]')
console.log(slider)
// buat function nya

function ubahSlider() {
    // buat rgb 

    const r = slider1.value
    const g = slider2.value
    const b = slider3.value

    // ubah body dengan terapkan rgb

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    
}

slider.forEach(function (e, indeks) {

    // lakukan pengulangan untuk setiap e dalam array slider , lakukan fungsi ini
    
    e.addEventListener('input', function () {
        ubahSlider()

        if (indeks == 0) {

            console.log(`Ini nilai slider 1\nr : ${slider1.value}\ng : ${slider2.value}\nb : ${slider3.value}`)
            
        } else if (indeks == 1) {
            
            console.log(`Ini nilai slider 2\nr : ${slider1.value}\ng : ${slider2.value}\nb : ${slider3.value}`)
            
        } else if (indeks == 2) {
            
            console.log(`Ini nilai slider 3\nr : ${slider1.value}\ng : ${slider2.value}\nb : ${slider3.value}`)

        }
    })

})


// sekarang kita buat fitur agar saat ada kotak kita geser dengan mouse warna akan berubah

// kita ambil kotak nya

var kotak = document.getElementsByClassName('besar')[0] 

// buat function 

function ubahKotak () {
     // kita buat agar hasil x pos dan y pos nya bulat 
     const mathRandom = Math.round()
     // cari koordinat mouse dengan clientX
     const xPos = Math.round((event.clientX / window.innerWidth) *255)
     const yPos = Math.round((event.clientY / window.innerWidth) *255)
 
     // sekarang buat rgb 
 
     const r = xPos
     const g = yPos
     const b = 100
 
    var bodyLuar = document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    kotak.style.backgroundColor = bodyLuar
}

// buat event listener
kotak.addEventListener('mousemove', function(event) {
    
   ubahKotak()
})

