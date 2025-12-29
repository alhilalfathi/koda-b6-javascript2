const hasilUjianJohn = [75, 80, 79, 90]
const hasilUjianEd = [66, 77, 88, 99]
const gabunganHasilUjian = [
    ... hasilUjianJohn,
    ... hasilUjianEd
]
let a = 0
let terbesar = gabunganHasilUjian[0]
let terkecil = gabunganHasilUjian[0]

for (i=0;i<=gabunganHasilUjian.length-1;i++){
    // console.log(gabunganHasilUjian[i])
    a = a + gabunganHasilUjian[i]
    if(gabunganHasilUjian[i]>terbesar){
        terbesar = gabunganHasilUjian[i]
    }else if (gabunganHasilUjian[i]<terkecil){
        terkecil = gabunganHasilUjian[i]
    }
}
    // Nilai rata-rata
    let rata = a / gabunganHasilUjian.length
    console.log(rata)
    // Nilai terbesar
    console.log(terbesar)
    // Nilai terkecil
    console.log(terkecil)
