// Open nav search bar on click
$(".fas").click(function () {
  $(".icon").toggleClass("active");
  $("input[type='text']").toggleClass("active");
});

// Open menu on Hover
$(document).ready(function(){
  $(".dropdown").hover(function(){
      var dropdownMenu = $(this).children(".dropdown-menu");
      if(dropdownMenu.is(":visible")){
          dropdownMenu.parent().toggleClass("open");
      }
  });
});

// Darken background on hover
$('.nav-link').hover(function(){
  $('#darkness').fadeTo(200, 1);
}, function(){
  $('#darkness').fadeTo(200, 0, function(){
      $(this).hide();
  });
});

$('dropdown-menu').hover(function(){
  $('#darkness').fadeTo(200, 1);
}, function(){
  $('#darkness').fadeTo(200, 0, function(){
      $(this).hide();
  });
});

const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});

const searchIconSecoundary= document.querySelector(".icon")
const searchIconPrimary = document.querySelector(".toggle-icon")
const searchInput = document.querySelector(".searchbox__input")

searchInput.addEventListener("focus", () => {
  searchIconSecoundary.style.display === "none";
  searchIconPrimary.classList.remove("toggle-icon")
  searchIconPrimary.style.display === "block"
});

searchInput.addEventListener("blur", () => {
  searchIconPrimary.classList.add("toggle-icon")
});


$(document).ready(function () {
  $(".option-1 #check-1").change(function () {
    if ($(this).is(":checked")) {
      $(this).parent().parent().css("background", "#4e1fcf");
    } else {
      $(this).parent().parent().css("background", "white");
    }
  });

  $(".option-2 input").change(function () {
    if ($(this).is(":checked")) {
      $(this).parent().parent().css("background", "#4e1fcf");
    } else {
      $(this).parent().parent().css("background", "white");
    }
  });

  $(".option-3 input").change(function () {
    if ($(this).is(":checked")) {
      $(this).parent().parent().css("background", "#4e1fcf");
    } else {
      $(this).parent().parent().css("background", "white");
    }
  });

  $(".option-4 input").change(function () {
    if ($(this).is(":checked")) {
      $(this).parent().parent().css("background", "#4e1fcf");
    } else {
      $(this).parent().parent().css("background", "white");
    }
  });
});

const firstOption = document.querySelector("#check-1")
const secoundOption = document.querySelector("#check-2")
const thirdOption = document.querySelector("#check-3")
const fourthOption = document.querySelector("#check-4")
const firstCheckmark = document.querySelector(".checkmark-1")
const secoundCheckmark = document.querySelector(".checkmark-2")
const thirdCheckmark = document.querySelector(".checkmark-3")
const fourthCheckmark = document.querySelector(".checkmark-4")
const firstName = document.querySelector(".name-1")
const secoundName = document.querySelector(".name-2")
const thirdName = document.querySelector(".name-3")
const fourthName = document.querySelector(".name-4")

firstOption.addEventListener("click", () => {
  if(firstOption.checked === true){
    firstCheckmark.style.background = "white";
    firstName.style.color = "white";
  }else{
    firstCheckmark.style.background = "#dfe2e6";
    firstName.style.color = "black";
  }
});

secoundOption.addEventListener("click", () => {
  if(secoundOption.checked === true){
    secoundCheckmark.style.background = "white";
    secoundName.style.color = "white";
  }else{
    secoundCheckmark.style.background = "#dfe2e6";
    secoundName.style.color = "black";
  }
});

thirdOption.addEventListener("click", () => {
  if(thirdOption.checked === true){
    thirdCheckmark.style.background = "white";
    thirdName.style.color = "white";
  }else{
    thirdCheckmark.style.background = "#dfe2e6";
    thirdName.style.color = "black";
  }
});

fourthOption.addEventListener("click", () => {
  if(fourthOption.checked === true){
    fourthCheckmark.style.background = "white";
    fourthName.style.color = "white";
  }else{
    fourthCheckmark.style.background = "#dfe2e6";
    fourthName.style.color = "black";
  }
});

const nextIcon = '<img class="nav-next" src="./icons/ico-left-arrow-large.svg"></img>'
const prevIcon = '<img class="nav-prev" src="./icons/ico-right-arrow-large.svg"></img>'

$('.owl-carousel-ticker').owlCarousel({
    autoplay: true,
    autoplayHoverPause: true,
    dots:false,
    loop:true,
    items: 3.5,
    nav: true,
    navText: [nextIcon, prevIcon]
  });


// $('.owl-carousel-players').owlCarousel({
//   stagePadding: 200,
//   autoplay: true,
//   autoplayHoverPause: true,
//   items:3,
//   dots: false,
//   loop: true,
//   nav: false,
//   margin:20,
//   // autoWidth: true
//   responsiveClass:true,
//   responsive:{
//       0:{
//           items:1,
//           nav:true
//       },
//       600:{
//           items:3,
//           nav:false
//       },
//       1000:{
//           items:5,
//           nav:true,
//           loop:false
//     }
//   }
// });

