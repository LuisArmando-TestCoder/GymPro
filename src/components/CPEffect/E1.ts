import preset from "canvas-preset";
import gsap from "gsap";

const imageSrc = "./Logo GymPro.svg";

export default (direction: -1 | 1) => () => {
    const { draw, render, renderGroup, clear, size, c } = preset()
    const initialSize = window.innerWidth;
    const space = 0.025;
    const getX = () => window.innerWidth * (0.5 - space * direction)
    const getArc = () => ({ radius: 11.25, y: 68 + 7.5, x: getX(), color: "#f4f4f4" });
    const arcsAmount = 3;
    const arcs = [...new Array(arcsAmount)].map(getArc);
    const getWindowSize = () => ({ width: window.innerWidth, height: window.innerHeight });
    const background = { x: 0, y: 0, ...getWindowSize(), color: "black" };

    gsap.timeline().to(arcs, {
        // radius: 22.5,
        y: window.innerHeight / 2,
        duration: 3,
        color: "white", // "#1b1b1b",
        ease: "bounce.out",
        stagger: 0.5, // Stagger animation between objects
        onComplete: () => {
            c.style.filter = "none";

            gsap.to(background, {
                color: "transparent",
                duration: .5,
                delay: 2.5
            })

            gsap.to(c.style, {
                opacity: "0",
                duration: .5,
                delay: 2.5
            })
        }
    }).to(arcs, {
        radius: window.innerHeight > window.innerWidth ? window.innerHeight : window.innerWidth,
        duration: 3,
        color: "transparent",
        ease: "bounce.in"
    });

    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
        const imgWidth = Math.min(window.innerWidth * 0.5, 600);
        const imgHeight = imgWidth * (img.height / img.width);
        const myImageObject = () => ({
            x: window.innerWidth / 2 - imgWidth / 2,
            y: window.innerHeight / 2 - imgHeight / 2,
            width: imgWidth,
            height: imgHeight,
            color: "transparent",
            rotation: 0,
            image: img
        });

        draw(() => {
            size();
            clear();
            render({ ...background, ...getWindowSize() }).rect();
            renderGroup("arc", arcs.map(arc => ({
                ...arc,
                x: getX()
            })));
            render(myImageObject()).image();
        });
    };
}