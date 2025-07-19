// var penumpang = ['Yaldriyan', undefined, 'Roy']
// var tambahPenumpang = function (namaPenumpang, penumpang) {
//     // Jika angkot kosong
//     if (penumpang.length === 0) {
//         // tambah penumpang di awal array
//         penumpang.unshift(namaPenumpang)
//         // kembalikan isi array & keluar dari function
//         return penumpang
//     } else {
//         // telusuri seluruh  kursi dari awal
//         // tampilkan seluruh isi dari array penumpang
//         for (let nilaiAwal = 0; nilaiAwal < penumpang.length; nilaiAwal++) {


//             // jika ada kursi kosong
//              if (penumpang[nilaiAwal] == undefined) {
//                 // tambah penumpang di kursi tersebut
//                 penumpang[nilaiAwal] = namaPenumpang
//                 // kembalikan isi array dan keluar dari function
//                 return penumpang
//             }

//             // jika sudah ada nama yang sama
//             else if (penumpang.includes(namaPenumpang)) {
//                 // tampilkan pesan kesalahannya
//                 console.log('Penumpang ini sudah naik !')
//                 // kembalikan isi array & keluar dari function
//                 return penumpang

//             }

//         }
//         // jika seluruh kursi terisi
//         // tambah penumpang di akhir array
//         penumpang.push(namaPenumpang)

//         // kembalikan isi array & keluar dari function
//         return penumpang

//     }

// }


function tambahPenumpang2(namaPenumpang, orangPenumpang) {
    // jika angkot kosong
    if (orangPenumpang.length == 0) {
        // tambah penumpang di awal array 
        orangPenumpang.unshift(namaPenumpang)
        //kembalikan isi array
        return orangPenumpang
    }

    //jika tidak kosong
    else {

        // jika ada kursi kosong / kalau belum penuh cari kursi kosong
        var indeksKosong = orangPenumpang.findIndex(function (e) {
            return e === undefined
        })
        if (indeksKosong !== -1) { // -1 itu artinya tidak ditemukan

            orangPenumpang[indeksKosong] = namaPenumpang
            // kembalikan isi array
            return orangPenumpang
        }

        //jika ada nama yang  sama 
        else if (orangPenumpang.includes(namaPenumpang)) {
            // tampilkan pesan 
            console.log(`Penumpang ${namaPenumpang} sudah naik !`)
            return orangPenumpang
        }

        else if (cekPenuh !== -1) {
            //telusuri seluruh kursi
            // cek apakah seluruh kursi terisi atau tidak
            var cekPenuh = orangPenumpang.every(function (e) {
                return e !== undefined
            })
            orangPenumpang.push(namaPenumpang)
            //kembalikan isi array
            return orangPenumpang
        }
    }
    
}

function hapusPenumpang (namaPenumpang, orangPenumpang) {

        // JIKA ANGKOT KOSONG
        if (orangPenumpang.length == 0) {
            // tampilkan pesan angkot kosong
            console.log(`Tidak ada Penumpang !`)
            //kembalikan isi array
            return orangPenumpang

        } 

        else {

            // telusuri seluruh kursi 
            //jika nama penumpang sesuai 
            var checkNama = orangPenumpang.findIndex(function(e){
                return e === namaPenumpang
            })
            if (checkNama !== -1) {
                // hapus penumpang dengan ubah namanya
                orangPenumpang[checkNama] = undefined
                // kembalikan isi array
                return orangPenumpang
            }

            // jika nama penumpang tidak sesuai
            else if (checkNama === -1) {
                //tampilkan pesan kesalahannya
                console.log(`Tidak ditemukan nama penumpang : ${namaPenumpang}`)
                return orangPenumpang
            }

        }
            
}



