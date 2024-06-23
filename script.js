

// naviagation bar start

let menuList = document.getElementById("menuList")
menuList.style.height = "0px";

function toggleMenu(){
    if(menuList.style.height == "0px"){
        menuList.style.height = "100%";
    }
    else{
        menuList.style.height = "0px";
    }
}

// navigation bar end

//accordion start
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

//accodion end

//card slider start

$(".slider").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000, //2000ms = 2s;
    autoplayHoverPause: true,
  });
//card slider end