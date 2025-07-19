// Membuat program pengelolaan penumpang mobil 

//rules

// 1. ketika mobil kosong , penumpang yang naik akan langsung mengisi kursi yang kosong tersebut
// 2. ketika tidak ada kursi yang kosong, maka penumpang baru akan selalu mengisi kursi terakhir 
// 3. ketika ada nama penumpang yang naik dengan nama yang sama, maka tidak boleh naik 



var penumpang = ['Riyan', undefined, undefined, 'Roy']

function tambahPenumpang (namaPenumpang, penumpang) {

    //jika tidak ada penumpang / jumlah penumpang 0 
    if (penumpang.length == 0) {
        // tambahkan penumpang di bangku pertama
        penumpang.unshift(namaPenumpang)
        // kembalikan isi array
        return penumpang
    }
    // jika adda penumpang 
    else {

        var checkKursiKosong = penumpang.findIndex(function(e) {
            return e == undefined // output : indeks penumpang yang kursi nya undefined
        })
        
        // bisa menggunakan includes
        // var checkKursiPenuh = penumpang.includes(undefined)
        
        // bisa menggunakan every
        var checkKursiPenuh = penumpang.every(function(e){
            return e !== undefined
        })
        
        // cek semua kursi 
        // cek apakah ada kursi yang kosong (undefined)
        if (checkKursiKosong !== -1) {
            //
            penumpang[checkKursiKosong] = namaPenumpang
            return penumpang
        }
        
        // cek jika nama penumpang sama 
        else if (penumpang.includes(namaPenumpang)){
            console.log(`Penumpang : [${namaPenumpang}] sudah naik ! dan sedang ada di dalam`)
            return penumpang
        }

        // check apakah seluruh kursi terisi 
        else if (checkKursiPenuh !== -1) {
            // apabila penuh , tambah penumpang di kursi akhir
            penumpang.push(namaPenumpang)
            return penumpang
        }

    }
}

function hapusPenumpang (namaPenumpang, penumpang) {

    // jika angkot kosong 
    if (penumpang.length == 0) {
        // tampilkan pesan error
        console.log(`Saat ini tidak ada penumpang !`)
        return penumpang
    }

    else {

        var checkNama = penumpang.findIndex(function(e){
            return e == namaPenumpang
        })
        
        // jika nama penumpang sesuai 
        if (checkNama !== -1) {
            penumpang[checkNama] = undefined
            return penumpang
        }

        // jika nama tidak sesuai 
        else if (checkNama == -1) {
            console.log(`Tidak ada penumpang : [${namaPenumpang}] di dalam angkot !`)
            return penumpang
        }
    }
}

var mahasiswa = ['Riyan', true, [2.90, 3.10, 3.25, 2.88, 3.04]]

function IPKumulatif (IPSemester) {
    var total = 0;
    for (let nilaiAwal = 0; nilaiAwal < IPSemester.length; nilaiAwal++) {
        total = total + IPSemester[nilaiAwal]
    }
    return total/IPSemester.length
}

// IPKumulatif(mahasiswa[2]) // output 3.034

function jumlahIPKumulatif (IPSemester) {

    var total = IPSemester.reduce(function(e,i){
        return e + i
    }, 0)

    var hasil = total / IPSemester.length

    console.log(hasil)
    return hasil
}

// rubah ke object

function Mahasiswa (nama, lulus, Ips) {

    this.nama = nama
    this.lulus = lulus
    this.Ips = Ips

    this.IPKumulatif = function () {

        var total = 0
        total = Ips.reduce(function(e,i) {
            return e + i
        },0)

        return total / Ips.length
    }

}
var mahasiswa1 = new Mahasiswa ('Yaldriyan', true, [2.90, 3.10, 3.25, 2.88, 3.04])


jumlahIPKumulatif(mahasiswa[2])


// KONSEP THIS

//  Literal 
function Halo (nama){
    console.log(this) // output : Halo{}
    console.log('Halo')
}

new Halo(`Riyan`)
// mengembalikan object yang bersangkutan


// Constructor
var halo = {}
halo.fungsi = function() {
    console.log(this) // output : fungsi : f
    console.log(`Halo 2`)
}

halo.fungsi()
// mengembalikan object yang baru dibuat 
