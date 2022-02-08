// soal 3
function array(value) {
    const result = value.map(el => {
        const newArr = ""
        return el += newArr
    })
    const split = result[3].split(',')
    result.pop()
    console.log(result,split.join(' '))
}
array(['hallo','nama','saya',['diani','setianingsih', ['kelas',['11', ['rpl','2']]]]])

// soal 4
const obj = {
    nama: "Diani",
    kelas: "RPL 2",
    umur: 17,
    nikah: false,
    Hp: {
      nama: "Vivo Y81",
      spesifikasiHp: {
          chipset: "Snapdragon 720G",
          ram: "3 GB",
          rom: "32 GB",
          camera: "5mp"
          }
      }
    }
  console.log(obj.Hp);