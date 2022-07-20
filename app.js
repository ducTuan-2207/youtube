var tabSearch = document.querySelector(".tab-search");
var search = document.querySelector(".label-input input");
var labelInput = document.querySelector(".label-input");
var closeSearch = document.querySelector(".label-input .fa-xmark");
var look = document.querySelector(".fa-magnifying-glass");
var tabs = ["phim gái xinh", "pauFC"];

var navMid = document.querySelector(".nav-middle");
function render() {
  tabSearch.innerHTML = "";
  tabs.forEach((tab, index) => {
    tabSearch.innerHTML += `
        <li>
        <i class="fa-solid fa-clock-rotate-left"></i>
        ${tab}
        <span
            onclick = "removeTagb(this,'${index}')"
        >Xóa</span>
        
        </li>
        `;
  });
  //   tabSearch.appendChild(search);
  search.focus();
}
render();

function addTag() {}

search.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    tabs.push(search.value.trim());
    // search.value = "";
    tabSearch.classList.remove("open");
    render();
  }
  //   labelInput.innerHTML += `
  //   <i class="fa-solid fa-xmark"

  //   ></i>
  //   `;
});

look.addEventListener("click", function () {
  tabs.push(search.value.trim());
  search.value = "";
  tabSearch.classList.remove("open");
  render();
});

function removeTagb(index) {
  tabs.splice(index, 1);
  render();
}

search.addEventListener("click", function () {
  tabSearch.classList.toggle("open");
});

