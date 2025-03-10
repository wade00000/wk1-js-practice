function speedChecker(speed){
    const speedLimit= 70
    const kmPerDemerit = 5

    if(speed < 70){
      return "OK!"
    }

    let demeritPoints = Math.floor((speed-speedLimit)/kmPerDemerit)
     if(demeritPoints <= 12){
        return `Demerit points = ${demeritPoints}`
     }else if (demeritPoints > 12){
        return "Lisence Suspended"
     }
  
  }
  
   console.log(speedChecker(180))