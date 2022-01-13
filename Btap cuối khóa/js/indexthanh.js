const listulr = [
    "https://cx.valorbuff.com/blob/B8CfBcCUanJYKNp2KNUOK6sYKrUYBtcYia-S5+UsK6b3i1x3i1D35thrKXCGkEWqiZ?w=1200",
    "https://valorantvietnam.net/wp-content/uploads/2021/03/raze-valorant.jpg",
    "https://i.ytimg.com/vi/Rux0HjzKQbw/maxresdefault.jpg",
    "https://i.ytimg.com/vi/SgbqFtRRgLA/maxresdefault.jpg",
    "https://oneesports.blob.core.windows.net/cdn-data/sites/4/2021/07/maxresdefault.jpg",
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
