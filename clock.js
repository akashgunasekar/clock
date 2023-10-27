const bodytagcalling = document.querySelector("body");
  hourcalling = document.querySelector(".Hours");
  miuntcalling  = document.querySelector(".Minutes");
  secondcalling = document.querySelector(".Seconds");

 
setInterval(()=>{


    
    let date = new Date();
    seconds = (date.getSeconds() / 60) * 360;
    Minutes= (date.getMinutes() / 60) * 360;
    hours= (date.getHours() / 12) * 360;

 secondcalling.style.transform=`rotate(${seconds}deg)`;
 miuntcalling.style.transform=`rotate(${Minutes}deg)`
 hourcalling.style.transform=`rotate(${hours}deg)`



 
},1000)



  //    let changedate = new Date();
  // chagetime = changedate.setHours(9) / 120 * 360;
  // Minuteschage = changedate.setMinutes(30) / 60 * 360;
 
 
  // miuntcalling.style.transform=`rotate(${Minuteschage}deg)`
  // hourcalling.style.transform=`rotate(${chagetime}deg)`