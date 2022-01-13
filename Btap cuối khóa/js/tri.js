const listulr = [
    "https://i.ytimg.com/vi/3Pc-E35XOyU/hqdefault.jpg",
    "https://i.ytimg.com/vi/37t2Ns8LAiY/maxresdefault.jpg",
    "https://images.saymedia-content.com/.image/t_share/MTc0NDU3NzE4NDQxMTkwNzYw/heroes-evolved-mobile-e-stein-guide.jpg",
    "https://i.pinimg.com/originals/42/77/70/42777010e2930f08c6cd1b0b652c021e.jpg"
];
let i = 0;
  function getpreviousimg() {
    if (i === 0) {
      console.log("dont get previous image");
    } else {
      i -= 1;
    }
    console.log(i);
    let sliderEle= document.getElementById("slider")
    sliderEle.style.backgroundImage="url("+listulr[i] +")";
  }
  function getthenextimg() {
    if (i === listulr.length - 1) {
      console.log("cant get the next image");
    } else {
      i += 1;
     } 
     console.log(i);
     let sliderEle= document.getElementById("slider")
     sliderEle.style.backgroundImage="url("+listulr[i] +")";
  }