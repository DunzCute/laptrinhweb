const listulr = [
    "https://i1.wp.com/1kgame.net/wp-content/uploads/2020/11/danh-sach-kiem-don-trong-genshin-impact.jpeg",
    "https://image.lag.vn/upload/news/20/10/21/7_MLCJ.jpg",
    "https://img-cdn.2game.vn/2020/03/28/GenshinImpact-Cung.jpg",
    "https://i2.wp.com/1kgame.net/wp-content/uploads/2020/11/danh-sach-vu-khi-thuong-trong-genshin-impact.jpg",
    "https://gamek.mediacdn.vn/133514250583805952/2020/10/7/photo-1-1602042645797454353924.png",
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
  const listChr = [
    "https://i.ytimg.com/vi/g6bn11Hym_c/maxresdefault.jpg",
    "https://i.pinimg.com/originals/c3/b8/12/c3b812b49108dcd09ecf8d5730829006.jpg",
    "https://oyster.ignimgs.com/mediawiki/apis.ign.com/genshin-impact/c/cd/Genshin_Impact_20201001085433.jpg?width=640",
    "https://i1.wp.com/currentkick.com/wp-content/uploads/2021/09/raiden-shogun-genshin-impact-gacha.png?ssl=1",
    "https://i.pinimg.com/originals/b9/28/0c/b9280cd709f49224024b8fa7aea4a41e.jpg",
    "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f8443d5c7d100fa8de119ec%2FGenshin-Impact%2F960x0.jpg%3Ffit%3Dscale",
    "https://i.pinimg.com/originals/bb/08/aa/bb08aa45110083e4a6ae9b21b3373db8.jpg",
    "https://media.hitekno.com/thumbs/2021/03/02/70901-hu-tao-genshin-impact/730x480-img-70901-hu-tao-genshin-impact.jpg",
  ];
  let y = 0;
  function veTrangSau() {
    if (y === 0) {
      console.log("dont get previous image");
    } else {
      y -= 1;
    }
    console.log(y);
    let sliderDng= document.getElementById("slider2")
    sliderDng.style.backgroundImage="url("+listChr[y] +")";
  }
  function lenTrangTruoc() {
    if (y === listChr .length - 1) {
      console.log("cant get the next image");
    } else {
      y += 1;
     } 
     console.log(y);
     let sliderDng= document.getElementById("slider2")
     sliderDng.style.backgroundImage="url("+listChr[y] +")";
    }