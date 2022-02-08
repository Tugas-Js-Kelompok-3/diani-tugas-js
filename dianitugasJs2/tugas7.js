//Soal 1
function trafficLight(lampu) {
    switch (lampu) {
      case 'red':
        return 'Stop';
        break;
      case 'yellow':
        return 'Hati Hati';
        break;
      case 'green':
        return 'Maju!';
        break;
    }
  }
  console.log(trafficLight('green'));
  
  //Soal 2
  const persegi = (sisi) => {
    return sisi * sisi ** 2;
  };
  console.log(persegi(2));