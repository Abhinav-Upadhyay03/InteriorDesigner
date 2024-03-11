function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);
}
const scroll = new LocomotiveScroll({
    el: document.querySelector("#parent"),
    smooth: true
});

gsap.from("#nav",{
    y:-100,
    duration: 2,
    delay: 1,
    opacity: 0,
    
})
gsap.from("#first_heading",{
    y:20,
    duration: 2,
    delay: 1,
    opacity: 0
    
})
gsap.from("img",{
    scale:0,
    rotation: -10,
    y: 40,
    duration: 1.5,
    opacity: 0,
    delay: 1,
    
    
    
})
gsap.from("#first_footer",{
    duration: 2,
    delay: 1,
    opacity: 0
})
gsap.from("#arrow",{
    y:-8,
    duration:0.5,
    repeat:-1,
    yoyo: true
})
gsap.from("#first-line .left",{
    x: 150,
    duration: 2,
    delay: 1,
    repeat:-1,
    yoyo: true
})
gsap.from("#first-line .right",{
    opacity:0,
    scale:0,
    x:80,
    duration:2,
    delay:1,
    repeat:-1,
    yoyo:true
})
gsap.from("#second-line .one",{
    opacity:0,
    scale:0,
    x:-40,
    duration:2,
    delay:1,
    repeat:-1,
    yoyo:true
})
gsap.from("#second-line .two",{
    x:-150,
    duration:2,
    delay:1,
    repeat:-1,
    yoyo:true
})
gsap.from("#third-line h1",{
    x:150,
    duration:2,
    delay:1,
    repeat:-1,
    yoyo:true
})
gsap.from("#third-line .image-holder-third-line",{
    x:100,
    duration:2,
    opacity:0,
    delay:1,
    repeat:-1,
    yoyo:true
})

function imgClick(id){
    let currId = document.getElementById(id);
    // currId.style.transitionDuration = "1s";
    var tl = gsap.timeline();
    // currId.style.transform = "translate(-50%,-50%) rotate(-7deg)";
    tl.to('#'+id,{
        rotation: 0,
        duration:0.2
    })
    tl.to('#'+id,{
        y: -1000,
        duration:0.4,
        delay:0,
        
        
    })
}
function cursorAnimation() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#cursor", {
      left: dets.x,
      top: dets.y,
    });
  });
  // document.querySelector("#child1").addEventListener("mouseenter",function(){

  // })

  // document.querySelector("#child1").addEventListener("mouseleave",function(){
  //   gsap.to("#cursor",{
  //     transform: 'translate(-50%,-50%) scale(0)'
  //   })
  // })
  document.querySelectorAll("#main").forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to("#cursor", {
        transform: "translate(-50%,-50%) scale(1)",
      });
    });
    elem.addEventListener("mouseleave", function () {
      gsap.to("#cursor", {
        transform: "translate(-50%,-50%) scale(0)",
      });
    });
  });
}
cursorAnimation();