$('.owl-carousel-players').owlCarousel({
  stagePadding: 250,
  autoplay: false,
  autoplayHoverPause: true,
  loop:true,
  margin:10,
  nav:false,
  dots:false,
  margin: 20,
  responsiveClass:true,
  responsive:{
        0:{
            items:1,
            stagePadding: 100
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});


$('.owl-carousel-teams').owlCarousel({
  stagePadding: 250,
  autoplay: false,
  autoplayHoverPause: true,
  loop:true,
  margin:10,
  nav:false,
  dots:false,
  margin: 20,
  responsiveClass:true,
  responsive:{
        0:{
            items:1,
            stagePadding: 50
        },
        300: {
          items:1,
          stagePadding: 100
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});



// $('.owl-carousel-teams').owlCarousel({
//   stagePadding: 200,
//   autoplay: true,
//   autoplayHoverPause: true,
//   items:3,
//   dots: false,
//   loop: true,
//   margin: 20,
//   responsiveClass:true,
//   responsive:{
//       0:{
//           items:1,
//           nav:true
//       },
//       600:{
//           items:3,
//           nav:false
//       },
//       1000:{
//           items:5,
//           nav:true,
//           loop:false
//     }
//   }
// });

$('.owl-carousel-2').owlCarousel({
  stagePadding: 350,
  autoplay: false,
  loop:true,
  margin:10,
  nav:false,
  dots:false,
  responsive:{
        0:{
            items:1,
            stagePadding: 40,
        },
        600:{
            items:3
        },
        1000:{
            items:2
        }
    }
});

$('.owl-carousel-3').owlCarousel({
  autoplay: true,
  autoplayHoverPause: true,
  margin: 20,
  dots:false,
  loop:true,
  items: 5.5,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:3,
          nav:false
      },
      1000:{
          items:5,
          nav:true,
          loop:false
    }
  }
});


const teams = document.querySelector(".teams")
const players = document.querySelector(".players")
const teamsCarousel = document.querySelector(".container-teams")
const playersCarousel = document.querySelector(".container-players")


teams.addEventListener("click", () => {
  teamsCarousel.classList.add("active-card");
  playersCarousel.classList.remove("active-card");
  players.classList.remove("toggler");
  teams.classList.add("toggler")
});

players.addEventListener("click", () => {
  teamsCarousel.classList.remove("active-card");
  playersCarousel.classList.add("active-card");
  players.classList.add("toggler");
  teams.classList.remove("toggler")
});



const navLink = document.querySelector(".nav-item");
const showcase = document.querySelector("#showcase");
const actionCard = document.querySelector(".action-card");
const articleCard = document.querySelector(".article-card");
const article = document.querySelector(".article");
const birthCard = document.querySelector(".player-birth-card");
const pollContainer = document.querySelector(".poll-container");
const featuredCarousel = document.querySelector(".featured-carousel");
const premium = document.querySelector("#premium");
const footer = document.querySelector("#main-footer");
const ticker = document.querySelector(".ticker");
const dropdownMenu = document.querySelector(".dropdown");
const dropdownMenu2 = document.querySelector(".dropdown-menu");

const backDropArr = [navLink, dropdownMenu, dropdownMenu2]

backDropArr.forEach(item => {
  item.addEventListener("mouseover", () => {
    ticker.style.opacity = "0.4";
    showcase.style.opacity = "0.4";
    actionCard.style.opacity = "0.4";
    articleCard.style.opacity = "0.4";
    article.style.opacity = "0.4";
    birthCard.style.opacity = "0.4";
    pollContainer.style.opacity = "0.4";
    featuredCarousel.style.opacity = "0.4";
    footer.style.opacity = "0.4";
    premium.style.opacity = "0.4";
  });
})

backDropArr.forEach(item => {
  item.addEventListener("mouseout", () => {
    ticker.style.opacity = "1";
    showcase.style.opacity = "1";
    actionCard.style.opacity = "1";
    articleCard.style.opacity = "1";
    article.style.opacity = "1";
    birthCard.style.opacity = "1";
    pollContainer.style.opacity = "1";
    featuredCarousel.style.opacity = "1";
    footer.style.opacity = "1";
    premium.style.opacity = "1";

  });
})

const nba = document.querySelector(".nba-link");
nba.addEventListener("click", () => {
  window.location.href = "./league-page.html";
});


$('.owl-carouse-ticker').find('.owl-nav').removeClass('disabled');
$('.owl-carousel-ticker').on('changed.owl.carousel', function(event) {
	$(this).find('.owl-nav').removeClass('disabled');
});