// --------------------------------- history-search----------------------
var menuIcon = document.querySelector(".menu-youtube");
var sideBar = document.querySelector(".sidebar");
var subList = document.querySelector(".subscribed-list");
var contai = document.querySelector(".container");
menuIcon.addEventListener("click", function () {
  sideBar.classList.toggle("small-sidebar");
  subList.classList.toggle("hide");
  contai.classList.toggle("big-slide");
});
//-----------------------slideShow-menu------------------------
var slideShow = document.querySelector(".slider-show ");
var listSlide = document.querySelector(".text-show");
let currenIndex = 0;
// ----------------------list-video------------------------
var listVieo = document.querySelector(".list-container");
var backgroundImg = [
  {
    img: "https://i.ytimg.com/vi/mX8rMMS-MbI/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCVuJADRoc3-9wTAiwsVUgYMsvvAA",
    title: "ROSÉ - Viva La Vida (Coldplay) Live Studio Cover",
    chanelImg:
      "https://yt3.ggpht.com/9RGkNjBF-qIeuFUN-6ne7YXKNLwqRDT9O2niy7A2XpOT084Nru-QiYGMCAYaokog9rB1ukUj8T0=s48-c-k-c0x00ffffff-no-rj",
    chanelName: "Rosesarerosie",
    view: "12 Tr lượt xem &bull; 5 tháng trước",
    video: "blob:https://m.youtube.com/163bbc3b-3fa3-4487-bb46-7f710f283005",
  },
  {
    img: "https://i.ytimg.com/vi/9C3TlKHiVD8/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAewAbW8sOO_zPlF-rUJxaauCYfWA",
    title:
      "(Talkshow) Khám phá biệt phủ mới toanh của Hiếu Lợn, hứa hẹn kèo đấm nhau không hồi kết. ",
    chanelImg:
      "https://yt3.ggpht.com/ytc/AKedOLRwjFr7ljzmtF-lRtLcnUv6NmmkH7ud-vdgMpO6KA=s68-c-k-c0x00ffffff-no-rj",
    chanelName: "MixiGaming",
    view: "1,4 Tr lượt xem &bull; 1 tháng trước",
  },
  {
    img: "https://i.ytimg.com/vi/eQ61FpDhuvE/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLBpN1I-HtLHTj9SacPL6C700ddIkA",
    title:
      "Rosé - Let it be, You and I, Only look at me (1 hour loop | Nonstop) ",
    chanelImg:
      "https://yt3.ggpht.com/ytc/AKedOLRhrjEWJIEmvrXLurIiwfNP5v4kGppfXbKpyQ=s68-c-k-c0x00ffffff-no-rj",
    chanelName: "1hr MUSIC",
    view: "799 N lượt xem &bull; 1 năm trước",
  },
  {
    img: "https://i.ytimg.com/vi/tXJpaVHIRto/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLABrUKBcsWL8yt1OkeX0SvYvquCjg",
    title:
      "Nhạc Chill TikTok 2021 ♫ Top 15 Bản Nhạc EDM Tik Tok Hay Nhất - Bảng Xếp Hạng Nhạc Trẻ Remix 2021 ",
    chanelImg:
      "https://yt3.ggpht.com/-RMqLwm3yIMYfLv8aq-RLNJSNXnImBW1Lz6G1NlXbc4Syr5m5ZnvhWNZlDZd9g2xoAIlNuFTMg=s68-c-k-c0x00ffffff-no-rj",
    chanelName: "Khanh Chill",
    view: "1,5 Tr lượt xem &bull; 1 tháng trước",
  },
  {
    img: "https://i.ytimg.com/vi/vLPcbehrF5Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDiDZLQg830PH9IEmilshziahvifQ",
    title:
      "Sau này năm con 22 sẽ thấy màu mắt của con thật xinh - Lạc Vào Trong Mơ - Những Bản Nhạc Lofi Chill  ",
    chanelImg:
      "https://yt3.ggpht.com/ytc/AKedOLTLvp335X5dHYQTZFwnGkWs7lFgh3LinJwGe-UAzA=s88-c-k-c0x00ffffff-no-rj",
    chanelName: "Hạ Sang",
    view: "6,1 N lượt xem &bull; 19 giờ trước",
  },
  {
    img: "https://i.ytimg.com/vi/XktfWMdxvZU/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCi3Y2loHlXh2P2zXQKxzY45LMZeA",
    title:
      "Ánh Sao Và Bầu Trời - T.R.I x Cá | Hương Ly Cover - Official Lyric Video",
    chanelImg:
      "https://yt3.ggpht.com/7655yKly5zk30JSO2yJU_apHo2vpm71h3_BpWGca1XH92jxW18gKw1nFB4iIgACovnLpHu0J=s88-c-k-c0x00ffffff-no-rj",
    chanelName: "Nguyễn Hương Ly Official",
    view: "87 N lượt xem &bull; 8 ngày trước",
  },
  {
    img: "https://i.ytimg.com/vi/RG6Y_72-h8Y/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLB6ncZK8WrjaD47G0dgeV3hiim6Tw",
    title:
      "ASMR MUKBANG | Gà rán, mì đậu đen, kim chi! Công thức món ăn Hàn Quốc! ",
    chanelImg:
      "https://yt3.ggpht.com/ytc/AKedOLSbOymzGbPrR-yFWDPGhsEQ8boQ1omO7Jx5fy5AyQ=s68-c-k-c0x00ffffff-no-rj",
    chanelName: "SIO ASMR",
    view: "1,7 Tr lượt xem &bull; 2 tháng trước",
  },
  {
    img: "https://i.ytimg.com/vi/eBvHp6Fh-MU/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCOsIvOF5DiNNOXLIcuoQbyo0VNOA",
    title:
      "Khoa Pug Rớt Nước Mắt Ko Thể Tự Đứng Trên Đôi Chân Mới Sau Khi Kéo Chân! - Một Bước Đi Vạn Dặm Đau!",
    chanelImg:
      "https://yt3.ggpht.com/ytc/AKedOLTG0QZNQ4Y9cxmZRkdfsyZGu2oCBUm5gwMtrM-zUg=s68-c-k-c0x00ffffff-no-rj",
    chanelName: "Khoa Pug",
    view: "3,2 Tr lượt xem &bull; 2 tuần trước",
  },
  {
    img: "https://i.ytimg.com/vi/eQ61FpDhuvE/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLBpN1I-HtLHTj9SacPL6C700ddIkA",
    title:
      "Rosé - Let it be, You and I, Only look at me (1 hour loop | Nonstop) ",
    chanelImg:
      "https://yt3.ggpht.com/ytc/AKedOLRhrjEWJIEmvrXLurIiwfNP5v4kGppfXbKpyQ=s68-c-k-c0x00ffffff-no-rj",
    chanelName: "1hr MUSIC",
    view: "799 N lượt xem &bull; 1 năm trước",
  },
  {
    img: "https://i.ytimg.com/vi/eQ61FpDhuvE/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLBpN1I-HtLHTj9SacPL6C700ddIkA",
    title:
      "Rosé - Let it be, You and I, Only look at me (1 hour loop | Nonstop) ",
    chanelImg:
      "https://yt3.ggpht.com/ytc/AKedOLRhrjEWJIEmvrXLurIiwfNP5v4kGppfXbKpyQ=s68-c-k-c0x00ffffff-no-rj",
    chanelName: "1hr MUSIC",
    view: "799 N lượt xem &bull; 1 năm trước",
  },
  {
    img: "https://i.ytimg.com/vi/eQ61FpDhuvE/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLBpN1I-HtLHTj9SacPL6C700ddIkA",
    title:
      "Rosé - Let it be, You and I, Only look at me (1 hour loop | Nonstop) ",
    chanelImg:
      "https://yt3.ggpht.com/ytc/AKedOLRhrjEWJIEmvrXLurIiwfNP5v4kGppfXbKpyQ=s68-c-k-c0x00ffffff-no-rj",
    chanelName: "1hr MUSIC",
    view: "799 N lượt xem &bull; 1 năm trước",
  },
  {
    img: "https://i.ytimg.com/vi/eQ61FpDhuvE/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLBpN1I-HtLHTj9SacPL6C700ddIkA",
    title:
      "Rosé - Let it be, You and I, Only look at me (1 hour loop | Nonstop) ",
    chanelImg:
      "https://yt3.ggpht.com/ytc/AKedOLRhrjEWJIEmvrXLurIiwfNP5v4kGppfXbKpyQ=s68-c-k-c0x00ffffff-no-rj",
    chanelName: "1hr MUSIC",
    view: "799 N lượt xem &bull; 1 năm trước",
  },
];

function renderVideo() {
  listVieo.innerHTML = "";
  backgroundImg.forEach((item, index) => {
    listVieo.innerHTML += `
    <div class="video-list">
          <a href="playvideo.html">
            <img src=${item.img} alt="" class="thumbnail" />
          </a>
          <div class="video-rose">
            <img src=${item.chanelImg} alt="" class="logo-video" />
            <div class="video-info">
              <a href="playvideo.html">${item.title}</a>
              <p class="p-one">${item.chanelName}</p>
              <p class="p-two">201 Tr lượt xem &bull; 1 năm trước</p>
            </div>
          </div> 
        </div>
    `;
  });
}
renderVideo();

// -------------------------------------------------desc-----------
