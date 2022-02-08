//Soal 1
const myObj = [
    { name: 'shark', likes: 'ocean' },
    { name: 'whale', likes: 'ocean' },
    { name: 'turtle', likes: 'pond' },
    { name: 'otter', likes: 'fish biscuits' },
    { name: 'lion', likes: 'land' },
    { name: 'nemo', likes: 'ocean' },
  ];
  const yes = myObj.map((item) => {
    const penyimpanan = {};
  
    penyimpanan[item.name] = item.likes;
    penyimpanan.totalSpecies = item.name.length * Math.floor(Math.random() * 1000);
  
    return penyimpanan;
  });
  console.log(yes);
  
  //Soal 2
  const fill = myObj.filter((per) => {
    return per.likes == 'ocean';
  });
  console.log(fill);
  
  //Soal 3
  const name = 'Fender';
  const map = Array.prototype.map;
  
  const newName = map.call(name, (el) => {
    return `${el}en`;
  });
  console.log(newName[0]);
  
  //Soal 4
  let numbers = [100, 25, 16, 56, 87];
  let doubles = numbers.map(function (num) {
    return num * 5;
  });
  console.log(doubles);
  
  //Soal 5
  let minus = numbers.map(function (num) {
    return num - 100;
  });
  console.log(minus);
  
  //Soal 6
  let plus = numbers.map(function (num) {
    return num + 5;
  });
  console.log(plus);
  
  //Soal 7
  const nomor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const cekNomor = nomor.filter(lebihBesar);
  function lebihBesar(nomor) {
    return nomor > 5;
  }
  console.log(cekNomor);
  
  //Soal 8
  const nomor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const cekNomor = nomor.filter(lebihKecil);
  function lebihKecil(nomor) {
    return nomor < 6;
  }
  console.log(cekNomor);
  
  //Soal 9
  const nomor = [1, 2, 3, 4, 5, 6, 5, 4, 7, 54, 5, 6, 7, 8, 7, 5, 5, 5, 5];
  const pilih = nomor.filter(lima);
  function lima(nomor) {
    return nomor == 5;
  }
  console.log(pilih);
  
  //Soal 10
  const nama = ['Diani', 'Diani', 'Diani', 'Amelia', 'Susanti', 'Susanti', 'Amelia', 'Amelia'];
  const milih = nama.filter(huruf);
  function huruf(nama) {
    return nama == 'Diani';
  }
  console.log(milih);