function scrollLoco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });



  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();



}
scrollLoco();


function cursoreffect() {
  var contentPage = document.querySelector(".page1");
  var cursor = document.querySelector(".cursor");

  contentPage.addEventListener("mousemove", function (dets) {
    // cursor.style.left = dets.x+"px";
    // cursor.style.top = dets.y+"px";
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y
    })
  })

  contentPage.addEventListener('mouseenter', function () {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1
    })

  })

  contentPage.addEventListener('mouseleave', function () {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0
    })

  })
}

cursoreffect()

function page2Animation() {
  gsap.from(".page2", {
    y: 110,
    stagger: 0.25,
    duration: 1,
    opacity: 0,


    scrollTrigger: {
      trigger: ".page2",
      scroller: ".main",
      start: "top 40%",
      end: "top 37%",
      scrub: 2
    }

  })

}

page2Animation()


function page3Animation() {
  gsap.from(".page3 h2", {
    y: 120,
    stagger: 0.5,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
      trigger: ".page3",
      scroller: ".main",
      start: "top 40%",
      end: "top 37%",
      scrub: 2,



    }
  })
}
page3Animation();

function page4Animation() {
  gsap.from(".page4", {
    y: 120,
    stagger: 0.5,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
      trigger: ".page4",
      scroller: ".main",
      start: "top 40%",
      end: "top 37%",
      scrub: 2,



    }
  })
}
page4Animation();

function cursoreffect1() {
  var contentPage = document.querySelector(".page5");
  var scroller = document.querySelector(".scroller");

  contentPage.addEventListener("mousemove", function (ets) {
    // cursor.style.left = dets.x+"px";
    // cursor.style.top = dets.y+"px";
    gsap.to(scroller, {
      x: ets.x,
      y: ets.y
    })
  })

  contentPage.addEventListener('mouseenter', function () {
    gsap.to(scroller, {
      scale: 1,
      opacity: 1
    })

  })

  contentPage.addEventListener('mouseleave', function () {
    gsap.to(scroller, {
      scale: 0,
      opacity: 0
    })

  })
}

cursoreffect1()
function page6Animation() {
  gsap.from(".page6", {
    y: 120,
    stagger: 0.5,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
      trigger: ".page6",
      scroller: ".main",
      start: "top 40%",
      end: "top 37%",
      scrub: 2,



    }
  })
}

page6Animation();
function sliderAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: true,
    },
    speed: 3000,

  });
}
sliderAnimation()

var tl = gsap.timeline()

tl.from(".loader h3", {
  x: 40,
  opacity: 0,
  duration: 1,
  stagger: 0.1
})
tl.to(".loader h3", {
  x: -40,
  opacity: 0,
  duration: 1,
  stagger: 0.1
})




tl.to(".loader", {
  opacity: 0
})


tl.from(".page1-content h1 span", {
  y: 100,
  opacity: 0,
  stagger: 0.2,
  duration: 0.8,
  delay: -1

})
tl.to(".loader", {
  display: "none"
})


function page8Animation() {

  gsap.from(".page8", {
    y: -100,
    stagger: 0.5,
    duration: 1,
    opacity: 0,
    

    scrollTrigger: {
      trigger: ".page8",
      scroller: ".main",
      start: "top 40%",
      end: "top 37%",
      scrub: 2,



    }

  })
}
page8Animation();

// var tl1 = gsap.timeline()

// tl1.to(".page9-maincontent h5",{
//   y: -100,
//   stagger: 0.2,
//   duration: 1,
//   opacity: 0,
//   markers: "true",


//   ScrollTrigger: {
//     trigger: ".page9",
//     scroller: "main",
//     start: "top 40%",
//     end: "top 37%",
//     scrub: 2,
//   }
// });
