import "./index.css"
// GSAP and SctollTrigger Import 
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const markers = true

// play pause resume reverse restart reset complete none
// enter leave enterBack leaveBack  

gsap.to(".square", {
    // x:800,    
    duration:2,
    scrollTrigger:
    {
        trigger: ".square2",
        start: "top 70%",
        end:"top 30%",
        // markers,
        toggleClass:"red",
        scrub: 0.5,
        toggleActions: "restart none none none",
        pin:".square",
        pinSpacing: true,
    }
})